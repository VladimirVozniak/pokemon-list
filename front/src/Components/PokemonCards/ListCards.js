import "./style.css";
import showPopupInfo from "../../Logic/showPopupInfo";
import {useDispatch, useSelector} from "react-redux";
import {Spin} from "antd";
import {dynamicFontSize} from "../../Logic/dynamicFontSize";
import {PokemonNotFound} from "./PokemonNotFound";
import {hoverCardOff, hoverCardOn} from "../../Logic/hoverCard";
import {useEffect} from "react";
import {changeFavoritePokemons, getFavoritePokemons} from "../../API/favoritePokemons";

export const ListCards = () => {
    const pokemonArray = useSelector(state => state.toolkit.pokemonArray)
    const favoritePokemons = useSelector(state => state.profile.favoritePokemons)
    const loading = useSelector(state => state.toolkit.loading)
    const username = useSelector(state => state.profile.username)
    const dispatch = useDispatch()

    useEffect(() => {
        username !== "Guest" && dispatch(getFavoritePokemons())
    }, [dispatch, username])

    return (
        <Spin spinning={loading} delay={300} wrapperClassName="list-card-loading">
            <div className="list-cards">
                {pokemonArray.map((elem, index) => elem.name === "Not found" ?
                    <PokemonNotFound key={0} elem={elem}/> :
                    <Spin spinning={elem.loading} key={index} wrapperClassName="cardLoading">
                        <div
                            className="card"
                            onMouseEnter={() => dispatch(hoverCardOn(elem.id))}
                            onMouseLeave={() => loading ? "" : dispatch(hoverCardOff(elem.id))}
                        >
                            <img
                                className={`img ${elem.id > 1000 ? "img-extra" : ""} ${elem.hover ? "imgOn" : "imgOff"}`}
                                src={elem.pic}
                                onClick={async () => {
                                    await dispatch(showPopupInfo(true, elem))
                                }}/>
                            <div
                                className={`nameArea ${favoritePokemons.find(e => e.id === elem.id) && "nameArea-favorite"} ${elem.hover ? "nameAreaOn" : "nameAreaOff"}`}>
                                <p style={{fontSize: dynamicFontSize(elem.name)}}
                                   className={`pokemon-name ${elem.hover ? "pokemon-nameOn" : "pokemon-nameOff"}`}
                                >{elem.name}</p>
                                <p className={`readMore ${elem.hover ? "readMoreOn" : "readMoreOff"}`}
                                   onClick={async () => favoritePokemons.find(e => e.id === elem.id) ?
                                       dispatch(changeFavoritePokemons(elem, "remove")) :
                                       dispatch(changeFavoritePokemons(elem, "add", username))}
                                >{`${favoritePokemons.find(e => e.id === elem.id) ? "Delete in ★" : "Add to ★"}`}</p>
                            </div>
                        </div>
                    </Spin>
                )}
            </div>
        </Spin>
    )
}