import { BitcoinScriptOperationFactory } from '../operations'
import { ExecutionState, copyState } from '../../engine'

export const pushNumber: BitcoinScriptOperationFactory = (value: number) => (state: ExecutionState) => {
  console.log('made it')
  const nextState = copyState(state)
  nextState.stack.push(value);
  nextState.programCounter++;
  console.log(state)
  return nextState
}
