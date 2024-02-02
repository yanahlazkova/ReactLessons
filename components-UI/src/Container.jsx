import React from "react";
import './styles.css'
export default function Container({width, children}) {
    const myClass = ['container', width].join(' ');
    console.log(myClass);
    return <div className={myClass}>{children}</div>
}