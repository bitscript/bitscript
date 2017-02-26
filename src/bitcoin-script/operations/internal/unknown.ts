import { BitcoinScriptOperationFactory } from '../operations'
import { ExecutionState, ExecutionException } from '../../engine'
import { OpCode } from '../../language-definition'

export const unknown: BitcoinScriptOperationFactory = (code: OpCode) => (state: ExecutionState) => {
  state.exception = ExecutionException.Unknown
  state.exceptionOpCode = code
  return state
}
