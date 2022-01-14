export const dynamicFontSize = (name) => {
    const fatSymbol = (name.match(/[WwMmG]/g) || []).length
    const thinSymbol = (name.match(/[iIlt]/g) || []).length

    if (name.length - thinSymbol / 2 + fatSymbol * 1.5 < 10)
        return 12
    else return 11
}