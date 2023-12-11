import Months from '@/components/Months'
import January from '@/components/calendar/January'
import Month from '@/components/calendar/Month'
import December from '@/components/calendar/december'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen w-screen bg-neutral-950 text-white">
      <div className="flex flex-col h-full">
        <div>
          <Months />
          <div className="grid grid-cols-12 w-screen p-3 cursor-pointer">
            <January />
            <Month />
            <div className="grid grid-cols-10">
              <div className="flex justify-center">
                <div className="h-9 w-0.5 bg-white"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-white group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-white group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-white group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-white group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-red-400 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
            </div>
            <div className="grid grid-cols-10">
              <div className="flex justify-center">
                <div className="h-9 w-0.5 bg-neutral-900"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
            </div>
            <div className="grid grid-cols-10">
              <div className="flex justify-center">
                <div className="h-9 w-0.5 bg-neutral-900"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
            </div>
            <div className="grid grid-cols-10">
              <div className="flex justify-center">
                <div className="h-9 w-0.5 bg-neutral-900"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
            </div>
            <div className="grid grid-cols-10">
              <div className="flex justify-center">
                <div className="h-9 w-0.5 bg-neutral-900"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
            </div>
            <div className="grid grid-cols-10">
              <div className="flex justify-center">
                <div className="h-9 w-0.5 bg-neutral-900"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
            </div>
            <div className="grid grid-cols-10">
              <div className="flex justify-center">
                <div className="h-9 w-0.5 bg-neutral-900"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
            </div>
            <div className="grid grid-cols-10">
              <div className="flex justify-center">
                <div className="h-9 w-0.5 bg-neutral-900"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
            </div>
            <div className="grid grid-cols-10">
              <div className="flex justify-center">
                <div className="h-9 w-0.5 bg-neutral-900"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
              <div className="group flex justify-center">
                <div className="h-6 w-0.5 bg-neutral-900 group-hover:bg-gradient-to-b group-hover:from-indigo-400 group-hover:to-pink-600 transform duration-100"></div>
              </div>
            </div>
            <December />
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className='p-3'>
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
      </div>
    </main>
  )
}
