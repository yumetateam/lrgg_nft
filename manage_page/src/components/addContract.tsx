import { useState } from 'react';

export function AddContractButton({
   contractAddress,
    onNewAddress,
  }: {
    contractAddress: `0x${string}`
    onNewAddress: (addr: `0x${string}`) => void
}) {
  const [address, setAddress] = useState<`0x${string}`>(contractAddress)
  const handleMint = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewAddress(address)
  }
  return (<>
  <form onSubmit={handleMint} className="w-full space-y-4 p-4">
      <h2 className="text-xl font-bold">添加新合约</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">合约地址</label>
        <input
          type="text"
          name="address"
          className="w-full p-2 border rounded"
          value={address}
          onChange={(e) => setAddress(e.target.value as `0x${string}`)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        添加新NFT合约
      </button>
      <div></div>
    </form>
    </>
  )
}