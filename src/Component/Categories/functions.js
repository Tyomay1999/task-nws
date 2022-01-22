import categoriesStyle from './categories.module.scss'
export const handlerCategories = ( categories, selectedCategory, dispatch,selectCategory,changeLoading,resetLimit ) => {
    return categories.map( category => {
        return <li
            onClick={ () => chooseCategory( category, dispatch,selectCategory,changeLoading,resetLimit ) }
            key={ category.id }
            className={
                selectedCategory?.id === category.id ? categoriesStyle.selectedCategory : categoriesStyle.category
            }>
            <p>{ category.name }</p>
        </li>
    } )
}
export const chooseCategory = ( category, dispatch,selectCategory,changeLoading,resetLimit ) => {
    dispatch(changeLoading(true))
    dispatch(resetLimit())
    dispatch( selectCategory( category ) )
}
