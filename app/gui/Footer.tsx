'use client'
import Link from "next/link";
import MediaLink from "./MediaLink";

export default function Footer() {
    return (
        <div className="bg-base-200">

            {/*             <div className="flex justify-center ">
                <footer className="footer max-w-screen-xl  p-10  text-base-content">
                    <aside>
                        <img src="/C_logo.png" alt="C_logo.png" className="w-12 h-12" />
                        <p>Copyright © 2024<br />CallHa All Rights Reserved</p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <Link href="/" className="link link-hover">Branding</Link >
                        <Link href="/" className="link link-hover">Design</Link >
                        <Link href="/" className="link link-hover">Marketing</Link >
                        <Link href="/" className="link link-hover">Advertisement</Link >
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <Link href="/" className="link link-hover">About us</Link >
                        <Link href="/" className="link link-hover">Contact</Link >
                        <Link href="/" className="link link-hover">Jobs</Link >
                        <Link href="/" className="link link-hover">Press kit</Link >
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <Link href="/" className="link link-hover">Terms of use</Link >
                        <Link href="/" className="link link-hover">Privacy policy</Link >
                        <Link href="/" className="link link-hover">Cookie policy</Link >
                    </nav>
                </footer>
            </div> */}
            <div className="flex justify-center ">
                <footer className="footer max-w-screen-xl p-6 lg:p-8  text-base-content">
                    <aside>
                        <img src="/logoimg/Callha透明绿字.png" alt="/logoimg/Callha透明绿字.png" className="w-full h-16" />
                    </aside>

                    <nav>
                        <h6 className="footer-title">产品</h6>
                        <Link href="https://coinipfs.com" className="link link-hover" target='_blank'>Hayi↗</Link >
                        <Link href="" className="link link-hover" target='_blank'>mintNFT↗</Link >
                    </nav>
                    <nav>
                        <h6 className="footer-title">服务</h6>
                        <Link href="/products/#教培" className="link link-hover">教学培训</Link >
                        <Link href="/products/#咨询" className="link link-hover">信息咨询</Link >
                        <Link href="/products/#市场" className="link link-hover">市场研究</Link >
                        <Link href="/products/#营销" className="link link-hover">营销服务</Link >
                        <Link href="/products/#策划" className="link link-hover">策划方案</Link >
                        <Link href="/products/#设计" className="link link-hover">设计创意</Link >
                        <Link href="/products/#开发" className="link link-hover">开发软件</Link >
                        <Link href="/products/#电商" className="link link-hover">抖音电商</Link >
                    </nav>
                    <nav>
                        <h6 className="footer-title">关于</h6>
                        <Link href="#about_us" className="link link-hover">关于我们</Link >
                        <Link href="/contact_us" className="link link-hover">联系我们</Link >
                        <Link href="/jobs" className="link link-hover">加入我们</Link >
                        <Link href="/blog" className="link link-hover">博客动态</Link >
                    </nav>
                    <nav>
                        <h6 className="footer-title">法律</h6>
                        <Link href="/cookie_policy" className="link link-hover">Cookie策略</Link >
                        <Link href="/terms_of_use" className="link link-hover">使用条款</Link >
                        <Link href="/privacy_policy" className="link link-hover">隐私策略</Link >
                        <Link href="/ipr" className="link link-hover">知识产权</Link >
                        <Link href="/br" className="link link-hover">品牌资产</Link >
                    </nav>
                    <form>
                        <h6 className="footer-title">联系</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text">输入您的电子邮箱</span>
                            </label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="cs@callha.com"
                                    className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item">订阅</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
            </div>
            <div className="flex justify-center border-t bg-base-200 text-base-content border-base-300 ">
                <div className=" footer max-w-screen-xl px-6 lg:px-8 py-4">
                    <div className="place-self-start ">
                        <p className="flex flex-col md:flex-row">酷哈网络科技工作室版权所有 <span> © 2024 Callha All Rights Reserved</span></p>
                        {/*                         <a href="https://beian.miit.gov.cn/" className="link link-hover" target='_blank'>桂ICP备*********号-**</a>
                        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=**********" className="link link-hover" target='_blank'>桂公安备********号</a> */}
                    </div>
                    <div className="place-self-start md:place-self-end ">
                        <div className="grid grid-flow-col gap-4">
                            <MediaLink />
                        </div>
                    </div>
                </div>
            </div >


        </div >
    )
}