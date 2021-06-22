import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Link} from 'react-router-dom'
import Nav from './nav'
import {configure, shallow } from 'enzyme'




Enzyme.configure({ adapter: new Adapter() });

describe('<Nav />' ,() => {
    let wrapper 
    beforeEach(()=> {
        wrapper =shallow(<Nav/>)
    })
})

it('primer test', () => {
    expect(wrapper.find(Link).toHaveLength(4))
})

it('segundo', () => {
    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/countries')
})