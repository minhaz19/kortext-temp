import React, {useState} from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage, setCurrentPage}) => {
    //page Numbers Limiting
    const pageNumberLimit = 5;
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
    const pageNumbers = [];
    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
        if(number < (maxPageNumberLimit+1) && number > minPageNumberLimit) {
            return(
                <li key={number}>
                    <div 
                        onClick={() => paginate(number)} 
                        className={`first:ml-0 text-xs font-semibold flex w-6 h-6 p-0 mx-1 
                        items-center justify-center leading-tight relative rounded-full
                        ${currentPage === number ? 'bg-blue-100' : ''} text-blue-500`}
                    >
                        {number}
                    </div>
                </li>
            )
        } else {
             return null;
        }
    })

    const handleNextbtn = () => {
        setCurrentPage(currentPage + 1);
        if(currentPage+1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }
    const handlePrevbtn = () => {
        setCurrentPage(currentPage - 1);
        if((currentPage-1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }

    let pageIncrementButton = <li onClick={handleNextbtn} className="absolute -right-3 bottom-1">...</li>;
    let pageDecrementButton = <li onClick={handlePrevbtn} className="absolute -left-4 bottom-1">...</li>;
    
    return (
        <nav className="block bg-white p-1">
            <ul className="flex pl-0 rounded list-none flex-wrap">
                <li>
                    <div
                        onClick={currentPage !== pageNumbers[0] ? handlePrevbtn : null}
                        className="p-1 mr-4 cursor-pointer"
                    >
                        <FaCaretLeft color="blue"/>
                    </div>
                </li>
                <div className="flex flex-row relative cursor-pointer">
                {currentPage > pageNumberLimit ? pageDecrementButton : null}
                {renderPageNumbers}
                {currentPage < pageNumbers[pageNumbers.length-pageNumberLimit] ? pageIncrementButton : null}
                </div>
                <li>
                    <div
                        onClick={currentPage !== pageNumbers[pageNumbers.length-1] ? handleNextbtn : null}
                        className="p-1 ml-4 cursor-pointer"
                    >
                        <FaCaretRight color="blue"/>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination