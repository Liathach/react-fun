// Account class
import React from 'react';
import { render } from '@testing-library/react';

class Account extends React.Component {

    constructor(name, balance) {
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
    
    render() {
return;
}

}

export default Account;