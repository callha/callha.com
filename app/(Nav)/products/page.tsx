import Link from "next/link"


export default function Products() {
  return (
    <div className=" py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl lg:px-8  ">


        <h1 className="text-xl font-semibold leading-7 text-info text-center">产品</h1>
        <div className=" flex justify-evenly items-center sm:flex-row flex-col ">
          <Cord src='/img/qiancset.png' name='Qiancset' href='https://qiancset.com' text='去中心化的房屋租赁服务应用 (域名过期...)' />
          <Cord src='/img/coinipfs.png' name='HaYi' href='https://coinipfs.com' text='基于Lens协议开发的去中心化社交应用 (开发中...)' />
        </div>

        <h1 className="text-xl font-semibold leading-7 text-info text-center mt-32">服务</h1>
        <div className=" flex justify-evenly items-center sm:flex-row flex-col ">
          <Cord src='/img/qiancset.png' name='Qiancset' href='https://qiancset.com' text='去中心化的房屋租赁服务应用 (域名过期...)' />
          <Cord src='/img/coinipfs.png' name='HaYi' href='https://coinipfs.com' text='基于Lens协议开发的去中心化社交应用 (开发中...)' />
        </div>


      </div>
    </div>
  )
}



function Cord({ src, name, text, href }: any) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl border  w-full md:w-96 mt-4">
      <figure><img src={src} alt={src} className=" w-96 h-96" /></figure>
      <div className="card-body border-t">
        <h2 className="card-title">{name}</h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <Link href={href} className="btn btn-primary" target='_blank'>前往↗</Link>
        </div>
      </div>
    </div>
  )
}