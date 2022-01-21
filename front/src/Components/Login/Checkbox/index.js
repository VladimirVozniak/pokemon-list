export const Checkbox = (props) => {
    const {checked, changeChecked, logUp} = props

    return (
        <label className={`checkbox-container ${logUp && "checkbox-container-reg"}`}>
            <input
                type="checkbox"
                className="checkbox"
                checked={checked}
                onChange={() => changeChecked()}
            />
            Remember me
        </label>
    )
}