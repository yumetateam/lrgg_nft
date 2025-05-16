import { useReadContract, useWriteContract, useAccount, useWaitForTransactionReceipt } from 'wagmi'
import { wagmiAbi } from './abi'
import { useEffect, useState } from 'react'
import { keccak256 , stringToBytes} from 'viem'

export function AddMinterButton({
  contractAddress
}: {
  contractAddress: `0x${string}`
}) {
  const { data: hash, isPending: loading, writeContract } = useWriteContract()
  const account = useAccount()
  const {isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })
  const [minter, setMinter] = useState(account.address)
  const [message, setMessage] = useState('')
  const { data: isMinter } = useReadContract({
    address: contractAddress,
    abi: wagmiAbi,
    functionName: 'hasRole',
    args: [keccak256(stringToBytes('MINTER_ROLE')), minter as `0x${string}`],
  })

  const handleMint = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!contractAddress) {
      setMessage('❌ 请先选择合约地址')
      return
    }
    if (isMinter) {
      writeContract({
        address: contractAddress,
        abi: wagmiAbi,
        functionName: 'grantMinter',
        args: [minter as `0x${string}`],
      })
    } else {
      writeContract({
        address: contractAddress,
        abi: wagmiAbi,
        functionName: 'revokeMinter',
        args: [minter as `0x${string}`],
      })
    }
    
  }

  useEffect(() => {
    if (isConfirmed) {
      setMessage(`✅ Mint 成功，交易哈希: ${hash}`)
    }
  }, [isConfirmed])

  return (
    <form onSubmit={handleMint} className="w-full space-y-4 p-4">
      <span><h2 className="text-xl font-bold">授权Minter:</h2>{contractAddress}</span>
      <div>
        <label className="block text-sm font-medium text-gray-700">授权钱包地址</label>
        <input
          type="text"
          name="minter"
          className="w-full p-2 border rounded"
          value={minter}
          onChange={(e) => setMinter(e.target.value as `0x${string}`)}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'granting...' : (isMinter ? 'revokeMinter':'执行 grantMinter')}
      </button>
      <div></div>
      {message && <p className="text-center text-green-600">{message}</p>}
    </form>
  )
}
