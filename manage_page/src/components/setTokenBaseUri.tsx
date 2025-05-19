import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { wagmiAbi } from './abi'
import { useEffect, useState } from 'react'
import { shorten } from '../config'

export function SetTokenBaseUriButton({
  contractAddress
}: {
  contractAddress: `0x${string}`
}) {
  const { data: hash, isPending: loading, writeContract } = useWriteContract()
  const {error, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })
  const [message, setMessage] = useState('')
  const [baseUri, setBaseUri] = useState("")
  const { data: oldBaseURI, refetch: refetchBaseTokenURI } = useReadContract({
    address: contractAddress,
    abi: wagmiAbi,
    functionName: 'baseTokenURI',
    args: [],
  })

  const handleMint = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!contractAddress) {
      setMessage('❌ 请先选择合约地址')
      return
    }
    if (baseUri == undefined || baseUri == "") {
      setMessage('❌ 请设置url')
      return
    }
    writeContract({
      address: contractAddress,
      abi: wagmiAbi,
      functionName: 'setBaseTokenURI',
      args: [baseUri as string],
    })
  }

  useEffect(() => {
    if (isConfirmed) {
      refetchBaseTokenURI({cancelRefetch: true})
      setMessage(`✅ 设置成功`)
    }
  }, [isConfirmed])

  useEffect(() => {
    if (error) {
      setMessage(`❌ 设置失败：${error}`)
    }
  }, [error])

  return (
    <form onSubmit={handleMint} className="w-full space-y-4 p-4">
      <span><h2 className="text-xl font-bold">设置tokenBaseURI:</h2>{contractAddress}</span>
      <span><h2 className="text-xl font-bold">当前URL:</h2>{oldBaseURI}</span>
      <div>
        <label className="block text-sm font-medium text-gray-700">设置Url</label>
        <input
          type="text"
          name="baseUri"
          className="w-full p-2 border rounded"
          value={baseUri}
          onChange={(e) => setBaseUri(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'setBaseUri...' : '执行 setBaseUri'}
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
