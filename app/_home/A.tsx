'use client'
import { useTranslations } from "next-intl";
import Link from "next/link"




export default function Example() {
  const t = useTranslations();
  const people = [
    {
      href: '/products/#coolha.top',
      title: 'coolha.top',
    },
    {
      href: '/products/#Qiancset',
      title: 'Qiancset',
    },
    {
      href: '/products/#教培',
      title: t('教培'),
    },
    {
      href: '/products/#咨询',
      title: t('咨询'),
    },
    {
      href: '/products/#开发',
      title: t('开发'),
    },
    {
      href: '/products/#电商',
      title: t('电商'),
    },
    {
      href: '/products/#市场',
      title: t('市场'),
    },
    {
      href: '/products/#营销',
      title: t('营销'),
    },
    {
      href: '/products/#策划',
      title: t('策划'),
    },
    {
      href: '/products/#设计',
      title: t('设计'),
    }
  ]
  return (
    <div className="bg-[base-100] py-24 sm:py-32 ">
      <div className="mx-auto max-w-4xl lg:text-center  px-6 lg:px-8">


        <h1 className="text-xl font-semibold leading-7 text-info">{t('产品服务')}</h1>


        <div className="mx-auto mt-16 max-w-2xl sm:mt-12 md:max-w-2xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-5 gap-y-5 md:max-w-none md:grid-cols-2">

            {people.map((person) => (
              <Link href={person.href} className="btn  btn-primary btn-active text-2xl hover:text-secondary">{person.title} →</Link>
            ))}


          </dl>
        </div>





      </div>
    </div>
  )
}
