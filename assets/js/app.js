/*
Copyright (c) 2025 Tobias Klumpp (https://www.toklumpp.net/)
SPDX-License-Identifier: MIT
*/
"use strict";
import { useState } from "https://esm.sh/react"
import { createH1, createForm, createInput, createLabel, createP } from "./react-shortcuts.js";

export function App() {
    const [hue, setHue] = useState(0);
    const [chroma, setChroma] = useState(0);
    const [luminance, setLuminance] = useState(0);

    return (
        createForm({},
            createH1({},
                "Color Scheme Generator"
            ),
            createLabel({},
                "Hue: ",
                createInput({
                    type: "number", value: hue, onChange: (e) => setHue(e.target.value)
                }),
                createP({},
                    "Hue: ",
                    hue
                )
            ),
            createLabel({},
                "Chroma: ",
                createInput({
                    type: "number", value: chroma, onChange: (e) => setChroma(e.target.value)
                }),
                createP({},
                    "Chroma: ",
                    chroma
                )
            ),
            createLabel({},
                "Luminance: ",
                createInput({
                    type: "number", value: luminance, onChange: (e) => setLuminance(e.target.value)
                }),
                createP({},
                    "Luminance: ",
                    luminance
                )
            )
        )
    );
}