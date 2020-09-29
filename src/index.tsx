import React from "react";
import { render } from "react-dom";

import { App } from "./components/app";

import "./styles/index.scss";


render(<App />, document.body.appendChild(document.createElement(`div`)));
