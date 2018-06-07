import * as React from "react";
import { timer, Observable, Subscription } from "rxjs";
import { tap, shareReplay, share, publishReplay, refCount } from "rxjs/operators";

export class ShareReplaySample extends React.Component
{
    private example : Observable<number>;    

    private subscriptions : Subscription[] = [];

    componentDidMount() {
        console.clear(); this.init();
    }

    componentWillUnmount(){
        this.subscriptions.forEach(t => t.unsubscribe());
        this.example = null;
    }

    init() {
        const source = timer(0, 1000);
        
        this.example = source.pipe(        
            tap(t => console.log(`TAPPER: ${t}`)),
            //shareReplay(5)
            publishReplay(5),
            refCount()
        );

        this.subscriptions.push(this.example.subscribe(val => console.log(`DEFAULT SUB: ${val}`)));
    }

    subscribeAgain() {
        this.subscriptions.push(this.example.subscribe(val => console.log(`SUB: ${val}`)));
    }

    render() {
        return (
            <div>
               <h1>ShareReplay</h1>
                <p>Shares observable output among many subscribers, with the ability to replay the past.
                     In this example, we have one observable with a tap to write each value to the console.</p>
                <p>There is a default subscriber, who is created when the page loads. By clicking the 
                    'Subscribe again' button, you will observe the last 5 values (pipe(shareReplay(5)) being written to the console, 
                    before the new subscriber resumes subscribing in sync with the existing subscriber. </p>
                <p>You may find that upon navigating to another sample your console continues to fill up with messages from shareReplay.
                    This is because of <a href="https://github.com/ReactiveX/rxjs/issues/3336">this issue</a></p>
                <p>This example currently uses the suggested workaround: publishReplay(5).refCount()</p>
                <button onClick={() => this.subscribeAgain()}>Subscribe again!</button>
            </div>
        );
    }

}