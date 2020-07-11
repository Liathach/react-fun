import React from 'react';
import './bankapp.css'

const Card = ({name, balance}) => {
    return (
            <div className="card-border">
                <h2>{name}</h2>
                <p>{balance}</p>
                <input type="number" />
                <br />
                <button>Deposit</button>
                <button>Withdraw</button>
                <br />
                <button>Delete Account</button>
            </div>

    )
}

export default Card;