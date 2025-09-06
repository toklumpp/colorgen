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
    shade: 0,
    tint: 0
};

const colorReducer = (currentColor, newColorProperty) => {
    let hue = currentColor.hue;
    let chroma = currentColor.chroma;
    let lightness = currentColor.lightness;
    let saturation = currentColor.saturation;
    let value = currentColor.value;
    let shade = currentColor.shade;
    let tint = currentColor.tint;
    switch (newColorProperty.key) {
        case "hue":
            hue = newColorProperty.value;
            break;
        case "chroma":
            chroma = newColorProperty.value;
            saturation = 100 * chroma / Math.sqrt(Math.pow(chroma, 2) + Math.pow(lightness, 2));
            value = Math.sqrt(Math.pow(chroma, 2) + Math.pow(lightness, 2));
            shade = 100 - value;
            tint = value - saturation;
            break;
        case "lightness":
            lightness = newColorProperty.value;
            saturation = 100 * chroma / Math.sqrt(Math.pow(chroma, 2) + Math.pow(lightness, 2));
            value = Math.sqrt(Math.pow(chroma, 2) + Math.pow(lightness, 2));
            shade = 100 - value;
            tint = value - saturation;
            break;
        case "saturation":
            saturation = newColorProperty.value;
            break;
        case "value":
            value = newColorProperty.value;
            break;
        case "shade":
            value = newColorProperty.shade;
            break;
        case "tint":
            value = newColorProperty.tint;
            break;
    }
    return { hue: hue, chroma: chroma, lightness: lightness, saturation: saturation, value: value, tint: tint, shade: shade };
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
                Lightness:
                <input type="number" value=${color.lightness} onChange=${(e) => changeColorProperty({ key: "lightness", value: e.target.value })} />
                <p>
                    Lightness: ${color.lightness}
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
                Tint:
                <input type="number" value=${color.tint} onChange=${(e) => changeColorProperty({ key: "tint", value: e.target.value })} />
                <p>
                    Tint: ${color.tint}
                </p>
            </label>
            <label>
                Shade:
                <input type="number" value=${color.shade} onChange=${(e) => changeColorProperty({ key: "shade", value: e.target.value })} />
                <p>
                    Shade: ${color.shade}
                </p>
            </label>
        </form>
    `;
}