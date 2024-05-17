export * from "./encrypt";
export * from "./constants";
export * from "./context"

export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key) ?? "";
};
