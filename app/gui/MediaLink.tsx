'use client'

import { motion } from "framer-motion"
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
      <motion.div 
        onTouchStart={handleHover}
        onTouchEnd={handleMouseOut}
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
       >
        {showImage && <img src="/img/扫码_搜索联合传播样式-标准色版.png" className=" absolute  bottom-24 w-2/3 md:w-2/6" alt="Hover Image" />}

        <b  className=" hover:text-info tooltip" data-tip='公众号:酷哈网络科技'>
          <RiWechatFill className="w-8 h-8" />
        </b>
      </motion.div>

      <motion.div whileHover={{ scale: 1.2 }} >
        <Link href="https://www.douyin.com/user/MS4wLjABAAAAJnJeg10T2H-qWzjz1QpIjUgBtUU2kXi-Y2MM2unaDC2VEzkvliDMqQQN3jZikXBG" target='_blank' /* className="tooltip" data-tip="www.douyin.com/user/callha" */>
          <FaTiktok className="w-8 h-8" />
        </Link >
      </motion.div>

      <motion.div whileHover={{ scale: 1.2 }} >
        <Link href="https://weibo.com/u/5902341253" target='_blank'/*  className="tooltip" data-tip="weibo.com/u/5902341253" */>
          <RiWeiboFill className="w-8 h-8" />
        </Link >
      </motion.div>

      <motion.div whileHover={{ scale: 1.2 }} >
        <Link href="https://x.com/callha_web3" target='_blank' /* className="tooltip" data-tip="x.com/callha_web3" */>
          <FaSquareXTwitter className="w-8 h-8" />
        </Link >
      </motion.div>

    </>
  )
}