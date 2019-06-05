function getSession(key) {
  return sessionStorage.getItem(key)
}

function setSession(key, value) {
  return sessionStorage.setItem(key, value)
}

function removeSession(key) {
  return sessionStorage.removeItem(key)
}


export {
  getSession,
  setSession,
  removeSession
}
