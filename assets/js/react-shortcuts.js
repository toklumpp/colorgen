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