import * as React from "react";
import { interval, combineLatest } from "rxjs";

export class CombineLatestSample extends React.Component
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
        

        const example = combineLatest(
            source1,
            source2,
            source3,
            source4,
            (s1, s2, s3, s4) => `s1: ${s1} s2: ${s2} s3: ${s3} s4: ${s4}`
        );
        
        //output: 11,12,13,14,15
        this.subscribe = example.subscribe(val => console.log(val));
    }

    render() {
        return (
            <div>
                <h1>CombineLatest </h1>                
                <p>Combines a number of observables into one, using the latest value from each</p>
                <p>Does not produce output until all observables have at least one value</p>
            </div>
        );
    }

}