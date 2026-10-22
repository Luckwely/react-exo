
import { IoMdAdd } from 'react-icons/io'
import { FoodContainer } from './components/food/food-container'
import Navigation, { type FoodCart } from './components/navigation'
import { ButtonPrimary } from './components/ui/button-primary'
import { useState } from 'react'
import type { Food } from './types/Food'
import Car from './components/car/car'
import { Toaster } from 'react-hot-toast'
import Modal from './components/modal'
import { FaTimes } from 'react-icons/fa'
import FoodCreate from './components/food/food.create'
import { foodFaker } from './data/data'

export default function App() {

  const [cart, setCart] = useState<FoodCart[]>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [foods, setFoods] = useState<Food[]>(foodFaker);
  const openModal = () => {
    setIsOpenModal((old: boolean) => !old);
  }
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: '#fff',
            color: '#363636',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: 'green',
              secondary: 'white',
            },
          },
        }}
      />
      <div className=' p-6 rounded-2xl w-[80%] mx-auto my-5'>
        <Navigation cart={cart} setCart={setCart} />

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

      </div>
    </>
  )
}
