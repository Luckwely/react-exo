import type { MouseEventHandler } from "react";

type Props = {
    children: any;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function ButtonPrimary({ children, onClick }: Props){
    return (
        <button onClick={onClick} className="bg-yellow-500 py-2 px-4 border-1 border-gray-300 rounded-2xl">{children}</button>
    ) 
}