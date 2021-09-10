import React from 'react'

export interface ProviderProps<T> {
  /**
   * Store value
   */
  value?: T
}

/**
 * Make a context store and context provider
 * @param defaultValue The default value
 * @returns Provider and react hook
 */
export default function makeStore<T>(defaultValue: T) {
  const context = React.createContext<
    [T, React.Dispatch<React.SetStateAction<T>>]
  >([defaultValue, () => {}])

  /**
   * Context store provider
   * Can be reset store value
   */
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
