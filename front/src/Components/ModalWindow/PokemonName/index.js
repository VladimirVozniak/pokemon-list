export const PokemonName = (props) => {
    const {popupInfo} = props
    return (
        <div className="pokemon-info_name">
            <p>{popupInfo.name}</p>
        </div>
    )
}