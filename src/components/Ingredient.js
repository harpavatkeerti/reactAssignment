import React, { useState } from 'react'

export default function Ingredient(props) {
    var title = props.currItem.name;
    var allRecipes = props.allRecipes;
    var setAllRecipes = props.setAllRecipes;

    var typeIndex = -1;
    switch(props.currType) {
        case "breakfast": typeIndex = 0; break;
        case "snacks": typeIndex = 1; break;
        case "rice": typeIndex = 2; break;
        case "diebetic": typeIndex = 3; break;
    }
    // const [ingredients, setIngredients] = useState(props.currItem.ingredients);
    var ingredients = props.currItem.ingredients;

    function handleEntailmentRequest(e) {
        e.preventDefault();
        let txt = document.getElementById("input").value;
        if(txt !== "") {
            // let ings = ingredients.concat(txt); 
            // setIngredients(ings);
            let recs = {
                ...allRecipes
            }
            recs[typeIndex].list[parseInt(props.currItem.id) - 1].ingredients = recs[typeIndex]["list"][parseInt(props.currItem.id) - 1]["ingredients"].concat(txt);
            setAllRecipes(recs);
            // var json = JSON.stringify(recs);
            // var fs = require('fs');
            // fs.writeFile('./recipes.json', json, 'utf8', () => {
            // } );
        }
        else{
            alert("Enter non empty string");
        }
    }
    return (
        <div>
            <h5>{title}</h5>
            <form className="row g-2">
                <div className="col-auto">
                    <input id="input" type="text" placeholder="Enter Ingredient" className="form-control"/>
                </div>
                <div className="col-auto">
                    <button className="btn rounded border border-1" style={{backgroundColor: 'lightgray'}} onClick={(e) => handleEntailmentRequest(e)}>Add Ingredient</button>
                </div>
                <ul style={{margin: 20}}>
                    {
                        ingredients.map(i => <li>{i}</li>)
                    }
                </ul>
            </form>
        </div>
    )
}
