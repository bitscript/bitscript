import { BitcoinScriptOperation, ExecutionState } from '../types'

export const unimplemented: BitcoinScriptOperation = function (state: ExecutionState) {
  throw new Error('Not implemented')
  // return state
}
