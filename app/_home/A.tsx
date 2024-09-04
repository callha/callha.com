'use client'
import Link from "next/link"

const people = [
  {
    href: '/products/#HaYi',
    title: 'HaYi',
  },
  {
    href: '/products/#Qiancset',
    title: 'Qiancset',
  },
  {
    href: '/products/#教培',
    title: '教培',
  },
  {
    href: '/products/#咨询',
    title: '咨询',
  },
  {
    href: '/products/#市场',
    title: '市场',
  },
  {
    href: '/products/#营销',
    title: '营销',
  },
  {
    href: '/products/#策划',
    title: '策划',
  },
  {
    href: '/products/#设计',
    title: '设计',
  },
  {
    href: '/products/#开发',
    title: '开发',
  },
  {
    href:'/products/#电商',
    title:'电商'
  }
]


export default function Example() {
  return (
    <div className="bg-[base-100] py-24 sm:py-32 ">
      <div className="mx-auto max-w-4xl lg:text-center  px-6 lg:px-8">


        <h1 className="text-xl font-semibold leading-7 text-info">产品服务</h1>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-12 md:max-w-2xl">
          Web3服务体系
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-12 md:max-w-2xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-5 gap-y-5 md:max-w-none md:grid-cols-2">

            {people.map((person) => (
              <Link href={person.href} className="btn btn-primary btn-active text-xl hover:text-secondary">{person.title} →</Link>
            ))}


          </dl>
        </div>





      </div>
    </div>
  )
}
