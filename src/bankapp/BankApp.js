import React, { Component } from 'react';
import './bankapp.css';
import SumOfAccounts from './SumOfAccounts';
import Highest from './Highest';
import Lowest from './Lowest';
import Cardlist from './Cardlist';


class AcctControls extends Component {
    constructor() {
        super();
        this.state = {
            acctArray: [

            ],
        }

        this.newAccount = {
            key: null,
            name: "",
            balance: 0,
        }

        this.addAcct = this.addAcct.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.totalAcctBalance = this.totalAcctBalance.bind(this);
        this.lengthCheck = this.lengthCheck.bind(this);
        this.highestAcctBalance = this.highestAcctBalance.bind(this);
        this.lowestAcctBalance = this.lowestAcctBalance.bind(this);
    }

    addAcct(key,name, balance ) {

        let addedAccount = this.newAccount;
        if (key === null) {

            if (this.state.acctArray.length >= 1) {
                let maxKey = this.acctArray.reduce((a, b) =>
                    a.key > b.key ? a : b).key;
                key = maxKey + 1;
                this.newAccount[key]=key;

            }
            else {
                key = 1;
                this.newAccount[key]=key;
            }
        }
        this.setState({ acctArray: [...this.state.acctArray, addedAccount] });
        

        this.newAccount = {
            key: key++,
            name: "",
            balance: 0,
        }

        return this.state.acctArray;

    }

    handleChange(e) {
        this.newAccount[e.target.id] = e.target.value;
        console.log(this.newAccount);
    }

    lengthCheck() {
        return this.state.acctArray.length;
    };



    totalAcctBalance() {
        console.log(this.state.acctArray.length);


        let totalBalance = 0;
        for (let i = 0; i < this.state.acctArray.length; i++) {
            totalBalance += Number(this.state.acctArray[i].balance);
        }
        // console.log(totalBalance);
        // idAcctSum.innerText = `The total balance of all acounts is $${totalBalance}`;

        return totalBalance;
    }

    highestAcctBalance() {
        let highestAcctBal = 0;
        let highestAcctName;
        for (let i = 0; i < this.state.acctArray.length; i++) {
            let highBalance = Number(this.state.acctArray[i].balance);
            let acctName = this.state.acctArray[i].name;
            if (highestAcctBal < highBalance) {
                highestAcctBal = highBalance;
                highestAcctName = acctName;

            }
        }
        return `${highestAcctName}: $${highestAcctBal}`;
    }


    lowestAcctBalance() {
        let lowestAcctBal = Number.POSITIVE_INFINITY;
        let lowestAcctName;
        for (let i = 0; i < this.state.acctArray.length; i++) {
            let lowBalance = Number(this.state.acctArray[i].balance);
            let acctName = this.state.acctArray[i].name;
            if (lowBalance < lowestAcctBal) {
                lowestAcctBal = lowBalance;
                lowestAcctName = acctName;
            }
        }
        return `${lowestAcctName}: $${lowestAcctBal}`;
    }


    render() {
        return (
            <div>
                <div className="AccountOps">
                    <span id="idAccountOpen">Account Creation</span><br />
                    <input type="text" id="name" placeholder="Input Account Name" onChange={this.handleChange} />
                    <input type="number" id="balance" placeholder="Input Initial Balance" onChange={this.handleChange} /><br />
                    <button onClick={this.addAcct}>Create Account</button>
                </div>
                <div>
                    <h3>Accounts Summary</h3>
                    <Highest highest={this.highestAcctBalance} length={this.state.acctArray.length} />
                    <Lowest lowest={this.lowestAcctBalance} length={this.state.acctArray.length} />
                    <SumOfAccounts sum={this.totalAcctBalance} length={this.state.acctArray.length} />


                </div>
                <div className="RightPanel">
                    <Cardlist array={this.state.acctArray} />
                </div>
            </div>
        )
    }
}


export default AcctControls;