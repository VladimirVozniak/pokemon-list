import "./style.css";
import Search from "./Search";
import Blackout from "./Blackout";
import {useDispatch, useSelector} from "react-redux";
import Tags from "./Tags";
import {ListCards} from "./PokemonCards/ListCards";
import PageSwitching from "./Pagination";
import ModalWindow from "./ModalWindow";
import {changeUsername} from "../Redux/profile";
import {getCookie} from "../Logic/getCookie";

function Main() {
    const pokemonArray = useSelector(state => state.toolkit.pokemonArray)
    const dispatch = useDispatch()
    dispatch(changeUsername(getCookie()))

    return (
        <div className="main">
            <Blackout/>
            <Search/>
            <div className={`background-img ${pokemonArray.length > 0 && "background-img_loaded"}`}/>
            <div className="container">
                <Tags/>
                <ListCards/>
                <PageSwitching/>
                <ModalWindow/>
            </div>
        </div>
    )
}

export default Main;