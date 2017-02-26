import { BitcoinScriptOperationFactory } from '../operations'
import { ExecutionState, ExecutionException } from '../../engine'
import { OpCode } from '../../language-definition'

export const pushData: BitcoinScriptOperationFactory = (bytes: number) => (state: ExecutionState) => {
  state.exception = ExecutionException.Unimplemented
  state.exceptionOpCode = OpCode[OpCode[bytes]]
  return state
}
