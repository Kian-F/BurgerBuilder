import React from  'react'
import { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
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
    totalPrice: 7,
    purchasable: false
}

updatePurchaseState (ingredients){
   
    const sum = Object.keys(ingredients).map(igKey => {
        return ingredients[igKey];
    }).reduce((sum, el) =>{
        return sum + el
    }, 0);
    this.setState({purchasable: sum>0})
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
    this.updatePurchaseState(updatedIngredients);
}

removeIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    if(oldCount <=0){
        return
    }
    const updatedCount = oldCount -1;
    const updatedIngredients = {
        ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceDiduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDiduction
    this.setState({totalPrice: newPrice, ingredients:updatedIngredients  })
    this.updatePurchaseState(updatedIngredients);
} 
    render(){
        const disabledInfo ={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux>

           <Modal><OrderSummary ingredients={this.state.ingredients}/></Modal>
           <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
            ingredinetAdded = {this.addIngredientHandler}
            ingredinetRemoved = {this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            price ={this.state.totalPrice}
            />
            </Aux>
        );
    }
}

export default BurgerBuilder