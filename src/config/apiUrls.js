export const GET_CATEGORIES_URL = () => {
    return `https://api.thecatapi.com/v1/categories`
}
export const GET_PRODUCT_URL = (limit = 10, page = 1,category_id = 1) => {
    return `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&category_ids=${category_id}`
}