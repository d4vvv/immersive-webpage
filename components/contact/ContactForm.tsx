import Image from 'next/image'
import img from '../../public/img/undraw_delivery_address_03n0.svg'

export const ContactForm: React.FC = () => {
  return (
    <div className='w-full sm:max-w-[640] px-8 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:mx-w-[1536px] mx-auto max-lg:text-center flex min-h-[260px mt-20 flex-wrap'>
      <div className='basis-full lg:basis-1/3 px-4'>
        <Image
          src={img}
          className='max-lg:mx-auto w-3/5'
          alt='image of man with letter'
        />
      </div>
      <div className='basis-full max-lg:mt-16 lg:basis-2/3'>
        <form
          action='mailto:contact@medforcegroup.com'
          className='flex flex-col gap-4'
          method='post'
        >
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='exampleFormControlInput1'
              className='font-Lexend font-medium text-start'
            >
              Email address
            </label>
            <input
              type='email'
              className='py-2 px-3 text-[#495057] border-[1px] border-[#ced4da] rounded-[4px] focus:border-[#ECB5F5] focus:outline-[#ECB5F5] transition-all duration-300'
              id='exampleFormControlInput1'
              placeholder='name@mail.com'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='exampleFormControlTextarea1'
              className='font-Lexend font-medium text-start'
            >
              Message
            </label>
            <textarea
              className='py-2 px-3 text-[#495057] border-[1px] border-[#ced4da] rounded-[4px] focus:border-[#ECB5F5] focus:outline-[#ECB5F5] transition-all duration-300'
              id='exampleFormControlTextarea1'
            ></textarea>
          </div>
          <div className='btn-container'>
            <button
              type='submit'
              className='font-medium font-Lexend border-[#f23cfa] border-4 h-10 rounded-full text-[#f23cfa] px-8 hover:bg-[#f23cfa] hover:text-white transition-all duration-300'
              name='button'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
