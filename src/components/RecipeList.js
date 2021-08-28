import React from 'react'
import Recipe from './Recipe';

export default function RecipeList(props) {
    var list = props.list;
    var setCurrItem = props.setCurrItem;
    console.log(list);
    return (
        <div>
             <div className="row">
                <div className="col-md">
                    <div className="row no-gutters">
                        {
                            // <Recipe recipe={list[0]}/>
                            list.map(e => <Recipe key={e.id} recipe={e} setCurrItem={setCurrItem}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
