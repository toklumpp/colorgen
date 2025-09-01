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
};

const colorReducer = (currentColor, newColorProperty) => {
    let hue = currentColor.hue;
    let chroma = currentColor.chroma;
    let luminance = currentColor.luminance;
    let saturation = currentColor.saturation;
    switch (newColorProperty.key) {
        case "hue":
            hue = newColorProperty.value;
            break;
        case "chroma":
            chroma = newColorProperty.value;
            saturation = 50 * chroma / luminance;
            break;
        case "luminance":
            luminance = newColorProperty.value;
            saturation = 50 * chroma / luminance;
            break;
        case "saturation":
            saturation = newColorProperty.value;
            chroma = saturation * luminance / 100;
            break;
    }
    return { hue: hue, chroma: chroma, luminance: luminance, saturation: saturation };
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
            )
        )
    );
}