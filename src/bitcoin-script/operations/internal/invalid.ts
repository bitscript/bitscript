import { BitcoinScriptOperationFactory } from '../operations'
import { ExecutionState, ExecutionException } from '../../engine'
import { OpCode } from '../../language-definition'

export const invalid: BitcoinScriptOperationFactory = (code: OpCode) => (state: ExecutionState) => {
  state.exception = ExecutionException.Invalid
  state.exceptionOpCode = code
  return state
}
