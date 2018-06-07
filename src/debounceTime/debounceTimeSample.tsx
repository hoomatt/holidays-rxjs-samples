import * as React from "react";
import { timer, fromEvent } from "rxjs";
import { debounceTime, take, map } from "rxjs/operators";

export class DebounceTimeSample extends React.Component {
    inputBox: HTMLInputElement;

    componentDidMount() {
        this.init();
    }

    init() {
        const source = fromEvent(this.inputBox, 'keyup');
        
        const example = source.pipe(            
            map(t => (t.target as HTMLInputElement).value),
            debounceTime(2000),
        );

        const subscribe = example.subscribe(val => console.log(`Debounced: ${val}`));
    }

    render() {
        return (
            <div>
                <h1>debounceTime</h1>
                <p>Operating on an observable and taking a parameter <i>delay</i> in milliseconds, debounce pauses Observable emissions until <i>delay</i> ms have passed, only emitting the last value.</p>
                <p>In this example, the text entered in the input below will be logged to the console after 2000ms</p>
                <input ref={x => this.inputBox = x} placeholder="Enter some text" />
            </div>
        );
    }


}