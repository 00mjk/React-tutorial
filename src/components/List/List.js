import React, {Component} from 'react';
import './List.css';
import Footer from "../Footer";
import Header from "../Header";
import Todo from "../Todo";

class List extends Component {

    render() {
        return (
            <div>
                <Header/>

                <Todo title="First Checkbox"/>
                <Todo title="Second Checkbox"/>
                <Todo title="Third Checkbox"/>
                <Todo title="Fourth Checkbox"/>

                <Footer/>
            </div>
        );
    }
}

export default List;
