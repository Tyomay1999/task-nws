import React, { useEffect, useMemo } from 'react'
import categoriesStyle from './categories.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { handlerCategories, chooseCategory } from './functions'
import { changeLoading } from '../../Redux/Actions/cammon.action'
import {
    getCategoriesThunk,
    selectCategory,
    clearSelectedCategory,
    resetLimit
} from '../../Redux/Actions/categories.action'


const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector( state => state?.categoriesReducer.categories )
    const selectedCategory = useSelector( state => state?.categoriesReducer.selectedCategory )

    useEffect( () => {
        dispatch( getCategoriesThunk() )
    }, [] )

    return <ul className={ categoriesStyle.main }>
        <li onClick={ () => {
            dispatch( resetLimit() )
            dispatch(changeLoading(true))
            dispatch( clearSelectedCategory() )
        } }
            className={ categoriesStyle.category }
        ><p>All</p></li>
        {
            handlerCategories( categories, selectedCategory, dispatch,selectCategory,changeLoading,resetLimit )
        }
    </ul>
}

export default Categories