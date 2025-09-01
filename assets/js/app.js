/*
Copyright (c) 2025 Tobias Klumpp (https://www.toklumpp.net/)
SPDX-License-Identifier: MIT
*/
"use strict";
import { useState } from "https://esm.sh/react"
import { createH1, createForm, createInput, createLabel, createP } from "./react-shortcuts.js";

export function App() {
    const [hue, setHue] = useState("");

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

            )
        )
    );
}