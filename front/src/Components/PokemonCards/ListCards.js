import "./style.css";
import showPopupInfo from "../../Logic/showPopupInfo";
import {useDispatch, useSelector} from "react-redux";
import {Spin} from "antd";
import {dynamicFontSize} from "../../Logic/dynamicFontSize";
import {PokemonNotFound} from "./PokemonNotFound";
import {hoverCard} from "../../Logic/hoverCard";
import {useEffect} from "react";
import {changeFavoritePokemons, getFavoritePokemons} from "../../API/favoritePokemons";

export const ListCards = () => {
    const pokemonArray = useSelector(state => state.toolkit.pokemonArray)
    const favoritePokemons = useSelector(state => state.profile.favoritePokemons)
    const loading = useSelector(state => state.toolkit.loading)
    const username = useSelector(state => state.profile.username)
    const dispatch = useDispatch()

    useEffect(() => {
        username !== 'Guest' && dispatch(getFavoritePokemons())
    }, [dispatch, username])

    return (
        <Spin spinning={loading} delay={50}>
            <div className={`list-cards ${pokemonArray.length && 'list-cards_loaded'}`}>
                {pokemonArray.map((elem, index) => elem.name === 'Not found' ?
                    <PokemonNotFound key={0} elem={elem}/> :
                    <div
                        key={index}
                        className="card"
                        onMouseEnter={() => dispatch(hoverCard(elem.id, true))}
                        onMouseLeave={() => dispatch(hoverCard(elem.id, false))}
                    >
                        <img className={`img ${elem.id > 1000 ? 'img-extra' : ''} ${elem.hover ? 'imgOn' : 'imgOff'}`}
                             src={elem.pic}
                             onClick={async () => {
                                 await dispatch(showPopupInfo(true, elem))
                             }}/>
                        <div
                            className={`nameArea ${favoritePokemons.find(e => e.id === elem.id) && 'nameArea-favorite'} ${elem.hover ? 'nameAreaOn' : 'nameAreaOff'}`}>
                            <p style={{fontSize: dynamicFontSize(elem.name)}}
                               className={`pokemon-name ${elem.hover ? 'pokemon-nameOn' : 'pokemon-nameOff'}`}
                            >{elem.name}</p>
                            <p className={`readMore ${elem.hover ? 'readMoreOn' : 'readMoreOff'}`}
                               onClick={async () => favoritePokemons.find(e => e.id === elem.id) ? dispatch(changeFavoritePokemons(elem, 'remove')) : dispatch(changeFavoritePokemons(elem, 'add'))}
                            >{`${favoritePokemons.find(e => e.id === elem.id) ? 'Delete in ★' : 'Add to ★'}`}</p>
                        </div>
                    </div>
                )}
            </div>
        </Spin>
    )
}