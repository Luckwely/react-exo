import type { Dispatch, SetStateAction } from "react";
import type { User } from "../../types/User"

type Props = {
    cars: string,
    isAvailable: boolean,
    user: User,
    setCheck: Dispatch<SetStateAction<string>>
}

export default function CarList({cars, isAvailable, user, setCheck}: Props) {

    console.log(cars, isAvailable, user);
    const handleCheck = () => {
        if(user.isAdmin) {
            setCheck(`${user.name} is admin`);
        }else {
            setCheck(`${user.name} is not admin`);
        }
    }
  return (
    <div>
        <h2>Cars</h2>
        <ul>
            {cars.map((carName: string) =>
                <li key={carName}>{carName}</li>
            )}
        </ul>

        <button onClick={handleCheck} className="bg-orange-500 p-4 rounded-full">Check admin</button>
    </div>
  )
}
