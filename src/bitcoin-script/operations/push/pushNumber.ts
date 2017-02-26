import { BitcoinScriptOperation, ExecutionState, ExecutionException } from '../types'
import { OpCode } from '../../language-definition'

export function pushNumber (value: number) {
  const pushData: BitcoinScriptOperation = (state: ExecutionState) => {
    state.exception = ExecutionException.Unimplemented
    state.exceptionOpCode = OpCode[OpCode[value + 80]]
    return state
  }
  return pushData
}
