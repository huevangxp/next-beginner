import React from 'react'

const Header = () => {
  return (
    <div>
        <div>
            <nav className="flex justify-between align-center px-5 py-4 bg-teal-600">
                <h1 className="text-2xl font-bold text-white">Learn NextJS Beginner</h1>
                <ul className="flex gap-5 text-white align-center">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <button className="bg-white text-teal-600 px-4 py-2 rounded-xl">Sign In</button>
            </nav>
        </div>
    </div>
  )
}

export default Header