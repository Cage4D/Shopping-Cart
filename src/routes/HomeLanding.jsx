import React from "react";
import Typed from "typed.js"

function HomeLanding() {
  const [headingDone, setHeadingDone] = React.useState(false)
  const typedRef = React.useRef(null);


  React.useEffect(() => {

    if (!headingDone) return;
    const typed = new Typed(typedRef.current, {
      strings: [
        "A demo shopping cart.",
        "Built with React Router.",
        "Powered by state management."
      ],
      typeSpeed: 30,
      backSpeed: 20,
      backDelay: 1200,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|"
    })

    return (() => {
      typed.destroy()
    })
  }, [headingDone]);

  return (
    <>
      <section className="flex flex-col items-center">
        <h1
        className="text-7xl font-inter font-bold mt-25 slide-in"
        onAnimationEnd={() => setHeadingDone(true)}>
          <span className="text-slate-900">Welcome</span> to {" "}
          <span
            className="gradientText italic">
            Shop.cart
          </span>
        </h1>
        <p className="mt-4 md:mt-6 lg:mt-8 text-slate-600 text-lg md:text-xl font-inter">
          <span ref={typedRef}></span>
        </p>
      </section>
    </>
  );
}

export default HomeLanding;
