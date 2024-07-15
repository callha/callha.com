'use client'
import Link from "next/link";
import { FaSquareXTwitter, FaDiscord, FaGithub, FaTiktok } from "react-icons/fa6";
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
                <footer className="footer max-w-screen-xl  p-10  text-base-content">
                    <aside>
                        <img src="/C_logo.png" alt="C_logo.png" className="w-12 h-12" />
                        <p>版权所有 © 2024<br />CallHa All Rights Reserved</p>
                        <p>ICP备案：桂ICP备20240709号-1</p>
                        <p>联系地址：广西河池</p>
                        <p>联系电话：123456789</p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">产品</h6>
                        <Link href="/" className="link link-hover" target='_blank'>Dapp↗</Link >
                        <Link href="/" className="link link-hover" target='_blank'>NFT↗</Link >
                    </nav>
                    <nav>
                        <h6 className="footer-title">业务</h6>
                        <Link href="/" className="link link-hover">教学培训</Link >
                        <Link href="/" className="link link-hover">信息咨询</Link >
                        <Link href="/" className="link link-hover">市场研究</Link >
                        <Link href="/" className="link link-hover">营销服务</Link >
                        <Link href="/" className="link link-hover">策划方案</Link >
                        <Link href="/" className="link link-hover">设计创意</Link >
                        <Link href="/" className="link link-hover">开发软件</Link >
                    </nav>
                    <nav>
                        <h6 className="footer-title">公司</h6>
                        <Link href="/about_us" className="link link-hover">关于我们</Link >
                        <Link href="/contact_us" className="link link-hover">联系我们</Link >
                        <Link href="/jobs" className="link link-hover">工作机会</Link >
                        <Link href="/blog" className="link link-hover">博客资料</Link >
                    </nav>
                    <nav>
                        <h6 className="footer-title">法律</h6>
                        <Link href="/terms_of_use" className="link link-hover">使用条款</Link >
                        <Link href="/privacy_policy" className="link link-hover">隐私策略</Link >
                        <Link href="/cookie_policy" className="link link-hover">Cookie政策</Link >
                        <Link href="/ipr" className="link link-hover">知识产权</Link >

                    </nav>
                </footer>
            </div>

            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">

                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <motion.div whileHover={{ scale: 1.05 }} >
                            <Link href="https://x.com/callha" target='_blank'>
                                <FaSquareXTwitter className="w-8 h-8" />
                            </Link >
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} >
                            <Link href="https://discord.com/callha" target='_blank'>
                                <FaDiscord className="w-8 h-8" />
                            </Link >
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} >
                            <Link href="https://github.com/callha" target='_blank'>
                                <FaGithub className="w-8 h-8" />
                            </Link >
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} >
                            <Link href="https://www.douyin.com/user/MS4wLjABAAAAJnJeg10T2H-qWzjz1QpIjUgBtUU2kXi-Y2MM2unaDC2VEzkvliDMqQQN3jZikXBG" target='_blank'>
                                <FaTiktok className="w-8 h-8" />
                            </Link >
                        </motion.div>
                    </div>
                </nav>
            </footer>


        </div >
    )
}