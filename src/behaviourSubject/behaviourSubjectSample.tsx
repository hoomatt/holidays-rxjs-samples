import { BehaviorSubject } from 'rxjs';
import { } from 'rxjs/operators';
import * as React from 'react';

export class BehaviourSubjectSample extends React.Component {
    inputBox: HTMLInputElement;
    private subscribe;
    private subject: BehaviorSubject<string>;

    componentDidMount() {
        console.clear(); this.init();
    }

    componentWillUnmount() {
        this.subscribe.unsubscribe();
    }

    init() {
        this.subject = new BehaviorSubject("Initial value");

        //output: 11,12,13,14,15
        this.subscribe = this.subject.subscribe(val => console.log(`Subscription log: ${val}`));
    }

    logValue() {
        console.log(`Explicit log: ${this.subject.getValue()}`);
    }

    updateValue() {
        this.subject.next(this.inputBox.value);
    }


    render() {
        return (
            <div>
                <h1>BehaviourSubject</h1>
                <p>Broadly equivalent to a KnockoutJs Observable, a BehaviourSubject is both an Observable and an Observer. We can subscribe to it, get its current (latest) value, and provide it with a new value using the next(val) method.</p>
                <div>
                    <button onClick={() => this.logValue()}>Log current value</button>
                </div>
                <div>
                    <input ref={(x) => this.inputBox = x} /><button onClick={() => this.updateValue()}>Update value</button>
                </div>
            </div>
        );
    }
}