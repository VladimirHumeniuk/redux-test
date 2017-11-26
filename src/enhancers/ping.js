export const ping = store => next => action => {
  console.log(`Action type: ${action.type}, ${action.payload}`)
  return next(action)
}
