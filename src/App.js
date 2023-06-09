import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        squares: Array(9).fill(null),
        count : 0
    }
    this.winnerLine = [  //описывает выигрышные массивы 
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
  }

  isWinner = () => {  // метод описывающий победное состояние это совпадение комбинаций номеров массива по вертикали горизонтали и диагонали 
    let s = (this.state.count % 2 === 0 ) ? 'x' : '0'; // получаем элемент по которму кликнули 
    for (let i = 0; i < 8; i++) { // всего комбинаций не более 8
      let line = this.winnerLine[i]; // текущая линия равна одному из 7 значений
      if (this.state.squares[line[0]] === s  // обращаюсь к стейтам проверяю их состояние 
          && this.state.squares[line[1]] === s
          && this.state.squares[line[2]] === s){
          alert (s + 'win'); // если стейты одинаковые то победа 
          setTimeout(() => {
            this.setState({squares : Array (9).fill(null)});// обновление состояния после победы
            this.setState({count : 0}); // обновление счетчика 
          }, 3000)
        }
      }
    }

  clickHandler = event => {
    console.log(1);
    // data - номер квадрата по которому кликнули
    let data = event.target.getAttribute('data');
    let currentSquares = this.state.squares;
    console.log(currentSquares);
    if (currentSquares[data] === null) { // проверка если нет значения то при клике ставит 
      currentSquares[data] = (this.state.count % 2 === 0 ) ? 'x' : '0'; // меняем состояние на 0 ил 1
      this.setState({count: this.state.count + 1});
      this.setState({squares: currentSquares});
    }
    else {
      alert ('Так нельзя!'); // если значение есть то не поставит 
    }
    this.isWinner();
  }

  render() {
    return (
      <div className="tic-tac-toe">
        <div className="ttt-grid" onClick={this.clickHandler} data = "0">
        {this.state.squares[0]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data = "1">
        {this.state.squares[1]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data = "2">
        {this.state.squares[2]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data = "3">
        {this.state.squares[3]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data = "4">
        {this.state.squares[4]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data = "5">
        {this.state.squares[5]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data = "6">
        {this.state.squares[6]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data = "7">
        {this.state.squares[7]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data = "8">
        {this.state.squares[8]}</div>
        


      </div>
    );
  }

}

    

export default App;
