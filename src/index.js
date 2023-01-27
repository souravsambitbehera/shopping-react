import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LoginComponent} from "./components/login/login.componet";
import { NetflixIndex } from './netflix/netflix-index/netflix-index';
import { NetflixHeader } from './netflix/netflix-header/netflix-header';
import { DataBinding } from './components/data-binding/data-binding'; 
import { NasaComponent } from './components/nasa-component/nasa.component';
import {ShoppingComponent} from './components/shopping/shopping.component';
import { StyleDemoComponent } from './components/style-demo/styledemo.component';
import { EventComponent } from './components/event-component/event.component';
import { BmiCalculator } from './components/bmi-calculator/bmi.calculator.component';
import PropertiesComponent from './components/Properties_practice/properties.component';
import { LifeCycleComponet } from './components/class-components/lifecycle.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* -- <App />  */}
    {/* <LoginComponent /> */}
    {/* <DataBinding /> */}
    {/* <NetflixIndex /> */}
    {/* <NetflixHeader/> */}

    {/* <NasaComponent /> */}
    {/* <EventComponent /> */}

    {/* <ShoppingComponent/> */}
    {/* <StyleDemoComponent /> */}
    {/* <BmiCalculator /> */}
    {/* <PropertiesComponent /> */}
    <LifeCycleComponet/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
