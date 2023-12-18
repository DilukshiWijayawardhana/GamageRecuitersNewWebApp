
import img4 from '../../../../public/img/re4.jpg';

export default function Herosection (){
    return (
      <div className='w-full h-screen'>
            <img
              className='left-0 object-cover w-full h-screen transition-transform shadow top-2'
              src={img4}
              alt='image'
            />
            <div className='absolute top-0 left-0 w-full h-screen bg-black/30' />

            <div className='absolute top-0 flex flex-col justify-center w-full h-full text-white'>


              <div className='mt-10 text-center '>
                <p>All Inclusive</p>
                <h1 className='text-5xl font-bold md:text-7xl drop-shadow-2xl'>
                  Our culture
                </h1>

                </div>

                <p className='py-2 text-xl text-center drop-shadow-2xl'>
                  Creating self driven
                </p>
                

          
        </div>
      </div>
    );
  };