type Props = {
    children: any;
}

export function CardContent({children}: Props){
    return (
        <div className="shadow-lg p-5 border-1 border-gray-400">{children}</div>
    )
}