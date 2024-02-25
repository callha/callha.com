'use client'

import Link from "next/link";
import { useTheme } from "next-themes"
import { RiSettingsLine, RiMoonLine, RiSunLine } from "react-icons/ri";
export default function Header() {
    const { theme, setTheme } = useTheme()
    return (

        <div className="navbar bg-base-100 ">


            <div className="navbar-start">{/* 左 */}

                {/* 手机显示dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn  btn-square btn-sm btn-ghost sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/mint'}>Mint</Link></li>
                        <li><Link href={'/swap'}>Swap</Link></li>
                    </ul>
                </div>

                <Link href={'/'} className="text-xl font-bold">ERC404</Link>
            </div>

            {/* 手机隐藏navbar-center */}
            <div className="navbar-center hidden sm:flex">{/* 中 */}
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={'/'} className="font-bold">Home</Link></li>
                    <li><Link href={'/mint'} className="font-bold">Mint</Link></li>
                    <li><Link href={'/swap'} className="font-bold">Swap</Link></li>
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
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} className="btn  btn-square btn-sm btn-ghost m-1">
                        <RiSettingsLine size={'32'} />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                        <w3m-network-button />
                        <aside className="items-center grid-flow-col">
                            <label className="swap swap-rotate justify-center">
                                <input type="checkbox" className="theme-controller" value="synthwave" />

                                <RiSunLine className="swap-on fill-current w-7 h-7" onClick={() => setTheme('dark')} />

                                <RiMoonLine className="swap-off fill-current w-7 h-7" onClick={() => setTheme('light')} />

                            </label>
                        </aside>
                    </ul>
                </div>

                <w3m-button balance='hide' size="md" label="Connect" />


            </div>

        </div>
    )
}