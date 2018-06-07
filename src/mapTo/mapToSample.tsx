import { Observable, from, of, interval } from 'rxjs';
import { map,mapTo } from 'rxjs/operators';
import * as React from 'react';

export class MapToSample extends React.Component {
    componentDidMount() {
        console.clear();
        this.init();
    }

    init() {
        const source = of(1,2,3,4,5);
        //add 10 to each value
        const example = source.pipe(mapTo(42));
        //output: 42,42,42,42,42
        const subscribe = example.subscribe(val => console.log(val));
    }

    render() {
        return (
            <div>
                <h1> MapTo </h1>
                <p>
                    Ignores the source's value, emitting our own instead. When we care more about that something *was* emitted than *what*.
                </p>
                <p>
                    mapTo(42) is essentially an overload of map(x=>42))
                </p>
            </div>
        );
    }
}