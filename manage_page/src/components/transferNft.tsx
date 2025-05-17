import { useReadContract, useWriteContract, useAccount, useWaitForTransactionReceipt } from 'wagmi'
import { wagmiAbi } from './abi'
import { useEffect, useState } from 'react'
import { formatNumber, shorten } from '../config'

export function TransferNftButton({
  contractAddress
}: {
  contractAddress: `0x${string}`
}) {
  const { data: hash, isPending: loading, writeContract } = useWriteContract()
  const account = useAccount()
  const {error, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })
  const [recipient, setRecipient] = useState("")
  const [message, setMessage] = useState('')
  const { data: balance } = useReadContract({
    address: contractAddress,
    abi: wagmiAbi,
    functionName: 'balanceOf',
    args: [ account.address as `0x${string}`],
  })

  const { data: tokens } = useReadContract({
    address: contractAddress,
    abi: wagmiAbi,
    functionName: 'tokensOfOwner',
    args: [ account.address as `0x${string}`],
  })

  const [tokenId, setTokenId] = useState("")

  const handleMint = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!contractAddress) {
      setMessage('❌ 请先选择合约地址')
      return
    }
    if (recipient == "") {
      setMessage('❌ 请先选择目标地址')
      return
    }
    if (tokenId == "") {
      setMessage('❌ 请先选择TokenId')
      return
    }
    writeContract({
      address: contractAddress,
      abi: wagmiAbi,
      functionName: 'safeTransferFrom',
      args: [account.address as `0x${string}`, recipient as `0x${string}`, BigInt(tokenId)],
    })
  }

  useEffect(() => {
    if (isConfirmed) {
      setMessage(`✅ 转账成功`)
    }
  }, [isConfirmed])

  useEffect(() => {
    if (error) {
      setMessage(`❌ 转账失败：${error}`)
    }
  }, [error])

  return (
    <form onSubmit={handleMint} className="w-full space-y-4 p-4">
      <span><h2 className="text-xl font-bold">转账NFT:</h2>{contractAddress}</span>
      <span><h2 className="text-xl font-bold">当前NFT存量:</h2>{balance}</span>
      <div>
        <label className="block text-sm font-medium text-gray-700">目标钱包地址</label>
        <input
          type="text"
          name="recipient"
          className="w-full p-2 border rounded"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value as `0x${string}`)}
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Token</label>
        <select
            className="w-full p-2 border rounded"
            onChange={(e) => setTokenId(e.target.value)}
        >
          <option value="">选择NFT</option>
          {tokens && tokens.map((tokenId) => (
              <option key={tokenId} value={tokenId.toString()}>
                {formatNumber(tokenId)}
              </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={loading || balance === undefined || balance <= 0}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'transfer...' : '执行 transfer'}
      </button>
      <div className="flex flex-col items-start space-y-1">
              {message && <><label className="block text-sm font-medium text-gray-700">消息</label><p className="w-full text-left text-green-600 break-words">{message}</p></>}
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
