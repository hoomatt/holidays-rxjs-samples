import { Observable, from, of, fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap, map } from 'rxjs/operators';
import * as React from 'react';

export class SwitchMapSample extends React.Component {
    private _element: HTMLElement;
    private _mmButton: HTMLButtonElement;

    componentDidMount() {
        this.init();
    }

    init() {
        this._mmButton = document.querySelector("button#mmButton");
        const click$ = fromEvent(this._mmButton, 'click');
        const interval$ = interval(1000);

        // switchMap
        const example = click$.pipe(
            switchMap((val, index) => interval$.pipe(
                map(t => `${val.timeStamp} ${t}`)
            ))
        )
                
        const subscribe = example.subscribe(val => console.log(val));
    }

    render() {
        return (
            <div>
                <h1>SwitchMap</h1>
                <p>
                    switchMap merges observables
                </p>
                <button id="mmButton">Click me</button>
            </div>
        );
    }
}