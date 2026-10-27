
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
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FoodPage from './pages/FoodPage'
import HomePage from './pages/HomePage'
import FormTestPage from './pages/FormTestPage'

export default function App() {

  const [cart, setCart] = useState<FoodCart[]>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [foods, setFoods] = useState<Food[]>(foodFaker);
  const openModal = () => {
    setIsOpenModal((old: boolean) => !old);
  }
  return (
    <>
      <BrowserRouter>
        <Navigation cart={cart} setCart={setCart} />
        <Routes>
          <Route index element={
            <HomePage />
          } />
          <Route path='/form' element={
            <FormTestPage />
          } />
          <Route path='/foods' element= {
            <FoodPage
              openModal={openModal}
              isOpenModal={isOpenModal}
              foods={foods}
              setFoods={setFoods}
              cart={cart}
              setCart={setCart}
              setIsOpenModal={setIsOpenModal}
            />
          }/>
        </Routes>

      </BrowserRouter>
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
    </>
  )
}
