import { OpCode } from '../language-definition'

// An ExecutionState should describe all aspects of the script
// execution at an point in time.
export interface ExecutionState {
  // network state
  blockHeight: number,
  blockTime: number,

  // transaction state
  script: Uint8Array,
  nLockTime: number,
  nSequence: number,

  // execution state
  stack: any[],
  altstack: any[],
  currentExecutionPoint: number,
  lastCodeSeperator: number,

  // exception handling
  exception?: ExecutionException,
  exceptionOpCode?: OpCode
}

export enum ExecutionException {
  Unimplemented = 0,
  Invalid = 1,
  Disabled = 2
}

// All bitcoin script operations take a single ExecutionState
// and return an ExecutionState.
export interface BitcoinScriptOperation {
  (state: ExecutionState): ExecutionState
}

export interface BitcoinScriptOperationGenerator {
  (input: any): BitcoinScriptOperation
}
