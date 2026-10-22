import { BiEuro } from "react-icons/bi";
import type { Food } from "../../types/Food"
import { CardContent } from "../card/card-content";
import { CardPrice } from "../card/card-price";
import { CardTitle } from "../card/card-title";
import { ButtonPrimary } from "../ui/button-primary";
import { FaHeart } from "react-icons/fa6";
import type { Dispatch, SetStateAction } from "react";
import type { FoodCart } from "../navigation";
import toast from "react-hot-toast";


type Props = {
    food: Food;
    cart: FoodCart[];
    setCart: Dispatch<SetStateAction<FoodCart[]>>;
}

export default function FoodItem({ food, setCart, cart }: Props) {
    const addToCart = () => {
        const foodExist = cart.find((f: FoodCart) => f.id === food.id);
        if (foodExist) {
            const newCart = cart.map((f: FoodCart) => {
                if (f.id === foodExist.id) {
                    return {
                        ...f,
                        qty: f.qty + 1
                    }
                }
                return f
            });
            setCart(newCart);
            toast.error('Le produit est deja dans le panier');
            return;
        }

        const newFood = {
            ...food,
            qty: 1
        }
        setCart((currentCart) => [...currentCart, newFood]);
        toast.success('Ajoute avec success');
    }

    return (
        <CardContent>
            <img className="h-[250px] w-full object-cover rounded-lg" src={food.imageUrl} alt={food.title} />
            <CardTitle>
                {food.title}
            </CardTitle>
            <CardPrice>
                <div className="flex gap-3 items-center">
                    <p>{food.price}</p>
                    <span><BiEuro /></span>
                </div>
            </CardPrice>
            <div className="flex justify-between items-center">
                <ButtonPrimary onClick={addToCart}>Ajout au panier</ButtonPrimary>
                <span className={food.isLike ? 'text-red-500' : 'text-gray-500'}><FaHeart /></span>
            </div>
        </CardContent>
    )
}
