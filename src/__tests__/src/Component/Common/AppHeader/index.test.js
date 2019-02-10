import React from 'react'
import { shallow } from 'enzyme'
import AppHeader from '../../../../../Component/Common/AppHeader'

const props = {
  name: 'Test App',
  link: 'https://github.com/JacobHsu/ci-gh-pages'
}

describe('/Component/Common/AppHeader', () => {
  const wrapper = shallow(<AppHeader {...props} />)
  it('test header content', () => {
    const {
      href,
      children
    } = wrapper.find('[className="navbar-item"]').props()
    expect(href).toEqual(props.link)
    expect(children).toEqual(props.name)
  })
})
