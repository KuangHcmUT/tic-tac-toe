import HeadTitle from "../components/Head";
import TicTacToe from "../components/TicTacToe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tic Tac Toe",
    description: "Tic Tac Toe Game to play with friends",
};

function Page() {
    return (
        <>
            <HeadTitle />
            <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100 py-2">
                <TicTacToe />
            </div>
        </>
    );
}

export default Page;
