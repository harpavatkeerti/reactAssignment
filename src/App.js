import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeTypes from './components/RecipeTypes';
import $ from 'jquery';
import Card from 'react-bootstrap/Card';
import Ingredient from './components/Ingredient';
import recipes from './recipes.json';

function App() {
  const [currType, setCurrType] = useState("");
  const [currItem, setCurrItem] = useState("");
  const [allRecipes, setAllRecipes] = useState(recipes);

  return (
    <>
    <Header/>
        <div className="inRow">
            <RecipeTypes setCurrType={setCurrType}/>
            {(currType === "breakfast") && <RecipeList list={allRecipes[0].list} setCurrItem={setCurrItem}/>}
            {(currType === "snacks") && <RecipeList list={allRecipes[1].list} setCurrItem={setCurrItem}/>}
            {(currType === "rice") && <RecipeList list={allRecipes[2].list} setCurrItem={setCurrItem}/>}
            {(currType === "diebetic") && <RecipeList list={allRecipes[3].list} setCurrItem={setCurrItem}/>}
        </div>

      {/* <RecipeIngredients/> */}
        <Card className="card" style={{backgroundColor: 'white', border: 'lightblue', padding: 0}}>
            <header style={{backgroundColor: 'lightblue', padding: 5}}>Recipe Ingreditents</header>
            <br/>
            <div>
                {(currItem !== "") && <Ingredient currType={currType} currItem={currItem} allRecipes={allRecipes} setAllRecipes={setAllRecipes}/>}
            </div>
        </Card>
    </>
  );
}

export default App;
