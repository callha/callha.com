'use client'
import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import { FaDiscord, FaGithub, FaSquareXTwitter, FaTelegram, FaTiktok } from 'react-icons/fa6';
import { RiWechatFill, RiWeiboFill } from "react-icons/ri";
export default function MediaLink() {
  const [showImage, setShowImage] = useState(false);

  const handleHover = () => {
    setShowImage(true);
  };

  const handleMouseOut = () => {
    setShowImage(false);
  };
  return (
    <>
      {/*       <motion.div 
        onTouchStart={handleHover}
        onTouchEnd={handleMouseOut}
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
       >
        {showImage && <img src="/img/扫码_搜索联合传播样式-标准色版.png" className=" absolute  bottom-24 w-2/3 md:w-2/6" alt="Hover Image" />}

        <b  className=" hover:text-info tooltip" data-tip='公众号:酷哈网络科技'>
          <RiWechatFill className="w-8 h-8" />
        </b>
      </motion.div> */}



      <motion.div whileHover={{ scale: 1.2 }} >
        <Link href="https://weibo.com/u/5902341253" target='_blank'>
          <RiWeiboFill className="w-8 h-8" />
        </Link >
      </motion.div>

      <motion.div whileHover={{ scale: 1.2 }} >
        <Link href="https://x.com/callha_web3" target='_blank' >
          <FaSquareXTwitter className="w-8 h-8" />
        </Link >
      </motion.div>

      <motion.div whileHover={{ scale: 1.2 }} >
        <Link href="https://t.me/callha_web3" target='_blank' >
          <FaTelegram className="w-8 h-8" />
        </Link >
      </motion.div>

{/*       <motion.div whileHover={{ scale: 1.2 }} >
        <Link href="https://www.tiktok.com/@callha.com" target='_blank' >
          <FaTiktok className="w-8 h-8" />
        </Link >
      </motion.div> */}
      
      <motion.div whileHover={{ scale: 1.2 }} >
        <Link href="https://github.com/callha" target='_blank' >
          <FaGithub className="w-8 h-8" />
        </Link >
      </motion.div>

{/*       <motion.div whileHover={{ scale: 1.2 }} >
        <Link href="https://share.lens.xyz/u/lens/callha" target='_blank' >
          <Image 
            src="/Icon-T-White_@2x.png"
            alt="Lens-Black"
            className={` hover:bg-primary rounded-full`}
            width={26} height={26}
          />
        </Link >
      </motion.div> */}
    </>
  )
}

const ThemeImage = (props) => {
  const { srcLight, srcDark, ...rest } = props

  return (
    <>
      <Image {...rest}
        src="/Icon-T-Black_@2x.png"
        alt="Lens-Black"
        className={`flex dark:hidden hover:bg-primary rounded-lg`}
        width={24} height={24}
      />
      <Image {...rest}
        src="/Icon-T-White_@2x.png"
        alt="Lens-White"
        className={` hidden dark:flex hover:bg-primary rounded-lg`}
        width={24} height={24}
      />
    </>
  )
}