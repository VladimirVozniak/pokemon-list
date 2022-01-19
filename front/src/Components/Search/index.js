import "./style.css";
import {useDispatch, useSelector} from "react-redux";
import {changeInputData} from "../../Redux/searchInputData";
import {showFavoritesArray} from "../../Redux/listCard";
import {exitAccount} from "../../Logic/exitAccount";

const Search = () => {
    const favoriteOn = useSelector(state => state.toolkit.showFavoritesArray)
    const username = useSelector(state => state.profile.username)
    const dispatch = useDispatch()

    return (
        <header>
            <div className="search">
                <input className="search-input" placeholder="ID or name pokemon"
                       onKeyUp={(key) => {
                           dispatch(changeInputData(key.target.value))
                       }}
                />
                <div className="profile">
                    <div className={favoriteOn ? "showFavorites" : "hideFavorites"}
                         onClick={() => dispatch(showFavoritesArray())}
                    />
                    <p className="userName">{`${username}`} |</p>
                    <p className="exit" onClick={() => exitAccount()}>Exit</p>
                </div>
            </div>
        </header>
    )
}

export default Search
