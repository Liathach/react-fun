import React from 'react';
import logo1 from '../assets/Banana.svg';
import logo2 from '../assets/Shark.svg';
import logo3 from '../assets/Dog.svg';
import logo4 from '../assets/Cowmoon.svg';

class MyHeader extends React.Component {

    render() {
        return (
            <div onClick={(e) => this.props.handleClick(e.target.getAttribute("value"))}>
                <img src={logo1} className="App-logo" alt="Banana" value='Tictactoe'/>
                <img src={logo2} className="App-logo" alt="Shark" value='Banking App'/>
                <img src={logo3} className="App-logo" alt="Dog" value='Cities and Communities'/>
                <img src={logo4} className="App-logo" alt="Cowmoon" value='cowmoon'/>
            </div>
        )
    }
}

export default MyHeader;