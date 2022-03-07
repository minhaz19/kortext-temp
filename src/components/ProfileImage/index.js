import React from 'react'
const index = ({item}) => {
  const facebook = () => {
    console.log('facebook clicked');
  } 
  const twitter = () => {
    console.log('twitter clicked');
  }
  const linkedin = () => {
    console.log('linkedin clicked');
  }
  return (
      <div className="container mx-auto max-w-sm">
          <div className="mt-3">
            <img className="w-full h-52" src={item.icon} alt=""/>
            <div className="relative ">
              <div className="bg-indigo-600 opacity-0 hover:opacity-100 h-10 absolute 
              bottom-2 w-full px-4 flex flex-row justify-between items-center rounded-lg">
                <div onClick={facebook}>
                  <img className="h-8 w-8" src="/assets/svgs/hiring/facebook.svg" alt=""/>
                </div>
                <div onClick={twitter}>
                  <img className="h-8 w-8" src="/assets/svgs/hiring/twitter.svg" alt=""/>
                </div>
                <div onClick={linkedin}>
                  <img className="h-8 w-8" src="/assets/svgs/hiring/linkedin.svg" alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="grid pt-2">
              <strong className="">{item.name}</strong>
              <p className="text-center text-xs px-4 mt-2">{item.details}</p>
            </div>
      </div>
  )
}

export default index;
