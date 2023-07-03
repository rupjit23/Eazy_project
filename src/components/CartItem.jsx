
import {MdOutlineRemoveShoppingCart} from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="p-2">

        <div className="w-1/4">
          <img src={item.image} />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1 className="italic">{item.description}</h1>
          <div>
            <p className="font-bold">${item.price}</p>
            <button className="flex flex-row  bg-orange-500 text-white font-bold py-1.5 px-4 border border-blue-200 rounded gap-2"
            onClick={removeFromCart} >
            <MdOutlineRemoveShoppingCart></MdOutlineRemoveShoppingCart>
             <p>Remove from Cart</p> 
            </button>
            <br></br>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
