import { ReplaySubject } from 'rxjs';
import { } from 'rxjs/operators';
import * as React from 'react';

export class ReplaySubjectSample extends React.Component {
    inputBox: HTMLInputElement;
    private subscribe;
    private subject: ReplaySubject<string>;

    componentDidMount() {
        console.clear(); this.init();
    }

    componentWillUnmount() {
        this.unsubscribeToReplay();
    }

    init() {
        this.subject = new ReplaySubject();
    }

    subscribeToReplay() {
        this.subscribe = this.subject.subscribe(val => console.log(`Subscription log: ${val}`));
    }

    unsubscribeToReplay() {
        if (this.subscribe)
            this.subscribe.unsubscribe();
    }

    updateValue() {
        this.subject.next(this.inputBox.value);
    }


    render() {
        return (
            <div>
                <h1>ReplaySubject</h1>
                <p>Similar to a BehaviourSubject, but replays up to <em>n</em> values upon subscribing. Does not support getValue().</p>
                <p>
                    <button onClick={() => this.subscribeToReplay()}>Subscribe to these values</button>
                    <button onClick={() => this.unsubscribeToReplay()}>Unsubscribe</button>
                </p>
                <p>
                    <input ref={(x) => this.inputBox = x} /><button onClick={() => this.updateValue()}>Append new value</button>
                </p>
            </div>
        );
    }
}