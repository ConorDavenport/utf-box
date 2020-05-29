import React from 'react';
import Table from "./Table";
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.rows = 25
    this.cols = 50
    this.leftmost = this.cols - 1
    this.cells = Array(this.rows);
    for (let i = 0; i < this.rows; i++) {
      this.cells[i] = Array(this.cols).fill(null);
    }

    this.state = {
      mouseDown: false,
      select: "none",
      draw: "draw",
      row: this.rows,
      col: this.cols,
      cells: this.cells
    }
  }

  check(c) {
    if (c === null || c === " ") {
      return false
    } else {
      return true
    }
  }

  // newCell = false when adjacent cells are being updated
  // draw = false when erasing
  updateCell(i, j, newCell, draw) {
    if (draw === "select") {
      return;
    }
    let newState = Object.assign({}, this.state);
    let n = newState.cells;
    // don't update oob cells
    if (i <= 0 || j <= 0 || i >= this.rows - 1 || j >= this.cols - 1) {
      return;
    }

    // don't update empty adjacent cells
    if (newCell === false && !this.check(n[i][j])) {
      return;
    }

    let A = n[i-1][j];
    let B = n[i][j+1];
    let C = n[i+1][j];
    let D = n[i][j-1];
    let ans = null;
    //━ ┃ ┏ ┓ ┗ ┛ ┣ ┫ ┳ ┻ ╋
    if (draw === "draw") {
      if ((this.check(A) || this.check(C)) && !this.check(B) && !this.check(D)) {
        ans = '┃';
      } else if (!this.check(A) && !this.check(C) && (this.check(B) || this.check(D))) {
        ans = '━';
      } else if (!this.check(A) && this.check(B) && this.check(C) && !this.check(D)) {
        ans = '┏';
      } else if (!this.check(A) && !this.check(B) && this.check(C) && this.check(D)) {
        ans = '┓';
      } else if (this.check(A) && this.check(B) && !this.check(C) && !this.check(D)) {
        ans = '┗';
      } else if (this.check(A) && !this.check(B) && !this.check(C) && this.check(D)) {
        ans = '┛';
      } else if (this.check(A) && this.check(B) && this.check(C) && !this.check(D)) {
        ans = '┣';
      } else if (this.check(A) && !this.check(B) && this.check(C) && this.check(D)) {
        ans = '┫';
      } else if (!this.check(A) && this.check(B) && this.check(C) && this.check(D)) {
        ans = '┳';
      } else if (this.check(A) && this.check(B) && !this.check(C) && this.check(D)) {
        ans = '┻';
      } else if (this.check(A) && this.check(B) && this.check(C) && this.check(D)) {
        ans = '╋';
      } else {
        ans = '╸'
      }
    } else if (draw === "erase") {
      ans = " "
    }

    n[i][j] = ans;

    if(draw === "erase" && newCell) {
      loop:
      for (let m = 0; m < this.cols; m++) {
        for (let k = 0; k < this.rows; k++) {
          if (this.check(n[k][m])) {
            this.leftmost =  m
            break loop
          }
        }
      }
    }

    if(draw === "draw" && j < this.leftmost) {
      this.leftmost = j;
      // fill all the cells right of the leftmost non-empty cell to
      // improve selecting it for copy pasting
      for (let k = 0; k < this.rows; k++) {
        for (let m = this.leftmost; m < this.cols; m++) {
          if (!this.check(n[k][m])) {
            n[k][m] = " "
          }
        }
      }
    }
    console.log(this.leftmost)
    this.setState({cells: n});
  }

  handleClick(i, j) {
    this.updateCell(i, j, true, this.state.draw);
    this.updateCell(i-1, j, false, "draw");
    this.updateCell(i+1, j, false, "draw");
    this.updateCell(i, j-1, false, "draw");
    this.updateCell(i, j+1, false, "draw");
  }

  handleMouseEnter(i, j) {
    if (this.state.mouseDown) {
      this.handleClick(i, j)
    }
  }

  reset() {
    let newState = Object.assign({}, this.state);
    let n = newState.cells;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        n[i][j] = null;
        this.setState({cells: n})
      }
    }
  }

  render() {
    return (
      <div className="component-App"
           style={{userSelect: this.state.select}}
           onMouseUp={() => {this.setState({mouseDown: false})}}
           onMouseDown={() => {this.setState({mouseDown: true})}}
      >
        <Table 
          colNum={this.state.col} 
          rowNum={this.state.row}
          cells={this.state.cells}
          onClick={(i, j) => this.handleClick(i, j)}
          onMouseEnter={(i, j) => this.handleMouseEnter(i, j)}
        />
        <button onClick={() => {this.setState({draw: "draw", select: "none"})}}>Draw</button>
        <button onClick={() => {this.setState({draw: "erase", select: "none"})}}>Erase</button>
        <button onClick={() => {this.setState({draw: "select", select: "auto"})}}>Select</button>
        <button onClick={() => {this.reset()}}>Reset</button>
      </div>
    )
  }
}