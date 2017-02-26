import { ExecutionState, copyState } from '../common'

export const add = (state: ExecutionState) => {
  const nextState = copyState(state)
  let a = nextState.stack.pop()
  let b = nextState.stack.pop()
  nextState.stack.push(a + b)
  nextState.programCounter++;
  return nextState
}
