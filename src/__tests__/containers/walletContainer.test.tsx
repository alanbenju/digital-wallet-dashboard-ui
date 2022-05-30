import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as storeHooks from '../../store/hooks'
import { WalletContainer } from '../../pages/wallets/Wallet/WalletContainer';
import { Wallet } from '../../pages/wallets/Wallet/Wallet';
import { ratesMock, walletsMock } from '../../mocks';
Enzyme.configure({ adapter: new Adapter() })

describe('Wallet container tests', () => {
  const useAppDispatchSpy = jest.spyOn(storeHooks, 'useAppDispatch');
  const useAppSelectorSpy = jest.spyOn(storeHooks, 'useAppSelector');

  const mockDispatchFn = jest.fn(() => Promise.resolve({}))
  useAppDispatchSpy.mockReturnValue(mockDispatchFn as any)

  const props = { 
    wallet: walletsMock[0], 
    updateRate: jest.fn()
  }

  test('Wallet container with rates', async () => {
    useAppSelectorSpy.mockReturnValue({ rates: ratesMock })
    const wrapper = shallow(<WalletContainer {...props} />);
    expect(wrapper.find(Wallet)).toHaveLength(1);
  })
})