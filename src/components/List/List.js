import React, {Component} from 'react';
import './List.css';
import Footer from "../Footer";
import Header from "../Header";

class List extends Component {

    render() {
        return (
            <div>
                <Header/>

                <input type="checkbox"/>
                <p>Checkbox 1</p>

                <input type="checkbox"/>
                <p>Checkbox 2</p>

                <input type="checkbox"/>
                <p>Checkbox 3</p>

                <input type="checkbox"/>
                <p>Checkbox 4</p>

                <Footer/>
            </div>
        );
    }
}

export default List;
