import { OpCode, OpCodes } from '../bitcoin-script/language-definition';

export class Script extends Array<Operation> {}

export class Operation {
    code: OpCode;
    value: string;

    static create(code, value?) {
      let operation = new Operation();
      operation.code = code;
      if(value) {
        operation.value = value;
      }
      return operation;
    }
}

function* executeGenerator(operations: Script) {

  let stack = [];
  let altStack = [];
  while(operations.length > 0) {
    let operation = operations.pop();

    let opDefinition = OpCodes[0];

    [stack, altStack] = opDefinition.operation(stack, altStack, 1);

console.log('stack', stack);
console.log('altStack', altStack);

    yield [stack, altStack];
  }
}

export function execute(operations: Script) {
    return executeGenerator(operations);
}
