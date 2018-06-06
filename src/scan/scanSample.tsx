import * as React from "react";
import { interval } from "rxjs";
import { scan } from "rxjs/operators";

export class ScanSample extends React.Component
{
    componentDidMount() {
        this.init();
    }

    init() {
        const source = interval(1000);

        const example = source.pipe(            
            scan((acc, x) => acc+x)
        );

        //output: 11,12,13,14,15
        const subscribe = example.subscribe(val => console.log(val));
    }

    render() {
        return (
            <div>
                <h1>Reduce</h1>
                <p>Similar to Linq's Aggregate, but different in that it returns every intermediate step of the aggregation.</p>
                <p>Scan operates on an Observable, takes an accumulator function F(acc, val) and emits the value of acc after each step</p>
                <p>The observable need not complete like reduce.</p>                
            </div>
        );
    }

}