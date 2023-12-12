import React from 'react'

type ButtonTypeProps = {
    children: React.ReactNode,
    outlined?: boolean,
    main?: boolean,
}

const Button = ({outlined= false, main= false, children} : ButtonTypeProps) => {
    const className = outlined 
    ?"group flex items-center text-white gap-4 text-xs font-semibold bg-transparent border-[1px] hover:border-[2px] hover:outline-white rounded-3xl py-3 px-4"
    : main ? "flex gap-2 items-center group bg-teal-600 capitalize text-sm font-semibold outlined-none  rounded-full py-3 px-8 hover:from-15% hover:from-teal-800 via-transparent via-30% to-teal-500 bg-gradient-to-l duration-500 transition-transform transform ease-in-out hover:scale-[103%] hover:translate-x-3"
    : "hover:opacity-[90%] tracking-tight bg-teal-600 border-2 border-teal-500 hover:border-none text-white capitalize font-semibold outlined-none hover:outline hover:outline-teal-500 rounded-full py-3 px-7 hover:from-15% hover:from-teal-800 to-teal-500 bg-gradient-to-r duration-500 ease-in-out hover:scale-[105%] transition-transform"
    return (
      <button className={className}>{children}</button>
  )
}
export default Button