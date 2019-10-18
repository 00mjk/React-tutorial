import React, {Component} from 'react';
import './Header.css';
import Day from "../Day";

class Header extends Component {

    render() {

        const firstName = 'Tomasz';
        const lastName = 'Gogolewski';

        return (
            <div className={"header-container"}>
                <div className={"time-container"}>
                    <Day/>
                </div>

                <header>
                    <p style={{color: 'white'}} className={"header-title"}>To-Do List implemented in React by {firstName + ' ' + lastName}</p>
                </header>
            </div>
        );
    }
}

export default Header;
