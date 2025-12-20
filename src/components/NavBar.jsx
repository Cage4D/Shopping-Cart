function NavBar() {
    return (
        <nav className="flex justify-between pl-5 pr-8 py-2 items-center border-b-2 border-b-gray-300 h-[10vh]">
            <p className="italic text-3xl font-bold">Shop<span className="opacity-25">.cart</span></p>
            <div className="flex gap-5">
                <p className="font-bold text-md hover:cursor-pointer">Home</p>
                <p className="font-bold text-md hover:cursor-pointer">Shop</p>
                <p className="font-bold text-md hover:cursor-pointer">Cart</p>
            </div>
        </nav>
    )
}

export default NavBar;