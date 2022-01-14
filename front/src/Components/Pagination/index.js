import {Pagination} from "antd";
import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import {updatePagination} from "../../Logic/updatePagination";

const PageSwitching = () => {
    const bufferPokemonArray = useSelector(state => state.toolkit.bufferPokemonArray)
    const notFound = useSelector(state => state.toolkit.notFound)
    const defaultSize = useSelector(state => state.pagination.defaultSizePokemons)
    const dispatch = useDispatch()

    return (
        <Pagination
            defaultCurrent={1}
            defaultPageSize={20}
            pageSizeOptions={[10, 20, 50]}
            total={defaultSize ? 1118 : notFound ? 0 : bufferPokemonArray.length}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} pokemons`}
            onChange={(page, pageSize) => {
                dispatch(updatePagination(page, pageSize))
            }}
        />
    )
}

export default PageSwitching