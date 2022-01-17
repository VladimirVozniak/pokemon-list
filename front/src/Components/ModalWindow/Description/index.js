import {PokemonAbilities} from "../PokemonInfo/PokemonAbilities";
import {PokemonStats} from "../PokemonInfo/PokemonStats";
import {PokemonGeneralInfo} from "../PokemonInfo/PokemonGeneralInfo";

export const Description = (props) => {
    const {popupInfo, tab} = props

    return (
        <p className="description">
            {Object.keys(popupInfo).length > 0 && (() => {
                    switch (tab) {
                        case "ABL":
                            return <PokemonAbilities pokemonInfo={popupInfo}/>
                        case "STAT":
                            return <PokemonStats pokemonInfo={popupInfo}/>
                        default:
                            return <PokemonGeneralInfo pokemonInfo={popupInfo}/>
                    }
                }
            )()}
        </p>
    )
}