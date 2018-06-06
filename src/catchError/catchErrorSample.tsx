import { Observable, from, interval, of, throwError, concat } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import * as React from 'react';

export class CatchErrorSample extends React.Component {
    componentDidMount() {
        this.init();
    }

    init() {
        const source = of(1, 2, 3, (() => { throw new Error("Broken") })());
        
        // source.pipe(
        //     tap(x => console.log(x))
        // );

        const example = source.pipe(
            
            catchError(err => of(`I caught: ${err}`))
        );

        

        example.subscribe(t => console.log(t));
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