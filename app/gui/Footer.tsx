'use client'
import { FaSquareXTwitter, FaDiscord, FaGithub, FaBitcoin, FaEthereum } from "react-icons/fa6";
import { SiIpfs } from "react-icons/si";
import { RiNftFill } from "react-icons/ri";
import { motion } from "framer-motion";
export default function Footer() {
    return (
        <div className="bg-base-200">

            <div className="flex justify-center ">

                <footer className="footer max-w-screen-2xl  p-10  text-base-content">
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