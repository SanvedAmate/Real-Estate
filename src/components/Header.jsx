// eslint-disable-next-line no-unused-vars
import {FaSearch} from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-slate-200 shadow-md'>
       
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-400'>My REAL</span>
            <span className='text-slate-900'>-ESTATE</span>
            </h1>
            </Link>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type='text' placeholder='search' className='bg-transparent  focus:outline-none w-24 sm:w-64' />
                <FaSearch className='text-slate-600' />
            </form>
            <ul className='flex gap-4'>
            <Link to='/'>
                <li className='hidden sm:inline hover:underline'>Home</li>
                </Link>
                <Link to='About'> 
                <li className='hidden sm:inline hover:underline'>About</li>
                </Link>
                <Link to='Signin'>
                <li className=' hover:underline'>Sign In</li>
                </Link>
            </ul>

            </div>
    </div>
  )
}
