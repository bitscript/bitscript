import { ExecutionState, ExecutionException, OpCode } from '../common'

export const unimplemented = (code: OpCode) => (state: ExecutionState) => {
  state.exception = ExecutionException.Unimplemented
  state.exceptionOpCode = code
  return state
}
