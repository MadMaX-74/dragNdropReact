import React, {Component} from 'react';
import './App.css';
import Board from './components/boards';
import Card from './components/card';

export default class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="App">
        <main className='flexbox'>
            <Board id="board-1" className="board">
              <Card id="card-1" className="card" draggable="true">
              </Card>
              <Card id="card-3" className="square" draggable="true">
              </Card>
              <Card id="card-4" className="circle" draggable="true"></Card>
            <Card id="card-5" className="threeangle" draggable="true"></Card>
            </Board>
            <Board id="board-2" className="board">
              <Card id="card-2" className="card" draggable="true">
              </Card>
            </Board>
        </main>
      </div>
    );
  }
}
