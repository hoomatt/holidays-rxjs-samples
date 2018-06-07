import { Observable, of, interval } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as React from 'react';

export class CatchErrorSample extends React.Component {    
    private subscribe;

    componentDidMount() {
        this.init(); console.clear()
    }

    componentWillUnmount(){
        this.subscribe.unsubscribe();
    }

    init() {  
        const source = interval(1000);

        const example = source.pipe(              
            map((val, index) => {
                if (val == 10)
                    throw new Error("This is a disaster!");                    
                else 
                    return val;
            }),
            catchError(err => of(`Error:: ${err}`))
        );

        //output: 'I caught: This is a disaster'
        this.subscribe = example.subscribe(val => console.log(val));
    }

    render() {
        return (
            <div>
                <h1>catchError</h1>
                <p>Handles errors thrown from an observable. In this example, once the interval reaches 10, we throw an error. catchError catches the error and allows you to gracefully handle failure</p>                
            </div>
        );
    }
}