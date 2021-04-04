import { PRODUCT_CONSTANT } from '../constants/productConstant'

export const search = value => {
    return {
        type: PRODUCT_CONSTANT.SEARCH,
        payload: value
    }
}
export const searchFilterPrice = value => {
    return {
        type: PRODUCT_CONSTANT.SEARCH_FILTER_PRICE,
        payload: value
    }
}
export const searchFilterName = value => {
    return {
        type: PRODUCT_CONSTANT.SEARCH_FILTER_NAME,
        payload: value
    }
}
export const addProduct = amount_product_add => {
    return {
        type: PRODUCT_CONSTANT.ADD_PRODUCT,
        payload: amount_product_add
    }
}
export const deleteProduct = amount_product_add => {
    return {
        type: PRODUCT_CONSTANT.DELETE_PRODUCT,
        payload: amount_product_add
    }
}
export const miunusProduct = product => {
    return {
        type: PRODUCT_CONSTANT.MINUS_PRODUCT,
        payload: product
    }
}
export const viewProduct = id => {
    return {
        type: PRODUCT_CONSTANT.VIEW_PRODUCT,
        payload: id
    }
}
export const minus_details = product => {
    return {
        type: PRODUCT_CONSTANT.MINUS_DETAILS,
        payload: product
    }
}
export const plus_details = product => {
    return {
        type: PRODUCT_CONSTANT.SEARCH,
        payload: product
    }
}
