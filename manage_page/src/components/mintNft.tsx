import { useReadContract, useWriteContract, useAccount, useWaitForTransactionReceipt } from 'wagmi'
import { wagmiAbi } from './abi'
import { useEffect, useState } from 'react'

export function MintNftButton({
  contractAddress
}: {
  contractAddress: `0x${string}`
}) {
  const { data: hash,isPending: loading, writeContract } = useWriteContract()
  const account = useAccount()
  const { isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })
  const { data: totalSupply } = useReadContract({
    address: contractAddress,
    abi: wagmiAbi,
    functionName: 'totalSupply',
    args: [],
  })

  const [recipient, setRecipient] = useState(account.address)
  const [isSafe, setIsSafe] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [message, setMessage] = useState('')

  const handleMint = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!contractAddress) {
      setMessage('❌ 请先选择合约地址')
      return
    }

    writeContract({
      address: contractAddress,
      abi: wagmiAbi,
      functionName: 'mint',
      args: [recipient as `0x${string}`, isSafe, BigInt(quantity)],
    })
  }

  useEffect(() => {
    if (isConfirmed) {
      setMessage(`✅ Mint 成功，交易哈希: ${hash}`)
    }
  }, [isConfirmed])

  return (
    <form onSubmit={handleMint} className="w-full space-y-4 p-4">
      <span><h2 className="text-xl font-bold">铸造 NFT: </h2>{contractAddress}</span>
      <h2 className="text-xl font-bold">供应量: <span>{totalSupply}</span></h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">接收者地址</label>
        <input
          type="text"
          name="recipient"
          className="w-full p-2 border rounded"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value as `0x${string}`)}
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="isSafe"
          checked={isSafe}
          onChange={() => setIsSafe(!isSafe)}
        />
        <label className="text-sm text-gray-700">使用 safeMint</label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">数量</label>
        <input
          name="quantity"
          type="number"
          min={1}
          max={300}
          className="w-full p-2 border rounded"
          value={quantity.toString()}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Minting...' : '执行 Mint'}
      </button>
      <div></div>

      {message && <p className="text-center text-green-600">{message}</p>}
    </form>
  )
}