import { Observable, from, of, fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap, map } from 'rxjs/operators';
import * as React from 'react';

export class MergeMapSample extends React.Component {
    private _element: HTMLElement;
    private _mmButton: HTMLButtonElement;

    componentDidMount() {
        this.init();
    }

    init() {
        this._mmButton = document.querySelector("button#mmButton");
        const click$ = fromEvent(this._mmButton, 'click');
        const interval$ = interval(1000);

        // merge map        
        const example = click$.pipe(
            mergeMap((val, index) => interval$.pipe(
                map(t => `${val.timeStamp} ${t}`)
            ))
        )
        
        //output: 11,12,13,14,15
        const subscribe = example.subscribe(val => console.log(val));
    }

    render() {
        return (
            <div>
                <h1>MergeMap</h1>
                <p>
                    mergeMap merges observables
                </p>
                <button id="mmButton">Click me</button>
            </div>
        );
    }
}