/*
Copyright(c) 2025 Tobias Klumpp(https://www.toklumpp.net/)
SPDX - License - Identifier: MIT
*/
"use strict";
import React from "https://esm.sh/react"

export let createElement = React.createElement;

export function createH1(props, ...children) {
    return createElement("h1", props, children);
};

export function createForm(props, ...children) {
    return createElement("form", props, children);
};

export function createLabel(props, ...children) {
    return createElement("label", props, children);
};

export function createInput(props) {
    return createElement("input", props);
};

export function createP(props, ...children) {
    return createElement("p", props, children);
};
