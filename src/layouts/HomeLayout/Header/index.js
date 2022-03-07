import { NavLink } from 'react-router-dom'

const Header = props => {
    return (
        <div className={'container mx-auto pt-4 md:pt-8 pb-5 md:px-14 absolute -top-0 -left-0 z-30'}>
            <div className="grid md:grid-cols-2">
                <div className="flex justify-center md:justify-start items-center">
                    <NavLink to={'/'}>
                        <img src="/logo.png" alt="kortex" className={'h-10'}/>
                    </NavLink>

                </div>

                <div className="flex justify-center md:justify-end items-center">
                    <ul className="flex font-open-sans items-center mt-5 md:mt-0">
                        <li className={ `cursor-pointer mx-2 px-2 ${props?.single ? "text-black" : 'text-white' } md:text-lg`}>
                           <NavLink exact activeClassName={'border-b-2 border-yellow-500'} to={'/'}>
                               Home
                           </NavLink>
                        </li>
                        <li className={`cursor-pointer mx-2 px-2 ${props?.single ? "text-black" : 'text-white' } md:text-lg`}>
                            <NavLink exact activeClassName={'border-b-2 border-yellow-500'} to={'/career'}>
                                We're hiring
                            </NavLink>

                        </li>
                        <li className={'cursor-pointer mx-2 px-5 md:px-8  rounded shadow text-white md:text-lg bg-gray-500 bg-opacity-50 py-2'}>
                            <NavLink to={'/login'}>
                                Log in
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
