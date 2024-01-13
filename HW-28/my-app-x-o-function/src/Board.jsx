import React from 'react';
import Square from './components/Square';
import { useBoard } from './hooks/useBoard';
import './main.css';

const BOARD_SIZE = 3;

const Board = () => {
    const { squares, handleClick, handleNewGame, status } = useBoard();

    const renderSquare = (i) => (
        <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />
    );

    return (
        <div className="board">
            <div className="status">{status}</div>
            {Array.from({ length: BOARD_SIZE }, (_, row) => (
                <div key={row} className="board-row">
                    {Array.from({ length: BOARD_SIZE }, (_, col) =>
                        renderSquare(row * BOARD_SIZE + col)
                    )}
                </div>
            ))}
            <button className="new-game-button" onClick={handleNewGame}>
                New Game
            </button>
        </div>
    );
};

export default Board;