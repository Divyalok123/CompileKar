import React, {Component} from 'react';
import '../common/outputStyle.css'

class Output extends Component {
    render() {
        return (
            <>
                <div className="output-background">
                    Output
                </div>
                <p>{this.props.output}</p>
            </>
        )
    }
}

export default Output;