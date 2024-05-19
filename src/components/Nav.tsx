import { useState } from "react"

const Nav = () => {

  const [nav, setNav] = useState(false);

  console.log(nav);

  return (
    <nav className="relative flex justify-between items-center bg-white w-full p-4 font-ibm lg:px-12">
      <a href="#" className="text-lg text-gray-300 font-bold tracking-wide lg:text-xl">LOGO</a>
      <div className="hidden lg:flex lg:gap-12 lg:justify-center lg:ml-28">
        <a href="#" className="font-semibold text-blue-950 hover:underline">Home</a>
        <a href="#" className="font-semibold text-blue-950 hover:underline">Articles</a>
        <a href="#" className="font-semibold text-blue-950 hover:underline">Pricing</a>
        <a href="#" className="font-semibold text-blue-950 hover:underline">About</a>
        <a href="#" className="font-semibold text-blue-950 hover:underline">Contact</a>
      </div>
      <div className="hidden lg:flex lg:gap-4">
        <a href="#" className="no-underline py-3 px-6 rounded-md bg-gray-200 text-sm font-semibold text-md">Log In</a>
        <a href="#" className="no-underline py-3 px-6 rounded-md bg-blue-950 text-white text-sm font-semibold text-md">Start Free Trial</a>
      </div>
      <button onClick={() => setNav(!nav)} className="border-0 lg:hidden"><i className="fa-solid fa-bars text-gray-600 text-2xl"></i></button>
      <div className={`fixed w-full ${nav ? 'left-0' : 'left-full'} top-0 h-screen p-6 bg-white transition-all duration-500`}>
        <button onClick={() => setNav(!nav)} className="border-0 cursor-pointer"><i className="fa-solid fa-x text-black text-xl"></i></button>
        <div className="flex flex-col items-center justify-center my-12 text-center">
          <a href="#" className="my-3 inline-block w-14 hover:underline">Home</a>
          <a href="#" className="my-3 inline-block w-14 hover:underline">Articles</a>
          <a href="#" className="my-3 inline-block w-14 hover:underline">Pricing</a>
          <a href="#" className="my-3 inline-block w-14 hover:underline">About</a>
          <a href="#" className="my-3 inline-block w-14 hover:underline">Contact</a>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <a href="#" className="no-underline py-3 px-12 rounded-md bg-gray-200 text-sm font-semibold">Log In</a>
          <a href="#" className="no-underline py-3 px-6 rounded-md bg-blue-950 text-white text-sm font-semibold">Start Free Trial</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav