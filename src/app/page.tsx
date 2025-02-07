import HeadTitle from "./components/Head";
import TicTacToe from "./components/TicTacToe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tic Tac Toe",
    description: "Tic Tac Toe Game to play with friends",
};

function Page() {
    return (
        <>
            <HeadTitle />
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 p-4">
                <TicTacToe />;
            </div>
        </>
    );
}

export default Page;
