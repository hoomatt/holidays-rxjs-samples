import * as React from "react";

export class PseudoConsole extends React.Component
{
    textBox: HTMLTextAreaElement;

    state = { 
        output: ""
    };

    log(obj: any)
    {
        this.setState({ output: `${this.state.output}\r\n${obj}`});
        this.textBox.scrollTo(0, this.textBox.scrollHeight);
    }

    render()
    {
        return ( 
            <textarea value={this.state.output} ref={x => this.textBox = x} cols={80} rows={20}>                
            </textarea>
        )
    }

}