import React from "react";
import { useOutletContext } from "react-router";
import { MdDelete } from "react-icons/md";

function Cart() {
  const { cart, setCart } = useOutletContext();

  return (
    <section className="flex flex-col w-[60vw] mx-auto py-2">
      <p className="font-clash font-bold border-b-2 border-slate-400 w-full text-end text-xl tracking-wider text-slate-700">{`${
        cart.length
      } ${cart.length === 1 ? "item" : "items"}`}</p>
        {cart.map((item) => (
          <div
           key={item.id}
           className="flex border-b-2 border-slate-400 py-1">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-40 aspect-square object-contain"
            />
            <div className="flex flex-col justify-around w-full">
                <div className="flex justify-between items-start w-full">
                    <p className="font-semibold font-clash tracking-wider text-lg leading-tight max-w-[50ch]">{item.title}</p>
                    <p className="font-semibold font-clash">${item.price}</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-semibold font-clash">Quantity: {item.quantity}</p>
                    <button className="flex gap-1 font-clash font-semibold text-white bg-slate-800 rounded-lg h-min p-1.5">
                        <MdDelete size={24}/>
                        <span>Remove</span>
                    </button>
                </div>
            </div>
          </div>
        ))}
    </section>
  );
}

export default Cart;
