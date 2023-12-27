import React from "react";
import {render} from "react-dom";
import App from "./App";
import counterStore from "./counterStore";


const store = new counterStore();

render(
    <div>
        <App counter = {store}/>
    </div>,
    document.getElementById("root")
)