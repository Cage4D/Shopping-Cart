import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="flex justify-between pl-5 pr-8 py-2 items-center border-b-2 border-b-slate-200 h-[10vh]">
      <p className="text-2xl font-bold font-clash tracking-tight">
        Shop<span className="text-slate-400">.cart</span>
      </p>
      <div className="flex items-center gap-8">
        {["Home", "Shop", "Cart"].map((item) => (
          <Link to={`${item === "Home" ? "/" : item }`} key={item}>
            <p
              className="relative
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
                    hover:after:w-full"
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
