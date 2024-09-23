'use client'
import Link from 'next/link';
import Image from "next/image";
import A from "./_home/A";
import B from "./_home/B";
import C from "./_home/C";
import D from "./_home/D";
import E from "./_home/E";
import { RiAlertLine } from 'react-icons/ri';
import MediaLink from './gui/MediaLink';

export default function Home() {

  return (
    <main className=''>

      <div className=" min-h-[100vh]  relative isolate overflow-hidden" style={{ backgroundImage: 'url(/repeated-square-dark.png)' }}>
        <div className="hero-overlay bg-opacity-60"></div>


        <div className=" flex justify-center items-center text-center  h-[calc(100vh-69px)] text-neutral-content  flex-col-reverse">

          <div className="max-w-4xl ">
            <h1 className="text-4xl md:text-7xl font-bold text-white">
              <span className="text-[#C0E218]">CallHa </span>酷哈</h1>
            <h1 className="my-4 text-xl sm:text-2xl font-bold text-white">酷哈网络科技工作室</h1>
            <p className="px-2 mb-5 text-white text-xl md:text-2xl">让数据信息可拥有、可信任、有价值，构建<b className="">理想的Web3</b></p>


            <div className='mt-5 self-center flex gap-2 w-full sm:w-auto flex-col sm:flex-row justify-center px-12'>
              <Link role="button" className="btn btn-primary   hover:text-[#3f1de7] text-xl md:text-2xl font-bold rounded-full " href={'/products'}>业务范围 →</Link>
              <Link role="button" className="btn btn-primary  btn-outline  text-base-100 hover:text-[#3f1de7] text-xl md:text-2xl font-bold rounded-full" href={'https://callhanet.feishu.cn/share/base/form/shrcnKgHyUU905ToaA3BzzW5ZMd'} target='_blank'>联系我们 ↗</Link>
            </div>

          </div>

          <img src="/logo/透明LOGO绿色.png" alt="/logo/透明LOGO绿色.png" className=' image-full w-60  m-4' />

        </div>


        <Absolute />
      </div>




      <A />
      <B />
      <C />
      <D />
     {/*  <E /> */}


    </main>
  );
}





function Absolute() {
  return (
    <>
      <div className="absolute left-1/3 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/1000] w-[72.1875rem] bg-gradient-to-tr from-[#C0E218] to-[#3f1de7] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="absolute left-2/3 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/1155] w-[72.1875rem] bg-gradient-to-tr from-[#C0E218] to-[#C0E218] opacity-10"
          style={{
            clipPath:
              'polygon(14.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 87.5% 58.3%, 85.2% 14.5%, 27.5% 76.7%, 0.1% 14.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </>
  )
}