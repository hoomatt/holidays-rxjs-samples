import * as React from "react";
import { interval, zip } from "rxjs";
import { tap } from "rxjs/operators";

export class ZipSample extends React.Component
{
    private subscribe;

    componentDidMount() {
        console.clear(); this.init();
    }

    componentWillUnmount(){
        this.subscribe.unsubscribe();
    }

    init() {
        const source1 = interval(1000);
        const source2 = interval(2100);
        const source3 = interval(3200);
        const source4 = interval(4300);

        const example = zip(
            source1.pipe(tap(v => console.log(`s1: ${v}`))),
            source2.pipe(tap(v => console.log(`s2: ${v}`))),
            source3.pipe(tap(v => console.log(`s3: ${v}`))),
            source4.pipe(tap(v => console.log(`s4: ${v}`))),
            (s1, s2, s3, s4) => `ZIP: s1: ${s1} s2: ${s2} s3: ${s3} s4: ${s4}`
        );
        
        //output: 11,12,13,14,15
        this.subscribe = example.subscribe(val => console.log(val));
    }

    render() {
        return (
            <div>
                <h1>Zip</h1>                
                <p>Combines a number of observables into one, keeping the observables inline with an index. In this example even though S1 races ahead of values, the output from zip is inline with all other observables.</p>
                <p>This differs from combineLatest which uses the latest value of each observable.</p>
                <p>Does not produce output until all observables have at least one value</p>
            </div>
        );
    }

}