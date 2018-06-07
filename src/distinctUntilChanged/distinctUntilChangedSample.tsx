import * as React from "react";
import { of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

export class DistinctUntilChangedSample extends React.Component {
    componentDidMount() {
        this.init();
    }

    init() {
        const source = of(1, 1, 1, 2, 3, 2, 2, 3, 3, 1, 1, 1, 3, 2, 1, 1);

        const example = source.pipe(
            distinctUntilChanged()
        );

        //output: 1, 2, 3, 2, 3, 1, 3, 2, 1
        const subscribe = example.subscribe(val => console.log(val));
    }

    render() {
        return (
            <div>
                <h1>distinctUntilChanged</h1>
                <p>Does what it says on the tin. Only emit values if they are different from the previous value.</p>
            </div>
        );
    }


}