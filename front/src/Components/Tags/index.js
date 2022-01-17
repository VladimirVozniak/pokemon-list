import "./style.css";
import {Spin, Tag} from "antd";
import {useDispatch, useSelector} from "react-redux";
import handleChangeTag from "../../Logic/handleChangeTag";
import {memo, useEffect} from "react";
import {fetchData} from "../../API/fetchData";
import login from "../../Redux/login";

const Tags = () => {
    const {CheckableTag} = Tag;
    const InitialTags = [
        'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel',
        'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'
    ]
    const selectedTags = useSelector(state => state.tags.selectedTags)
    const pokemonOffset = useSelector(state => state.pagination.pokemonOffset)
    const pageSize = useSelector(state => state.pagination.pageSize)
    const searchInput = useSelector(state => state.search.inputData)
    const displayOnlyFavorites = useSelector(state => state.toolkit.showFavoritesArray)
    const favoritePokemons = useSelector(state => state.profile.favoritePokemons)
    const dispatch = useDispatch()

    const searchById = /^(0|[1-9]\d*)$/.test(searchInput)
    const img = <img id="lockTags-img" src="https://img.icons8.com/material/64/000000/lock-2--v1.png" alt=""/>

    useEffect(() => {
        dispatch(fetchData(pokemonOffset, pageSize, selectedTags, searchInput, displayOnlyFavorites, favoritePokemons))
    }, [dispatch, searchInput, selectedTags, pokemonOffset, pageSize, displayOnlyFavorites, displayOnlyFavorites && favoritePokemons]);


    return (
        <Spin spinning={searchById} indicator={img}
              tip="Tags are blocked or inactive because search by ID is used!">
            <div className="types">
                <span style={{marginRight: 8}}>Types:</span>
                <div className="listTypes">
                    {InitialTags.map(tag => (
                        <CheckableTag
                            key={tag}
                            checked={selectedTags.indexOf(tag) > -1}
                            onChange={checked => {
                                dispatch(handleChangeTag(tag, checked, selectedTags))
                            }}
                        >
                            <Tag color="red">{tag}</Tag>
                        </CheckableTag>
                    ))}
                </div>
            </div>
        </Spin>
    )
}

export default memo(Tags)