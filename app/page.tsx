
import Image from "next/image";
import A from "./_home/A";
import B from "./_home/B";
import Link from 'next/link';

export default function Home() {

  return (
    <main >

      <div className=" min-h-[calc(100vh-85px)]" style={{ backgroundImage: 'url(/repeated-square-dark.png)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" flex justify-center items-center text-center h-[calc(100vh-85px)] text-neutral-content">
          <div className="max-w-2xl ">
            <h1 className="mb-5 text-5xl sm:text-7xl font-bold text-white">
              <a className="text-[#C0E218]">CoinIPFS</a></h1>
            <p className="mb-5 text-white text-2xl">让互联网可拥有、可信任、有价值</p>
              <p className="mb-5 text-white text-2xl">
              探索创新的模式，构建理想主义的Web3</p>
            <Link role="button" className="btn btn-primary btn-outline mt-12 hover:text-[#3f1de7] text-2xl font-bold" href={'/products'}>团队产品</Link>
          </div>
        </div>
      </div>


    </main>
  );
}
