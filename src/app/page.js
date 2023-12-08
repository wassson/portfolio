import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen w-screen py-12 bg-neutral-950 text-white">
      <div className="grid grid-cols-6">
        <div className="flex flex-col gap-y-3 col-span-2 col-start-3">
          <div className="p-3 bg-neutral-900 rounded-xl">
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
          </div>
          <h4 className='-mb-1.5 ml-3 font-heading font-bold'>🤖 Code</h4>
          <div className="p-3 bg-neutral-900 rounded-xl">
            <div className="flex items-center gap-x-3">
            <div className="relative w-10 h-10 bg-neutral-700 rounded-full">
                <Image 
                  src="/icons/github-icon-white.png"
                  layout="fill"
                  className='p-1.5'
                />
              </div>
              <div>
                <h4 className='text-lg font-heading font-bold'><span className='text-neutral-400'>wassson/</span>tailor</h4>
                <p className='-mt-1.5 text-sm'>Code reviews from the command line.</p>
              </div>
            </div>
          </div>
          <div className="p-3 bg-neutral-900 rounded-xl">
            <div className="flex items-center gap-x-3">
              <div className="relative w-10 h-10 bg-neutral-700 rounded-full">
                <Image 
                  src="/icons/github-icon-white.png"
                  layout="fill"
                  className='p-1.5'
                />
              </div>
              <div>
                <h4 className='text-lg font-heading font-bold'><span className='text-neutral-400'>wassson/</span>tik</h4>
                <p className='-mt-1.5 text-sm'>An experiment in version control.</p>
              </div>
            </div>
          </div>
          <div className="p-3 bg-neutral-900 rounded-xl">
            <div className="flex items-center gap-x-3">
              <div className="relative w-10 h-10 bg-neutral-700 rounded-full">
                <Image 
                  src="/icons/github-icon-white.png"
                  layout="fill"
                  className='p-1.5'
                />
              </div>
              <div>
                <h4 className='text-lg font-heading font-bold'><span className='text-neutral-400'>wassson/</span>commonk</h4>
                <p className='-mt-1.5 text-sm'>Plug and play command palette.</p>
              </div>
            </div>
          </div>
          <h4 className='-mb-1.5 ml-3 font-heading font-bold'>✏️ Writing</h4>
          <div className="p-3 bg-neutral-900 rounded-xl">
            <div className="flex items-center gap-x-3">
            <div className="relative w-10 h-10 bg-neutral-700 rounded-full">
                <Image 
                  src="/icons/github-icon-white.png"
                  layout="fill"
                  className='p-1.5'
                />
              </div>
              <div>
                <h4 className='text-lg font-heading font-bold'><span className='text-neutral-400'>wassson/</span>tailor</h4>
                <p className='-mt-1.5 text-sm'>Code reviews from the command line.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
