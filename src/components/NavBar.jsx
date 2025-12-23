import { Link } from "react-router";

function NavBar({ cart }) {

  const baseClasses = `
    relative
    font-clash font-medium text-slate-700
    cursor-pointer
    transition-colors duration-200
    hover:text-slate-900
    after:absolute
    after:left-0
    after:bottom-1
    after:h-0.5
    after:w-0
    after:bg-slate-900
    after:duration-200
    hover:after:w-full`;

  const cartClasses = `
    before:content-[attr(data-count)] 
    before:absolute 
    before:-top-2 
    before:-right-3 
    before:w-4 
    before:h-4 
    before:rounded-[50%] 
    before:text-white 
    before:bg-blue-800 
    before:grid 
    before:place-items-center 
    before:text-xs
    before:transition
    before:transform
    ${cart.length > 0 
    ? 'before:opacity-100 before:scale-100'
    : 'before:opacity-0 before:scale-95'}`;

  return (
    <nav className="flex justify-between pl-5 pr-4 py-2 items-center border-b-2 border-b-slate-200 h-[10vh] md:pr-8">
      <p className="text-2xl font-bold font-clash tracking-tight">
        Shop<span className="text-slate-400">.cart</span>
      </p>
      <div className="flex items-center gap-4 md:gap-8">
        {["Home", "Shop", "Cart"].map((item) => (
          <Link to={`${item === "Home" ? "/" : item}`} key={item}>
            <p
              data-count={cart.length}
              className={`${baseClasses} ${item === "Cart" ? `${cartClasses}` : ""}`}
            >
              {item}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
