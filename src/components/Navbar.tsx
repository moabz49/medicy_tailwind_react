import React,{ useEffect, useState } from 'react'
import Logo from '../images/logoWebsite';
import NavLink from './NavLink';
import { linksArray } from '../data';
import { AiOutlineMenu } from 'react-icons/ai';
import Button from './Button';
import { BsFillTelephoneFill } from 'react-icons/bs';
import PropTypes from 'prop-types';



// type NavbarProps = {
//   openPhoneMenu: boolean;
//   setOpenPhoneMenu: (value: boolean) => void;
// };

const Navbar = ({ openPhoneMenu, setOpenPhoneMenu }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if window object is defined (browser environment)
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        // Check window.scrollY only if window is defined
        setIsActive(window.scrollY > 10);
      });
    }
  }, []);

  return (
    <section className='absolute top-0 flex justify-center items-center w-full py-[32px]'>
      <div className={`${isActive || openPhoneMenu ? 'bg-neutral-800 shadow-lg' : 'bg-transparent'} w-full h-[80px] flex text-white items-center justify-between px-4 sm:px-10 fixed z-40 transition-all `}>
        <div className='group flex items-center gap-4 cursor-pointer'>
          <Logo />
          <h3 className='uppercase font-medium flex items-center group-hover:scale-[105%]'><NavLink key="Home" to="home" offset={0} noClassName>medicy.</NavLink></h3>
        </div>
        <ul className='hidden lg:flex gap-8 items-center font-light'>
          {linksArray.map((link) =>
            link.name !== 'Home' ? (
              <NavLink key={link.name} to={link.id} offset={link.offsetBg}>
                {link.name}
              </NavLink>
            ) : null
            )}
        </ul>
        <div className='flex gap-2 items-center'>
          <div className='hidden lg:flex'>
            <Button outlined>
              <BsFillTelephoneFill className='group-hover:translate-x-1 group-hover:rotate-12' />
              (505) 55-0126
            </Button>
          </div>
          {!openPhoneMenu ? (
            <AiOutlineMenu
            onClick={() => setOpenPhoneMenu(true)}
            className='lg:hidden h-8 w-6 hover:text-teal-500 hover:scale-[103%] cursor-pointer hover:-translate-y-1 transform duration-200 transition-transform'
            />
            ) : null}
        </div>
      </div>
      
    </section>
  );
};

Navbar.propTypes = {
  openPhoneMenu: PropTypes.bool.isRequired,
  setOpenPhoneMenu: PropTypes.func.isRequired,
};

export default Navbar;
