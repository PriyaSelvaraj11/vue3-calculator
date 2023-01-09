type IType = "action" | "number";
export const DIGITS:any = {
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '0': '0',
  '.': '.',
}

export const OPERATORS:any = {
  'clearAll': 'AC',
  'clearPrevious': 'C',
  'equals': '=',
  'divide': '/',
  'modulo': '%',
  'multiply': 'x',
  'minus': '-',
  'add': '+',
}

export const buttonActionMapping:any = [
  { id: OPERATORS['clearAll'], type: 'action',  buttonVariant: "grey" },
  { id: OPERATORS['clearPrevious'], type: 'action' ,  buttonVariant: "grey"},
  { id: OPERATORS['modulo'], type: 'operator', buttonVariant: "orange" },
  { id: OPERATORS['divide'], type: 'operator', buttonVariant: "orange" },
  { id: '7', type: 'number' },
  { id: '8', type: 'number' },
  { id: '9', type: 'number' },
  { id: OPERATORS['multiply'], type: 'operator', buttonVariant: "orange"  },
  { id: '4', type: 'number' },
  { id: '5', type: 'number' },
  { id: '6', type: 'number' },
  { id: OPERATORS['minus'], type: 'operator', buttonVariant: "orange"  },
  { id: '1', type: 'number' },
  { id: '2', type: 'number' },
  { id: '3', type: 'number' },
  { id:  OPERATORS['add'], type: 'operator', buttonVariant: "orange"  },
  { id: DIGITS['.'], type: 'number' },
  { id: '0', type: 'number' },
  { id: OPERATORS['equals'], type: 'action', buttonVariant: "grey"  },
];
