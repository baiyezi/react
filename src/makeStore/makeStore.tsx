import React from 'react'

export interface ProviderProps<T> {
  value?: T
}

export default function makeStore<T>(defaultValue: T) {
  const context = React.createContext<
    [T, React.Dispatch<React.SetStateAction<T>>]
  >([defaultValue, () => {}])

  // 可以通过 value 重新设 store 的值
  // store 默认为 defaultValue
  const Provider: React.FC<ProviderProps<T>> = ({
    value = defaultValue,
    children,
  }) => {
    const [state, setState] = React.useState<T>(value)

    return (
      <context.Provider value={[state, setState]}>{children}</context.Provider>
    )
  }

  const useStore = () => React.useContext(context)
  const Consumer = context.Consumer

  return {
    Provider,
    Consumer,
    useStore,
  }
}
