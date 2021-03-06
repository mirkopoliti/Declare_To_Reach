// Automatically generated with Reach 0.1.5
/* eslint-disable */
export const _version = '0.1.5';
export const _backendVersion = 3;


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      }
    };
  
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function Alice(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bool;
  
  
  const v35 = stdlib.protect(ctc0, await interact.Main('Login                           '), {
    at: './index.rsh:24:44:application',
    fs: ['at ./index.rsh:23:15:application call to [unknown function] (defined at: ./index.rsh:23:19:function exp)'],
    msg: 'Main',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.Main('AddToCard                       '), {
    at: './index.rsh:25:45:application',
    fs: ['at ./index.rsh:23:15:application call to [unknown function] (defined at: ./index.rsh:23:19:function exp)'],
    msg: 'Main',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.Main('Buy                             '), {
    at: './index.rsh:26:45:application',
    fs: ['at ./index.rsh:23:15:application call to [unknown function] (defined at: ./index.rsh:23:19:function exp)'],
    msg: 'Main',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.Main('Logout                          '), {
    at: './index.rsh:27:45:application',
    fs: ['at ./index.rsh:23:15:application call to [unknown function] (defined at: ./index.rsh:23:19:function exp)'],
    msg: 'Main',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.Main('TERMINATE                       '), {
    at: './index.rsh:28:45:application',
    fs: ['at ./index.rsh:23:15:application call to [unknown function] (defined at: ./index.rsh:23:19:function exp)'],
    msg: 'Main',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v35],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:31:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v41], secs: v43, time: v42, didSend: v28, from: v40 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v41], secs: v43, time: v42, didSend: v28, from: v40 } = txn1;
  ;
  return;
  
  };
export async function Bob(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v41], secs: v43, time: v42, didSend: v28, from: v40 } = txn1;
  ;
  return;
  
  };

const _ALGO = {
  appApproval: `#pragma version 4
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
substring 0 8
btoi
store 1
dup
substring 8 16
btoi
store 2
substring 16 48
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
// Handler 0
dup
int 0
==
bz l0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 33
==
assert
dup
substring 0 32
store 255
dup
substring 32 33
btoi
store 254
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:31:11:dot"
// "[]"
int 100000
dup
bz l1
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1:
pop
// "CheckPay"
// "./index.rsh:31:11:dot"
// "[]"
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l2:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l0:
int 0
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 4
int 0
`,
  escrow: `#pragma version 4
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 4
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v41",
                "type": "bool"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v41",
                "type": "bool"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516101f83803806101f88339810160408190526100229161010a565b600080556040805182518152602080840151511515908201527fbb0ded070b14a89ad149cc0764db3cf16db63d8d34a3a42bbd6c0fbb222abbd5910160405180910390a16100723415600761008b565b60008080556001819055610088906002906100b4565b33ff5b816100b05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b5080546100c0906101bc565b6000825580601f106100d0575050565b601f0160209004906000526020600020908101906100ee91906100f1565b50565b5b8082111561010657600081556001016100f2565b5090565b600081830360408082121561011e57600080fd5b80518082016001600160401b03808211838310171561014d57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f198601121561016657600080fd5b83519450602085019150848210818311171561019257634e487b7160e01b600052604160045260246000fd5b5090915260208401519081151582146101aa57600080fd5b90825260208101919091529392505050565b600181811c908216806101d057607f821691505b602082108114156101f157634e487b7160e01b600052602260045260246000fd5b5091905056fe`,
  BytecodeLen: 504,
  Which: `oD`,
  version: 3,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

