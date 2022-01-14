import {newPage, newPageSize} from "../Redux/pagination";
import {message} from "antd";

export const updatePagination = (page, pageSize) => {
    return dispatch => {
        try {
            const newPage1 = (page - 1) * pageSize
            dispatch(newPage(pageSize))
            dispatch(newPageSize(newPage1))
        } catch (e) {
            message.error('There was a problem with tag selection', 3)
            console.log(e)
        }
    }
}