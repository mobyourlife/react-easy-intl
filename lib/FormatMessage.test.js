/* global it, expect */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { render } from 'enzyme'
import Globalize from './Globalize'
import FormatMessage from './FormatMessage'

const messages = {
  en: {
    'Hi #name!': 'Hi {name}!',
    'I have #qty books.': 'I have {qty, plural, =0{no books} one{1 book} other{# books} }.'
  },
  pt: {
    'Hi #name!': 'Olá {name}!',
    'I have #qty books.': 'Eu {qty, plural, =0{não tenho nenhum livro} one{tenho 1 livro} other{tenho # livros} }.'
  }
}

beforeAll(done => {
  Globalize.setMessages(messages)
  done()
})

describe('basic tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FormatMessage />, div)
  })

  it('renders component with text', () => {
    const component = renderer.create(
      <FormatMessage />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('#en locale tests', () => {
  beforeAll(done => {
    Globalize.setLocale('en')
    done()
  })

  it('renders passed string', () => {
    const wrapper = render(<FormatMessage str='Hi #name!' name='John Doe' />)
    expect(wrapper.text()).toEqual('Hi John Doe!')
  })

  it('pluralizes zero', () => {
    const wrapper = render(<FormatMessage str='I have #qty books.' qty={0} />)
    expect(wrapper.text()).toEqual('I have no books.')
  })

  it('pluralizes one', () => {
    const wrapper = render(<FormatMessage str='I have #qty books.' qty={1} />)
    expect(wrapper.text()).toEqual('I have 1 book.')
  })

  it('pluralizes number', () => {
    const wrapper = render(<FormatMessage str='I have #qty books.' qty={100} />)
    expect(wrapper.text()).toEqual('I have 100 books.')
  })
})

describe('#pt locale tests', () => {
  beforeAll(done => {
    Globalize.setLocale('pt')
    done()
  })

  it('renders passed string', () => {
    const wrapper = render(<FormatMessage str='Hi #name!' name='John Doe' />)
    expect(wrapper.text()).toEqual('Olá John Doe!')
  })

  it('pluralizes zero', () => {
    const wrapper = render(<FormatMessage str='I have #qty books.' qty={0} />)
    expect(wrapper.text()).toEqual('Eu não tenho nenhum livro.')
  })

  it('pluralizes one', () => {
    const wrapper = render(<FormatMessage str='I have #qty books.' qty={1} />)
    expect(wrapper.text()).toEqual('Eu tenho 1 livro.')
  })

  it('pluralizes number', () => {
    const wrapper = render(<FormatMessage str='I have #qty books.' qty={100} />)
    expect(wrapper.text()).toEqual('Eu tenho 100 livros.')
  })
})
