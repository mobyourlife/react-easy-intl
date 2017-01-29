/* global it, expect */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { render } from 'enzyme'
import FormatMessage from './FormatMessage'

const HI_NAME = 'Hi {name}!'
const I_HAVE_N_BOOKS = 'I have {qtyBooks, plural, =0{no books} one{1 book} other{# books} }.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormatMessage />, div)
})

it('renders expected text', () => {
  const component = renderer.create(
    <FormatMessage />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders passed string', () => {
  const wrapper = render(<FormatMessage str={HI_NAME} name='John Doe' />)
  expect(wrapper.text()).toEqual('Hi John Doe!')
})

it('pluralizes zero', () => {
  const wrapper = render(<FormatMessage str={I_HAVE_N_BOOKS} qtyBooks={0} />)
  expect(wrapper.text()).toEqual('I have no books.')
})

it('pluralizes one', () => {
  const wrapper = render(<FormatMessage str={I_HAVE_N_BOOKS} qtyBooks={1} />)
  expect(wrapper.text()).toEqual('I have 1 book.')
})

it('pluralizes number', () => {
  const wrapper = render(<FormatMessage str={I_HAVE_N_BOOKS} qtyBooks={100} />)
  expect(wrapper.text()).toEqual('I have 100 books.')
})
