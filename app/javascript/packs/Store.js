let store = null;

export function getStore() {
  return store;
};

export function setStore(newStore) {
  if (store != null) {
    throw new Error("The store has already been set!");
  }

  store = newStore;
};
