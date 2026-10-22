import { FaCartShopping, FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { ButtonPrimary } from "./ui/button-primary";
import { useState, type Dispatch, type SetStateAction } from "react";
import { FaTimes } from "react-icons/fa";
import type { Food } from "../types/Food";

export type FoodCart = {
    id: string,
    imageUrl: string,
    title: string,
    price: number,
    isLike: boolean,
    qty: number
}

type Props = {
    cart: FoodCart[];
    setCart: Dispatch<SetStateAction<FoodCart[]>>
}

export default function Navigation({cart, setCart}: Props) {
    console.log(cart);

    const [isOpenCart, setIsOpenCart] = useState<boolean>(false);
    console.log(isOpenCart);

    const openCart = () => {
        setIsOpenCart((old: boolean) => !old);
    }

    const handleDeleteCart = (foodId: string) => {
        setCart((oldCart) => 
            oldCart.filter(f => f.id !== foodId)
        );
    }

    const handleIncrease = (foodId: string) => {
        setCart((oldValue) => 
            oldValue.map((f) => {
                if(f.id === foodId){
                    return {
                        ...f,
                        qty: f.qty++
                    }
                }
                return f
            })
        );
    }

    const handleDecrease = (foodId: string) => {
        const foodDecrease = cart.find((f: FoodCart) => f.id === foodId);
        if(foodDecrease && foodDecrease?.qty > 1){
            setCart((oldValue) => 
                oldValue.map((f) => {
                    if(f.id === foodId){
                        return {
                            ...f,
                            qty: f.qty--
                        }
                    }
                    return f
                })
            );
        }else {
            handleDeleteCart(foodId);
        }
    }
    
  return (
    <nav className="flex justify-between items-center">
        <a href="">Logo</a>
        <div className="flex gap-3 items-center relative">
            <ButtonPrimary onClick={openCart} >
                <div className="relative">
                    {isOpenCart ? <FaTimes/> : <FaCartShopping />}
                    {!isOpenCart && (

                        <span className="absolute top-[-1rem] bg-red-500 text-white w-5 h-5 rounded-full">{cart.length}</span>
                    )}
                </div>
            </ButtonPrimary>
            {isOpenCart && (
                <div  className="bg-gray-200 border-1 rounded-3xl border-black p-4 w-[400px] absolute top-9 right-0">
                    <h2>Mon Panier</h2>
                    {cart.length <= 0 ? (
                            <div className="text-center mt-8 text-red-500">
                            Panier vide!!
                        </div>
                    ): (
                        <div>
                            {cart.map((cartItem) => 
                                 <div className="flex gap-1 mb-2">
                                    <div className="w-[100px]">
                                        <img className="h-[50px] w-full object-cover" src={cartItem.imageUrl} alt="" />
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <h3>{cartItem.title}</h3>
                                            <h3>{cartItem.price} €</h3>
                                            <h3 className="flex items-center gap-6">
                                                <span>Qty: </span>
                                                <div className="flex gap-3 items-center">
                                                    <span onClick={() => handleDecrease(cartItem.id)}><FaMinus /></span>
                                                    <span>{cartItem.qty}</span>
                                                    <span onClick={() => handleIncrease(cartItem.id)}><FaPlus /></span>
                                                </div>
                                            </h3>
                                        </div>
                                        <div>
                                            <span onClick={() => handleDeleteCart(cartItem.id)} className="text-red-500">
                                                <FaTrash />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    </nav>
  )
}
