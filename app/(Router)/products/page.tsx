'use client'
import { useTranslations } from "next-intl";
import Link from "next/link"


export default function Products() {
  const t = useTranslations();

  return (
    <div className="py-12 ">
      <div className="mx-auto max-w-7xl lg:px-8  ">


        <h1 className="text-xl font-semibold leading-7 text-info text-center">{t('产品')}</h1>
        <div className=" flex justify-evenly items-center md:flex-row flex-col px-4 gap-8">

          <div id='coolha.top' className="card card-compact bg-base-100 shadow-xl border w-full max-w-96 h-auto mt-4">
            <figure><img src='/img/coinipfs.png' alt='HaYi' className=" w-full h-auto" /></figure>
            <div className="card-body border-t ">
              <h2 className="card-title">coolha.top</h2>
              <p>{t('基于Lens协议开发的去中心化社交应用')}, {t('开发中仅测试用')}</p>
              <div className="card-actions justify-end">
                <Link href='https://coolha.top' className="btn btn-primary hover:text-secondary text-lg" target='_blank'>{t('前往')}↗</Link>
              </div>
            </div>
          </div>

          <div id='Qiancset' className="card card-compact bg-base-100 shadow-xl border w-full max-w-96 h-auto mt-4">
            <figure><img src='/img/qiancset.png' alt='Qiancset' className="w-full h-auto" /></figure>
            <div className="card-body border-t break-words text-wrap ">
              <h2 className="card-title">Qiancset</h2>
              <p>{t('去中心化的房屋租赁服务应用')}, {t('域名过期')}</p>
              <div className="card-actions justify-end">
                <Link href='/products#Qiancset' className="btn btn-primary btn-disabled hover:text-secondary text-lg" target='_blank'>{t('敬请期待')}</Link>
              </div>
            </div>
          </div>

        </div>


        <h1 className="text-xl font-semibold leading-7 text-info text-center mt-32">{t('服务')}</h1>
        <div className=" md:grid grid-cols-2 gap-8 sm:flex-row flex-col px-4">
          <Cord src='/img/1教培.png' name={t('教培')} text={t('学习行业理论知识，提供入门问题解答，工具使用，技术学习推荐，空投产品交互指导。')} />
          <Cord src='/img/2咨询.png' name={t('咨询')} text={t('行业交流,技术应用探索,商业模式研究')} />

          <Cord src='/img/7开发.png' name={t('开发')} text={t('DAPP、前端网站、EVM智能合约solidify、UI/UX设计、产品架构，区块链应用技术')} />
          <Cord src='/img/8电商.jpg' name={t('电商')} text={t('抖音电商，购买你喜欢的商品或服务')} />

          <Cord src='/img/3市场.png' name={t('市场')} text={t('市场研究报告,数据分析,技术研究文章等')} />
          <Cord src='/img/4营销.png' name={t('营销')} text={t('广告流量,NFT营销方案等技术,为创作者和企业提供创收方案')} />

          <Cord src='/img/5策划.png' name={t('策划')} text={t('Web3商业模式研究，为您提供市场研究、营销策划方案、内容创意、品牌策划、企业形象设计等')} />
          <Cord src='/img/6设计.png' name={t('设计')} text={t('logo标志、广告图、海报图、插画图、产品外包装、名片、贺卡、邀请函等，数字产品UX/UI设计')} />
        </div>


      </div>
    </div>
  )
}



function Cord({ src, name, text, href }: any) {
  const t = useTranslations();
  return (
    <div id={name} className="card card-compact bg-base-100 shadow-xl border h-auto mt-4">
      <figure><img src={src} alt={src} className="w-full h-auto " /></figure>
      <div className="card-body border-t">
        <h2 className="card-title">{name}</h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <Link href='https://callhanet.feishu.cn/share/base/form/shrcnKgHyUU905ToaA3BzzW5ZMd' className="btn btn-primary hover:text-secondary text-lg" target='_blank' >{t('联系我们')}↗</Link>
        </div>
      </div>
    </div>
  )
}