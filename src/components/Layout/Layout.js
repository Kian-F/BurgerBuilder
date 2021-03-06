import React from 'react'
import Aux  from '../../hoc/Aux'
//import Aux from 'react-aux';
import classes from './Layout.css'

const layout = (props) =>(
    <Aux>
    <div>
        Toolbar, SideDrawer, Backdrop
    </div>
    <main className={classes.content}>
        {props.children}
    </main>
    </Aux>
);

export default layout