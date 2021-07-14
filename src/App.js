import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';

import Icon from "./Components/Icon";
import './App.css';


const ttt = new Array(9).fill("");
//const ttt = ["x", "x", "x", "", "", "", "", "", ""];
class App extends React.Component{

  state = {"isCross": true, "winMsg": ""}
  playAgain = () => {
    this.setState({"isCross": true, "winMsg": ""});
    ttt.fill("");
  }
  

  findWinner = () => {
    if(ttt[0] === ttt[1] && ttt[1] === ttt[2] && ttt[0] !== "" && ttt[1] !== "" && ttt[2] !== ""){
      return 1;
    }
    else if(ttt[3] === ttt[4] && ttt[4] === ttt[5] && ttt[3] !== "" && ttt[4] !== "" && ttt[5] !== ""){
      return 1;
    }
    else if(ttt[6] === ttt[7] && ttt[7] === ttt[8] && ttt[6] !== "" && ttt[7] !== "" && ttt[8] !== ""){
      return 1;
    }
    else if(ttt[0] === ttt[3] && ttt[3] === ttt[6] && ttt[0] !== "" && ttt[3] !== "" && ttt[6] !== ""){
      return 1;
    }
    else if(ttt[1] === ttt[4] && ttt[4] === ttt[7] && ttt[1] !== "" && ttt[4] !== "" && ttt[7] !== ""){
      return 1;
    }
    else if(ttt[2] === ttt[5] && ttt[5] === ttt[8] && ttt[2] !== "" && ttt[5] !== "" && ttt[8] !== ""){
      return 1;
    }
    else if(ttt[0] === ttt[4] && ttt[4] === ttt[8] && ttt[0] !== "" && ttt[4] !== "" && ttt[8] !== ""){
      return 1;
    }
    else if(ttt[2] === ttt[4] && ttt[4] === ttt[6] && ttt[2] !== "" && ttt[4] !== "" && ttt[6] !== ""){
      return 1;
    }
    else if(ttt[0] !== "" && ttt[1] !== "" && ttt[2] !== "" && ttt[3] !== "" && ttt[4] !== "" && ttt[5] !== "" && ttt[6] !== "" && ttt[7] !== "" && ttt[8] !== ""){
      return 0;
    }
    else {
      return -1;
    }
  }

  render(){
    return(
      <div className="App">
        <Icon choice="" />
      </div>
    );
  }
}

export default App;
