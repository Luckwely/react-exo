import { useState } from "react";
import CarList from "./car-list";

export default function Car() {

    const [check, setCheck] = useState('click to check admin');

  const cars = ['mercedez', 'toyota', 'golf type 5'];
  const isAvailable = true;
  const user = {
    id: 'azerty',
    name: 'John',
    email: 'johngmail.com',
    isAdmin: false
  }  

  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{check}</h1>
        <CarList 
            cars={cars} 
            isAvailable={isAvailable} 
            user={user} 
            setCheck={setCheck} />
    </div>
  )
}
