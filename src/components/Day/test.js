import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Day from './index';

configure({ adapter: new Adapter() });

describe('Day Component', function() {

    let wrapper;

    beforeEach( function() {
        wrapper = shallow(<Day recipes={[1,2]} title="Title"/>);
    } );

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Day recipes={[1,2]} title="Title"/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('matches snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })



})
