import { Observable,  from, of, interval } from 'rxjs';
import { delay, concatMap, mergeMap } from 'rxjs/operators';

import * as React from 'react';

export class ConcatMapSample extends React.Component {
    componentDidMount() {
        console.clear();
        this.init();
    }
    private concatSub;
    private mergeSub;

    init() {

        const source = of(1,2,3);
        const concatExample = source.pipe(
            concatMap(val => of(val*10,val*11,val*12).pipe(delay(1000)))
        );
        this.concatSub = concatExample.subscribe(val => console.log("concatMap: " + val));
        // outputs 10,11,12
        // 20,22,24
        // 30,33,36

        const mergeExample = source.pipe(
            mergeMap(val => of(val*10,val*11,val*12).pipe(delay(1000)))
        );
        this.mergeSub = mergeExample.subscribe(val => console.log("mergeMap: " + val));


        

    }

    render() {
        return (
            <div>
                <h1>ConcatMap and MergeMap</h1>
                <p>
                    ConcatMap: Projects each source value to an Observable which is merged in the output Observable,
                    in a serialized fashion waiting for each one to complete before merging the next. <em>Map values to inner observable, subscribe and emit in order.</em>
                </p>
                <p>
                    MergeMap:  Projects each source value to an Observable which is merged in the output Observable.
                </p>
                <p>
                    The difference between the two being that concat will emit after each source has been merged into the output,
                    whereas merge will simply emit straight away. 
                </p>
                <p>
                    In the examples, which are identical except for the operator, each source value is merged into 
                    3 output values by multiplying by 10,11,12, then piped to a 1000ms interval.
                </p>
                <p>
                    With concat, we see this being into 3 chunks of 3 interval outputs, whereas with merge we just have all 9 at once.
                    Merge runs in parallel, concat in serial chunks.
                    Concats each observable at the end of each stream, Merge does it all at once.
                </p>
                <p>
                    Mergemap is the same as flatMap (alias/synonymous), which has been deprecated. 
                </p>
            </div>
        );
    }
}