//
import { motion } from "framer-motion";

const Board = ({
    board,
    onClick,
    playerTurn,
    winningCells,
}: {
    board: (string | null)[];
    onClick: (index: number) => void;
    playerTurn: string;
    winningCells: number[] | null;
}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-lg shadow-md">
                {board.map((cell, index) => {
                    let cellClass = "";
                    if (cell === null) {
                        cellClass = playerTurn === "X" ? "x-hover" : "o-hover";
                    }
                    return (
                        <motion.button
                            key={index}
                            className={`w-16 h-16 flex items-center justify-center text-3xl font-bold border border-gray-300 hover:bg-gray-200 rounded  ${cellClass} ${
                                winningCells?.includes(index)
                                    ? "bg-green-300 text-red-500"
                                    : ""
                            }`}
                            onClick={() => onClick(index)}
                            whileTap={{ scale: 0.9 }}
                            disabled={!!cell}
                        >
                            {cell}
                        </motion.button>
                    );
                })}
            </div>

            <p className="text-sm py-1">Player {playerTurn} Turn</p>
        </div>
    );
};
export default Board;
