import { ExecutionState, ExecutionException, OpCode } from '../common'

export const pushData = (bytes: number) => (state: ExecutionState) => {
  state.exception = ExecutionException.Unimplemented
  state.exceptionOpCode = OpCode[OpCode[bytes]]
  return state
}
