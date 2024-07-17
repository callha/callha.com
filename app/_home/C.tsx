import { FaBtc, FaEthereum, FaCommentsDollar, FaDonate } from "react-icons/fa";
import { RiAlertLine } from "react-icons/ri";

const features = [
  {
    name: '使命',
    description:
      '让数据信息可拥有、可信任、有价值',
    icon: FaBtc,
  },
  {
    name: '愿景',
    description:
      '为推动互联网进步，创造激动人心的产品',
    icon: FaEthereum,
  },
  {
    name: '价值观',
    description:
      '秉持开放、自由、平等、创新、包容的理念，始终以用户为核心的价值观，不希望利益化和过度金融化，所有收益合理分配',
    icon: FaCommentsDollar,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FaDonate,
  },
]

export default function Example() {
  return (
    <div className="bg-[base-100] py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">



        <div className="mx-auto max-w-4xl lg:text-center">

          <h1 className="text-xl font-semibold leading-7 text-info">关于我们</h1>
          <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
            我们来自用户，既是构建者，也是拥有者
          </p>
          <p className="mt-6 text-lg leading-8 text-[#6a6a6a]">
            CallHa Labs 出自中国，遵守当地法律制度及不同地区的法律制度前提下，探索创新技术和实验
            <br />
            由世界各地不同地区的人组建的公共组织，产品和服务由 CallHa Labs 引领，社区共同参与治理
            <br />
            希望探索出符合社会主义和向共产主义前进的技术和理论，不仅仅为互联网进步，更希望为世界文明进步做贡献
            <br />

          </p>
        </div>



        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 md:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-5 md:max-w-none md:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-20 shadow-md p-6 bg-[#C0E218]">
                <dt className=" text-base font-semibold leading-7 text-[#000]">
                  <div className="absolute left-5 top-7 flex h-10 w-10 items-start  rounded-lg bg-[#C0E218]">
                    <feature.icon className="h-6 w-6 text-[#3f1de7]" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-neutral-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>






      </div>
    </div>
  )
}
