import * as React from "react";
import { interval } from "rxjs";
import { scan, tap } from "rxjs/operators";

export class ScanSample extends React.Component
{
    private subscribe;

    componentDidMount() {
        console.clear(); this.init();
    }

    componentWillUnmount(){
        this.subscribe.unsubscribe();
    }

    init() {
        const source = interval(1000);

        const example = source.pipe(       
            tap(x => console.log(`interval: ${x}`)),     
            scan((acc, x) => acc+x)
        );

        //output: 0, 1, 3, 6, 10, 15, 21, 28, 36, 45
        this.subscribe = example.subscribe(val => console.log(`sum: ${val}`));
    }

    render() {
        return (
            <div>
                <h1>Scan</h1>
                <p>Similar to Linq's Aggregate, but different in that it returns every intermediate step of the aggregation.</p>
                <p>Scan operates on an Observable, takes an accumulator function F(acc, val) and emits the value of acc after each step</p>
                <p>The observable need not complete like reduce.</p>                
            </div>
        );
    }

}