import React from "react";

function HomeLanding() {
  const headerRef = React.useRef();
  const typedRef = React.useRef();

  React.useEffect(() => {}, []);

  return (
    <>
      <section>
        <h1 ref={headerRef}>
          Welcome to &nbsp;
          <span
            className="
            italic
            relative
            after:content-['']
            after:absolute
            after:left-0
            after:-bottom-0.5
            after:h-0.5
            after:w-0
            after:bg-blue-500
            after:transition-[width]
            after:duration-300
            after:ease-in-out
            hover:after:w-full"
          >
            Shop.cart
          </span>
        </h1>
        <p>
          <span ref={typedRef}></span>
        </p>
      </section>
    </>
  );
}

export default HomeLanding;
