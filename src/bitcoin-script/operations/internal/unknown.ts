import { BitcoinScriptOperation, ExecutionState, ExecutionException } from '../types'
import { OpCode } from '../../language-definition'

export function unknown (code: OpCode) {
  const unknown: BitcoinScriptOperation = (state: ExecutionState) => {
    state.exception = ExecutionException.Unknown
    state.exceptionOpCode = code
    return state
  }
  return unknown
}
