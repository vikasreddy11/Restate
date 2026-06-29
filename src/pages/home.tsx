import hyd2 from "../assets/hyd2.jpeg"

export function Home () {
    return (
        <div><div className='bg-cya-400 h-20 flex justify-between items-center p-8 text-'>
        <div className='text-4xl text-black mx-40 '>Restate</div>
        <div className=' flex '>
          <div className='text-xl m-2'>Buy</div>
          <div className='text-xl m-2'>House prices</div>
          <div className='text-xl m-2'>Rent</div>
          <div className='text-xl m-2'>Find Agent</div>
          <div className='text-xl m-2'>Mortage</div>
          <div className='text-xl m-2 text-black'>Login/Sign-in</div>
        </div>
        
      </div >
        <div className='flex justify-center '>
          <img src={hyd2}
          className='rounded-4xl m-5  shadow-lg' />
        </div>
      </div>
    )
}