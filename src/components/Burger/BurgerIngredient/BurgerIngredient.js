import React from 'react'
import classes from './BurgerIngredient.css'

const burgerIngredient = (props) =>{
    let ingredinet = null;
    
    switch(props.type){
        case ('bread-bottom'):
        ingredinet =<div className={classes.BreadBottom}></div>
        break;

        case('bread-top'):
         ingredinet = <div className={classes.BreadTop}>
             <div className={classes.Seeds1}></div>
             <div className={classes.Seeds2}></div>
         </div>
         break;
         case('meat'):
         ingredinet = <div className={classes.Meat}></div>
         break;
         case('salad'):
         ingredinet = <div className={classes.Salad}></div>
         break;

         case('cheese'):
         ingredinet = <div className={classes.Cheese}></div>
         break;

         case('bacon'):
         ingredinet = <div className={classes.Bacon}></div>
         break;

         default: ingredinet = null;
    }
    return ingredinet

}

export default burgerIngredient