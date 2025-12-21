import React from "react";

function ProductCard({ image, title, category, price }) {
  const [numberOfItems, setNumberOfItems] = React.useState(0);

  function handleClick(event) {
    const value = event.currentTarget.value
    if (value === "-" && numberOfItems === 0) return;
    setNumberOfItems(prev => value === "-" ? prev - 1 : prev + 1)
  }

  return (
    <div className="flex items-center rounded-xl w-[40vw] gap-2 p-2 shadow-lg">
      <img 
      src={image} 
      alt={title}
      className="max-h-40 aspect-square object-contain" />
      <div className="flex flex-col h-full w-full justify-around">
          <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <p className="font-semibold font-clash tracking-wider text-lg leading-tight max-w-[23ch]">{title}</p>
                <p className="font-semibold font-clash">${price}</p>
              </div>
              <p className="font-inter capitalize font-light text-slate-700 text-sm">{category}</p>
          </div>
          <div className="flex justify-between justify-self-end mt-2">
              <div className="border-2 rounded-sm h-8 w-20 p-1 border-slate-300 flex items-center justify-center">
                <button 
                className="hover:bg-slate-300 w-full hover:rounded-l-xs"
                value="-"
                onClick={handleClick}>-</button>
                <input
                  type="text"
                  placeholder="0"
                  value={numberOfItems}
                  onChange={(event) => {
                    if (Number.isFinite(Number(event.target.value))) {
                      const val = Math.max(0, Number(event.target.value))
                      setNumberOfItems(val)
                      return;
                    }
                    return;
                  }}
                  className="w-[5ch] text-center border-0 focus:outline-0 text-slate-800"
                />
                <button 
                className="hover:bg-slate-300 w-full hover:rounded-r-xs"
                value="+"
                onClick={handleClick}>+</button>
              </div>
              <button className="bg-blue-800 text-white rounded-lg font-clash font-semibold tracking-wide px-2 py-1 hover:cursor-pointer">Add to Cart</button>
          </div>
      </div>
    </div>
  );
}

export default ProductCard;
