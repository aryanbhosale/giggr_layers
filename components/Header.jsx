import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '@/services'

const Header = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
      getCategories().then((newCategories) => setCategories(newCategories))
    }, [])
    const navbarItems = [
        {
            name: "IDENTITY",
            slug: "identity"
        },
        {
            name: "VALUE",
            slug: "value"
        },
        {
            name: "IMPACT",
            slug: "impact"
        },
        {
            name: "INSIGHTS",
            slug: "insights"
        },
        {
            name: "FAQ",
            slug: "faq"
        },
        {
            name: "SIGN UP",
            slug: "signup"
        }
    ]
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='w-full inline-block py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer'>
                        <img width={"130em"} alt="Giggr" src='/logo.png' />
                    </span>
                </Link>
            </div>
            <div className='hidden mb:float-left md:contents'>
                {navbarItems.reverse().map((navbarItem) => (
                    <Link key={navbarItem.slug} href={`/${navbarItem.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-xl hover:text-indigo-800 transition duration-500 transform hover:-translate-y-1 text-gray-800 ml-4 font-semibold cursor-pointer'>
                            {navbarItem.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header