
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
            <h1 className="mb-5 text-7xl font-bold text-white">
              <a className="text-[#C0E218] ">CoinIPFS</a> ERC404</h1>
            <p className="mb-5 text-white">Explore various applications of ERC404 as a new token standard</p>

            <Link className="btn btn-primary hover:text-[#3f1de7]" href={'/mint'}>Get mint</Link>
          </div>
        </div>
      </div>

      <A />
      <B />
    </main>
  );
}
