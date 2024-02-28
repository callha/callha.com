"use client"
import { SwapWidget,darkTheme } from '@uniswap/widgets'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useTheme } from "next-themes";
type Theme = /*unresolved*/ any
export default function Swap() {
  const { resolvedTheme } = useTheme();
  const { open } = useWeb3Modal();
  const onConnectWalletClick = async () => {
    await open();
    return true; // 或者根据实际情况返回 true 或 false
  };
  const Theme = resolvedTheme === "light" ? darkTheme : customTheme as Theme;
  return (
    <div className=" min-h-[calc(100vh-85px)] flex justify-center items-center">
      <SwapWidget
        convenienceFee={100} // 指定便利费为 1 个基点（%）
        convenienceFeeRecipient={"0xcd284038f2E68c6A43b04695f84377f38686eE56"} 
        width={360}
        //locale={t("zh-CN")} //指定小组件界面的显式区域设置为中文
        theme={Theme} //覆盖样式属性
        brandedFooter={false} //启用小部件底部的“由 Uniswap 提供支持”页脚。
        hideConnectionUI={true} //隐藏小部件的内置钱包连接UI,'true'
        //onConnectWalletClick={onConnectWalletClick}
        //jsonRpcUrlMap={jsonRpcUrlMap} //Api节点
        //tokenList={UNISWAP_TOKEN_LIST}          //令牌列表
        //defaultInputTokenAddress="NATIVE" //本机令牌的特殊地址
        //defaultInputAmount={1} //默认输入设置为 1 代币
        //defaultOutputTokenAddress="0xdAC17F958D2ee523a2206206994597C13D831ec7" //默认输出令牌设置为 USDT
      />

    </div>
  )
}
const customTheme = {
  interactive: "#C0E218",
  accent: "#C0E218",
  borderRadius: 0,
};
const jsonRpcUrlMap = {
  1: [`https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`],
  42161: [`https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_KEY}`],
  10: [`https://optimism-mainnet.infura.io/v3/${process.env.INFURA_KEY}`],
  137: [`https://polygon-mainnet.infura.io/v3/${process.env.INFURA_KEY}`],
  59144:[`https://linea-mainnet.infura.io/v3/${process.env.INFURA_KEY}`]
};