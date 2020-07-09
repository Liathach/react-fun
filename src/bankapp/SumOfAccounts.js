import React, { Component } from 'react'

export class SumOfAccounts extends Component {

    render() {

        let sum = this.props.totalAcctBalance;
        // let test = this.props.lengthCheck;
        // console.log(test);
        console.log(this.props.lengthCheck());
        if(this.props.lengthCheck === 0) {
            console.log("Total zero");
        return (
            <div>
                <h3>Empty</h3>
            </div>
        )}

        else {
            return (
                <div>
                    <h3>Account Total {sum}</h3>
                </div>
            )
            }
    }
}

export default SumOfAccounts;
