import { BitcoinScriptOperation, ExecutionState, ExecutionException } from '../types'
import { OpCode } from '../../language-definition'

export function invalid (code: OpCode) {
  const invalid: BitcoinScriptOperation = (state: ExecutionState) => {
    state.exception = ExecutionException.Invalid
    state.exceptionOpCode = code
    return state
  }
  return invalid
}
