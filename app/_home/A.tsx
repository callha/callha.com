import { FaBtc ,FaEthereum,FaCommentsDollar ,FaDonate  } from "react-icons/fa";

const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: FaBtc,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: FaEthereum,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
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


        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#C0E218]">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-[#6a6a6a]">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>



        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-5 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-20 shadow-md p-6 bg-[#C0E218]">
                <dt className=" text-base font-semibold leading-7 text-[#000]">
                  <div className="absolute left-5 top-7 flex h-10 w-10 items-center justify-center rounded-lg bg-[#C0E218]">
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
