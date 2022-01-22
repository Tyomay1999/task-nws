import React, { useEffect } from 'react'
import listStyle from './list.module.scss'
import {changeLoading} from '../../Redux/Actions/cammon.action'
import { useSelector, useDispatch } from "react-redux";
import { getProductsThunk } from '../../Redux/Actions/product.action'
import {incrementLimit} from '../../Redux/Actions/categories.action'
import Categories from '../Categories/categories'
import Card from '../Card/card'
import { v4 as uuidv4 } from 'uuid';
import Loading from '../Loading/loading'

const handlerViewMore = dispatch => {
    dispatch(changeLoading(true))
    dispatch( incrementLimit() )
}

const List = () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.commonReducer.loading)
    const product = useSelector( state => state?.productReducer.products )
    const limit = useSelector( state => state?.categoriesReducer.dataLimit )
    const selectedCategory = useSelector( state => state?.categoriesReducer.selectedCategory )
    useEffect( () => {
        dispatch( getProductsThunk( { limit, categoryId: selectedCategory?.id }) )
    }, [limit,selectedCategory] )

    if (loading) {
        return <Loading />
    }
    return <div className={ listStyle.main }>
        <Categories/>
        <div className={ listStyle.content }>
            {
                product?.map( card => {
                    return <div key={ uuidv4() }>
                        <Card card={ card }/>
                    </div>
                } )
            }
        </div>
        <div className={listStyle.getMore}>
            <button onClick={() => handlerViewMore(dispatch) }>View More</button>
        </div>
    </div>
}

export default List