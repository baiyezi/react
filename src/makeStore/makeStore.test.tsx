import React from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import makeStore from './makeStore'

afterEach(cleanup)

const { Provider, Consumer, useStore } = makeStore(0)

const renderCounter = (count: number) => (
  <span data-testid="counterId">{count}</span>
)

const renderButton = (
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>
) => <button onClick={() => setCount(count)}>change count</button>

const Counter = () => {
  const [count, setCount] = useStore()
  return renderCounter(count)
}

const Button = () => {
  const [count, setCount] = useStore()
  return renderButton(2, setCount)
}

describe('makeStore', () => {
  it('Shows store value and change by useContext', () => {
    render(
      <Provider>
        <Counter />
        <Button />
      </Provider>
    )
    const countDom = screen.getByTestId('counterId')
    const buttonDom = screen.getByText('change count')
    expect(countDom.textContent).toEqual('0')
    fireEvent.click(buttonDom)
    expect(countDom.textContent).toEqual('2')
  })
  it('Shows store value and change by Consumer', () => {
    render(
      <Provider>
        <Consumer>{([count]) => renderCounter(count)}</Consumer>
        <Consumer>{([, setCount]) => renderButton(3, setCount)}</Consumer>
      </Provider>
    )
    const countDom = screen.getByTestId('counterId')
    const buttonDom = screen.getByText('change count')
    expect(countDom.textContent).toEqual('0')
    fireEvent.click(buttonDom)
    expect(countDom.textContent).toEqual('3')
  })
})
