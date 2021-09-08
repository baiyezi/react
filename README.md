# react

Baiyezi react tools.

- [makeStore](#makeStore)

## Installation

### npm

```bash
$ npm install @baiyezi/react
```

### yarn

```bash
$ yarn add @baiyezi/react
```

## How to use

### makeStore

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
