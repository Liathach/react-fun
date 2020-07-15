import React from 'react';
import './bankapp.css'




let changeValue = {
    amount: Number(0),
}


function handleChange(e) {
    changeValue[e.target.id] = e.target.value;
    console.log(changeValue);
}


const Card = ({name, balance, deposit, withdraw, remove}) => {
    return (
            <div className="card-border">
                <h2>{name}</h2>
                <p>{balance}</p>
                <input type="number" id="amount" onChange={handleChange} /><br />
                <br />
                {/* <button onClick={deposit}>Deposit</button>
                <button onClick={withdraw}>Withdraw</button>
                <br />
                <button onClick={remove}>Delete Account</button> */}
            </div>

    )
}

export default Card;