import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css'
import App from './App'


//old version
// ReactDom.render(<App/>,document.getElementById('root'))


//new version:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);