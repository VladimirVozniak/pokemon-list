import "./style.css"
import {useDispatch} from "react-redux";
import {changeFavoritePokemons} from "../../../API/favoritePokemons";

export const Tab = (props) => {
    const {
        tab, name, setTab, type,
        favoritePokemons, pokemon
    } = props
    const dispatch = useDispatch()

    return (
        <>
            {type === 'tab' ?
                <div className={`tab ${tab === name ? 'tab-active' : ''}`} onClick={setTab}>{name}</div>
                :
                <div className={`tab favoriteOff ${favoritePokemons.find(e => e.id === pokemon.id) && 'favoriteOn'}`}
                     onClick={() => favoritePokemons.find(e => e.id === pokemon.id) ? dispatch(changeFavoritePokemons(pokemon, 'remove')) : dispatch(changeFavoritePokemons(pokemon, 'add'))}>
                    <svg className={`favorite_icon ${favoritePokemons.find(e => e.id === pokemon.id) && 'favorite_iconOn'}`}
                         xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24"
                         viewBox="0 0 24 24">
                        <path
                            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                    </svg>
                </div>
            }
        </>
    )
}