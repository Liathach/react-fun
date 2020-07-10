import React from 'react';
import './bankapp.css'

const Card = ({name, balance}) => {
    return (
            <div className="card-border">
                <h2>{name}</h2>
                <p>{balance}</p>
                <button>Deposit</button>
                <button>Withdraw</button>
                <button>Delete Account</button>
            </div>

    )
}

export default Card;