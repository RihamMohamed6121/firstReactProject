import  ReactDOM  from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './app';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.querySelector("#root"));
