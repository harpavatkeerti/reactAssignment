import React from 'react';
import './Custom.css';
import $ from 'jquery';

function setButtonColors(idx) {
    let mp = {0: "breakfast", 1: "snacks", 2: "rice", 3: "diebetic"};

    for(let i=0;i<4;i++){
        if(i===idx) {
            document.getElementById(mp[i]).style.backgroundColor="lightgray";
        }
        else{
            document.getElementById(mp[i]).style.backgroundColor="#f8f9fa";
        }
    }
     
}

export default function RecipeTypes(props) {
    return (
        <ul className="nav flex-column" style={{margin: 30}}>
            <li className="nav-item">
                {/* <span style={{backgroundColor: 'lightblue'}}>Recipe Types</span> */}
                <button className="typebtn" style={{backgroundColor: '#107be2'}}>Recipe Types</button>
            </li>

            <li className="nav-item">
                <button id="breakfast" className="typebtn" onClick={() => {setButtonColors(0); props.setCurrType("breakfast")}}> Breakfast Recipes </button>
            </li>
            <li className="nav-item">
                <button id="snacks" className="typebtn" onClick={() => {setButtonColors(1); props.setCurrType("snacks")}}> Snacks and Sweets </button>
            </li>
            <li className="nav-item">
                <button id="rice" className="typebtn" onClick={() => {setButtonColors(2); props.setCurrType("rice")}}> Rice Varieties </button>
            </li>
            <li className="nav-item">
                <button id="diebetic" className="typebtn" onClick={() => {setButtonColors(3); props.setCurrType("diebetic")}}> Diebetic Recipes </button>
            </li>
        </ul>
    )
}
