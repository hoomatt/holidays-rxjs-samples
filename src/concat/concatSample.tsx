import { Observable,  from, of, interval } from 'rxjs';
import { map,concat } from 'rxjs/operators';

import * as React from 'react';

export class ConcatSample extends React.Component {
    componentDidMount() {
        console.clear();
        this.init();
    }

    init() {
        const first = of(10,20,40);
        const last = of(21,22,23);

        // concat the two
        const example = first.pipe(concat(last));

        //output: 10,20,40,21,22,23
        const subscribe = example.subscribe(val => console.log(val));
    }

    render() {
        return (
            <div>
                <h1>Concat</h1>
                <p>Creates a new observable which appends a 2nd observable to the end of the 1st</p>
                <p>startWith is synonumous with using a concat on the first element.</p>
            </div>
        );
    }
}