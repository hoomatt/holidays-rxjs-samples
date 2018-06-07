import { Observable, from, interval } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as React from 'react';

export class FilterSample extends React.Component {
    private _element: HTMLElement;

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
        const example = source.pipe
            (filter(val => val % 2 == 0)
        );
        //output: 2,4,6
        this.subscribe = example.subscribe(val => console.log(val));
    }

    render() {
        return (
            <div>
                <h1>Filter</h1>
                <p>Equivalent to the Linq .Where method, this function takes a function F, operates on Obs&lt;T&gt; and returns Obs&lt;T&gt; where F(T) is true</p>
            </div>
        );
    }
}