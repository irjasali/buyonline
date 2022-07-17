import React, {useState} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CartWidget from './CartWidget';

const Cards=()=> {
  const [countItemsShoppingCar, setcountItemsShoppingCar] = useState(0);

  const onAdd =()=>{
   
    console.log('click');    
    setcountItemsShoppingCar(countItemsShoppingCar +1);  
    console.log(countItemsShoppingCar);
    return (    
      <CartWidget count={countItemsShoppingCar} />
    )
   }

  return (
    <div className='cards'>
      <h1>Check ours Models</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Hamaca Perú Azul'
              label='Confort'
              path='/services'
              stock={5}
              initial={1}
              onAdd={onAdd}
            />
            <CardItem
              src='images/img-2.jpg'
              text='Hamaca Congo Trinidad'
              label='Rest'
              path='/services'
              stock={5}
              initial={1}
              onAdd={onAdd}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Hamaca Congo Susan'
              label='Mystery'
              path='/services'
              stock={5}
              initial={1}
              onAdd={onAdd}
            />
            <CardItem
              src='images/img-4.jpg'
              text='Columpio Congo Bahía - Descanso y Comodidad'
              label='Adventure'
              path='/products'
              stock={5}
              initial={1}
              onAdd={onAdd}
            />
            <CardItem
              src='images/img-8.jpg'
              text='Hamaca Artesanal All Nahlo 100% Algodón color Azul Talla Mediana'
              label='Adrenaline'
              path='/sign-up'
              stock={5}
              initial={1}
              onAdd={onAdd}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
