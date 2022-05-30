import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Wallets } from '../../pages/wallets/Wallets';
import { WalletContainer } from '../../pages/wallets/Wallet/WalletContainer';
import { Button } from 'react-bootstrap';
import { walletsMock } from '../../mocks';
Enzyme.configure({ adapter: new Adapter() })

describe('Wallets container tests', () => {

  test('Wallets with wallets', async () => {
    const props = {
      wallets: walletsMock,
      updateRate: jest.fn(),
      orderByFavorites: jest.fn(),
      fetchWallets: jest.fn(),
    }
    const wrapper = shallow(<Wallets {...props}/>);
    expect(wrapper.find(WalletContainer)).toHaveLength(2);
  })

  test('Wallets without wallets', async () => {
    const props = {
      wallets: [],
      updateRate: jest.fn(),
      orderByFavorites: jest.fn(),
      fetchWallets: jest.fn(),
    }
    const wrapper = shallow(<Wallets {...props}/>);
    expect(wrapper.find(WalletContainer)).toHaveLength(0);
  })

  test('Wallets click in orderByFavorites and fetchWallets', async () => {
    const props = {
      wallets: [],
      updateRate: jest.fn(),
      orderByFavorites: jest.fn(),
      fetchWallets: jest.fn(),
    }
    const wrapper = shallow(<Wallets {...props}/>);
    expect(wrapper.find(WalletContainer)).toHaveLength(0);
    wrapper.find(Button).at(0).simulate('click')
    expect(props.orderByFavorites).toBeCalled()
    wrapper.find(Button).at(1).simulate('click')
    expect(props.fetchWallets).toBeCalled()
  })
})