import { Observable, from, interval, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as React from 'react';

export class OfSample extends React.Component {
    componentDidMount() {
        this.init();
    }

    init() {
        const source = of(1, { type: "Cat" }, (x : number) => x+1, );
        
        const example = source;
        
        //output: 11,12,13,14,15
        const subscribe = example.subscribe(val => console.log(val));
    }

    render() {
        return (
            <div>
                <h1> Of </h1>
                <p>Generates an observable from a static source</p>
            </div>
        );
    }
}