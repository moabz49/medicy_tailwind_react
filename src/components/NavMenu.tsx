import React from 'react'
import { AiOutlineClose} from 'react-icons/ai'
import { linksArray } from '../data';
import NavLink from './NavLink';
import Button from './Button';
import { BsFillTelephoneFill } from 'react-icons/bs';

const NavMenu = ({ openPhoneMenu, setOpenPhoneMenu}) => {
  return (
    <section className='lg:hidden fixed bg-teal-900/60 top-[70px] w-full items-center z-30 '>
     {openPhoneMenu ? (
      <ul className='relative lg:hidden flex flex-col gap-8 items-center font-light py-6 transform transition-transform duration-300'>
        <div className='relative w-full items-end'>
            <AiOutlineClose onClick={() => setOpenPhoneMenu(false)} className='absolute -top-2 right-12 h-8 w-6 text-white hover:text-red-500 hover:translate-y-1 hover:scale-[103%] duration-200 transform transition-transform'/>
        </div>
        {linksArray.map((link) =>
            link.name !== 'Home' ? (
            <NavLink key={link.name} to={link.id} offset={link.offsetSm} mobileMenu>
                {link.name}
            </NavLink>
            ) : null
            )}
        <Button outlined>
            <BsFillTelephoneFill className='group-hover:translate-x-1 group-hover:rotate-12' />
            (505) 55-0126
        </Button>
      </ul>
     ): null}
    </section>
  )
}

export default NavMenu