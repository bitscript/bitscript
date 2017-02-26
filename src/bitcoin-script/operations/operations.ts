import { ExecutionState } from '../engine'
export { OpCode } from '../language-definition'

// All bitcoin script operations take a single ExecutionState
// and return an ExecutionState.
export interface BitcoinScriptOperation {
  (state: ExecutionState): ExecutionState
}

export interface BitcoinScriptOperationFactory {
  (input: any): BitcoinScriptOperation
}

// internal
export { unimplemented } from './internal/unimplemented'
export { unknown } from './internal/unknown'
export { invalid } from './internal/invalid'

// push
export { pushData } from './push/pushData'
export { pushNumber } from './push/pushNumber'

// numeric
export { add } from './numeric/add'
