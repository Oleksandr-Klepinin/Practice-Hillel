import { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import calculateWinner from '../helpers/calculateWinner';

const BOARD_SIZE = 3;
const LOCAL_STORAGE_KEY = 'storageKey';

export function useBoard() {
    const initialBoard = new Array(BOARD_SIZE ** 2).fill(null);
    const [squares, setSquares] = useLocalStorage(LOCAL_STORAGE_KEY, initialBoard);
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (position) => {
        if (!Array.isArray(squares) || squares[position] || calculateWinner(squares)) {
            return;
        }

        const newSquares = [...squares];
        newSquares[position] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const handleNewGame = () => {
        setSquares(initialBoard);
        setXIsNext(true);
    };

    const winner = Array.isArray(squares) ? calculateWinner(squares) : null;
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return {
        squares,
        xIsNext,
        handleClick,
        handleNewGame,
        status,
    };
}