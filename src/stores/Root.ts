import { types, Instance } from 'mobx-state-tree';
import { createContext, useContext } from 'react';
import { Cart } from './Cart';

const RootModel = types.model({
  cart: Cart,
});

const initialState = RootModel.create({
  cart: {
    cartItems: [],
  },
});

export const rootStore = initialState;

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;

export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
