import * as React from "react";
import { from, interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

export class ReduceSample extends React.Component {
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
            take(10),
            reduce((acc, x) => acc + x, 0)
        );

        //output: 45
        this.subscribe = example.subscribe(val => console.log(`sum: ${val}`));
    }

    render() {
        return (
            <div>
                <h1>Reduce</h1>
                <p>Similar to Linq's Aggregate, reduce operates on an Observable, takes an accumulator function F(acc, val) and emits the value of acc after the Observable completes.</p>
                <p>Since an interval does not complete on its own, in this example we have piped the Observable through a 'take' function, which will return the first 10 values and complete.</p>
                <p>After 10 seconds, the reducer will emit the sum of the first 10 values emitted by the interval</p>
            </div>
        );
    }

}