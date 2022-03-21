import React, { ReactElement } from 'react';
import Home from '../screens/home/home';



export type StackNavigatorParams = {
    Home:undefined;
}

export default function Navigator(): ReactElement {
    return(
    <>
    <Home></Home>
    </>)
}