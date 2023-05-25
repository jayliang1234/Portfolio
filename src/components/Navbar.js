const Navbar = () =>{
    return(
        <div className="flex justify-center bg-slate-100 h-20">
            <ul className="flex items-center z-[10] absolute w-full justify-center">
                <li className="mt-6 hover:border-b-2 hover:border-fuchsia-600">
                  <a href="/" className="text-xl">Skills</a>
                </li>
                <li className="mx-4 mt-6">
                  <a href="/" className="text-xl" >Experience</a>
                </li>
                <li className="mt-6">
                  <a href="/" className="text-xl" >Projects</a>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;