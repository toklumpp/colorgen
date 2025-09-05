/*
Copyright (c) 2025 Tobias Klumpp (https://www.toklumpp.net/)
SPDX-License-Identifier: MIT
*/
"use strict";
import React from "https://esm.sh/react"
import ReactDOM from "https://esm.sh/react-dom/client"
import htm from 'https://unpkg.com/htm?module'
import { App } from "./app.js";


const html = htm.bind(React.createElement);

ReactDOM.createRoot(document.getElementById('color-scheme-generator')).render(
    html`<${App}><//>`
);