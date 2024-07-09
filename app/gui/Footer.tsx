'use client'
import { FaSquareXTwitter, FaDiscord, FaGithub, FaBitcoin, FaEthereum } from "react-icons/fa6";
import { SiIpfs } from "react-icons/si";
import { RiNftFill } from "react-icons/ri";
import { motion } from "framer-motion";
export default function Footer() {
    return (
        <div className="bg-base-200">

            {/*             <div className="flex justify-center ">
                <footer className="footer max-w-screen-xl  p-10  text-base-content">
                    <aside>
                        <img src="/C_logo.png" alt="C_logo.png" className="w-12 h-12" />
                        <p>Copyright © 2024<br />CoinIPFS All Rights Reserved</p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div> */}
            <div className="flex justify-center ">
                <footer className="footer max-w-screen-xl  p-10  text-base-content">
                    <aside>
                        <img src="/C_logo.png" alt="C_logo.png" className="w-12 h-12" />
                        <p>版权所有 © 2024<br />CoinIPFS All Rights Reserved</p>
                        <p>ICP备案：桂ICP备20240709号-1</p>
                        <p>联系地址：广西河池</p>
                        <p>联系电话：123456789</p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">产品</h6>
                        <a className="link link-hover" target='_blank'>Dapp↗</a>
                        <a className="link link-hover" target='_blank'>NFT↗</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">业务</h6>
                        <a className="link link-hover">教学培训</a>
                        <a className="link link-hover">信息咨询</a>
                        <a className="link link-hover">市场研究</a>
                        <a className="link link-hover">营销服务</a>
                        <a className="link link-hover">策划方案</a>
                        <a className="link link-hover">设计创意</a>
                        <a className="link link-hover">开发软件</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">公司</h6>
                        <a href="/about_us" className="link link-hover">关于我们</a>
                        <a href="/contact_us" className="link link-hover">联系我们</a>
                        <a href="/jobs" className="link link-hover">工作机会</a>
                        <a href="/blog" className="link link-hover">博客资料</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">法律</h6>
                        <a href="/terms_of_use" className="link link-hover">使用条款</a>
                        <a href="/privacy_policy" className="link link-hover">隐私策略</a>
                        <a href="/cookie_policy" className="link link-hover">Cookie政策</a>
                        <a href="/ipr" className="link link-hover">知识产权</a>

                    </nav>
                </footer>
            </div>

            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">

                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <motion.div whileHover={{ scale: 1.05 }} ><a><FaSquareXTwitter className="w-8 h-8" /></a></motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} ><a><FaDiscord className="w-8 h-8" /></a></motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} > <a><FaGithub className="w-8 h-8" /></a></motion.div>
                    </div>
                </nav>
            </footer>


        </div >
    )
}