import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import {FaCartPlus} from 'react-icons/fa'




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex flex-col">


      <div className="box-border">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="border-2 border-sky-500 flex flex-col p-1">

        <div>
          <div className="text-center text-xl font-semibold">Your Cart</div>
          <div >Summary</div>
          <p>
            <span className="pl-6">Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="pl-6">Total Amount: ${totalAmount}</p>
          <button className="flex flex-row mx-auto items-center  bg-violet-500 hover:bg-green-900 text-white font-bold py-1.5 px-4 border border-blue-200 rounded-full gap-2">
            CheckOut Now
          </button>
         
        </div>

      </div>
      <br></br>
      


    </div>) : 
    (<div className="flex flex-col gap-11 pt-6">
        
      <h1 className="text-gray-800  text-center text-2xl">Cart is Empty</h1>
      <Link to={"/"}>
        <button className="flex flex-row mx-auto items-center  bg-blue-500 hover:bg-blue-900 text-white font-bold py-1.5 px-4 border border-blue-200 rounded gap-2">
        <FaCartPlus></FaCartPlus>
          <p>Shop Now</p>
          
          
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
