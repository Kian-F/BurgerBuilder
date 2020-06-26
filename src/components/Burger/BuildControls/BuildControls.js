import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import Classes from './BuildControls.css'

const controls=[
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Chesse',type: 'chesse'},
    
]

const buildControls = (props) => (
<div className={Classes.BuildControls}>
    {controls.map(ctrl => (
        <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        //type={ctrl.type}

        added={ () => props.ingredinetAdded(ctrl.type)}
        removed ={ () => props.ingredinetRemoved(ctrl.type)}
        disabled = {props.disabled[ctrl.type]} />
    ))}
    
</div>

)
export default buildControls;