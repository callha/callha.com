'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { FaDiscord, FaGithub, FaSquareXTwitter, FaTelegram, FaTiktok } from 'react-icons/fa6';
export default function MediaLink() {
   return (
     <>
     <motion.div whileHover={{ scale: 1.2 }} >
          <Link href="https://x.com" target='_blank' className="tooltip" data-tip="x.com">
            <FaSquareXTwitter className="w-8 h-8" />
          </Link >
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }} >
          <Link href="https://discord.gg/6f2G69eHMq" target='_blank' className="tooltip" data-tip="discord.gg/6f2G69eHMq">
            <FaDiscord className="w-8 h-8" />
          </Link >
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} >
          <Link href="https://t.me/callha_labs" target='_blank' className="tooltip" data-tip="t.me/callha_labs">
            <FaTelegram className="w-8 h-8" />
          </Link >
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }} >
          <Link href="https://github.com/callha" target='_blank' className="tooltip" data-tip="github.com/callha">
            <FaGithub className="w-8 h-8" />
          </Link >
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }} >
          <Link href="https://www.tiktok.com/callha" target='_blank' className="tooltip" data-tip="www.tiktok.com/callha">
            <FaTiktok className="w-8 h-8" />
          </Link >
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }} >
          <Link href="https://www.douyin.com/user/MS4wLjABAAAAJnJeg10T2H-qWzjz1QpIjUgBtUU2kXi-Y2MM2unaDC2VEzkvliDMqQQN3jZikXBG" target='_blank' className="tooltip" data-tip="www.douyin.com/user/callha">
            <FaTiktok className="w-8 h-8" />
          </Link >
        </motion.div>
     </>
   )
}