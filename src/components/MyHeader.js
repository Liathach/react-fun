import React from 'react';
import logo1 from '../assets/Banana.svg';
import logo2 from '../assets/Shark.svg';
import logo3 from '../assets/Dog.svg';
import logo4 from '../assets/Cowmoon.svg';

class MyHeader extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <img src={logo1} className="App-logo" alt="Banana" value='banana' onClick={(e) => this.props.handleClick(e.target.alt)} />
                <img src={logo2} className="App-logo" alt="Shark" value='shark' onClick={(e) => this.props.handleClick(e.target.alt)} />
                <img src={logo3} className="App-logo" alt="Dog" value='dog' onClick={(e) => this.props.handleClick(e.target.alt)} />
                <img src={logo4} className="App-logo" alt="Cowmoon" value='cowmoon' onClick={(e) => this.props.handleClick(e.target.alt)} />
            </div>
        )
    }
}

export default MyHeader;