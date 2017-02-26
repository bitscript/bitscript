import { OpCode, OpCodes } from './language-definition';

export enum ExecutionException {
  Unimplemented = 0,
  Invalid = 1,
  Disabled = 2,
  Unknown = 3
}

// An ExecutionState should describe all aspects of the script
// execution at an point in time.
export interface ExecutionState {
  // network state
  blockHeight: number
  blockTime: number

  // transaction state
  serializedScript: Uint8Array
  nLockTime: number
  nSequence: number

  // execution state
  stack: any[]
  altStack: any[]
  currentExecutionPoint: number
  lastCodeSeperator?: number // if not set, should be treated as 0

  // exception handling
  exception?: ExecutionException
  exceptionOpCode?: OpCode
}

function* executeGenerator(state: ExecutionState) {
  let stack = state.stack
  let altStack = state.altStack
  while(state.serializedScript.length > state.currentExecutionPoint) {
    const operation = state.serializedScript[state.currentExecutionPoint]
    const opDefinition = OpCodes[0]
    yield opDefinition.operation(state)
  }
}

export function execute(operations: ExecutionState) {
    return executeGenerator(operations)
}

