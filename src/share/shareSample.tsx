import * as React from "react";
import { timer, Subscription } from "rxjs";
import { share, tap } from "rxjs/operators";

export class ShareSample extends React.Component {
    private subscriptions : Subscription[];

    componentDidMount() {
        this.init(); console.clear()
    }

    componentWillUnmount(){
        this.subscriptions.forEach(t => t.unsubscribe());
    }

    init() {
        const source = timer(1000, 2000);
        const source2 = timer(0, 2000);

        //output: 11,12,13,14,15
        const example = source.pipe(
            tap(t => console.log(`SHARE-TAP: ${t}`)),
            share()
        );

        const exampleNoShare = source2.pipe(
            tap(t => console.log(`NOSHARE-TAP: ${t}`))
        );

        this.subscriptions.push(example.subscribe(val => console.log(`SHARE-SUB1: ${val}`)));
        this.subscriptions.push(example.subscribe(val => console.log(`SHARE-SUB2: ${val}`)));

        this.subscriptions.push(exampleNoShare.subscribe(val => console.log(`NOSHARE-SUB1: ${val}`)));
        this.subscriptions.push(exampleNoShare.subscribe(val => console.log(`NOSHARE-SUB2: ${val}`)));
    }

    render() {
        return (
            <div>
                <h1>Share</h1>
                <p>Shares observable output among many subscribers. In this example, we have two observables with a tap to write each value to the console.</p>
                <p>We also have two subscribers, for a total of 4 subscribers. In the console log, you will observe that the NOSHARE output results 
                    in 2 TAP outputs (for a total of 4), whereas the SHARE output only results in one TAP output, for a total of 3 lines.</p>

            </div>
        );
    }

}