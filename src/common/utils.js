
export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

export const saveInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}