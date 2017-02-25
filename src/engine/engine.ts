export enum OP_CODES {
    OP_1,
    OP_2,
    OP_ADD
}

export class Script extends Array<Operation> {}

export class Operation {
    code: OP_CODES;
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
  while(operations.length > 0) {
    let operation = operations.pop();

    stack.push(operation.code);

    yield stack.slice(0);
  }
}

export function execute(operations: Script) {
    return executeGenerator(operations);
}
