import React from 'react'

function Loader() {
    console.log("this isloader")
  return (
      <div className="fixed top-0 left-0 w-full h-full bg-white/70 z-50 flex items-center justify-center">
        <div className="loader w-full h-full mx-auto flex">Loading</div>
    </div>)
}

export default Loader