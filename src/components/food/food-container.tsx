
import type { Dispatch, SetStateAction } from "react"
import type { Food } from "../../types/Food"
import FoodItem from "./food-item"
import type { FoodCart } from "../navigation"

type Props = {
    setCart: Dispatch<SetStateAction<FoodCart[]>>;
    cart: FoodCart[];
    foods: Food[];
}

export function FoodContainer({ setCart, cart , foods}: Props) {
    return <div className="grid grid-cols-3 gap-3 mt-5">
        {foods.map((food: Food) =>
            <FoodItem setCart={setCart} food={food} key={food.id} cart={cart} />
        )}
    </div>
}