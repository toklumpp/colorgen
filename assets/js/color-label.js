/*
Copyright (c) 2025 Tobias Klumpp (https://www.toklumpp.net/)
SPDX-License-Identifier: MIT
*/
"use strict";

import { html } from "./htm.js";

export function ColorLabel(props) {
    return html`
        <label>
            ${props.name}:
            <input type="number" value=${props.value} onChange=${(e) => props.changeColorProperty({ key: props.keyName, value: e.target.value })} />
            <p>
                ${props.name}: ${props.value}
            </p>
        </label>
    `;
}