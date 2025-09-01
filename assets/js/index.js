/*
Copyright(c) 2025 Tobias Klumpp (https://www.toklumpp.net/)
SPDX - License - Identifier: MIT
*/
"use strict";
import React from "https://esm.sh/react"
import ReactDOM from "https://esm.sh/react-dom/client"
import { createElement, createH1 } from "./react-shortcuts.js";
import { App } from "./app.js";

ReactDOM.createRoot(document.getElementById('color-scheme-generator')).render(
    createElement(App, {})
);