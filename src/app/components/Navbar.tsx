import Image from 'next/image'
import Link from 'next/link'

import logo from '../../../public/logo.svg'
import home from '../../../public/home.svg'
import user from '../../../public/user.svg'

import IconWrapper from './IconWrapper'
import CartLogo from './CartLogo'

export default function Navbar() {

  return (
    <header>
      <nav className='flex items-center gap-4 py-2'>
        <Image
          src={logo}
          alt="logo"
          priority
        />
        <Link href={'/'}>
          <IconWrapper>
            <Image
              src={home}
              alt='home icon'
            />
          </IconWrapper>
        </Link>
        <div className='w-full'>
          <input
            className='w-full indent-2 p-2 border-[2px] rounded-[4px] border-[#454D4A]'
            type='text'
            placeholder='Search your item'
          />
        </div>
        <IconWrapper>
          <Image
            src={user}
            alt='profile'
          />
        </IconWrapper>
        <CartLogo />
      </nav>
    </header>
  )
}
