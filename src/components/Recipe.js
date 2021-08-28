import React from 'react';
import './Custom.css';

export default function Recipe(props) {
    var recipe = props.recipe;
    var setCurrItem = props.setCurrItem;
    console.log("recipe", recipe);
    return (
        <div className="col-sm-4">
            <figure className="figure">
            <img src={recipe.pic} alt="" className="img-thumbnail img-fluid"/>
            <figcaption className="figure-caption text-center" ><a onClick={() => setCurrItem(recipe)} style={{cursor: 'pointer', color: 'blue'}}>{recipe.name} </a></figcaption>
            </figure>
        </div>
    )
}
