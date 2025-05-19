import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { STORAGE_KEY, useAppKitTheme, wagmiAdapter } from './config'
import { DeployContractButton } from './components/deployContract'
import { MintNftButton } from './components/mintNft'
import { useEffect, useState } from 'react'
import { AddContractButton } from './components/addContract'
import { AddMinterButton } from './components/addMinter'
import { TransferNftButton } from './components/transferNft'
import { SetTokenBaseUriButton } from './components/setTokenBaseUri'
import { AddAdminButton } from './components/addAdmin'

const queryClient = new QueryClient()

export default function App() {
  const { themeMode } = useAppKitTheme()
  document.documentElement.className = themeMode
  const [addresses, setAddresses] = useState<`0x${string}`[]>([])
  const [selectedAddress, setSelectedAddress] = useState<`0x${string}`>('0x0')
  const [chainId, setChainId] = useState<number>()
  useEffect(() => {
      const stored = localStorage.getItem(STORAGE_KEY + '_' + chainId)
      if (stored) {
        const list = JSON.parse(stored)
        setAddresses(list)
        setSelectedAddress(list[0] || '')
      }
  }, [chainId])
  
    const handleNewContract = (newAddress: `0x${string}`) => {
      const updated = [newAddress, ...addresses.filter((a) => a !== newAddress)]
      setAddresses(updated)
      setSelectedAddress(newAddress)
      localStorage.setItem(STORAGE_KEY + '_' + chainId, JSON.stringify(updated))
    }
  

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <div className="page-container">
          <h1 className="page-title">LRGG Managing</h1>
          <div className="appkit-buttons-container">
            <appkit-button />
            <appkit-network-button />
            <DeployContractButton 
              addresses={addresses} 
              onNewAddress={handleNewContract} 
              onChainChanged={setChainId}
              onSelectAddress={setSelectedAddress}
            />
          </div>
          <div className="appkit-buttons-container">
            <MintNftButton     
              contractAddress={selectedAddress}
            />
          </div>
          <div className="appkit-buttons-container">
            <AddMinterButton     
              contractAddress={selectedAddress}
            />
          </div>
          <div className="appkit-buttons-container">
            <AddAdminButton     
              contractAddress={selectedAddress}
            />
          </div>
          <div className="appkit-buttons-container">
            <TransferNftButton     
              contractAddress={selectedAddress}
            />
          </div>
          <div className="appkit-buttons-container">
            <SetTokenBaseUriButton     
              contractAddress={selectedAddress}
            />
          </div>
          <div className="appkit-buttons-container">
            <AddContractButton 
              contractAddress={selectedAddress} 
              onNewAddress={handleNewContract} 
            />
          </div>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
