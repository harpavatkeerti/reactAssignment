import React from 'react';
import Card from 'react-bootstrap/Card';
import './Custom.css';

export default function Header() {
    return (
        <Card className="card">
            <br/>
            <h2>Indian Recipes</h2>
            <p>
                A Spanish proverb says The belly rules the mind. Well, the good news is mouth watering food can still be healthy enough for anyone to eat. Above all it can be simple enough for anyone to make. That's the whole idea of this website. 
                <br/> <br/>
                Everyday there is something new to learn and something new to share. Knowledge increases by sharing. You are welcome to share your cooking ideas, recipes, simple tips and other suggestions.
            </p>
        </Card>
    )
}
