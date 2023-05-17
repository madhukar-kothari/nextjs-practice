'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image 
          src='/assets/images/logo.svg'
          alt='Bible stack'
          width={30}
          height={30}
          className='object-contain'
          />
          <p>Bible Stack</p>
      </Link>
      {/* Desktop Navigation */}
      <div className='sm:flex'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>Create Post</Link>
          </div>
        ) : (
          <>
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav