type Props = {
    children: any;
}

export function CardTitle({children}: Props) {
    return <h2 className="font-extrabold text-sm mt-3 text-gray-500">{children}</h2>
}