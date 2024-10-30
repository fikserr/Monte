import one from '../images/one.webp'
import two from '../images/two.webp'
import three from '../images/three.webp'
import four from '../images/four.webp'
import five from '../images/five.webp'
import six from '../images/six.webp'
import seven from '../images/seven.webp'
import eight from '../images/eight.webp'
import nine from '../images/nine.webp'
import ten from '../images/ten.webp'
import eleven from '../images/eleven.webp'
import twelve from '../images/twelve.webp'

function Property() {
  return (
    <div className='container flex flex-col justify-center py-20 '>
      <div className=' w-full flex justify-center'>
        <h1 className='w-[500px] text-center text-5xl '>Discover Your Ideal Property Type</h1>
      </div>
      <div className='w-full  grid grid-cols-2 px-3 pt-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        <div>
          <div className='w-[98%] h-[15%] mt-3 sm:h-[20%] sm:mt-60 lg:mt-64'>
            <img className='w-full h-full rounded-lg object-cover' src={one} alt="" />
          </div>
          <div className='w-[98%] h-[10%] mt-1 sm:mt-80 sm:hidden '>
            <img className='w-full h-full rounded-lg object-cover' src={six} alt="" />
          </div>
          <div className='w-[98%] h-[10%] mt-1 sm:hidden'>
            <img className='w-full h-full rounded-lg object-cover' src={eleven} alt="" />
          </div>
          <div className='w-[98%] h-[15%] mt-1 sm:hidden'>
            <img className='w-full h-full rounded-lg object-cover' src={four} alt="" />
          </div>
          <div className='w-[98%] h-[15%] mt-1 sm:h-[30%]'>
            <img className='w-full h-full rounded-lg object-cover' src={two} alt="" />
          </div>
          <div className='w-[98%] h-[10%] mt-1 sm:hidden'>
            <img className='w-full h-full rounded-lg object-cover' src={ten} alt="" />
          </div>
        </div>
        <div>
          <div className='w-[98%] h-[10%] mt-14 sm:h-[30%]'>
            <img className='w-full h-full rounded-lg object-cover' src={three} alt="" />
          </div>
          <div className='w-[98%] h-[15%] mt-1 sm:h-[30%]'>
            <img className='w-full h-full rounded-lg object-cover' src={four} alt="" />
          </div>
          <div className='w-[98%] h-[10%] mt-1 sm:h-[20%]'>
            <img className='w-full h-full rounded-lg object-cover' src={five} alt="" />
          </div>
          <div className='w-[98%] h-[15%] mt-1 sm:hidden'>
            <img className='w-full h-full rounded-lg object-cover' src={seven} alt="" />
          </div>
          <div className='w-[98%] h-[10%] mt-1 sm:hidden'>
            <img className='w-full h-full rounded-lg object-cover' src={five} alt="" />
          </div>
          <div className='w-[98%] h-[15%] mt-1 sm:hidden'>
            <img className='w-full h-full rounded-lg object-cover' src={twelve} alt="" />
          </div>
        </div>
        <div className='hidden sm:block'>
          <div className='w-[98%] h-[20%] mt-36'>
            <img className='w-full h-full rounded-lg object-cover' src={six} alt="" />
          </div>
          <div className='w-[98%] h-[18%] mt-1 sm:h-[30%]'>
            <img className='w-full h-full rounded-lg object-cover' src={seven} alt="" />
          </div>
          <div className='w-[98%] h-[20%] mt-1'>
            <img className='w-full h-full rounded-lg object-cover' src={two} alt="" />
          </div>
        </div>
        <div className='hidden lg:block'>
          <div className='w-[98%] h-[18%] mt-14 lg:h-[30%]'>
            <img className='w-full h-full rounded-lg object-cover' src={eight} alt="" />
          </div>
          <div className='lg:w-[98%] h-[20%] mt-1'>
            <img className='w-full h-full rounded-lg object-cover' src={nine} alt="" />
          </div>
          <div className='lg:w-[98%] h-[18%] mt-1 lg:h-[30%]'>
            <img className='w-full h-full rounded-lg object-cover' src={ten} alt="" />
          </div>
        </div>
        <div className='hidden xl:block'>
          <div className='w-[98%] h-[18%] mt-64 lg:h-[30%]'>
            <img className='w-full h-full rounded-lg object-cover' src={eleven} alt="" />
          </div>
          <div className='lg:w-[98%] h-[20%] mt-1'>
            <img className='w-full h-full rounded-lg object-cover' src={twelve} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Property