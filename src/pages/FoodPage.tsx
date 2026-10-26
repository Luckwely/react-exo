import { FaTimes } from "react-icons/fa";
import { ButtonPrimary } from "../components/ui/button-primary";
import { IoMdAdd } from "react-icons/io";
import Modal from "../components/modal";
import FoodCreate from "../components/food/food.create";
import { FoodContainer } from "../components/food/food-container";
import type { Food } from "../types/Food";
import type { Dispatch, SetStateAction } from "react";
import type { FoodCart } from "../components/navigation";
import Container from "../components/container";

type Props = {
    openModal: () => void;
    isOpenModal: boolean;
    foods: Food[];
    setFoods: Dispatch<SetStateAction<Food[]>>;
    cart: FoodCart[];
    setCart: Dispatch<SetStateAction<FoodCart[]>>;
    setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function FoodPage( {
    openModal,
    isOpenModal,
    foods,
    setFoods,
    cart,
    setCart,
    setIsOpenModal,
}: Props
) {
  return (
    <Container >

        <div className='flex justify-between items-center mt-10'>

          <h1 className='text-gray-800 text-4xl font-extrabold'>Fast food</h1>
          <ButtonPrimary onClick={openModal}>
            {isOpenModal ? <FaTimes /> : <IoMdAdd />}  
          </ButtonPrimary>
        </div>

        {isOpenModal && (
          <Modal onClose={setIsOpenModal}>
            <FoodCreate setFoods={setFoods} onClose={setIsOpenModal} />
          </Modal> 
        )}

        {/* <Car /> */}

        <FoodContainer setCart={setCart} cart={cart} foods={foods} />

      </Container>
  )
}
