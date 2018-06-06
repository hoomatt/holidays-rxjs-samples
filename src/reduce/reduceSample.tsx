import * as React from "react";
import { from } from "rxjs";
import { reduce, timeInterval } from "rxjs/operators";

export class ReduceSample extends React.Component
{
    componentDidMount() {
        this.init();
    }

    init() {
        const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

        const example = source.pipe(            
            reduce((acc, x) => acc+x, 0)
        );

        //output: 11,12,13,14,15
        const subscribe = example.subscribe(val => console.log(val));
    }

    render() {
        return (
            <div>
                <h1>Reduce</h1>
                <p>Similar to Linq's Aggregate, reduce operates on an Observable, takes an accumulator function F(acc, val) and emits the value of acc after the Observable completes.</p>
                <p>How does an observable complete? I'm not sure, yet</p>
            </div>
        );
    }

}