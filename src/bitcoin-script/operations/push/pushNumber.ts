import { BitcoinScriptOperationFactory } from '../operations'
import { ExecutionState, ExecutionException } from '../../engine'
import { OpCode } from '../../language-definition'

export const pushNumber: BitcoinScriptOperationFactory = (value: number) => (state: ExecutionState) => {
  state.exception = ExecutionException.Unimplemented
  state.exceptionOpCode = OpCode[OpCode[value + 80]]
  return state
}
