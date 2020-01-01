import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css";
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeService } from "./services/theme";
import { OrderService } from "./services/order";
import { App } from "ui/App";

ReactDOM.render(
  <Router>
    <ThemeService>
        <OrderService>
            <App />
        </OrderService>
    </ThemeService>
  </Router>,
  document.getElementById("root")
);