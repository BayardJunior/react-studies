import React, {Component} from "react";
import Intro from "../Intro"
import "./App.css";

class App extends Component {

  state = {
    series:[]
  }

render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tv Series List</h1>
        </header>
        <Intro message= "Here you can find all of your most favorit series"/>
        the lengh of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
