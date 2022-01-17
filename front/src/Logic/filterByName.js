export const filterByName = (inputData, searchResultBuffer) => {
    const filterByInput = new RegExp(inputData, "g")
    return searchResultBuffer.filter(elem => elem.name.match(filterByInput))
}