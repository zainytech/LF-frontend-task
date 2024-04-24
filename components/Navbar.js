
const Navbar = () => {
  return (
    <div className="z-99999999 fixed w-full top-0 bg-white border-b-2 shadow-md m-0 p-4 font-playfair">
        <div className="flex justify-between mx-5">
            <span className="text-gray-700">Gourmet au Catering</span>
        <ul className="flex gap-5 text-black">
            <li>About</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
        </div>
        
    </div>
  )
}

export default Navbar