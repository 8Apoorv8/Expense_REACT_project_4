import React from 'react';

import ReactDom from 'react-dom';
import {createRoot} from 'react-dom/client'

import './index.css';
import App from './App';

ReactDom.render(<App></App>,document.getElementById("root"));

// const container=document.getElementById("root");

// const root=createRoot(container);
// root.render(<App tab="home" /> )