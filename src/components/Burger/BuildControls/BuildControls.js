import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import Classes from './BuildControls.css'

const controls=[
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Chesse', type: 'chesse'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (
<div className={Classes.BuildControls}>
    {controls.map(ctrl => (
        <BuildControl key={ctrl.label} label={ctrl.label} />
    ))}
    
</div>

)
export default buildControls;