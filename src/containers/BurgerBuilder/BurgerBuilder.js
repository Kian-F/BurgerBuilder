import React from  'react'
import { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES= {
    salad: 1,
    cheese: 2,
    meat: 3,
    bacon: 2
}
class BurgerBuilder extends Component {
//    constructor(params) {
//        super();
//        this.state = {}
//    }

state={
    ingredients:{
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 7
}

addIngredientHandler =(type) =>{
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = priceAddition + oldPrice
    this.setState({totalPrice:newPrice, ingredients: updatedIngredients})
}
    render(){
        return(
            <Aux>

           
           <Burger ingredients={this.state.ingredients}/>
            <BuildControls ingredinetAdded={this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder