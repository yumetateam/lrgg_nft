import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { wagmiAbi } from './abi'
import { useEffect, useState } from 'react'
import { shorten } from '../config'

export function PauseButton({
  contractAddress
}: {
  contractAddress: `0x${string}`
}) {
  const { data: hash, isPending: loading, writeContract } = useWriteContract()
  const {error, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })
  const [message, setMessage] = useState('')
  const { data: isPaused, refetch: refetchIsPaused} = useReadContract({
    address: contractAddress,
    abi: wagmiAbi,
    functionName: 'paused',
    args: [],
  })

  const handleGrant = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!contractAddress) {
      setMessage('❌ 请先选择合约地址')
      return
    }
    if (isPaused) {
      writeContract({
        address: contractAddress,
        abi: wagmiAbi,
        functionName: 'unpause',
        args: [],
      })
    } else {
      writeContract({
        address: contractAddress,
        abi: wagmiAbi,
        functionName: 'pause',
        args: [],
      })
    }
  }

  useEffect(() => {
    if (isConfirmed) {
      refetchIsPaused({cancelRefetch: true})
      setMessage(`✅ 合约操作成功`)
    }
  }, [isConfirmed])

  useEffect(() => {
    if (error) {
      setMessage(`❌ 合约操作失败：${error}`)
    }
  }, [error])

  return (
    <form onSubmit={handleGrant} className="w-full space-y-4 p-4">
      <span><h2 className="text-xl font-bold">{isPaused?"取消":""}暂停合约:</h2>{contractAddress}</span>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? (isPaused ? 'unpausing':'执行 pausing') : (isPaused ? '执行 unpause':'执行 pause')}
      </button>
      <div className="flex flex-col items-start space-y-1">
              {message && <><label className="block text-sm font-medium text-gray-700">消息</label><p className="w-full text-left text-green-600 break-words">{loading ? "pending" : message}</p></>}
              {hash && <><label className="block text-sm font-medium text-gray-700">交易Hash</label><p className="w-full cursor-pointer text-left text-green-600 break-words" onClick={
              () => {
                navigator.clipboard.writeText(hash).then(() => {
                  alert("复制成功！");
                }).catch(() => {
                  alert("复制失败，请手动复制");
                });
              }
              }>{shorten(hash)}</p></>}
      </div>
    </form>
  )
}
