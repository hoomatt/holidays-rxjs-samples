import { Observable, from, of, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';


import * as React from 'react';

export class StartWithSample extends React.Component {
    componentDidMount() {
        console.clear();
        this.init();
    }

    init() {
        //will emit 1,2,3;
        const source = of(1,2,3);
        //add 10 to each value
        const example = source.pipe(startWith(42,43));
        //output: 42,1,2,3
        const subscribe = example.subscribe(val => console.log(val));
    }

    render() {
        return (
            <div>
                <h1>StartWith </h1>
                <p>Prepends an observable with a given value. Could be useful to fire up an observable chain with initialisation data?</p>
                <p>This is shorthand for using concat.</p>
            </div>
        );
    }
}