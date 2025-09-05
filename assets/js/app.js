/*
Copyright (c) 2025 Tobias Klumpp (https://www.toklumpp.net/)
SPDX-License-Identifier: MIT
*/
"use strict";
import { useReducer } from "https://esm.sh/react"
import React from "https://esm.sh/react"
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(React.createElement);

const initialColor = {
    hue: 0,
    chroma: 0,
    lightness: 0,
    saturation: 0,
    value: 0,
    blackness: 0,
    whiteness: 0
};

const colorReducer = (currentColor, newColorProperty) => {
    let hue = currentColor.hue;
    let chroma = currentColor.chroma;
    let lightness = currentColor.lightness;
    let saturation = currentColor.saturation;
    let value = currentColor.value;
    let blackness = currentColor.blackness;
    let whiteness = currentColor.whiteness;
    switch (newColorProperty.key) {
        case "hue":
            hue = newColorProperty.value;
            break;
        case "chroma":
            chroma = newColorProperty.value;
            saturation = 100 * chroma / Math.sqrt(Math.pow(chroma, 2) + Math.pow(lightness, 2));
            value = Math.sqrt(Math.pow(chroma, 2) + Math.pow(lightness, 2));
            blackness = 100 - value;
            whiteness = value - saturation;
            break;
        case "lightness":
            lightness = newColorProperty.value;
            saturation = 100 * chroma / Math.sqrt(Math.pow(chroma, 2) + Math.pow(lightness, 2));
            value = Math.sqrt(Math.pow(chroma, 2) + Math.pow(lightness, 2));
            blackness = 100 - value;
            whiteness = value - saturation;
            break;
        case "saturation":
            saturation = newColorProperty.value;
            break;
        case "value":
            value = newColorProperty.value;
            break;
        case "blackness":
            value = newColorProperty.blackness;
            break;
        case "whiteness":
            value = newColorProperty.whiteness;
            break;
    }
    return { hue: hue, chroma: chroma, lightness: lightness, saturation: saturation, value: value, whiteness: whiteness, blackness: blackness };
};

export function App() {
    const [color, changeColorProperty] = useReducer(colorReducer, initialColor);
    return html`
        <form>
            <h1>Color Scheme Generator</h1>
            <label>
                Hue:
                <input type="number" value=${color.hue} onChange=${(e) => changeColorProperty({ key: "hue", value: e.target.value })} />
                <p>
                    Hue: ${color.hue}
                </p>
            </label>
            <label>
                Chroma:
                <input type="number" value=${color.chroma} onChange=${(e) => changeColorProperty({ key: "chroma", value: e.target.value })} />
                <p>
                    Chroma: ${color.chroma}
                </p>
            </label>
            <label>
                lightness:
                <input type="number" value=${color.lightness} onChange=${(e) => changeColorProperty({ key: "lightness", value: e.target.value })} />
                <p>
                    lightness: ${color.lightness}
                </p>
            </label>
            <label>
                Saturation:
                <input type="number" value=${color.saturation} onChange=${(e) => changeColorProperty({ key: "saturation", value: e.target.value })} />
                <p>
                    Saturation: ${color.saturation}
                </p>
            </label>
            <label>
                Value:
                <input type="number" value=${color.value} onChange=${(e) => changeColorProperty({ key: "value", value: e.target.value })} />
                <p>
                    Value: ${color.value}
                </p>
            </label>
            <label>
                Whiteness:
                <input type="number" value=${color.whiteness} onChange=${(e) => changeColorProperty({ key: "whiteness", value: e.target.value })} />
                <p>
                    Whiteness: ${color.whiteness}
                </p>
            </label>
            <label>
                Blackness:
                <input type="number" value=${color.blackness} onChange=${(e) => changeColorProperty({ key: "blackness", value: e.target.value })} />
                <p>
                    Blackness: ${color.blackness}
                </p>
            </label>
        </form>
    `;
}