import React from 'react'

const index = ({item}) => {
    return (
        <div>
            <div className="bg-white grid grid-cols-4 py-5 border border-purple-200 pl-4">
                <div>
                    <p>{item.title}</p>
                </div>
                <div>
                    <p>{item.delivery}</p>
                </div>
                <div>
                    <p>{item.pickup}</p>
                </div>
                <div>
                    <p>{item.total}</p>
                </div>
            </div>
        </div>
    )
}

export default index
