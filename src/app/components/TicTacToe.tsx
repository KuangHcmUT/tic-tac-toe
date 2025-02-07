"use client";

import { useEffect, useState } from "react";
import Board from "./Board";
import Scoreboard from "./Scoreboard";
import { motion } from "framer-motion";

const PLAYER_X = "X";
const PLAYER_O = "O";

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
    const [score, setScore] = useState({ X: 0, O: 0 });
    const [winner, setWinner] = useState<string | null>(null);
    const [winningCells, setWinningCells] = useState<number[] | null>(null);

    useEffect(() => {
        const result = calculateWinner(board);
        if (result && !winner) {
            setWinner(result.winner);
            setWinningCells(result.winningCells);
            setScore((prevScore: any) => ({
                ...prevScore,
                [result.winner]: prevScore[result.winner] + 1,
            }));
        }
    }, [board, winner]);

    const handleClick = (index: number) => {
        if (board[index] || winner) return;
        const newBoard = [...board];
        newBoard[index] = playerTurn;
        setBoard(newBoard);
        if (playerTurn === PLAYER_X) {
            setPlayerTurn(PLAYER_O);
        } else {
            setPlayerTurn(PLAYER_X);
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        if (winner === PLAYER_X) {
            console.log(winner);
            setPlayerTurn(PLAYER_O);
        } else {
            setPlayerTurn(PLAYER_X);
        }
        setWinner(null);
        setWinningCells(null);
    };

    // if (winner) {
    //     setScore((prevScore: any) => ({
    //         ...prevScore,
    //         [winner]: prevScore[winner] + 1,
    //     }));
    //     resetGame();
    // }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Tic-Tac-Toe</h1>
            <Scoreboard score={score} playerWin={winner} />

            <Board
                board={board}
                onClick={handleClick}
                playerTurn={playerTurn}
                winningCells={winningCells}
            />
            {winner && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 text-lg font-semibold text-green-600"
                >
                    Winner: {winner}!
                </motion.div>
            )}
            {!winner && board.every(Boolean) && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-lg font-semibold"
                >
                    It's a Draw!
                </motion.p>
            )}
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={resetGame}
            >
                Restart Game
            </button>
        </div>
    );
};

const calculateWinner = (board: (string | null)[]) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return { winner: board[a], winningCells: [a, b, c] };
        }
    }
    return null;
};

export default TicTacToe;
