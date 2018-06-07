import { Observable, from, interval, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as React from 'react';

export class OfSample extends React.Component {
    private subscribe;

    componentDidMount() {
        this.init(); console.clear()
    }

    componentWillUnmount(){
        this.subscribe.unsubscribe();
    }

    init() {
        const source = of(1, { type: "Cat" }, (x : number) => x+1, );
        
        const example = source;
        
        //output: 11,12,13,14,15
        this.subscribe = example.subscribe(val => console.log(val));
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