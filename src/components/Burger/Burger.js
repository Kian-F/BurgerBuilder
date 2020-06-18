import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger =(props) =>{
    //Object.keys will give us an array of the keys[salad, meat...]
        const transformedIngredients = Object.keys(props.ingredients)
        //transform this strings [salad, meat...] value to an array with as many elements as we have
        //ingrideants for a given ingredient
        .map(igKey => {

            return[...Array(props.ingredients[igKey])].map((_, i) => {
                //igkey == salad, i == 1
               return <BurgerIngredient key={igKey + i} type={igKey}/>
            });
        });
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}

            <BurgerIngredient type='bread-bottom'/>


        </div>
    )

}

export default burger;