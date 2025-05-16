import { useReadContract, useWriteContract, useAccount, useWaitForTransactionReceipt } from 'wagmi'
import { wagmiAbi } from './abi'
import { useEffect, useState } from 'react'
import { keccak256 , stringToBytes} from 'viem'

export function TransferNftButton({
  contractAddress
}: {
  contractAddress: `0x${string}`
}) {
  const { data: hash, isPending: loading, writeContract } = useWriteContract()
  const account = useAccount()
  const {isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })
 const [recipient, setRecipient] = useState("")
  const [message, setMessage] = useState('')
  const { data: balance } = useReadContract({
    address: contractAddress,
    abi: wagmiAbi,
    functionName: 'balanceOf',
    args: [ account.address as `0x${string}`],
  })

  const handleMint = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!contractAddress) {
      setMessage('❌ 请先选择合约地址')
      return
    }
    writeContract({
      address: contractAddress,
      abi: wagmiAbi,
      functionName: 'safeTransferFrom',
      args: [account.address as `0x${string}`, recipient as `0x${string}`, tokenId],
    })
  }

  useEffect(() => {
    if (isConfirmed) {
      setMessage(`✅ Mint 成功，交易哈希: ${hash}`)
    }
  }, [isConfirmed])

  return (
    <form onSubmit={handleMint} className="w-full space-y-4 p-4">
      <span><h2 className="text-xl font-bold">转账NFT:</h2>{contractAddress}</span>
      <div>
        <label className="block text-sm font-medium text-gray-700">授权钱包地址</label>
        <input
          type="text"
          name="recipient"
          className="w-full p-2 border rounded"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value as `0x${string}`)}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'transfer...' : '执行 transfer'}
      </button>
      <div></div>
      {message && <p className="text-center text-green-600">{message}</p>}
    </form>
  )
}
