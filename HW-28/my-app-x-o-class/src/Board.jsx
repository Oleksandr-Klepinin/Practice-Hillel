import React, { Component } from 'react';
import Square from './components/Square';
import calculateWinner from './helpers/calculateWinner';

const BOARD_SIZE = 3;
const LOCAL_STORAGE_KEY = 'storageKey';

class Board extends Component {
    constructor(props) {
        super(props);
        this.initialBoard = new Array(BOARD_SIZE ** 2).fill(null);
        const savedState = this.loadState();

        this.state = savedState && Array.isArray(savedState.squares)
            ? savedState
            : { squares: this.initialBoard, xIsNext: true };
    }

    loadState() {
        try {
            const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
            return serializedState ? JSON.parse(serializedState) : null;
        } catch (error) {
            console.error('Error loading state from localStorage:', error);
            return null;
        }
    }

    saveState(state) {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
        } catch (error) {
            console.error('Error saving state to localStorage:', error);
        }
    }

    handleClick = (position) => {
        const { squares, xIsNext } = this.state;
        if (!Array.isArray(squares) || squares[position] || calculateWinner(squares)) {
            return;
        }

        const newSquares = [...squares];
        newSquares[position] = xIsNext ? 'X' : 'O';
        const newState = {
            squares: newSquares,
            xIsNext: !xIsNext,
        };
        this.setState(newState);
        this.saveState(newState);
    };

    handleNewGame = () => {
        const newState = {
            squares: this.initialBoard,
            xIsNext: true,
        };
        this.setState(newState);
        this.saveState(newState);
    };

    renderSquare(i) {
        const { squares } = this.state;
        return (
            <Square
                key={i}
                value={squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const { squares, xIsNext } = this.state;
        const winner = calculateWinner(squares);
        const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

        return (
            <div className="board">
                <div className="status">{status}</div>
                {Array.from({ length: BOARD_SIZE }, (_, row) => (
                    <div key={row} className="board-row">
                        {Array.from({ length: BOARD_SIZE }, (_, col) => this.renderSquare(row * BOARD_SIZE + col))}
                    </div>
                ))}
                <button className="new-game-button" onClick={this.handleNewGame}>New Game</button>
            </div>
        );
    }
}

export default Board;