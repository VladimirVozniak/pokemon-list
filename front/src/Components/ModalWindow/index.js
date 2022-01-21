import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import popInfo from "../../Logic/showPopupInfo";
import {useEffect, useState} from "react";
import {Tab} from "./Tab";
import {Description} from "./Description";
import {PokemonName} from "./PokemonName";
import {PokemonId} from "./PokemonId";
import {PokemonImg} from "./PokemonImg";
import {closePopupViaKeyboard} from "../../Logic/closePopupViaKeyboard";

const ModalWindow = () => {
    const [tab, setTab] = useState("INFO")
    const favoritePokemons = useSelector(state => state.profile.favoritePokemons)
    const popupInfo = useSelector(state => state.info.popupInfo)
    const showInfo = useSelector(state => state.info.show)
    const pokemon = useSelector(state => state.info.currentPokemon)
    const dispatch = useDispatch()

    const handleTab = (value) => setTab(value)

    useEffect(() => {
        dispatch(closePopupViaKeyboard())
    }, [])

    return (
        <div className={`pokemon-info ${showInfo ? "pokemon-infoOn" : "pokemon-infoOff"}`}>
            <button
                className="close"
                onClick={() => dispatch(popInfo(false))}
            />
            <div className="tabs">
                <Tab type="checkbox"
                     favoritePokemons={favoritePokemons}
                     pokemon={pokemon}
                />
                <Tab type="tab" name="INFO" tab={tab} setTab={() => handleTab("INFO")}/>
                <Tab type="tab" name="ABL" tab={tab} setTab={() => handleTab("ABL")}/>
                <Tab type="tab" name="STAT" tab={tab} setTab={() => handleTab("STAT")}/>
            </div>
            <div className="pokemon-info_container">
                <div className="pokemon-info_container1">
                    <PokemonImg popupInfo={popupInfo} favoritePokemons={favoritePokemons} id={popupInfo.id}/>
                    <PokemonId popupInfo={popupInfo}/>
                </div>
                <div className="pokemon-info_container2">
                    <PokemonName popupInfo={popupInfo}/>
                    <Description popupInfo={popupInfo} tab={tab}/>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow