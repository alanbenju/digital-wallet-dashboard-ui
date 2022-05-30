import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Login } from '../../pages/login/Login'
import  * as storeHooks from '../../store/hooks'
import { FormControl } from 'react-bootstrap';
import * as authSlice from '../../store/slices/auth';
Enzyme.configure({ adapter: new Adapter() })

describe('Login tests', () => {

  test('Login fill inputs and click', async () => {
    const useAppDispatchSpy = jest.spyOn(storeHooks, 'useAppDispatch'); 
    const loginThunkSpy = jest.spyOn(authSlice, 'loginThunk'); 

    const mockDispatchFn = jest.fn(()=>Promise.resolve({}))
    useAppDispatchSpy.mockReturnValue(mockDispatchFn as any)

    const mockLoginThunk = jest.fn((a,b)=>Promise.resolve())
    loginThunkSpy.mockReturnValue(mockLoginThunk as any)
    
    const wrapper = shallow(<Login />);
    wrapper.find(FormControl).at(0).dive().simulate('change', { target: { value: 'username' } })
    wrapper.find(FormControl).at(1).dive().simulate('change', { target: { value: 'pass' } })
    wrapper.find('button').at(0).simulate('click')
    expect(useAppDispatchSpy).toBeCalled()
    expect(loginThunkSpy).toBeCalledWith({username:'username', password:'pass'})
  })
})