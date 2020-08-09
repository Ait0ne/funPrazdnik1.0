import React from 'react';
import renderer from 'react-test-renderer';
import {  mount } from 'enzyme';

import MenuIcon from '../components/MenuIcon/menuIcon.component';

describe('MenuIcon', () => {
    const onClickMock = jest.fn()
    it('correctly renders icon', () => {
        const menuIcon = renderer.create(<MenuIcon onClick={onClickMock} open={true}/>).toJSON();
        expect(menuIcon).toMatchSnapshot();
    })
    it('renders bars icon when menu closed', () => {
        const wrapper = mount(<MenuIcon onClick={onClickMock} open={false}/>);
        expect(wrapper.find('.fa-bars')).toHaveLength(1)
    })
})