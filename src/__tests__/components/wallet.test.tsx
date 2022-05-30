import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { WalletProps } from '../../common/interfaces';
import { Alert, Button, Card } from 'react-bootstrap';
import { Wallet } from '../../pages/wallets/Wallet/Wallet';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { RateForm } from '../../pages/wallets/Wallet/RateForm';
import { RateDropdown } from '../../pages/wallets/Wallet/RateDropdown';
import { ratesMock, walletsMock } from '../../mocks';
Enzyme.configure({ adapter: new Adapter() })

describe('Wallets container tests', () => {

  const props: WalletProps = {
    wallet: walletsMock[0],
    rates: ratesMock,
    setEditing: jest.fn(),
    confirmRateChange: jest.fn(),
    cancelEditing: jest.fn(),
    setRate: jest.fn(),
    handleSelect: jest.fn(),
    toggleFavorite: jest.fn(),
    isEditing: false,
    rateLabel: 'label',
    rateValue: 1,
    selectedRate: ratesMock[0],
    convertedRateValue: 1
  }


  test('Wallet isOld, favorite and not isEditing', () => {
    const wrapper = shallow(<Wallet {...props} />);
    expect(wrapper.find(Alert)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(2);
    expect(wrapper.find(BsStarFill)).toHaveLength(1);
    expect(wrapper.find(Card.Text)).toHaveLength(1);
    expect(wrapper.find(RateDropdown)).toHaveLength(1);
    wrapper.find(Button).at(1).simulate('click')
    expect(props.setEditing).toBeCalled()

  })

  test('Wallet is not old, not favorite and is editing', () => {
    const newProps = {...props}
    newProps.wallet.isOld = false
    newProps.isEditing = true
    newProps.wallet.isFavorite = false

    const wrapper = shallow(<Wallet {...newProps} />);
    expect(wrapper.find(Alert)).toHaveLength(0);
    expect(wrapper.find(Button)).toHaveLength(3);
    expect(wrapper.find(BsStar)).toHaveLength(1);
    expect(wrapper.find(RateForm)).toHaveLength(1);

    wrapper.find(Button).at(1).simulate('click')
    expect(newProps.cancelEditing).toBeCalled()

    wrapper.find(Button).at(2).simulate('click')
    expect(newProps.confirmRateChange).toBeCalled()
  })
})