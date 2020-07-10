import React from 'react';
import Card from './Card';
import './bankapp.css';

const CardList = ({ array }) => {
    return (
        <div>
        {
              array.map((user, i) => {
        return (
        
        <Card 
        // key={i} 
        // id={acctArray[i].id} 
        name={array[i].name} 
        balance={array[i].balance}
        />
        );
    })  
    }
        </div>
    );
}


export default CardList;
