export const getDamageResponse = async ( resource, query ) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const damage = await response.json()
    return damage
}

export const getNestedDamageResponse = async ( resource, objectProperty) => {
    const response = await getDamageResponse(resource)
    return response.data.flatMap(item => item[objectProperty])
}