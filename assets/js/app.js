/*
Copyright (c) 2025 Tobias Klumpp (https://www.toklumpp.net/)
SPDX-License-Identifier: MIT
*/
"use strict";
import { useReducer } from "https://esm.sh/react"
import { createH1, createForm, createInput, createLabel, createP } from "./react-shortcuts.js";

const initialColor = {
    hue: 0,
    chroma: 0,
    luminance: 0,
    saturation: 0,
    value: 0,
    blackness: 0,
    whiteness: 0
};

const colorReducer = (currentColor, newColorProperty) => {
    let hue = currentColor.hue;
    let chroma = currentColor.chroma;
    let luminance = currentColor.luminance;
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
            saturation = 100 * chroma / Math.sqrt(Math.pow(chroma, 2) + Math.pow(luminance, 2));
            value = Math.sqrt(Math.pow(chroma, 2) + Math.pow(luminance, 2));
            blackness = 100 - value;
            whiteness = value - saturation;
            break;
        case "luminance":
            luminance = newColorProperty.value;
            saturation = 100 * chroma / Math.sqrt(Math.pow(chroma, 2) + Math.pow(luminance, 2));
            value = Math.sqrt(Math.pow(chroma, 2) + Math.pow(luminance, 2));
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
    return { hue: hue, chroma: chroma, luminance: luminance, saturation: saturation, value: value, whiteness: whiteness, blackness: blackness };
};

export function App() {
    const [color, changeColorProperty] = useReducer(colorReducer, initialColor);
    return (
        createForm({},
            createH1({},
                "Color Scheme Generator"
            ),
            createLabel({},
                "Hue: ",
                createInput({
                    type: "number", value: color.hue, onChange: (e) => changeColorProperty({ key: "hue", value: e.target.value })
                }),
                createP({},
                    "Hue: ",
                    color.hue
                )
            ),
            createLabel({},
                "Chroma: ",
                createInput({
                    type: "number", value: color.chroma, onChange: (e) => changeColorProperty({ key: "chroma", value: e.target.value })
                }),
                createP({},
                    "Chroma: ",
                    color.chroma
                )
            ),
            createLabel({},
                "Luminance: ",
                createInput({
                    type: "number", value: color.luminance, onChange: (e) => changeColorProperty({ key: "luminance", value: e.target.value })
                }),
                createP({},
                    "Luminance: ",
                    color.luminance
                )
            ),
            createLabel({},
                "Saturation: ",
                createInput({
                    type: "number", value: color.saturation, onChange: (e) => changeColorProperty({ key: "saturation", value: e.target.value })
                }),
                createP({},
                    "Saturation: ",
                    color.saturation
                )
            ),
            createLabel({},
                "Value: ",
                createInput({
                    type: "number", value: color.value, onChange: (e) => changeColorProperty({ key: "value", value: e.target.value })
                }),
                createP({},
                    "Value: ",
                    color.value
                )
            ),
            createLabel({},
                "Whiteness: ",
                createInput({
                    type: "number", value: color.whiteness, onChange: (e) => changeColorProperty({ key: "whiteness", value: e.target.value })
                }),
                createP({},
                    "Whiteness: ",
                    color.whiteness
                )
            ),
            createLabel({},
                "Blackness: ",
                createInput({
                    type: "number", value: color.blackness, onChange: (e) => changeColorProperty({ key: "blackness", value: e.target.value })
                }),
                createP({},
                    "Blackness: ",
                    color.blackness
                )
            )
        )
    );
}