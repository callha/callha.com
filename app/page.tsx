'use client'
import Link from 'next/link';
import Image from "next/image";
import A from "./_home/A";
import B from "./_home/B";
import C from "./_home/C";
import E from "./_home/E";
import D from "./_home/D";
import { motion } from 'framer-motion';

export default function Home() {

  return (
    <main className=''>

      <div className=" min-h-[100vh] relative isolate overflow-hidden" style={{ backgroundImage: 'url(/repeated-square-dark.png)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" flex justify-center items-center text-center  lg:text-left h-[calc(100vh-69px)] text-neutral-content lg:flex-row flex-col-reverse">
          <div className="max-w-2xl ">
            <h1 className="mb-16 text-5xl sm:text-7xl font-bold text-white">
              <a className="text-[#C0E218]">CoinIPFS</a></h1>

            <p className="mb-5 text-white text-2xl">让数据信息可拥有、可信任、有价值</p>

            <p className="mb-5 text-white text-2xl">探索创新构建的<b className="text-[#3f1de7]">理想Web3</b></p>

            <p className="mb-5 text-white">Web3发展至今不仅仅是技术，更是一种能延伸到各领域的积极理念</p>

            <Link role="button" className="btn btn-primary mt-12 hover:text-[#3f1de7] text-2xl font-bold" href={'/products'}>产品服务 →</Link>

            <Link role="button" className="btn btn-primary btn-outline mt-12 ml-12 text-[#C0E218] hover:text-[#3f1de7] text-2xl font-bold" href={'/products'}>联系我们 →</Link>
          </div>

          <motion.div
            animate={{ x: 100 }}
            transition={{ type: "spring", stiffness: 100 }}
          > <img src="/C_logo.png" alt="C_logo.png" className=' image-full w-60 lg:w-96 m-4 lg:ml-32' /></motion.div>

        </div>

        <Absolute />

      </div>

      <A />
      <B />
      <C />
      <D />
      <E />


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