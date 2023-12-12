import Image from 'next/image'

const Footer = () => {
  return (
    <div className='flex items-center justify-between p-3'>
      <div className="flex items-center gap-x-3">
        <div className="relative w-10 h-10 bg-sky-200 rounded-full">
          <Image 
            src="/images/me.png"
            layout="fill"
            className='mt-1'
          />
        </div>
        <div>
          <h4 className='text-lg font-heading font-bold'>Austin Wasson</h4>
          <p className='-mt-1.5 text-sm text-neutral-400'>austinpwasson@gmail.com</p>
        </div>
      </div>
      <div className='flex items-center gap-x-1.5'>
        <div className="flex items-center h-9 px-3.5 bg-neutral-800 hover:bg-neutral-700 rounded-full cursor-pointer">Say hello 👋</div>
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700">98</div>
      </div>
    </div>
  )
}

export default Footer