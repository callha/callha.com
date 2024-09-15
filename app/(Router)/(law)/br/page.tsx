'use client'
import Image from 'next/image'
import 副图白底 from '@/public/logo/副图白底.png'
import 副图黑底 from '@/public/logo/副图黑底.png'
import 副图绿底 from '@/public/logo/副图绿底.png'
import 头像LOGO白底图 from '@/public/logo/头像LOGO白底图.png'
import 头像LOGO黑底图 from '@/public/logo/头像LOGO黑底图.png'
import 头像LOGO图 from '@/public/logo/头像LOGO图.png'
import 透明LOGO白色 from '@/public/logo/透明LOGO白色.png'
import 透明LOGO黑色 from '@/public/logo/透明LOGO黑色.png'
import 透明LOGO绿色 from '@/public/logo/透明LOGO绿色.png'

import 白底黑字Callha from '@/public/logoimg/白底黑字Callha.png'
import 白底绿字Callha from '@/public/logoimg/白底绿字Callha.png'
import 黑底白字Callhah from '@/public/logoimg/黑底白字Callhah.png'
import 黑底绿字Callha from '@/public/logoimg/黑底绿字Callha.png'
import Callha from '@/public/logoimg/Callha.png'
import Callha封面 from '@/public/logoimg/Callha封面.png'
import Callha透明白字 from '@/public/logoimg/Callha透明白字.png'
import Callha透明黑字 from '@/public/logoimg/Callha透明黑字.png'
import Callha透明绿字 from '@/public/logoimg/Callha透明绿字.png'

const logo = [
    副图白底,
    副图黑底,
    副图绿底,
    头像LOGO白底图,
    头像LOGO黑底图,
    头像LOGO图,
    透明LOGO白色,
    透明LOGO黑色,
    透明LOGO绿色,
];
const logosimg = [
    白底黑字Callha,
    白底绿字Callha,
    黑底白字Callhah,
    黑底绿字Callha,
    Callha,
    Callha封面,
    Callha透明白字,
    Callha透明黑字,
    Callha透明绿字,
];
export default function page() {
    return (
        <div className=' bg-stone-600 h-dvh  '>

            <div className='flex flex-col h-dvh justify-center  items-center'>

                <div className="flex flex-wrap justify-center">
                    {logo.map((logo, index) => (
                        <div key={index} className="p-4">
                            <Image src={logo} alt={`Logo ${index}`} className="w-24 h-24 object-contain" />
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center">
                    {logosimg.map((logosimg, index) => (
                        <div key={index} className="p-4">
                            <Image src={logosimg} alt={`Logo ${index}`} className="w-60 h-24 object-contain" />
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}