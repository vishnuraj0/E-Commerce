import React from 'react'

const Card = () => {
  return (
    <>
    <div className="text-3xl text-red-600 font-bold underline text-center py-2 w-[400px] m-8 rounded-lg border-2 border-red-600">
      <img src="https://picsum.photos/200/300" alt="Profile" className="rounded-full w-[100px] h-[100px] object-cover mx-auto" />
      <h1>Manikandan N</h1>
      <p className="text-lg text-gray-600 mt-2">Software Developer</p>
      <p className="text-sm text-gray-500 mt-1">Building amazing things with code</p>
    </div>
  </>
  )
}

export default Card
