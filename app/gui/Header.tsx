'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeSwap from "./ThemeSwap";
import { RiSettingsLine } from "react-icons/ri";
export default function Header() {
    const pathname = usePathname();
    return (
        <div className="Navbar_Header  flex justify-around">
            <div className="navbar bg-base-100 max-w-screen-2xl">

                <div className="navbar-start">{/* 左 */}

                    {/* 手机显示dropdown */}
                    <div className="dropdown">

                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <div tabIndex={0} role="button" className="btn  btn-square btn-sm btn-ghost sm:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div></motion.div>


                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
                            <li><LinkNavbar href='/' Name='Home' /></li>
                            <li><LinkNavbar href='/mint' Name='Mint' /></li>
                            <li><LinkNavbar href='/swap' Name='Swap' /></li>
                        </ul>
                    </div>


                    <Link href={'/'} className="text-xl font-bold">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <img src="/C_logo.png" alt="C_logo.png" className="w-10 h-10" />
                        </motion.div>
                    </Link>
                </div>


                {/* 手机隐藏navbar-center */}
                <div className="navbar-center hidden sm:flex">{/* 中 */}
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <li><LinkNavbar href='/' Name='Home' /></li>
                        <li><LinkNavbar href='/mint' Name='Mint' /></li>
                        <li><LinkNavbar href='/swap' Name='Swap' /></li>
                        <li><LinkNavbar href='/a' Name='a' /></li>
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
                                <RiSettingsLine size={'32'} />
                            </div>
                        </motion.div>

                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box sm:w-30 border">
                            <w3m-network-button />
                            <div className="divider"></div>
                            <ThemeSwap />
                        </ul>

                    </div>

                    <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
                        <w3m-button balance='hide' size="md" label="Connect" />
                    </motion.div>

                </div>

            </div>
        </div>
    )
}
function LinkNavbar({ href, Name }: any) {
    const pathname = usePathname();
    return (
        <Link href={href} className={`header_link font-bold ${pathname === `${href}` ? "active" : ""
            }`}>
            {Name}
        </Link>
    )
}