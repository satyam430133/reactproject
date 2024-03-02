import React from "react";
import ReactDOM from 'react-dom'; // Corrected import statement
import App from './App';
import { store } from "./pages/Component/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
); 
