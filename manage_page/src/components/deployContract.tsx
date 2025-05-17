import { useChainId, useDeployContract , useWaitForTransactionReceipt} from 'wagmi'
import { wagmiAbi, wagmiByteCode } from './abi'
import { useEffect } from 'react';

function shorten(addr: string) {
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}

export function DeployContractButton({
    addresses,
    onNewAddress,
    onChainChanged,
    onSelectAddress,
  }: {
    addresses: `0x${string}`[]
    onNewAddress: (addr: `0x${string}`) => void
    onChainChanged: (addr: number) => void
    onSelectAddress: (addr:`0x${string}`) => void
}) {
  const {data: hash, isPending: loading, status, deployContract} = useDeployContract()
  const {data: receipt, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash})
  const chainId = useChainId();
  useEffect(() => {
    if (receipt?.contractAddress && !addresses.includes(receipt.contractAddress)) {
      onNewAddress(receipt.contractAddress)
    }
  }, [receipt?.contractAddress])

  useEffect(() => {
    onChainChanged(chainId)
  }, [chainId])

  return (<>
    <button 
      disabled={loading}
      onClick={() => {
        deployContract({
          abi: wagmiAbi,
          args: [],
          bytecode: wagmiByteCode,
        }, {
          onSuccess(data) {
            console.log("部署合约完成txn: ", data);
          },
          onError(error) {
            console.log(error);
          },
        })
      }
    }
    >
      {loading ?  status : "部署合约"}
    </button>
    {isConfirmed && receipt?.contractAddress && (
        <div className="text-green-600">✅ 新合约地址: {receipt.contractAddress}</div>
      )}
      {addresses.length > 0 && (
        <div>
          <label className="block mb-1 font-semibold">📦 已部署合约地址</label>
          <select
            className="w-full border rounded p-2"
            onChange={(e) => onSelectAddress(e.target.value as `0x${string}`)}
          >
            {addresses.map((addr) => (
              <option key={addr} value={addr}>
                {shorten(addr)}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  )
}