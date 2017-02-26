import { ExecutionState, ExecutionException, OpCode } from '../common'

export const invalid = (code: OpCode) => (state: ExecutionState) => {
  state.exception = ExecutionException.Invalid
  state.exceptionOpCode = code
  return state
}
