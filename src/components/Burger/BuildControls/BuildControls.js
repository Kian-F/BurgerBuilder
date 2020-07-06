import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import Classes from './BuildControls.css'

const controls=[
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Chesse',type: 'chesse'}
    
]

const buildControls = (props) => (
<div className={Classes.BuildControls}>
<p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>

    {controls.map(ctrl => (
        
        <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        //type={ctrl.type}

        added={ () => props.ingredinetAdded(ctrl.type)}
        removed ={ () => props.ingredinetRemoved(ctrl.type)}
        disabled = {props.disabled[ctrl.type]} />
    ))}
    <button className={Classes.OrderButton} disabled={!props.purchasable}
    onClick={props.ordered}
    
    >ORDER NOW</button>
</div>

)
export default buildControls;