import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-zinc-600 text-white text-center text-4xl '> hello world</div>
     <section className=' flex-1 items-center grid grid-cols-4 grid-rows-1 text-white my-2 gap-6 text-wrap'>
      <div className='px-3 text-left border py-10 border-zinc-800 border-2 rounded-md hover:outline outline-zinc-700 '>
        <h3 className='mb-3 text-2xl font-semibold text-gray-300'>My work is the best</h3>
        <p className='text-sm text-gray-400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam explicabo quam eaque officia magnam veritatis corrupti, architecto officiis deleniti !</p>
      </div>
      <div className='px-3 text-left border py-10 border-zinc-800 border-2 rounded-md hover:outline outline-zinc-700 '>
        <h3 className='mb-3 text-2xl font-semibold text-gray-300'>My work is the best</h3>
        <p className='text-sm text-gray-400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam explicabo quam eaque officia magnam veritatis corrupti, architecto officiis deleniti !</p>
      </div>
      <div className='px-3 text-left border py-10 border-zinc-800 border-2 rounded-md hover:outline outline-zinc-700 '>
        <h3 className='mb-3 text-2xl font-semibold text-gray-300'>My work is the best</h3>
        <p className='text-sm text-gray-400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam explicabo quam eaque officia magnam veritatis corrupti, architecto officiis deleniti !</p>
      </div>
      <div className='px-3 text-left border py-10 border-zinc-800 border-2 rounded-md hover:outline outline-zinc-700 '>
        <h3 className='mb-3 text-2xl font-semibold text-gray-300'>My work is the best</h3>
        <p className='text-sm text-gray-400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam explicabo quam eaque officia magnam veritatis corrupti, architecto officiis deleniti !</p>
      </div>
     </section>
    </>
  )
}

export default App
