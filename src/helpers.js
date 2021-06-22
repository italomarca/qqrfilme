export const isAtHome = location => {
  if (location.pathname === '/') {
    return true
  }

  return false
}