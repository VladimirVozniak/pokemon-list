export const Checkbox = (props) => {
    const {checked, changeChecked, logUp} = props

    return (
        <div className={`checkbox-container ${logUp && "checkbox-container-reg"}`} onClick={() => changeChecked()}>
            <input
                type="checkbox"
                className="checkbox"
                checked={checked}
                onChange={() => changeChecked()}
            />
            <p className="checkbox-text">Remember me</p>
        </div>
    )
}