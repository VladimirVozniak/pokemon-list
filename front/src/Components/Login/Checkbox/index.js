export const Checkbox = (props) => {
    const {checked, changeChecked} = props

    return (
        <div className="checkbox-container" onClick={() => changeChecked()}>
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