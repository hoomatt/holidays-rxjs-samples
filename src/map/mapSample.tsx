import { Observable, from, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import * as React from 'react';

export class MapSample extends React.Component {
    private subscribe;

    componentDidMount() {
        this.init(); console.clear()
    }

    componentWillUnmount(){
        this.subscribe.unsubscribe();
    }

    init() {
        const source = interval(1000);
        //add 10 to each value
        const example = source.pipe(map(val => val * 10));
        //output: 11,12,13,14,15
        this.subscribe = example.subscribe(val => console.log(val));
    }

    render() {
        return (
            <div>
                <h1> Map </h1>
                <p>Equivalent to the Linq .Select method, this function takes a function F, operates on Obs&lt;T&gt; and returns Obs&lt;F(T)&gt;</p>
            </div>
        );
    }
}