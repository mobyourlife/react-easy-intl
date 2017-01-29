import React from 'react';
import ReactDOM from 'react-dom';
import FormatMessage from './FormatMessage';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormatMessage />, div);
});

it('renders expected text', () => {
  const component = renderer.create(
    <FormatMessage />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders passed string', () => {
  const wrapper = render(<FormatMessage>John Doe</FormatMessage>);
  expect(wrapper.text()).toEqual('Hi John Doe!');
});
