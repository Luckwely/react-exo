import { useState, type Dispatch, type FormEvent, type SetStateAction } from "react"
import toast from "react-hot-toast";
import type { Food } from "../../types/Food";

type Props = {
    setFoods: Dispatch<SetStateAction<Food[]>>
    onClose: Dispatch<SetStateAction<boolean>>
}

export default function FoodCreate({setFoods, onClose}: Props) {
    const [foodData, setFoodData] = useState({
        imageUrl: '',
        title: '',
        price: ''
    });

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        if(
            foodData.imageUrl.trim() == '' ||
            foodData.title.trim() == '' ||
            foodData.price.trim() == ''
            
        ){
            toast.error("tous les champs sont obligatoire");
            return;
        }

        const newFood: Food = {
            id: crypto.randomUUID(),
            isLike: false,
            imageUrl: foodData.imageUrl,
            title: foodData.title,
            price: +foodData.price
        }

        setFoods((oldValue) => [...oldValue, newFood]);
        toast.success('Ajoute avec success');
        onClose(false);

        console.log(newFood);
        
    }
  return (
    <div>
        <h2>New Food</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, non!</p>
        <form onSubmit={onSubmit} className="mt-3">
            <div className="mb-3">
                <input onChange={e => setFoodData(old => ({
                        ... old,
                        imageUrl: e.target.value
                    }))} 
                    type="text" 
                    placeholder="Image url.." className="input" />
            </div>
            <div className="mb-3">
                <input onChange={e => setFoodData(old => ({
                    ... old,
                    title: e.target.value
                }))} type="text" placeholder="title.." className="input" />
            </div>
            <div className="mb-3">
                <input onChange={e => setFoodData(old => ({
                    ... old,
                    price: e.target.value
                }))} type="number" placeholder="price.." className="input" />
            </div>
            <div className="mb-3">
                <button className="btn">Add</button>
            </div>
        </form>
    </div>
  )
}
