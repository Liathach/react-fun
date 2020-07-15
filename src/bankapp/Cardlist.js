import React from 'react';
import Card from './Card';
import './bankapp.css';

const CardList = ({ array, deposit, withdraw, remove }) => {
    return (
        <div>
            {
                array.map((user, i) => {
                    return (

                        <Card
                            key={i}
                            name={array[i].name}
                            balance={array[i].balance}
                            // array={array} 
                            deposit={deposit}
                            withdraw={withdraw}
                            remove={remove}
                        />
                    );
                })
            }
        </div>
    );
}


export default CardList;
