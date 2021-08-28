import React from 'react';
import Card from 'react-bootstrap/Card';
import Ingredient from './Ingredient';

export default function RecipeIngredients() {
    return (
        <Card className="card" style={{backgroundColor: 'white', border: 'lightblue', padding: 0}}>
            <header style={{backgroundColor: 'lightblue', padding: 5}}>Recipe Ingreditents</header>
            <br/>
            <div>
                <Ingredient name="Gulab" ingredients={[]}/>
            </div>
        </Card>
    )
}
