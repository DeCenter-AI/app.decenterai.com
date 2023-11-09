import { ethers } from 'ethers'
import PaymentAbi from '@abi/Payment.json'
import { ethersProvider, ethersSigner } from '@/lib/particle'
const PaymentAddr = process.env.NEXT_PUBLIC_PAYMENT_CONTRACT_ADDRESS
const WalletAddress = process.env.NEXT_PUBLIC_WALLET_CONTRACT_ADDRESS
export const makePayment = async () => {
  //@ts-ignore
  //   const provider = new ethers.providers.Web3Provider(window.ethereum)
  //   const signer = provider.getSigner()
  const PaymentContract = new ethers.Contract(PaymentAddr, PaymentAbi, ethersSigner)
  const amountInWei = ethers.utils.parseEther('0.000000000000001')
  const options = { value: amountInWei }
  // const reciept = await contract.buyPunk(1001, options)
  try {
    const reciept = await PaymentContract.functions.deposit(
      amountInWei,
      WalletAddress,
      options,
    )
    console.log(reciept)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
