// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from "./components/List";

/**
 * Single JSX element must be returned.
 * ReactDOM.render(what to render, where to render(path to our main div in public-index.html).
 */
ReactDOM.render(<List/>, document.getElementById('root'));

