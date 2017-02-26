import { BitcoinScriptOperationFactory } from '../operations'
import { ExecutionState, ExecutionException } from '../../engine'
import { OpCode } from '../../language-definition'

export const unimplemented: BitcoinScriptOperationFactory = (code: OpCode) => (state: ExecutionState) => {
  state.exception = ExecutionException.Unimplemented
  state.exceptionOpCode = code
  return state
}
