import {newSelectedTags} from "../Redux/tags";
import {message} from "antd";

const handleChangeTag = (tag, checked, selectedTags) => {
    return dispatch => {
        try {
            const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag)
            dispatch(newSelectedTags(nextSelectedTags))
        } catch (e) {
            message.error("There was a problem with tag selection", 3)
            console.log(e)
        }
    }
}

export default handleChangeTag