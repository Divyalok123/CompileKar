import React, {Component} from 'react';
import "../common/editor.css"

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: "cpp",
            theme: "monokai"
        }

        this.handleLangChange = this.handleLangChange.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);
    }

    handleLangChange(e) {
        this.setState({lang: e.target.value});
        this.props.changeLang(e.target.value);
    }

    handleThemeChange(e) {
        this.setState({theme: e.target.value});
        this.props.changeTheme(e.target.value);
    }

    render() {
        return(
            <div className="dropdowns">
                <div className="lang-dropdown">
                    <select value={this.state.lang} onChange={this.handleLangChange}>
                        <option value="c">C</option>
                        <option value="cpp">C++</option>
                        <option value="cpp14">C++ 14</option>
                        <option value="cpp17">C++ 17</option>
                        <option value="python2">Python2</option>
                        <option value="python3">Python3</option>
                        <option value="nodejs">Javascript</option>
                        <option value="kotlin">Kotlin</option>
                        <option value="ruby">Ruby</option>
                        <option value="java">Java</option>
                    </select>
                </div>
                <div className="theme-dropdown">
                    <select value={this.state.theme} onChange={this.handleThemeChange}>
                        <option value="monokai">Monokai</option>
                        <option value="github">Github</option>
                        <option value="tomorrow">Tomorrow</option>
                        <option value="kuroir">Kuroir</option>
                        <option value="twilight">Twilight</option>
                        <option value="xcode">XCode</option>
                        <option value="textmate">Textmate</option>
                        <option value="solarized_dark">Solarized Dark</option>
                        <option value="solarized_light">Solarized Light</option>
                        <option value="terminal">Terminal</option>
                        <option value="dawn">Dawn</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default DropDown