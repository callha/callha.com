'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeSwap from "./ThemeSwap";
import { RiCloseLargeFill, RiMenuFill } from "react-icons/ri";
import Image from "next/image";
export default function Header() {
    const pathname = usePathname();
    return (
        <div className="Navbar_Header justify-around  z-50  flex  fixed top-0 left-0 right-0 transition-transform duration-300">
            <div className="navbar bg-base-200 md:border-4 max-w-screen-xl mx-auto  shadow-md ">

                <div className="navbar-start">{/* 左 */}
                    <Link href={'/'} className="">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Image src="/头像LOGO图.png" alt="头像LOGO图.png" width={40} height={40} className=" rounded-full"/>
                        </motion.div>
                    </Link>
                </div>

                {/* 手机隐藏navbar-center */}
                <div className="navbar-center hidden md:flex">{/* 中 */}
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <li><LinkNavbar href='/' Name='首页' /></li>
                        <li><LinkNavbar href='/products' Name='业务' /></li>
                        <li><LinkNavbar href='/a' Name='案例' /></li>
                        <li><LinkNavbar href='/blog' Name='博客' /></li>
                        <li><LinkNavbar href='/a' Name='测试' /></li>
                        {/*                         <li>
                            <details className="header_link font-bold text-xl">
                                <summary>Parent</summary>
                                <ul className="p-2 border">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li> */}
                    </ul>
                </div>


                {/* 按钮 */}
                <div className="navbar-end">{/* 右 */}
                    <div className="dropdown dropdown-end flex-row flex gap-2">

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <div tabIndex={0} className="btn  btn-square btn-sm btn-ghost ">
                                <ThemeSwap />
                            </div>
                        </motion.div>

                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle " />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer" className="drawer-overlay drawer-button btn  btn-square btn-sm btn-ghost md:hidden swap swap-flip">
                              
                              
                                            <RiMenuFill className=" w-7 h-7 swap-off" />
                                            <RiCloseLargeFill className=" w-7 h-7 swap-on" />
                                   
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                    <li><LinkNavbar href='/' Name='首页' /></li>
                                    <li><LinkNavbar href='/products' Name='业务' /></li>
                                    <li><LinkNavbar href='/a' Name='案例' /></li>
                                    <li><LinkNavbar href='/blog' Name='博客' /></li>
                                    <li><LinkNavbar href='/a' Name='测试' /></li>
                                </ul>
                            </div>
                        </div>



                    </div>



                </div>

            </div>
        </div>
    )
}
function LinkNavbar({ href, Name }: any) {
    const pathname = usePathname();
    return (
        <Link href={href} className={`header_link font-bold text-xl ${pathname === `${href}` ? "active" : ""
            }`}>
            {Name}
        </Link>
    )
}