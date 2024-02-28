'use client'

import * as React from 'react'
import { 
  type BaseError, 
  useSendTransaction, 
  useWaitForTransactionReceipt 
} from 'wagmi' 
import { parseEther } from 'viem' 
 
export default function SendTransaction() {
  const { 
    data: hash,
    error, 
    isPending, 
    sendTransaction 
  } = useSendTransaction() 

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const to = formData.get('address') as `0x${string}` 
    const value = formData.get('value') as string 
    sendTransaction({ to, value: parseEther(value) }) 
  } 

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    }) 

  return (
    <form onSubmit={submit}>
      <input name="address" placeholder="发送至地址" required  className='textarea textarea-primary'/>
      <input name="value" placeholder="发送数量" required className='textarea textarea-primary'/>
      <button disabled={isPending} type="submit"className='btn'>
        {isPending ? '钱包确认中...' : '发送'} 
      </button>
      {hash && <div>交易哈希地址: {hash}</div>} {/* 交易哈希地址 */}
      {isConfirming && <div>正在等待确认...</div>} {/* 正在等待确认 */}
      {isConfirmed && <div>交易已确认.</div>} {/* 交易已确认 */}
      {error && ( 
        <div>错误: {(error as BaseError).shortMessage || error.message}</div> 
      )} {/* 处理错误 */}
    </form>
  )
}