import React, { Component } from "react";
import AceEditor from "react-ace";
import Beautify from 'ace-builds/src-noconflict/ext-beautify';
import "../common/acebuilds.js";
import "../common/editor.css";

class Editor extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.props.changeCode(value);
    }

    render() {

        return (
            <AceEditor
                mode={this.props.mode}
                theme={this.props.theme}
                className="ace-editor"
                onChange={this.onChange}
                name="ace-editor"
                id="ace-editor"
                commands={Beautify.commands}
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    highlightActiveLine: true,
                    showGutter: true,
                    autoScrollEditorIntoView: true,
                    showPrintMargin: false,
                    fontSize: "15px"
                }}
            ></AceEditor>
        )
    }
}

export default Editor;