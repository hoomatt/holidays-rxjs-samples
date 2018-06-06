import * as React from "react";
import { timer, Observable } from "rxjs";
import { tap, shareReplay, share } from "rxjs/operators";

export class ShareReplaySample extends React.Component
{
    private example : Observable<number>;    

    componentDidMount() {
        this.init();
    }

    init() {
        const source = timer(0, 1000);
        
        this.example = source.pipe(        
            tap(t => console.log(`TAPPER: ${t}`)),
            shareReplay(5)
        );

        const subscribe1 = this.example.subscribe(val => console.log(`DEFAULT SUB: ${val}`));        
    }

    subcribeAgain() {
        const subscribe2 = this.example.subscribe(val => console.log(`SUB: ${val}`));        
    }

    render() {
        return (
            <div>
               <h1>ShareReplay</h1>
                <p>Shares observable output among many subscribers, with the ability to replay the past.
                     In this example, we have one observable with a tap to write each value to the console.</p>
                <p>There is a default subscriber, who is created when the page loads. But clicking the 
                    'Subscribe again' button, you will observe the last 5 values (pipe(shareReplay(5)) being written to the console, 
                    before the new subscriber resumes subscribing in sync with the existing subscriber. </p>
                <button onClick={() => this.subcribeAgain()}>Subscribe again!</button>
            </div>
        );
    }

}