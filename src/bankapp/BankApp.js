import React, { Component } from 'react';
import './bankapp.css';
import AcctOutput from '../components/AcctOutput.js';

class Account extends React.Component {

    constructor(name, balance) {
        super();
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += Number(amount);
        return this.balance;
    }

    withdraw(amount) {
        this.balance -= Number(amount);
        return this.balance;
    }

    acctBalance() {
        return this.balance;
    }

}

class AcctControls extends Component {
    constructor() {
    super();
        this.state = {
            acctArray: [
               
            ],
        }
        //Do I need to bind (this) here? I think so.
        this.addAcct = this.addAcct.bind(this);
    }

    addAcct(name, balance) {
        // this.acctArray.push(new Account(name, balance));
        // this.setState({acctArray: [{accName: "Account", accBalance: "34"}]})
        this.setState({acctArray: [...this.state.acctArray, {accName: name, accBalance: balance}]});

        // this.setState({acctArray: [this.state.acctArray, balance]})
        console.log(this.state.acctArray);
        return this.state.acctArray;

        // addAcct(name, balance) {
        //     this.setState({accountNames: [...this.state.accountNames, newAccountName]})
        //     this.setState({accountBalances: [...this.state.accountBalances, 0]})
        // }
    }

    balanceForAcct(name) {
        let index = this.acctArray.findIndex(acctFinder => acctFinder.name === name);
        return this.acctArray[index].acctBalance();
    }

    depositToAcct(name, amount) {
        let index = this.acctArray.findIndex(acctFinder => acctFinder.name === name);
        this.acctArray[index].deposit(amount);
    }
    withdrawFromAcct(name, amount) {
        let index = this.acctArray.findIndex(acctFinder => acctFinder.name === name);
        this.acctArray[index].withdraw(amount);
    }
    // removeAcct(acctObject) {
    //     let index = this.acctArray.findIndex(acctFinder => acctFinder.name === name);
    //     this.acctArray.splice(index, 1)
    // }

    totalAcctBalance() {
        let totalBalance = 0;
        for (let i = 0; i < this.acctArray.length; i++) {
            totalBalance += Number(this.acctArray[i].balance);
        }
        return totalBalance;
    }

    lowestAcctBalance() {
        let lowestAcctBal = Number.POSITIVE_INFINITY;
        let lowestAcctName;
        for (let i = 0; i < this.acctArray.length; i++) {
            let lowBalance = Number(this.acctArray[i].balance);
            let acctName = this.acctArray[i].name;
            if (lowBalance < lowestAcctBal) {
                lowestAcctBal = lowBalance;
                lowestAcctName = acctName;
            }
        }
        return `${lowestAcctName}: $${lowestAcctBal}`;
    }

    highestAcctBalance() {
        let highestAcctBal = 0;
        let highestAcctName;
        for (let i = 0; i < this.acctArray.length; i++) {
            let highBalance = Number(this.acctArray[i].balance);
            let acctName = this.acctArray[i].name;
            if (highestAcctBal < highBalance) {
                highestAcctBal = highBalance;
                highestAcctName = acctName;
            }
        }
        return `${highestAcctName}: $${highestAcctBal}`;
    }

    render() {
        return (
            <div>
                <div className="AccountOps"> 
                    <span id="idAccountOpen">Account Creation</span><br />
                   <CreateAccount addAcct={this.addAcct}/>
                   <br /><br />
                    <span id="idAccountManage">Account Management</span><br />
                    <button>Deposit</button> <button>Withdraw</button> <button>Delete Acct</button><br /><br />
                    <span id="idAccountStats">Account Stats</span><br />
    
                </div>
                <div className="RightPanel">
                    <AcctOutput />
                </div>
            </div>
        )
    }
}

class CreateAccount extends Component() {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            balance: 0,
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleBalanceChange = this.handleBalanceChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value})
    }

    handleBalanceChange(event) {
        this.setState({balance: event.target.value})
    }

    handleClick() {  
        let name = this.state.name;
        let balance = this.state.balance;                     
        this.props.addAcct(name, balance);
    }

    render() {
        return ( 
            <React.Fragment>
                <h6><input name="acctName" type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="New account name"
                    /></h6>
                 <h6><input type="number" value={this.state.balance} onChange={this.handleBalanceChange} placeholder="Starting balance"
                    /></h6>
                    <button onClick={this.handleClick}>Create Account</button>
            </React.Fragment>
        )
    }
}

export default AcctControls;