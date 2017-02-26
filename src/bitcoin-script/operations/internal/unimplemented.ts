import { BitcoinScriptOperation, ExecutionState, ExecutionException } from '../types'
import { OpCode } from '../../language-definition'

export function unimplemented (code: OpCode) {
  const unimplemented: BitcoinScriptOperation = (state: ExecutionState) => {
    state.exception = ExecutionException.Unimplemented
    state.exceptionOpCode = code
    return state
  }
  return unimplemented
}
