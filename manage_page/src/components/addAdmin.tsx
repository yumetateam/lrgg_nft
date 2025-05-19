import { useReadContract, useWriteContract, useAccount, useWaitForTransactionReceipt } from 'wagmi'
import { wagmiAbi } from './abi'
import { useEffect, useState } from 'react'
import { keccak256 , stringToBytes} from 'viem'
import { shorten } from '../config'

export function AddAdminButton({
  contractAddress
}: {
  contractAddress: `0x${string}`
}) {
  const { data: hash, isPending: loading, writeContract } = useWriteContract()
  const account = useAccount()
  const {error, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })
  const [admin, setAdmin] = useState(account.address)
  const [message, setMessage] = useState('')
  const { data: isAdmin, refetch: refetchIsAdmin} = useReadContract({
    address: contractAddress,
    abi: wagmiAbi,
    functionName: 'hasRole',
    args: [keccak256(stringToBytes('ADMIN_ROLE')), admin as `0x${string}`],
  })

  const handleGrant = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!contractAddress) {
      setMessage('❌ 请先选择合约地址')
      return
    }
    if (isAdmin) {
      writeContract({
        address: contractAddress,
        abi: wagmiAbi,
        functionName: 'revokeAdmin',
        args: [admin as `0x${string}`],
      })
    } else {
      writeContract({
        address: contractAddress,
        abi: wagmiAbi,
        functionName: 'grantAdmin',
        args: [admin as `0x${string}`],
      })
    }
  }

  useEffect(() => {
    if (isConfirmed) {
      refetchIsAdmin({cancelRefetch: true})
      setMessage(`✅ 设置成功`)
    }
  }, [isConfirmed])

  useEffect(() => {
    if (error) {
      setMessage(`❌ 设置失败：${error}`)
    }
  }, [error])

  return (
    <form onSubmit={handleGrant} className="w-full space-y-4 p-4">
      <span><h2 className="text-xl font-bold">{isAdmin?"取消":""}授权Admin:</h2>{contractAddress}</span>
      <div>
        <label className="block text-sm font-medium text-gray-700">授权钱包地址</label>
        <input
          type="text"
          name="minter"
          className="w-full p-2 border rounded"
          value={admin}
          onChange={(e) => {
            setAdmin(e.target.value as `0x${string}`)
        }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? (isAdmin ? 'revoking':'执行 granting') : (isAdmin ? '执行 revokeAdmin':'执行 grantAdmin')}
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
