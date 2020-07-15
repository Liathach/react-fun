import React, { Component } from 'react';
import './bankapp.css';
import SumOfAccounts from './SumOfAccounts';
import Highest from './Highest';
import Lowest from './Lowest';
import Cardlist from './Cardlist';
import account from '../business/account';
import AccountCards from '../components/AccountCards';

class AcctControls extends Component {
    constructor() {
        super();

        this.ctrl = new account.AcctControls();


        this.state = {
            count: 0,
            acctArray: [],
        }
        // this.counter = 0;
        this.newAccount = {
            name: "",
            balance: Number(0),
        }

        this.addAcct = this.addAcct.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.totalAcctBalance = this.totalAcctBalance.bind(this);
        this.lengthCheck = this.lengthCheck.bind(this);
        this.highestAcctBalance = this.highestAcctBalance.bind(this);
        this.lowestAcctBalance = this.lowestAcctBalance.bind(this);
        this.getAccount = this.getAccount.bind(this);
        this.depositToAcct = this.depositToAcct.bind(this);
        this.withdrawFromAcct = this.withdrawFromAcct.bind(this);
        this.deleteAcct = this.deleteAcct.bind(this);
    }

    addAcct(key) {
        // addAcct(key,name, balance ) {

        let determineId = this.state.acctArray.findIndex(value => value.name === this.newAccount.name)
        let addedAccount = this.newAccount;
        // determineId === -1 ? this.setState({ acctArray: [...this.state.acctArray, addedAccount] }) : alert('Please input a unique account name.')
        this.ctrl.addAcct(this.newAccount.name, this.newAccount.balance);
        this.setState({ count: this.state.count + 1 })
        // this.setState({ acctArray: [...this.state.acctArray, addedAccount] });


        this.newAccount = {
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

    getAccount(nameKey) {
        console.log(this.state.acctArray.length)
        for (var i = 0; i < this.state.acctArray.length; i++) {
            if (this.state.acctArray[i].name === nameKey) {
                return this.state.acctArray[i];
            }
        }
    }
    depositToAcct() {
        let name = "Dave";
        let amount = 100;
        let change = this.getAccount(name);
        let newArr = this.state.acctArray;
        console.log(change);
        // let index = this.acctArray.findIndex(acctFinder => acctFinder.name === name);
        let index = this.state.acctArray.findIndex(value => value.name === name);
        console.log(typeof (change.balance));
        change.balance = parseInt(change.balance);
        console.log(typeof (change.balance));
        change.balance += amount;
        console.log(change);
        newArr.splice(index, 1, change);
        console.log(newArr, amount);
        this.setState({ acctArray: newArr });
        // let transaction = this.idTransaction.value;
        // this.acctArray[index].deposit(transaction);
    }

    withdrawFromAcct() {
        let name = "Dave";
        let amount = 100;
        let change = this.getAccount(name);
        let newArr = this.state.acctArray;
        console.log(change);
        // let index = this.acctArray.findIndex(acctFinder => acctFinder.name === name);
        let index = this.state.acctArray.findIndex(value => value.name === name);
        console.log(typeof (change.balance));
        change.balance = parseInt(change.balance);
        console.log(typeof (change.balance));
        change.balance -= amount;
        console.log(change);
        newArr.splice(index, 1, change);
        console.log(newArr);
        this.setState({ acctArray: newArr });
        // let transaction = this.idTransaction.value;
        // this.acctArray[index].deposit(transaction);
    }
    deleteAcct() {
        let name = "Dave";
        let change = this.getAccount(name);
        let newArr = this.state.acctArray;
        console.log(change);
        // let index = this.acctArray.findIndex(acctFinder => acctFinder.name === name);
        let index = this.state.acctArray.findIndex(value => value.name === name);
        newArr.splice(index, 1);
        console.log(newArr);
        this.setState({ acctArray: newArr });

    }

    totalAcctBalance() {
        console.log(this.state.acctArray.length);


        let totalBalance = 0;
        for (let i = 0; i < this.state.acctArray.length; i++) {
            totalBalance += Number(this.state.acctArray[i].balance);
        }
        // console.log(totalBalance);
        // idAcctSum.innerText = `The total balance of all acounts is $${totalBalance}`;

        return `$${totalBalance}`;
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

    dnlAdd = () => {
        console.log("We're in dnlAdd");
        this.ctrl.addAcct("Dave", 500);
    }

    dnlDeposit = () => {
        console.log("We're in dnlStuff");
        this.ctrl.depositToAcct("Dave", 200);

    }
    dnlShow = () => {
        console.log("We're in dnlShow");
        console.log(this.ctrl);
    }

    onClick = (e) => {
        console.log(e.target);
        console.log(e.target.getAttribute("myaccount"));
    }

    render() {

        const cards = this.ctrl.acctArray.map((e, i) => {
            console.log(e, i);
            return <AccountCards key={i} account={e} />
        })

        return (
            <div onClick={this.onClick}>
                {cards}
                <div className="AccountOps">
                    <span id="idAccountOpen">Account Creation</span><br />
                    <input type="text" id="name" placeholder="Input Account Name" onChange={this.handleChange} />
                    <input type="number" id="balance" placeholder="Input Initial Balance" onChange={this.handleChange} /><br />
                    <button onClick={this.addAcct}>Create Account</button>
                    <button onClick={this.dnlAdd}>Dave add</button>
                    <button onClick={this.dnlDeposit}>Dave deposit</button>
                    <button onClick={this.dnlShow}>Dave show</button>

                </div>
                <div>
                    <h3>Accounts Summary</h3>
                    <Highest highest={this.highestAcctBalance} length={this.state.acctArray.length} />
                    <Lowest lowest={this.lowestAcctBalance} length={this.state.acctArray.length} />
                    <SumOfAccounts sum={this.totalAcctBalance} length={this.state.acctArray.length} />

                </div>

                <div>
                    <input type="number" id="idTransaction" />
                    <br />
                    <button onClick={this.depositToAcct}>Deposit</button>
                    <button onClick={this.withdrawFromAcct}>Withdraw</button>
                    <br />
                    <button onClick={this.deleteAcct}>Delete Account</button>

                </div>

                <div className="RightPanel">
                    <Cardlist
                        array={this.state.acctArray}
                        deposit={this.depositToAcct}
                        withdraw={this.withdrawFromAcct}
                        remove={this.deleteAcct}
                    />
                </div>
            </div>
        )
    }
}


export default AcctControls;