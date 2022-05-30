import { Button, Container } from 'react-bootstrap';
import { WalletsProps } from '../../common/interfaces';
import { WalletContainer } from './Wallet/WalletContainer';

export function Wallets(props: WalletsProps) {
  const { wallets, updateRate, orderByFavorites, fetchWallets} = props
  return (
    <Container>
      <h2>Wallets</h2>
      <Button variant='outline-primary' onClick={() => orderByFavorites()}>Order by favorites</Button>
      <Button variant='outline-primary' onClick={() => fetchWallets()}>Order by creation date</Button>
      {wallets.map((wallet: any) => {
        return <WalletContainer key={wallet['id']} wallet={wallet} updateRate={updateRate} ></WalletContainer>
      })}
    </Container>
  )
}