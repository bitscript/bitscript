import { BitcoinScriptOperation, ExecutionState, ExecutionException } from '../types'
import { OpCode } from '../../language-definition'

export function pushData (bytes: number) {
  const pushData: BitcoinScriptOperation = (state: ExecutionState) => {
    state.exception = ExecutionException.Unimplemented
    state.exceptionOpCode = OpCode[OpCode[bytes]]
    return state
  }
  return pushData
}
