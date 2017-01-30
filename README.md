# react-easy-intl

[![Build Status](https://travis-ci.org/mobyourlife/react-easy-intl.svg?branch=master)](https://travis-ci.org/mobyourlife/react-easy-intl)

React Intl made easy.

# Introduction

There are a couple big libraries to do i18n in React out there. I've had a hard time setting up both, I don't think it should be so complex.

So I've started baking this quick and dirty intl library based on [messageformat.js](https://messageformat.github.io/) with [ICU support](http://userguide.icu-project.org/formatparse/messages) that simply gets the job done. Perhaps not in the best manner, but it fits my needs for a MVP that must be shipped quickly.

# Disclaimer

I haven't run any benchmark against this. Improvements and features will be missing.

# How to use

Start installing the lib with `yarn add react-easy-intl` or `npm install --save react-easy-intl`.

Import the `Globalize` static class in your main app file to initialise the messages dictionary and set your current locale:

```js
import { Globalize } from 'react-easy-intl'

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

Globalize.setMessages(messages)
Globalize.setLocale('en')
```

Import the `FormatMessage` component to start rendering your translated strings:

```js
import { FormatMessage } from 'react-easy-intl'

render () {
  return <FormatMessage name='John Doe'>Hi #name!</FormatMessage>
}

render () {
  return <FormatMessage qty={100}>I have #qty books.</FormatMessage>
}
```

# Contribute

Any help is appreciated on improving this library. There's a lot of room for improvement, such as better messages loading, number and currency formatting, possible support to state management with Redux, etc.

This is just the beginning. Feel free to contribute by opening issues with critiques or suggestions, or by sending pull requests.

# License

MIT.
