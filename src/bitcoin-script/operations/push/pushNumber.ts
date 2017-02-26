import { BitcoinScriptOperationFactory } from '../operations'
import { ExecutionState, copyState } from '../../engine'

export const pushNumber: BitcoinScriptOperationFactory = (value: number) => (state: ExecutionState) => {
  const nextState = copyState(state)
  nextState.stack.push(value);
  nextState.programCounter++;
  return nextState
}
