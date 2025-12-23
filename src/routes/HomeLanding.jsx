import React from "react";
import Typed from "typed.js";
import { MdAddShoppingCart } from "react-icons/md";
import { FiGrid, FiShoppingCart } from "react-icons/fi";

function HomeLanding() {
  const [headingDone, setHeadingDone] = React.useState(false);
  const typedRef = React.useRef(null);

  React.useEffect(() => {
    if (!headingDone) return;
    const typed = new Typed(typedRef.current, {
      strings: [
        "A demo shopping cart.",
        "Built with React Router.",
        "Powered by state management.",
      ],
      typeSpeed: 30,
      backSpeed: 20,
      backDelay: 1200,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, [headingDone]);

  return (
    <>
      <section className="flex flex-col items-center">
        <h1
          className="flex gap-0 flex-col items-center font-inter font-bold mt-15 slide-in md:flex-row md:gap-4 md:mt-25"
          onAnimationEnd={() => setHeadingDone(true)}
        >
          <p className="text-slate-900 text-[3.5rem] md:text-7xl">Welcome</p>
          <p className="text-slate-900 text-[3.5rem] md:text-7xl">to</p>
          <p className="gradientText italic text-[3.5rem] md:text-7xl">Shop.cart</p>
        </h1>
        <p className="mt-4 md:mt-6 lg:mt-8 text-slate-600 text-lg md:text-xl font-inter">
          <span ref={typedRef}></span>
        </p>
        <p className="mt-4 text-sm text-slate-400 md:text-base">Take a look at our store and see your cart in action!</p>
      </section>
      <section className="flex justify-center mt-15 gap-4 md:gap-15">
        <div className="flex items-center gap-2">
          <FiGrid size={24} />
          <span className="text-lg font-medium">Browse Products</span>
        </div>

        <div className="flex items-center gap-2">
          <MdAddShoppingCart size={24} />
          <span className="text-lg font-medium">Add to Cart</span>
        </div>

        <div className="flex items-center gap-2">
          <FiShoppingCart size={24} />
          <span className="text-lg font-medium">Cart</span>
        </div>
      </section>
    </>
  );
}

export default HomeLanding;
