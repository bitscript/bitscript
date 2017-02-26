import { OpCode, defineOpCodes } from './language-definition';

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
  programCounter: number
  lastCodeSeperator?: number // if not set, should be treated as 0

  // exception handling
  exception?: ExecutionException
  exceptionOpCode?: OpCode
}

// A convenient Generator API, because JavaScript
function* executeGenerator(state: ExecutionState) {
  const OpCodes = defineOpCodes()
  let currentState = state
  while(currentState.serializedScript.length > currentState.programCounter) {
    const operation = currentState.serializedScript[currentState.programCounter]
    const opDefinition = OpCodes[operation]
    currentState = opDefinition.operation(currentState)
    yield copyState(currentState)
  }
}

export function execute(operations: ExecutionState) {
    return executeGenerator(operations)
}

// return a copy of the provided state
export function copyState(state: ExecutionState) {
  return {
    blockHeight: state.blockHeight,
    blockTime: state.blockTime,

    // transaction state
    serializedScript: state.serializedScript,
    nLockTime: state.nLockTime,
    nSequence: state.nSequence,

    // execution state
    stack: state.stack,
    altStack: state.altStack,
    programCounter: state.programCounter,
    lastCodeSeperator: state.lastCodeSeperator, // if not set, should be treated as 0

    // exception handling
    exception: state.exception,
    exceptionOpCode: state.exceptionOpCode
  }
}
