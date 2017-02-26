import { ExecutionState, ExecutionException, OpCode } from '../common'

export const unknown = (code: OpCode) => (state: ExecutionState) => {
  state.exception = ExecutionException.Unknown
  state.exceptionOpCode = code
  return state
}
