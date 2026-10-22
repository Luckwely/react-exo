type Props = {
    children: any;
}

export function CardPrice({children}: Props){
    return (
        <h3 className="mt-2 text-xl font-bold">{children}</h3>
    )
}