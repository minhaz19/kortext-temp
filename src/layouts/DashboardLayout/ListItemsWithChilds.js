import {useState} from "react";
import {FaAngleDown} from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-router-dom'

const ListItemsWithChilds = ({label, subLabel}) => {
    const [expand, setExpand] = useState(false)
    const toggleMenu = () => {
        setExpand(!expand)
    }
    return (
        <li className="my-2 md:my-0 list-item-parent w-full">
            {
                label?.path ? (
                    <Link
                        to={label.path}
                        className="flex cursor-pointer justify-between w-full py-1 md:py-3 pl-1 align-middle text-gray-400 no-underline hover:text-gray-200"
                    >
                            <span className={'flex cursor-pointer'}>
                              <label.Icon className={"inline cursor-pointer"}/>

                                <span className="block font-open-sans cursor-pointer font-semibold pl-2 md:pb-0 text-sm left-10">
                                    {label.text}
                                </span>
                            </span>

                    </Link>
                ) : (
                    <span
                        onClick={toggleMenu}
                        className="flex cursor-pointer justify-between w-full py-1 md:py-3 pl-1 align-middle text-gray-400 no-underline hover:text-gray-200"
                    >
                            <span className={'flex cursor-pointer'}>
                              <label.Icon className={"inline cursor-pointer"}/>

                                <span className="block font-open-sans cursor-pointer font-semibold pl-2 md:pb-0 text-sm left-10">
                                    {label.text}
                                </span>
                            </span>
                        <FaAngleDown className={`inline cursor-pointer transition-all duration-300 transform ${expand ? 'rotate-180' : 'rotate-0'}`}/>

                    </span>
                )
            }

            {
                subLabel?.length && (
                    <CSSTransition
                        in={expand}
                        classNames={{
                            enter: 'scale-y-0',
                            enterActive: 'scale-y-100',
                            enterDone: 'scale-y-100',
                            exit: 'scale-y-0',
                            exitActive: 'scale-y-0',
                            exitDone: 'scale-y-0',
                        }}
                        timeout={300}
                        unmountOnExit
                    >
                        <ul className={`ml-5 overflow-hidden transform transition transition-all origin-top duration-300`}>
                            {
                                subLabel?.map((l, index) => {
                                    return (
                                        <li key={index}>
                                            <Link
                                                to={l.path}
                                                className={
                                                    "flex w-full cursor-pointer pl-1 my-3 align-middle  text-gray-400 no-underline hover:text-gray-200"
                                                }
                                            >
                                                <l.Icon className={"inline"}/>
                                                <span className="block pl-2 md:pb-0 text-sm left-10 font-open-sans font-semibold">
                                                    {l.text}
                                                </span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }




                        </ul>

                    </CSSTransition>
                )
            }


        </li>
    )
}


export default ListItemsWithChilds
