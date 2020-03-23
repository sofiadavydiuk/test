import React, { useState } from 'react';
import { Confirm } from "semantic-ui-react";

export default function Example(){
    const [count, setCount] = useState(0);
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                ClickMe
            </button>
            </div>
            <br/>
            <div>
            Confirm
            <button onClick={() => setOpen(true)}>
                ClickMe for Confirm
            </button>
            <Confirm
                open={open}
            />
            </div>
            <br/>

            <div>
                <button onClick={() => alert(10)}>
                    ClickMe for Alert Example
                </button>
            </div>
            <br/>
            <div>
                <button onClick={() => prompt("Hej, how are you today,are you worry ? Or Happy")}>
                    ClickMe for Propmt Example
                </button>
            </div>
        </div>
    );
}