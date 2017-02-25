import { OpCode } from '../language-definition'

// TODO: placeholder for Stack object
export interface Stack {
  placeholder: string[]
}

// An ExecutionState should describe all aspects of the script
// execution at an point in time.
export interface ExecutionState {
  // network state
  blockHeight: number,
  blockTime: number,

  // transaction state
  script: string[], // TODO
  nLockTime: number,
  nSequence: number,

  // execution state
  stack: Stack,
  altstack: Stack,
  currentExecutionPoint: number,
  lastCodeSeperator: number,

  // exception handling
  unimplementedOpCode: OpCode,
  invalidOpCode: OpCode
}

// All bitcoin script operations take a single ExecutionState
// and return an ExecutionState.
export interface BitcoinScriptOperation {
    (state: ExecutionState): ExecutionState
}
