'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeSwap from "./ThemeSwap";
import { RiSettingsLine } from "react-icons/ri";
import { FaStream } from "react-icons/fa";
export default function Header() {
    const pathname = usePathname();
    return (
        <div className="Navbar_Header justify-around sm:m-6 z-50  flex  fixed top-0 left-0 right-0 transition-transform duration-300 ">
            <div className="navbar bg-base-100 max-w-screen-xl mx-auto  shadow-md ">

                <div className="navbar-start flex sm:hidden">{/* 左 */}
                    <div className="drawer">

                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                        <div className="drawer-content">
                            <label htmlFor="my-drawer" className="drawer-overlay">
                                <div tabIndex={0} role="button" className="btn  btn-square btn-sm btn-ghost sm:hidden">
                                    <FaStream size={24} />
                                </div>
                            </label>
                        </div>

                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                <li><LinkNavbar href='/' Name='首页' /></li>
                                <li><LinkNavbar href='/products' Name='产品' /></li>
                                <li><LinkNavbar href='/blog' Name='博客' /></li>
                                <li><LinkNavbar href='/a' Name='测试' /></li>

                            </ul>
                        </div>

                    </div>
                </div>

                <Link href={'/'} className="navbar-center  flex sm:hidden">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <img src="/C_logo.png" alt="C_logo.png" className="w-10 h-10" />
                    </motion.div>
                </Link>
                <Link href={'/'} className="navbar-start  hidden sm:flex">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <img src="/C_logo.png" alt="C_logo.png" className="w-10 h-10" />
                    </motion.div>
                </Link>

                {/* 手机隐藏navbar-center */}
                <div className="navbar-center hidden sm:flex">{/* 中 */}
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <li><LinkNavbar href='/' Name='首页' /></li>
                        <li><LinkNavbar href='/products' Name='产品' /></li>
                        <li><LinkNavbar href='/blog' Name='博客' /></li>
                        <li><LinkNavbar href='/a' Name='测试' /></li>
                        {/*                     <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li> */}
                    </ul>
                </div>


                {/* 按钮 */}
                <div className="navbar-end">{/* 右 */}
                    <div className="dropdown dropdown-end">

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <div tabIndex={0} className="btn  btn-square btn-sm btn-ghost m-1">
                                <ThemeSwap />
                            </div>
                        </motion.div>


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