

export default function Products() {
  return (
    <div className=" min-h-[calc(100vh-85px)] flex justify-evenly items-center">

      <Cord src='/img/qiancset.png' name='Qiancset' text='去中心化的房屋租赁服务应用' />
      <Cord src='/img/vimcord.png' name='Vimcord' text='基于Lens协议开发的去中心化社交应用' />


    </div>
  )
}



function Cord({ src, name, text }: any) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl border">
      <figure><img src={src} alt={src} className=" w-96 h-96" /></figure>
      <div className="card-body border-t">
        <h2 className="card-title">{name}</h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">前往↗</button>
        </div>
      </div>
    </div>
  )
}