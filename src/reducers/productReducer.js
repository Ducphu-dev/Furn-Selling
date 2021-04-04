import product_item1 from '../img/product-item1.jpg';
import product_item2 from '../img/product-item2.jpg';
import product_item3 from '../img/product-item3.jpg';
import product_item4 from '../img/product-item4.jpg';
import product_item5 from '../img/product-item5.jpg';
import product_item6 from '../img/product-item6.jpg';
import product_item7 from '../img/product-item7.jpg';
import product_item8 from '../img/product-item8.jpg';
import { PRODUCT_CONSTANT } from '../constants/productConstant'

const initState = {
    productsList: [
        {
            product_id: 1,
            product_img: product_item1,
            product_date: '2021/02/05',
            product_sale: 20,
            product_name: 'Simple Minimal Chair',
            product_price: 28.85,
            product_description: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
            prodcuct_weight: '400',
            product_dimension: '10 x 10 x 15',
            product_material: '60% cotton, 40% polyester',
            product_infor: 'American heirloom jean shorts pug seitan letterpress',
            product_amount: 0
        },
        {
            product_id: 2,
            product_img: product_item2,
            product_date: '2021/01/05',
            product_sale: 40,
            product_name: 'Wooden decorations',
            product_price: 30.54,
            product_description: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
            prodcuct_weight: '400',
            product_dimension: '10 x 10 x 15',
            product_material: '60% cotton, 40% polyester',
            product_infor: 'American heirloom jean shorts pug seitan letterpress',
            product_amount: 0
        },
        {
            product_id: 3,
            product_img: product_item3,
            product_date: '2021/02/10',
            product_sale: 30,
            product_name: 'High quality vase',
            product_price: 38.85,
            product_description: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
            prodcuct_weight: '400',
            product_dimension: '10 x 10 x 15',
            product_material: '60% cotton, 40% polyester',
            product_infor: 'American heirloom jean shorts pug seitan letterpress',
            product_amount: 0
        },
        {
            product_id: 4,
            product_img: product_item4,
            product_date: '2021/03/05',
            product_sale: null,
            product_name: 'Living & Bedroom',
            product_price: 45.89,
            product_description: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
            prodcuct_weight: '400',
            product_dimension: '10 x 10 x 15',
            product_material: '60% cotton, 40% polyester',
            product_infor: 'American heirloom jean shorts pug seitan letterpress',
            product_amount: 0
        },
        {
            product_id: 5,
            product_img: product_item5,
            product_date: '2021/01/05',
            product_sale: null,
            product_name: 'Living & Bedroom',
            product_price: 29.85,
            product_description: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
            prodcuct_weight: '400',
            product_dimension: '10 x 10 x 15',
            product_material: '60% cotton, 40% polyester',
            product_infor: 'American heirloom jean shorts pug seitan letterpress',
            product_amount: 0
        },
        {
            product_id: 6,
            product_img: product_item6,
            product_date: '2021/02/10',
            product_sale: null,
            product_name: 'Simple Minimal Chair',
            product_price: 65.10,
            product_description: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
            prodcuct_weight: '400',
            product_dimension: '10 x 10 x 15',
            product_material: '60% cotton, 40% polyester',
            product_infor: 'American heirloom jean shorts pug seitan letterpress',
            product_amount: 0
        },
        {
            product_id: 7,
            product_img: product_item7,
            product_date: '2021/01/05',
            product_sale: 50,
            product_name: 'Living & Bedroom',
            product_price: 50.20,
            product_description: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
            prodcuct_weight: '400',
            product_dimension: '10 x 10 x 15',
            product_material: '60% cotton, 40% polyester',
            product_infor: 'American heirloom jean shorts pug seitan letterpress',
            product_amount: 0
        },
        {
            product_id: 8,
            product_img: product_item8,
            product_date: '2021/02/22',
            product_sale: 30,
            product_name: 'High quality vase',
            product_price: 40.85,
            product_description: 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
            prodcuct_weight: '400',
            product_dimension: '10 x 10 x 15',
            product_material: '60% cotton, 40% polyester',
            product_infor: 'American heirloom jean shorts pug seitan letterpress',
            product_amount: 0
        },
    ],
    amount_product_add: [],
    amount_product_details: 1,
    findedIndexViewDetail: [],
    query: {
        product_name: "",
        product_sort_price: "",
        product_sort_all: ""
    },
    filterData: []
}

function productReducer(state = initState, action) {
    switch (action.type) {
        default:
            return true;
        case PRODUCT_CONSTANT.VIEW_PRODUCT: {
            let newListProducts = [...state.productsList];
            return {
                ...state,
                findedIndexViewDetail: {
                    ...newListProducts.filter(product => product.product_id === action.payload)},
                amount_product_details: 1
            }
        }
        case PRODUCT_CONSTANT.SEARCH: {
            return {
                ...state,
                query: {
                    ...state.query,
                    product_name: action.payload
                },
                filterData: {
                    ...state.productsList.filter((product) => product.product_name.toLowerCase().includes(...state.query.product_name.toLowerCase())
                    )
                }
            }
        }
    }
}

export default productReducer;