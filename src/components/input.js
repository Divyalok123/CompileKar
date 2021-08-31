import React, {Component} from 'react';
import '../common/inputStyle.css'

class Input extends Component {
    constructor(props) {
        super(props);
        this.inputref = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.inputref.current.value);
    }

    render() {
        return (
            <>
                <div className="input-background">
                    Input
                </div>
                <textarea type="text" className="input-text" ref={this.inputref}></textarea>
                <button onClick={this.handleClick} className="run-button">Run</button>
            </>
        )
    }
}

export default Input;