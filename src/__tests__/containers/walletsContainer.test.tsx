import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as storeHooks from '../../store/hooks'
import { WalletsContainer } from '../../pages/wallets/WalletsContainer';
import { Wallets } from '../../pages/wallets/Wallets';
Enzyme.configure({ adapter: new Adapter() })

describe('Wallets container tests', () => {
  const useAppDispatchSpy = jest.spyOn(storeHooks, 'useAppDispatch');
  const useAppSelectorSpy = jest.spyOn(storeHooks, 'useAppSelector');

  const mockDispatchFn = jest.fn(() => Promise.resolve({}))
  useAppDispatchSpy.mockReturnValue(mockDispatchFn as any)

  test('Wallets container with wallets', async () => {
    useAppSelectorSpy.mockReturnValue({ wallets: [{ id: 1 }] })
    const wrapper = shallow(<WalletsContainer />);
    expect(wrapper.find(Wallets)).toHaveLength(1);
  })

  test('Wallets container without wallets', async () => {
    useAppSelectorSpy.mockReturnValue({})
    const wrapper = shallow(<WalletsContainer />);
    expect(wrapper.find(Wallets)).toHaveLength(0);
  })
})