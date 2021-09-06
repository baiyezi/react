# react

Baiyezi's react tools.

## Installation

### NPM

```zsh
$ npm install @baiyezi/react
or
$ yarn add @baiyezi/react

```

## How to use

```js
import { makeStore } from '@baiyezi/react'

const { Provider, Consumer, useStore } = makeStore(0)

const Counter = () => {
  const [count] = useStore()
  return <span>{count}</span>
}

const Button = () => {
  const [, setCount] = useStore()
  return <button onClick={() => setCount(2)}>change count</button>
}

const App = () => {
  return (
    <Provider>
      <Counter />
      <Button />
    </Provider>
  )
}
```
