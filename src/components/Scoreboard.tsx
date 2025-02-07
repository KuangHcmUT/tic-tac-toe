const Scoreboard = ({
    score,
    playerWin,
}: {
    score: { X: number; O: number };
    playerWin: string | null;
}) => {
    return (
        <div className="mt-4 text-lg grid grid-cols-2 gap-4 py-2 mb-2 ">
            <div className="flex flex-col gap-1 justify-between items-center border-2 p-1 rounded">
                <p
                    className={`border-b-2 border-blue-300  ${
                        playerWin === "X" ? "text-red-500" : ""
                    }`}
                >
                    Player_X{" "}
                </p>
                <p>{score.X}</p>
            </div>
            <div className="flex flex-col gap-1 justify-between items-center border-2 p-1 rounded">
                <p
                    className={`border-b-2 border-blue-300  ${
                        playerWin === "O" ? "text-red-500" : ""
                    }`}
                >
                    Player_O{" "}
                </p>
                <p>{score.O}</p>
            </div>
        </div>
    );
};

export default Scoreboard;
