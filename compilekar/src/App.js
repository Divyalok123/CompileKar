import React, {Component} from "react";
import Editor from "./components/editor";
import Input from "./components/input";
import Output from "./components/output";
import DropDown from "./components/dropdown";
import { modeForLang }from "./common/mappings.js";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import './common/app.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
      code: "",
      input: "",
      mode: "c_cpp",
      theme: "monokai",
      lang: "cpp"
    }

    this.handleClick = this.handleClick.bind(this);
    this.changeCode = this.changeCode.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.changeLang = this.changeLang.bind(this);
  }

  changeLang(langval) {
    this.setState({
      lang: langval,
      mode: modeForLang[langval]
    })
  }

  changeTheme(themeval) {
    this.setState({
      theme: themeval
    })
  }

  changeCode(codeval) {
    this.setState({
      code: codeval
    })
  } 

  async handleClick(inputval) {
    try {
      await this.setState({
        input: inputval
      })

      var program = {
        script : this.state.code,
        language: this.state.lang,
        versionIndex: "0",
        stdin: this.state.input,
        clientId: process.env.REACT_APP_JDOODLE_CLIENT_ID,
        clientSecret: process.env.REACT_APP_JDOODLE_CLIENT_SECRET
      };

      this.setState({
        output: "Running..."
      })

      await axios({
                method: 'GET',
                url: '/api/compile',
                params: {
                  data: program
                }
            })
            .then((response)=> {
              // console.log({"Response": response.data.output});
              let thisoutput = response.data.output;
              thisoutput = thisoutput.split('\n').map(str => <p>{str}</p>);
              this.setState({
                output: thisoutput
              })
            })
            .catch((err) => {
              console.log("Error in axios request: ", err);
            });

    } catch(err) {
      console.log("Error occured in handleClick function in App.js: ", err);
    }
  }

  render() {
    return (
      <div className="app">
        <div className="editor-box">
          <Editor changeCode={this.changeCode} mode={this.state.mode} theme={this.state.theme} />
          <DropDown changeTheme={this.changeTheme} changeLang={this.changeLang} />
        </div>
        <div className="input-output">
          <div className="input-box">
            <Input handleClick={this.handleClick} />
          </div>
          <div className="output-box">
            <Output output={this.state.output} />
          </div>
        </div>
        <div className="github-link">
          <a href="https://www.linkedin.com/in/divyalok-j-69a314134/" target="_blank" rel="noreferrer">
            <AiFillLinkedin size="42px"/>
          </a>
          <a href="https://github.com/Divyalok123/CompileKar" target="_blank" rel="noreferrer">
            <AiFillGithub size="42px"/>      
          </a>
        </div>
      </div>
    );
  }
}

export default App;
