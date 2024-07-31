'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react";
import { FaDiscord, FaGithub, FaSquareXTwitter, FaTelegram, FaTiktok } from 'react-icons/fa6';
import { RiWechatFill, RiWeiboFill } from "react-icons/ri";
export default function MediaLink() {
  return (
    <>

      <motion.div whileHover={{ scale: 1.2 }} >
        <Link href="https://x.com/callha_web3" target='_blank' className="tooltip" data-tip="x.com/callha_web3">
          <FaSquareXTwitter className="w-8 h-8" />
        </Link >
      </motion.div>

      <motion.div whileHover={{ scale: 1.2 }} >
        <Link href="https://github.com/callha" target='_blank' className="tooltip" data-tip="github.com/callha">
          <FaGithub className="w-8 h-8" />
        </Link >
      </motion.div>

      <motion.div whileHover={{ scale: 1.2 }} >
        <Link href="https://www.douyin.com/user/MS4wLjABAAAAJnJeg10T2H-qWzjz1QpIjUgBtUU2kXi-Y2MM2unaDC2VEzkvliDMqQQN3jZikXBG" target='_blank' className="tooltip" data-tip="www.douyin.com/user/callha">
          <FaTiktok className="w-8 h-8" />
        </Link >
      </motion.div>

      <motion.div whileHover={{ scale: 1.2 }} >
        <Link href="https://weibo.com/u/5902341253" target='_blank' className="tooltip" data-tip="weibo.com/u/5902341253">
          <RiWeiboFill  className="w-8 h-8" />
        </Link >
      </motion.div>

      <motion.div  whileHover={{ scale: 1.2 }}>
        <Link href="https://mp.weixin.qq.com/callha_web3" target='_blank' className="tooltip" data-tip='https://mp.weixin.qq.com/callha_web3'>
          <RiWechatFill className="w-8 h-8" />
        </Link>
      </motion.div>
    </>
  )
}