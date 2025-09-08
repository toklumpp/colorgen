/*
Copyright (c) 2025 Tobias Klumpp (https://www.toklumpp.net/)
SPDX-License-Identifier: MIT
*/
"use strict";
import { useReducer } from "https://esm.sh/react"
import { html } from "./htm.js";
import { ColorLabel } from "./color-label.js";

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
            saturation = 100 * chroma / lightness;
            value = Math.sqrt(Math.pow(chroma, 2) + Math.pow(lightness, 2));
            shade = 100 - value;
            tint = value - saturation;
            break;
        case "lightness":
            lightness = newColorProperty.value;
            saturation = 100 * chroma / lightness;
            value = Math.sqrt(Math.pow(chroma, 2) + Math.pow(lightness, 2));
            shade = 100 - value;
            tint = value - saturation;
            break;
        case "saturation":
            saturation = newColorProperty.value;
            chroma = saturation * lightness / 100;
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
            <${ColorLabel} keyName="hue" value=${color.hue} name="Hue" changeColorProperty=${changeColorProperty}><//>
            <${ColorLabel} keyName="chroma" value=${color.chroma} name="Chroma" changeColorProperty=${changeColorProperty}><//>
            <${ColorLabel} keyName="lightness" value=${color.lightness} name="Lightness" changeColorProperty=${changeColorProperty}><//> 
            <${ColorLabel} keyName="saturation" value=${color.saturation} name="Saturation" changeColorProperty=${changeColorProperty}><//> 
        </form>
    `;
}