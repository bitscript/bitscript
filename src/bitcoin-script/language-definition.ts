import {
	unimplemented,
	unknown,
	pushData,
	pushNumber,
	BitcoinScriptOperation,
	BitcoinScriptOperationGenerator,
} from './operations'

// from https://github.com/btcsuite/btcd/blob/master/txscript/opcode.go
export enum OpCode {
	OP_0                   = 0x00, // 0 - AKA OP_FALSE
	OP_DATA_1              = 0x01, // 1
	OP_DATA_2              = 0x02, // 2
	OP_DATA_3              = 0x03, // 3
	OP_DATA_4              = 0x04, // 4
	OP_DATA_5              = 0x05, // 5
	OP_DATA_6              = 0x06, // 6
	OP_DATA_7              = 0x07, // 7
	OP_DATA_8              = 0x08, // 8
	OP_DATA_9              = 0x09, // 9
	OP_DATA_10             = 0x0a, // 10
	OP_DATA_11             = 0x0b, // 11
	OP_DATA_12             = 0x0c, // 12
	OP_DATA_13             = 0x0d, // 13
	OP_DATA_14             = 0x0e, // 14
	OP_DATA_15             = 0x0f, // 15
	OP_DATA_16             = 0x10, // 16
	OP_DATA_17             = 0x11, // 17
	OP_DATA_18             = 0x12, // 18
	OP_DATA_19             = 0x13, // 19
	OP_DATA_20             = 0x14, // 20
	OP_DATA_21             = 0x15, // 21
	OP_DATA_22             = 0x16, // 22
	OP_DATA_23             = 0x17, // 23
	OP_DATA_24             = 0x18, // 24
	OP_DATA_25             = 0x19, // 25
	OP_DATA_26             = 0x1a, // 26
	OP_DATA_27             = 0x1b, // 27
	OP_DATA_28             = 0x1c, // 28
	OP_DATA_29             = 0x1d, // 29
	OP_DATA_30             = 0x1e, // 30
	OP_DATA_31             = 0x1f, // 31
	OP_DATA_32             = 0x20, // 32
	OP_DATA_33             = 0x21, // 33
	OP_DATA_34             = 0x22, // 34
	OP_DATA_35             = 0x23, // 35
	OP_DATA_36             = 0x24, // 36
	OP_DATA_37             = 0x25, // 37
	OP_DATA_38             = 0x26, // 38
	OP_DATA_39             = 0x27, // 39
	OP_DATA_40             = 0x28, // 40
	OP_DATA_41             = 0x29, // 41
	OP_DATA_42             = 0x2a, // 42
	OP_DATA_43             = 0x2b, // 43
	OP_DATA_44             = 0x2c, // 44
	OP_DATA_45             = 0x2d, // 45
	OP_DATA_46             = 0x2e, // 46
	OP_DATA_47             = 0x2f, // 47
	OP_DATA_48             = 0x30, // 48
	OP_DATA_49             = 0x31, // 49
	OP_DATA_50             = 0x32, // 50
	OP_DATA_51             = 0x33, // 51
	OP_DATA_52             = 0x34, // 52
	OP_DATA_53             = 0x35, // 53
	OP_DATA_54             = 0x36, // 54
	OP_DATA_55             = 0x37, // 55
	OP_DATA_56             = 0x38, // 56
	OP_DATA_57             = 0x39, // 57
	OP_DATA_58             = 0x3a, // 58
	OP_DATA_59             = 0x3b, // 59
	OP_DATA_60             = 0x3c, // 60
	OP_DATA_61             = 0x3d, // 61
	OP_DATA_62             = 0x3e, // 62
	OP_DATA_63             = 0x3f, // 63
	OP_DATA_64             = 0x40, // 64
	OP_DATA_65             = 0x41, // 65
	OP_DATA_66             = 0x42, // 66
	OP_DATA_67             = 0x43, // 67
	OP_DATA_68             = 0x44, // 68
	OP_DATA_69             = 0x45, // 69
	OP_DATA_70             = 0x46, // 70
	OP_DATA_71             = 0x47, // 71
	OP_DATA_72             = 0x48, // 72
	OP_DATA_73             = 0x49, // 73
	OP_DATA_74             = 0x4a, // 74
	OP_DATA_75             = 0x4b, // 75
	OP_PUSHDATA1           = 0x4c, // 76
	OP_PUSHDATA2           = 0x4d, // 77
	OP_PUSHDATA4           = 0x4e, // 78
	OP_1NEGATE             = 0x4f, // 79
	OP_RESERVED            = 0x50, // 80
	OP_1                   = 0x51, // 81 - AKA OP_TRUE
	OP_2                   = 0x52, // 82
	OP_3                   = 0x53, // 83
	OP_4                   = 0x54, // 84
	OP_5                   = 0x55, // 85
	OP_6                   = 0x56, // 86
	OP_7                   = 0x57, // 87
	OP_8                   = 0x58, // 88
	OP_9                   = 0x59, // 89
	OP_10                  = 0x5a, // 90
	OP_11                  = 0x5b, // 91
	OP_12                  = 0x5c, // 92
	OP_13                  = 0x5d, // 93
	OP_14                  = 0x5e, // 94
	OP_15                  = 0x5f, // 95
	OP_16                  = 0x60, // 96
	OP_NOP                 = 0x61, // 97
	OP_VER                 = 0x62, // 98
	OP_IF                  = 0x63, // 99
	OP_NOTIF               = 0x64, // 100
	OP_VERIF               = 0x65, // 101
	OP_VERNOTIF            = 0x66, // 102
	OP_ELSE                = 0x67, // 103
	OP_ENDIF               = 0x68, // 104
	OP_VERIFY              = 0x69, // 105
	OP_RETURN              = 0x6a, // 106
	OP_TOALTSTACK          = 0x6b, // 107
	OP_FROMALTSTACK        = 0x6c, // 108
	OP_2DROP               = 0x6d, // 109
	OP_2DUP                = 0x6e, // 110
	OP_3DUP                = 0x6f, // 111
	OP_2OVER               = 0x70, // 112
	OP_2ROT                = 0x71, // 113
	OP_2SWAP               = 0x72, // 114
	OP_IFDUP               = 0x73, // 115
	OP_DEPTH               = 0x74, // 116
	OP_DROP                = 0x75, // 117
	OP_DUP                 = 0x76, // 118
	OP_NIP                 = 0x77, // 119
	OP_OVER                = 0x78, // 120
	OP_PICK                = 0x79, // 121
	OP_ROLL                = 0x7a, // 122
	OP_ROT                 = 0x7b, // 123
	OP_SWAP                = 0x7c, // 124
	OP_TUCK                = 0x7d, // 125
	OP_CAT                 = 0x7e, // 126
	OP_SUBSTR              = 0x7f, // 127
	OP_LEFT                = 0x80, // 128
	OP_RIGHT               = 0x81, // 129
	OP_SIZE                = 0x82, // 130
	OP_INVERT              = 0x83, // 131
	OP_AND                 = 0x84, // 132
	OP_OR                  = 0x85, // 133
	OP_XOR                 = 0x86, // 134
	OP_EQUAL               = 0x87, // 135
	OP_EQUALVERIFY         = 0x88, // 136
	OP_RESERVED1           = 0x89, // 137
	OP_RESERVED2           = 0x8a, // 138
	OP_1ADD                = 0x8b, // 139
	OP_1SUB                = 0x8c, // 140
	OP_2MUL                = 0x8d, // 141
	OP_2DIV                = 0x8e, // 142
	OP_NEGATE              = 0x8f, // 143
	OP_ABS                 = 0x90, // 144
	OP_NOT                 = 0x91, // 145
	OP_0NOTEQUAL           = 0x92, // 146
	OP_ADD                 = 0x93, // 147
	OP_SUB                 = 0x94, // 148
	OP_MUL                 = 0x95, // 149
	OP_DIV                 = 0x96, // 150
	OP_MOD                 = 0x97, // 151
	OP_LSHIFT              = 0x98, // 152
	OP_RSHIFT              = 0x99, // 153
	OP_BOOLAND             = 0x9a, // 154
	OP_BOOLOR              = 0x9b, // 155
	OP_NUMEQUAL            = 0x9c, // 156
	OP_NUMEQUALVERIFY      = 0x9d, // 157
	OP_NUMNOTEQUAL         = 0x9e, // 158
	OP_LESSTHAN            = 0x9f, // 159
	OP_GREATERTHAN         = 0xa0, // 160
	OP_LESSTHANOREQUAL     = 0xa1, // 161
	OP_GREATERTHANOREQUAL  = 0xa2, // 162
	OP_MIN                 = 0xa3, // 163
	OP_MAX                 = 0xa4, // 164
	OP_WITHIN              = 0xa5, // 165
	OP_RIPEMD160           = 0xa6, // 166
	OP_SHA1                = 0xa7, // 167
	OP_SHA256              = 0xa8, // 168
	OP_HASH160             = 0xa9, // 169
	OP_HASH256             = 0xaa, // 170
	OP_CODESEPARATOR       = 0xab, // 171
	OP_CHECKSIG            = 0xac, // 172
	OP_CHECKSIGVERIFY      = 0xad, // 173
	OP_CHECKMULTISIG       = 0xae, // 174
	OP_CHECKMULTISIGVERIFY = 0xaf, // 175
	OP_NOP1                = 0xb0, // 176
	OP_CHECKLOCKTIMEVERIFY = 0xb1, // 177 - AKA OP_NOP2
	OP_CHECKSEQUENCEVERIFY = 0xb2, // 178 - AKA OP_NOP3
	OP_NOP4                = 0xb3, // 179
	OP_NOP5                = 0xb4, // 180
	OP_NOP6                = 0xb5, // 181
	OP_NOP7                = 0xb6, // 182
	OP_NOP8                = 0xb7, // 183
	OP_NOP9                = 0xb8, // 184
	OP_NOP10               = 0xb9, // 185
	OP_UNKNOWN186          = 0xba, // 186
	OP_UNKNOWN187          = 0xbb, // 187
	OP_UNKNOWN188          = 0xbc, // 188
	OP_UNKNOWN189          = 0xbd, // 189
	OP_UNKNOWN190          = 0xbe, // 190
	OP_UNKNOWN191          = 0xbf, // 191
	OP_UNKNOWN192          = 0xc0, // 192
	OP_UNKNOWN193          = 0xc1, // 193
	OP_UNKNOWN194          = 0xc2, // 194
	OP_UNKNOWN195          = 0xc3, // 195
	OP_UNKNOWN196          = 0xc4, // 196
	OP_UNKNOWN197          = 0xc5, // 197
	OP_UNKNOWN198          = 0xc6, // 198
	OP_UNKNOWN199          = 0xc7, // 199
	OP_UNKNOWN200          = 0xc8, // 200
	OP_UNKNOWN201          = 0xc9, // 201
	OP_UNKNOWN202          = 0xca, // 202
	OP_UNKNOWN203          = 0xcb, // 203
	OP_UNKNOWN204          = 0xcc, // 204
	OP_UNKNOWN205          = 0xcd, // 205
	OP_UNKNOWN206          = 0xce, // 206
	OP_UNKNOWN207          = 0xcf, // 207
	OP_UNKNOWN208          = 0xd0, // 208
	OP_UNKNOWN209          = 0xd1, // 209
	OP_UNKNOWN210          = 0xd2, // 210
	OP_UNKNOWN211          = 0xd3, // 211
	OP_UNKNOWN212          = 0xd4, // 212
	OP_UNKNOWN213          = 0xd5, // 213
	OP_UNKNOWN214          = 0xd6, // 214
	OP_UNKNOWN215          = 0xd7, // 215
	OP_UNKNOWN216          = 0xd8, // 216
	OP_UNKNOWN217          = 0xd9, // 217
	OP_UNKNOWN218          = 0xda, // 218
	OP_UNKNOWN219          = 0xdb, // 219
	OP_UNKNOWN220          = 0xdc, // 220
	OP_UNKNOWN221          = 0xdd, // 221
	OP_UNKNOWN222          = 0xde, // 222
	OP_UNKNOWN223          = 0xdf, // 223
	OP_UNKNOWN224          = 0xe0, // 224
	OP_UNKNOWN225          = 0xe1, // 225
	OP_UNKNOWN226          = 0xe2, // 226
	OP_UNKNOWN227          = 0xe3, // 227
	OP_UNKNOWN228          = 0xe4, // 228
	OP_UNKNOWN229          = 0xe5, // 229
	OP_UNKNOWN230          = 0xe6, // 230
	OP_UNKNOWN231          = 0xe7, // 231
	OP_UNKNOWN232          = 0xe8, // 232
	OP_UNKNOWN233          = 0xe9, // 233
	OP_UNKNOWN234          = 0xea, // 234
	OP_UNKNOWN235          = 0xeb, // 235
	OP_UNKNOWN236          = 0xec, // 236
	OP_UNKNOWN237          = 0xed, // 237
	OP_UNKNOWN238          = 0xee, // 238
	OP_UNKNOWN239          = 0xef, // 239
	OP_UNKNOWN240          = 0xf0, // 240
	OP_UNKNOWN241          = 0xf1, // 241
	OP_UNKNOWN242          = 0xf2, // 242
	OP_UNKNOWN243          = 0xf3, // 243
	OP_UNKNOWN244          = 0xf4, // 244
	OP_UNKNOWN245          = 0xf5, // 245
	OP_UNKNOWN246          = 0xf6, // 246
	OP_UNKNOWN247          = 0xf7, // 247
	OP_UNKNOWN248          = 0xf8, // 248
	OP_UNKNOWN249          = 0xf9, // 249
	OP_SMALLINTEGER        = 0xfa, // 250 - bitcoin core internal
	OP_PUBKEYS             = 0xfb, // 251 - bitcoin core internal
	OP_UNKNOWN252          = 0xfc, // 252
	OP_PUBKEYHASH          = 0xfd, // 253 - bitcoin core internal
	OP_PUBKEY              = 0xfe, // 254 - bitcoin core internal
	OP_INVALIDOPCODE       = 0xff // 255 - bitcoin core internal
}

export interface OpCodeDefinition {
  name: string,
  codepoint: number,
  description: string,
  operation: BitcoinScriptOperation | BitcoinScriptOperationGenerator
}

export const OpCodes: OpCodeDefinition[] = [
{ name: 'OP_0', codepoint: OpCode.OP_0, description: 'Push an empty array of bytes onto the stack.', operation: pushData(0) },
{ name: 'OP_DATA_1', codepoint: OpCode.OP_DATA_1, description: 'Push the next byte onto the stack.', operation: pushData(1) },
{ name: 'OP_DATA_2', codepoint: OpCode.OP_DATA_2, description: 'Push the next 2 bytes onto the stack.', operation: pushData(2) },
{ name: 'OP_DATA_3', codepoint: OpCode.OP_DATA_3, description: 'Push the next 3 bytes onto the stack.', operation: pushData(3) },
{ name: 'OP_DATA_4', codepoint: OpCode.OP_DATA_4, description: 'Push the next 4 bytes onto the stack.', operation: pushData(4) },
{ name: 'OP_DATA_5', codepoint: OpCode.OP_DATA_5, description: 'Push the next 5 bytes onto the stack.', operation: pushData(5) },
{ name: 'OP_DATA_6', codepoint: OpCode.OP_DATA_6, description: 'Push the next 6 bytes onto the stack.', operation: pushData(6) },
{ name: 'OP_DATA_7', codepoint: OpCode.OP_DATA_7, description: 'Push the next 7 bytes onto the stack.', operation: pushData(7) },
{ name: 'OP_DATA_8', codepoint: OpCode.OP_DATA_8, description: 'Push the next 8 bytes onto the stack.', operation: pushData(8) },
{ name: 'OP_DATA_9', codepoint: OpCode.OP_DATA_9, description: 'Push the next 9 bytes onto the stack.', operation: pushData(9) },
{ name: 'OP_DATA_10', codepoint: OpCode.OP_DATA_10, description: 'Push the next 10 bytes onto the stack.', operation: pushData(10) },
{ name: 'OP_DATA_11', codepoint: OpCode.OP_DATA_11, description: 'Push the next 11 bytes onto the stack.', operation: pushData(11) },
{ name: 'OP_DATA_12', codepoint: OpCode.OP_DATA_12, description: 'Push the next 12 bytes onto the stack.', operation: pushData(12) },
{ name: 'OP_DATA_13', codepoint: OpCode.OP_DATA_13, description: 'Push the next 13 bytes onto the stack.', operation: pushData(13) },
{ name: 'OP_DATA_14', codepoint: OpCode.OP_DATA_14, description: 'Push the next 14 bytes onto the stack.', operation: pushData(14) },
{ name: 'OP_DATA_15', codepoint: OpCode.OP_DATA_15, description: 'Push the next 15 bytes onto the stack.', operation: pushData(15) },
{ name: 'OP_DATA_16', codepoint: OpCode.OP_DATA_16, description: 'Push the next 16 bytes onto the stack.', operation: pushData(16) },
{ name: 'OP_DATA_17', codepoint: OpCode.OP_DATA_17, description: 'Push the next 17 bytes onto the stack.', operation: pushData(17) },
{ name: 'OP_DATA_18', codepoint: OpCode.OP_DATA_18, description: 'Push the next 18 bytes onto the stack.', operation: pushData(18) },
{ name: 'OP_DATA_19', codepoint: OpCode.OP_DATA_19, description: 'Push the next 19 bytes onto the stack.', operation: pushData(19) },
{ name: 'OP_DATA_20', codepoint: OpCode.OP_DATA_20, description: 'Push the next 20 bytes onto the stack.', operation: pushData(20) },
{ name: 'OP_DATA_21', codepoint: OpCode.OP_DATA_21, description: 'Push the next 21 bytes onto the stack.', operation: pushData(21) },
{ name: 'OP_DATA_22', codepoint: OpCode.OP_DATA_22, description: 'Push the next 22 bytes onto the stack.', operation: pushData(22) },
{ name: 'OP_DATA_23', codepoint: OpCode.OP_DATA_23, description: 'Push the next 23 bytes onto the stack.', operation: pushData(23) },
{ name: 'OP_DATA_24', codepoint: OpCode.OP_DATA_24, description: 'Push the next 24 bytes onto the stack.', operation: pushData(24) },
{ name: 'OP_DATA_25', codepoint: OpCode.OP_DATA_25, description: 'Push the next 25 bytes onto the stack.', operation: pushData(25) },
{ name: 'OP_DATA_26', codepoint: OpCode.OP_DATA_26, description: 'Push the next 26 bytes onto the stack.', operation: pushData(26) },
{ name: 'OP_DATA_27', codepoint: OpCode.OP_DATA_27, description: 'Push the next 27 bytes onto the stack.', operation: pushData(27) },
{ name: 'OP_DATA_28', codepoint: OpCode.OP_DATA_28, description: 'Push the next 28 bytes onto the stack.', operation: pushData(28) },
{ name: 'OP_DATA_29', codepoint: OpCode.OP_DATA_29, description: 'Push the next 29 bytes onto the stack.', operation: pushData(29) },
{ name: 'OP_DATA_30', codepoint: OpCode.OP_DATA_30, description: 'Push the next 30 bytes onto the stack.', operation: pushData(30) },
{ name: 'OP_DATA_31', codepoint: OpCode.OP_DATA_31, description: 'Push the next 31 bytes onto the stack.', operation: pushData(31) },
{ name: 'OP_DATA_32', codepoint: OpCode.OP_DATA_32, description: 'Push the next 32 bytes onto the stack.', operation: pushData(32) },
{ name: 'OP_DATA_33', codepoint: OpCode.OP_DATA_33, description: 'Push the next 33 bytes onto the stack.', operation: pushData(33) },
{ name: 'OP_DATA_34', codepoint: OpCode.OP_DATA_34, description: 'Push the next 34 bytes onto the stack.', operation: pushData(34) },
{ name: 'OP_DATA_35', codepoint: OpCode.OP_DATA_35, description: 'Push the next 35 bytes onto the stack.', operation: pushData(35) },
{ name: 'OP_DATA_36', codepoint: OpCode.OP_DATA_36, description: 'Push the next 36 bytes onto the stack.', operation: pushData(36) },
{ name: 'OP_DATA_37', codepoint: OpCode.OP_DATA_37, description: 'Push the next 37 bytes onto the stack.', operation: pushData(37) },
{ name: 'OP_DATA_38', codepoint: OpCode.OP_DATA_38, description: 'Push the next 38 bytes onto the stack.', operation: pushData(38) },
{ name: 'OP_DATA_39', codepoint: OpCode.OP_DATA_39, description: 'Push the next 39 bytes onto the stack.', operation: pushData(39) },
{ name: 'OP_DATA_40', codepoint: OpCode.OP_DATA_40, description: 'Push the next 40 bytes onto the stack.', operation: pushData(40) },
{ name: 'OP_DATA_41', codepoint: OpCode.OP_DATA_41, description: 'Push the next 41 bytes onto the stack.', operation: pushData(41) },
{ name: 'OP_DATA_42', codepoint: OpCode.OP_DATA_42, description: 'Push the next 42 bytes onto the stack.', operation: pushData(42) },
{ name: 'OP_DATA_43', codepoint: OpCode.OP_DATA_43, description: 'Push the next 43 bytes onto the stack.', operation: pushData(43) },
{ name: 'OP_DATA_44', codepoint: OpCode.OP_DATA_44, description: 'Push the next 44 bytes onto the stack.', operation: pushData(44) },
{ name: 'OP_DATA_45', codepoint: OpCode.OP_DATA_45, description: 'Push the next 45 bytes onto the stack.', operation: pushData(45) },
{ name: 'OP_DATA_46', codepoint: OpCode.OP_DATA_46, description: 'Push the next 46 bytes onto the stack.', operation: pushData(46) },
{ name: 'OP_DATA_47', codepoint: OpCode.OP_DATA_47, description: 'Push the next 47 bytes onto the stack.', operation: pushData(47) },
{ name: 'OP_DATA_48', codepoint: OpCode.OP_DATA_48, description: 'Push the next 48 bytes onto the stack.', operation: pushData(48) },
{ name: 'OP_DATA_49', codepoint: OpCode.OP_DATA_49, description: 'Push the next 49 bytes onto the stack.', operation: pushData(49) },
{ name: 'OP_DATA_50', codepoint: OpCode.OP_DATA_50, description: 'Push the next 50 bytes onto the stack.', operation: pushData(50) },
{ name: 'OP_DATA_51', codepoint: OpCode.OP_DATA_51, description: 'Push the next 51 bytes onto the stack.', operation: pushData(51) },
{ name: 'OP_DATA_52', codepoint: OpCode.OP_DATA_52, description: 'Push the next 52 bytes onto the stack.', operation: pushData(52) },
{ name: 'OP_DATA_53', codepoint: OpCode.OP_DATA_53, description: 'Push the next 53 bytes onto the stack.', operation: pushData(53) },
{ name: 'OP_DATA_54', codepoint: OpCode.OP_DATA_54, description: 'Push the next 54 bytes onto the stack.', operation: pushData(54) },
{ name: 'OP_DATA_55', codepoint: OpCode.OP_DATA_55, description: 'Push the next 55 bytes onto the stack.', operation: pushData(55) },
{ name: 'OP_DATA_56', codepoint: OpCode.OP_DATA_56, description: 'Push the next 56 bytes onto the stack.', operation: pushData(56) },
{ name: 'OP_DATA_57', codepoint: OpCode.OP_DATA_57, description: 'Push the next 57 bytes onto the stack.', operation: pushData(57) },
{ name: 'OP_DATA_58', codepoint: OpCode.OP_DATA_58, description: 'Push the next 58 bytes onto the stack.', operation: pushData(58) },
{ name: 'OP_DATA_59', codepoint: OpCode.OP_DATA_59, description: 'Push the next 59 bytes onto the stack.', operation: pushData(59) },
{ name: 'OP_DATA_60', codepoint: OpCode.OP_DATA_60, description: 'Push the next 60 bytes onto the stack.', operation: pushData(60) },
{ name: 'OP_DATA_61', codepoint: OpCode.OP_DATA_61, description: 'Push the next 61 bytes onto the stack.', operation: pushData(61) },
{ name: 'OP_DATA_62', codepoint: OpCode.OP_DATA_62, description: 'Push the next 62 bytes onto the stack.', operation: pushData(62) },
{ name: 'OP_DATA_63', codepoint: OpCode.OP_DATA_63, description: 'Push the next 63 bytes onto the stack.', operation: pushData(63) },
{ name: 'OP_DATA_64', codepoint: OpCode.OP_DATA_64, description: 'Push the next 64 bytes onto the stack.', operation: pushData(64) },
{ name: 'OP_DATA_65', codepoint: OpCode.OP_DATA_65, description: 'Push the next 65 bytes onto the stack.', operation: pushData(65) },
{ name: 'OP_DATA_66', codepoint: OpCode.OP_DATA_66, description: 'Push the next 66 bytes onto the stack.', operation: pushData(66) },
{ name: 'OP_DATA_67', codepoint: OpCode.OP_DATA_67, description: 'Push the next 67 bytes onto the stack.', operation: pushData(67) },
{ name: 'OP_DATA_68', codepoint: OpCode.OP_DATA_68, description: 'Push the next 68 bytes onto the stack.', operation: pushData(68) },
{ name: 'OP_DATA_69', codepoint: OpCode.OP_DATA_69, description: 'Push the next 69 bytes onto the stack.', operation: pushData(69) },
{ name: 'OP_DATA_70', codepoint: OpCode.OP_DATA_70, description: 'Push the next 70 bytes onto the stack.', operation: pushData(70) },
{ name: 'OP_DATA_71', codepoint: OpCode.OP_DATA_71, description: 'Push the next 71 bytes onto the stack.', operation: pushData(71) },
{ name: 'OP_DATA_72', codepoint: OpCode.OP_DATA_72, description: 'Push the next 72 bytes onto the stack.', operation: pushData(72) },
{ name: 'OP_DATA_73', codepoint: OpCode.OP_DATA_73, description: 'Push the next 73 bytes onto the stack.', operation: pushData(73) },
{ name: 'OP_DATA_74', codepoint: OpCode.OP_DATA_74, description: 'Push the next 74 bytes onto the stack.', operation: pushData(74) },
{ name: 'OP_DATA_75', codepoint: OpCode.OP_DATA_75, description: 'Push the next 75 bytes onto the stack.', operation: pushData(75) },
{ name: 'OP_PUSHDATA1', codepoint: OpCode.OP_PUSHDATA1, description: 'OP_PUSHDATA1 is not yet implemented.', operation: unimplemented(OpCode.OP_PUSHDATA1) },
{ name: 'OP_PUSHDATA2', codepoint: OpCode.OP_PUSHDATA2, description: 'OP_PUSHDATA2 is not yet implemented.', operation: unimplemented(OpCode.OP_PUSHDATA2) },
{ name: 'OP_PUSHDATA4', codepoint: OpCode.OP_PUSHDATA4, description: 'OP_PUSHDATA4 is not yet implemented.', operation: unimplemented(OpCode.OP_PUSHDATA4) },
{ name: 'OP_1NEGATE', codepoint: OpCode.OP_1NEGATE, description: 'OP_1NEGATE is not yet implemented.', operation: unimplemented(OpCode.OP_1NEGATE) },
{ name: 'OP_RESERVED', codepoint: OpCode.OP_RESERVED, description: 'OP_RESERVED is not yet implemented.', operation: unimplemented(OpCode.OP_RESERVED) },
{ name: 'OP_1', codepoint: OpCode.OP_1, description: 'Push the number 1 to the stack.', operation: pushNumber(1) },
{ name: 'OP_2', codepoint: OpCode.OP_2, description: 'Push the number 2 to the stack.', operation: pushNumber(2) },
{ name: 'OP_3', codepoint: OpCode.OP_3, description: 'Push the number 3 to the stack.', operation: pushNumber(3) },
{ name: 'OP_4', codepoint: OpCode.OP_4, description: 'Push the number 4 to the stack.', operation: pushNumber(4) },
{ name: 'OP_5', codepoint: OpCode.OP_5, description: 'Push the number 5 to the stack.', operation: pushNumber(5) },
{ name: 'OP_6', codepoint: OpCode.OP_6, description: 'Push the number 6 to the stack.', operation: pushNumber(6) },
{ name: 'OP_7', codepoint: OpCode.OP_7, description: 'Push the number 7 to the stack.', operation: pushNumber(7) },
{ name: 'OP_8', codepoint: OpCode.OP_8, description: 'Push the number 8 to the stack.', operation: pushNumber(8) },
{ name: 'OP_9', codepoint: OpCode.OP_9, description: 'Push the number 9 to the stack.', operation: pushNumber(9) },
{ name: 'OP_10', codepoint: OpCode.OP_10, description: 'Push the number 10 to the stack.', operation: pushNumber(10) },
{ name: 'OP_11', codepoint: OpCode.OP_11, description: 'Push the number 11 to the stack.', operation: pushNumber(11) },
{ name: 'OP_12', codepoint: OpCode.OP_12, description: 'Push the number 12 to the stack.', operation: pushNumber(12) },
{ name: 'OP_13', codepoint: OpCode.OP_13, description: 'Push the number 13 to the stack.', operation: pushNumber(13) },
{ name: 'OP_14', codepoint: OpCode.OP_14, description: 'Push the number 14 to the stack.', operation: pushNumber(14) },
{ name: 'OP_15', codepoint: OpCode.OP_15, description: 'Push the number 15 to the stack.', operation: pushNumber(15) },
{ name: 'OP_16', codepoint: OpCode.OP_16, description: 'Push the number 16 to the stack.', operation: pushNumber(16) },
{ name: 'OP_IF', codepoint: OpCode.OP_IF, description: 'OP_IF is not yet implemented.', operation: unimplemented(OpCode.OP_IF) },
{ name: 'OP_NOTIF', codepoint: OpCode.OP_NOTIF, description: 'OP_NOTIF is not yet implemented.', operation: unimplemented(OpCode.OP_NOTIF) },
{ name: 'OP_VERIF', codepoint: OpCode.OP_VERIF, description: 'OP_VERIF is not yet implemented.', operation: unimplemented(OpCode.OP_VERIF) },
{ name: 'OP_VERNOTIF', codepoint: OpCode.OP_VERNOTIF, description: 'OP_VERNOTIF is not yet implemented.', operation: unimplemented(OpCode.OP_VERNOTIF) },
{ name: 'OP_ELSE', codepoint: OpCode.OP_ELSE, description: 'OP_ELSE is not yet implemented.', operation: unimplemented(OpCode.OP_ELSE) },
{ name: 'OP_ENDIF', codepoint: OpCode.OP_ENDIF, description: 'OP_ENDIF is not yet implemented.', operation: unimplemented(OpCode.OP_ENDIF) },
{ name: 'OP_VERIFY', codepoint: OpCode.OP_VERIFY, description: 'OP_VERIFY is not yet implemented.', operation: unimplemented(OpCode.OP_VERIFY) },
{ name: 'OP_RETURN', codepoint: OpCode.OP_RETURN, description: 'OP_RETURN is not yet implemented.', operation: unimplemented(OpCode.OP_RETURN) },
{ name: 'OP_TOALTSTACK', codepoint: OpCode.OP_TOALTSTACK, description: 'OP_TOALTSTACK is not yet implemented.', operation: unimplemented(OpCode.OP_TOALTSTACK) },
{ name: 'OP_FROMALTSTACK', codepoint: OpCode.OP_FROMALTSTACK, description: 'OP_FROMALTSTACK is not yet implemented.', operation: unimplemented(OpCode.OP_FROMALTSTACK) },
{ name: 'OP_2DROP', codepoint: OpCode.OP_2DROP, description: 'OP_2DROP is not yet implemented.', operation: unimplemented(OpCode.OP_2DROP) },
{ name: 'OP_2DUP', codepoint: OpCode.OP_2DUP, description: 'OP_2DUP is not yet implemented.', operation: unimplemented(OpCode.OP_2DUP) },
{ name: 'OP_3DUP', codepoint: OpCode.OP_3DUP, description: 'OP_3DUP is not yet implemented.', operation: unimplemented(OpCode.OP_3DUP) },
{ name: 'OP_2OVER', codepoint: OpCode.OP_2OVER, description: 'OP_2OVER is not yet implemented.', operation: unimplemented(OpCode.OP_2OVER) },
{ name: 'OP_2ROT', codepoint: OpCode.OP_2ROT, description: 'OP_2ROT is not yet implemented.', operation: unimplemented(OpCode.OP_2ROT) },
{ name: 'OP_2SWAP', codepoint: OpCode.OP_2SWAP, description: 'OP_2SWAP is not yet implemented.', operation: unimplemented(OpCode.OP_2SWAP) },
{ name: 'OP_IFDUP', codepoint: OpCode.OP_IFDUP, description: 'OP_IFDUP is not yet implemented.', operation: unimplemented(OpCode.OP_IFDUP) },
{ name: 'OP_DEPTH', codepoint: OpCode.OP_DEPTH, description: 'OP_DEPTH is not yet implemented.', operation: unimplemented(OpCode.OP_DEPTH) },
{ name: 'OP_DROP', codepoint: OpCode.OP_DROP, description: 'OP_DROP is not yet implemented.', operation: unimplemented(OpCode.OP_DROP) },
{ name: 'OP_DUP', codepoint: OpCode.OP_DUP, description: 'OP_DUP is not yet implemented.', operation: unimplemented(OpCode.OP_DUP) },
{ name: 'OP_NIP', codepoint: OpCode.OP_NIP, description: 'OP_NIP is not yet implemented.', operation: unimplemented(OpCode.OP_NIP) },
{ name: 'OP_OVER', codepoint: OpCode.OP_OVER, description: 'OP_OVER is not yet implemented.', operation: unimplemented(OpCode.OP_OVER) },
{ name: 'OP_PICK', codepoint: OpCode.OP_PICK, description: 'OP_PICK is not yet implemented.', operation: unimplemented(OpCode.OP_PICK) },
{ name: 'OP_ROLL', codepoint: OpCode.OP_ROLL, description: 'OP_ROLL is not yet implemented.', operation: unimplemented(OpCode.OP_ROLL) },
{ name: 'OP_ROT', codepoint: OpCode.OP_ROT, description: 'OP_ROT is not yet implemented.', operation: unimplemented(OpCode.OP_ROT) },
{ name: 'OP_SWAP', codepoint: OpCode.OP_SWAP, description: 'OP_SWAP is not yet implemented.', operation: unimplemented(OpCode.OP_SWAP) },
{ name: 'OP_TUCK', codepoint: OpCode.OP_TUCK, description: 'OP_TUCK is not yet implemented.', operation: unimplemented(OpCode.OP_TUCK) },
{ name: 'OP_CAT', codepoint: OpCode.OP_CAT, description: 'OP_CAT is not yet implemented.', operation: unimplemented(OpCode.OP_CAT) },
{ name: 'OP_SUBSTR', codepoint: OpCode.OP_SUBSTR, description: 'OP_SUBSTR is not yet implemented.', operation: unimplemented(OpCode.OP_SUBSTR) },
{ name: 'OP_LEFT', codepoint: OpCode.OP_LEFT, description: 'OP_LEFT is not yet implemented.', operation: unimplemented(OpCode.OP_LEFT) },
{ name: 'OP_RIGHT', codepoint: OpCode.OP_RIGHT, description: 'OP_RIGHT is not yet implemented.', operation: unimplemented(OpCode.OP_RIGHT) },
{ name: 'OP_SIZE', codepoint: OpCode.OP_SIZE, description: 'OP_SIZE is not yet implemented.', operation: unimplemented(OpCode.OP_SIZE) },
{ name: 'OP_INVERT', codepoint: OpCode.OP_INVERT, description: 'OP_INVERT is not yet implemented.', operation: unimplemented(OpCode.OP_INVERT) },
{ name: 'OP_AND', codepoint: OpCode.OP_AND, description: 'OP_AND is not yet implemented.', operation: unimplemented(OpCode.OP_AND) },
{ name: 'OP_OR', codepoint: OpCode.OP_OR, description: 'OP_OR is not yet implemented.', operation: unimplemented(OpCode.OP_OR) },
{ name: 'OP_XOR', codepoint: OpCode.OP_XOR, description: 'OP_XOR is not yet implemented.', operation: unimplemented(OpCode.OP_XOR) },
{ name: 'OP_EQUAL', codepoint: OpCode.OP_EQUAL, description: 'OP_EQUAL is not yet implemented.', operation: unimplemented(OpCode.OP_EQUAL) },
{ name: 'OP_EQUALVERIFY', codepoint: OpCode.OP_EQUALVERIFY, description: 'OP_EQUALVERIFY is not yet implemented.', operation: unimplemented(OpCode.OP_EQUALVERIFY) },
{ name: 'OP_RESERVED1', codepoint: OpCode.OP_RESERVED1, description: 'OP_RESERVED1 is not yet implemented.', operation: unimplemented(OpCode.OP_RESERVED1) },
{ name: 'OP_RESERVED2', codepoint: OpCode.OP_RESERVED2, description: 'OP_RESERVED2 is not yet implemented.', operation: unimplemented(OpCode.OP_RESERVED2) },
{ name: 'OP_1ADD', codepoint: OpCode.OP_1ADD, description: 'OP_1ADD is not yet implemented.', operation: unimplemented(OpCode.OP_1ADD) },
{ name: 'OP_1SUB', codepoint: OpCode.OP_1SUB, description: 'OP_1SUB is not yet implemented.', operation: unimplemented(OpCode.OP_1SUB) },
{ name: 'OP_2MUL', codepoint: OpCode.OP_2MUL, description: 'OP_2MUL is not yet implemented.', operation: unimplemented(OpCode.OP_2MUL) },
{ name: 'OP_2DIV', codepoint: OpCode.OP_2DIV, description: 'OP_2DIV is not yet implemented.', operation: unimplemented(OpCode.OP_2DIV) },
{ name: 'OP_NEGATE', codepoint: OpCode.OP_NEGATE, description: 'OP_NEGATE is not yet implemented.', operation: unimplemented(OpCode.OP_NEGATE) },
{ name: 'OP_ABS', codepoint: OpCode.OP_ABS, description: 'OP_ABS is not yet implemented.', operation: unimplemented(OpCode.OP_ABS) },
{ name: 'OP_NOT', codepoint: OpCode.OP_NOT, description: 'OP_NOT is not yet implemented.', operation: unimplemented(OpCode.OP_NOT) },
{ name: 'OP_0NOTEQUAL', codepoint: OpCode.OP_0NOTEQUAL, description: 'OP_0NOTEQUAL is not yet implemented.', operation: unimplemented(OpCode.OP_0NOTEQUAL) },
{ name: 'OP_ADD', codepoint: OpCode.OP_ADD, description: 'OP_ADD is not yet implemented.', operation: unimplemented(OpCode.OP_ADD) },
{ name: 'OP_SUB', codepoint: OpCode.OP_SUB, description: 'OP_SUB is not yet implemented.', operation: unimplemented(OpCode.OP_SUB) },
{ name: 'OP_MUL', codepoint: OpCode.OP_MUL, description: 'OP_MUL is not yet implemented.', operation: unimplemented(OpCode.OP_MUL) },
{ name: 'OP_DIV', codepoint: OpCode.OP_DIV, description: 'OP_DIV is not yet implemented.', operation: unimplemented(OpCode.OP_DIV) },
{ name: 'OP_MOD', codepoint: OpCode.OP_MOD, description: 'OP_MOD is not yet implemented.', operation: unimplemented(OpCode.OP_MOD) },
{ name: 'OP_LSHIFT', codepoint: OpCode.OP_LSHIFT, description: 'OP_LSHIFT is not yet implemented.', operation: unimplemented(OpCode.OP_LSHIFT) },
{ name: 'OP_RSHIFT', codepoint: OpCode.OP_RSHIFT, description: 'OP_RSHIFT is not yet implemented.', operation: unimplemented(OpCode.OP_RSHIFT) },
{ name: 'OP_BOOLAND', codepoint: OpCode.OP_BOOLAND, description: 'OP_BOOLAND is not yet implemented.', operation: unimplemented(OpCode.OP_BOOLAND) },
{ name: 'OP_BOOLOR', codepoint: OpCode.OP_BOOLOR, description: 'OP_BOOLOR is not yet implemented.', operation: unimplemented(OpCode.OP_BOOLOR) },
{ name: 'OP_NUMEQUAL', codepoint: OpCode.OP_NUMEQUAL, description: 'OP_NUMEQUAL is not yet implemented.', operation: unimplemented(OpCode.OP_NUMEQUAL) },
{ name: 'OP_NUMEQUALVERIFY', codepoint: OpCode.OP_NUMEQUALVERIFY, description: 'OP_NUMEQUALVERIFY is not yet implemented.', operation: unimplemented(OpCode.OP_NUMEQUALVERIFY) },
{ name: 'OP_NUMNOTEQUAL', codepoint: OpCode.OP_NUMNOTEQUAL, description: 'OP_NUMNOTEQUAL is not yet implemented.', operation: unimplemented(OpCode.OP_NUMNOTEQUAL) },
{ name: 'OP_LESSTHAN', codepoint: OpCode.OP_LESSTHAN, description: 'OP_LESSTHAN is not yet implemented.', operation: unimplemented(OpCode.OP_LESSTHAN) },
{ name: 'OP_GREATERTHAN', codepoint: OpCode.OP_GREATERTHAN, description: 'OP_GREATERTHAN is not yet implemented.', operation: unimplemented(OpCode.OP_GREATERTHAN) },
{ name: 'OP_LESSTHANOREQUAL', codepoint: OpCode.OP_LESSTHANOREQUAL, description: 'OP_LESSTHANOREQUAL is not yet implemented.', operation: unimplemented(OpCode.OP_LESSTHANOREQUAL) },
{ name: 'OP_GREATERTHANOREQUAL', codepoint: OpCode.OP_GREATERTHANOREQUAL, description: 'OP_GREATERTHANOREQUAL is not yet implemented.', operation: unimplemented(OpCode.OP_GREATERTHANOREQUAL) },
{ name: 'OP_MIN', codepoint: OpCode.OP_MIN, description: 'OP_MIN is not yet implemented.', operation: unimplemented(OpCode.OP_MIN) },
{ name: 'OP_MAX', codepoint: OpCode.OP_MAX, description: 'OP_MAX is not yet implemented.', operation: unimplemented(OpCode.OP_MAX) },
{ name: 'OP_WITHIN', codepoint: OpCode.OP_WITHIN, description: 'OP_WITHIN is not yet implemented.', operation: unimplemented(OpCode.OP_WITHIN) },
{ name: 'OP_RIPEMD160', codepoint: OpCode.OP_RIPEMD160, description: 'OP_RIPEMD160 is not yet implemented.', operation: unimplemented(OpCode.OP_RIPEMD160) },
{ name: 'OP_SHA1', codepoint: OpCode.OP_SHA1, description: 'OP_SHA1 is not yet implemented.', operation: unimplemented(OpCode.OP_SHA1) },
{ name: 'OP_SHA256', codepoint: OpCode.OP_SHA256, description: 'OP_SHA256 is not yet implemented.', operation: unimplemented(OpCode.OP_SHA256) },
{ name: 'OP_HASH160', codepoint: OpCode.OP_HASH160, description: 'OP_HASH160 is not yet implemented.', operation: unimplemented(OpCode.OP_HASH160) },
{ name: 'OP_HASH256', codepoint: OpCode.OP_HASH256, description: 'OP_HASH256 is not yet implemented.', operation: unimplemented(OpCode.OP_HASH256) },
{ name: 'OP_CODESEPARATOR', codepoint: OpCode.OP_CODESEPARATOR, description: 'OP_CODESEPARATOR is not yet implemented.', operation: unimplemented(OpCode.OP_CODESEPARATOR) },
{ name: 'OP_CHECKSIG', codepoint: OpCode.OP_CHECKSIG, description: 'OP_CHECKSIG is not yet implemented.', operation: unimplemented(OpCode.OP_CHECKSIG) },
{ name: 'OP_CHECKSIGVERIFY', codepoint: OpCode.OP_CHECKSIGVERIFY, description: 'OP_CHECKSIGVERIFY is not yet implemented.', operation: unimplemented(OpCode.OP_CHECKSIGVERIFY) },
{ name: 'OP_CHECKMULTISIG', codepoint: OpCode.OP_CHECKMULTISIG, description: 'OP_CHECKMULTISIG is not yet implemented.', operation: unimplemented(OpCode.OP_CHECKMULTISIG) },
{ name: 'OP_CHECKMULTISIGVERIFY', codepoint: OpCode.OP_CHECKMULTISIGVERIFY, description: 'OP_CHECKMULTISIGVERIFY is not yet implemented.', operation: unimplemented(OpCode.OP_CHECKMULTISIGVERIFY) },
{ name: 'OP_NOP1', codepoint: OpCode.OP_NOP1, description: 'OP_NOP1 is not yet implemented.', operation: unimplemented(OpCode.OP_NOP1) },
{ name: 'OP_CHECKLOCKTIMEVERIFY', codepoint: OpCode.OP_CHECKLOCKTIMEVERIFY, description: 'OP_CHECKLOCKTIMEVERIFY is not yet implemented.', operation: unimplemented(OpCode.OP_CHECKLOCKTIMEVERIFY) },
{ name: 'OP_CHECKSEQUENCEVERIFY', codepoint: OpCode.OP_CHECKSEQUENCEVERIFY, description: 'OP_CHECKSEQUENCEVERIFY is not yet implemented.', operation: unimplemented(OpCode.OP_CHECKSEQUENCEVERIFY) },
{ name: 'OP_NOP4', codepoint: OpCode.OP_NOP4, description: 'OP_NOP4 is not yet assigned or known.', operation: unknown(OpCode.OP_NOP4) },
{ name: 'OP_NOP5', codepoint: OpCode.OP_NOP5, description: 'OP_NOP5 is not yet assigned or known.', operation: unknown(OpCode.OP_NOP5) },
{ name: 'OP_NOP6', codepoint: OpCode.OP_NOP6, description: 'OP_NOP6 is not yet assigned or known.', operation: unknown(OpCode.OP_NOP6) },
{ name: 'OP_NOP7', codepoint: OpCode.OP_NOP7, description: 'OP_NOP7 is not yet assigned or known.', operation: unknown(OpCode.OP_NOP7) },
{ name: 'OP_NOP8', codepoint: OpCode.OP_NOP8, description: 'OP_NOP8 is not yet assigned or known.', operation: unknown(OpCode.OP_NOP8) },
{ name: 'OP_NOP9', codepoint: OpCode.OP_NOP9, description: 'OP_NOP9 is not yet assigned or known.', operation: unknown(OpCode.OP_NOP9) },
{ name: 'OP_NOP10', codepoint: OpCode.OP_NOP10, description: 'OP_NOP10 is not yet assigned or known.', operation: unknown(OpCode.OP_NOP10) },
{ name: 'OP_UNKNOWN186', codepoint: OpCode.OP_UNKNOWN186, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN186) },
{ name: 'OP_UNKNOWN187', codepoint: OpCode.OP_UNKNOWN187, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN187) },
{ name: 'OP_UNKNOWN188', codepoint: OpCode.OP_UNKNOWN188, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN188) },
{ name: 'OP_UNKNOWN189', codepoint: OpCode.OP_UNKNOWN189, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN189) },
{ name: 'OP_UNKNOWN190', codepoint: OpCode.OP_UNKNOWN190, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN190) },
{ name: 'OP_UNKNOWN191', codepoint: OpCode.OP_UNKNOWN191, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN191) },
{ name: 'OP_UNKNOWN192', codepoint: OpCode.OP_UNKNOWN192, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN192) },
{ name: 'OP_UNKNOWN193', codepoint: OpCode.OP_UNKNOWN193, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN193) },
{ name: 'OP_UNKNOWN194', codepoint: OpCode.OP_UNKNOWN194, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN194) },
{ name: 'OP_UNKNOWN195', codepoint: OpCode.OP_UNKNOWN195, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN195) },
{ name: 'OP_UNKNOWN196', codepoint: OpCode.OP_UNKNOWN196, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN196) },
{ name: 'OP_UNKNOWN197', codepoint: OpCode.OP_UNKNOWN197, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN197) },
{ name: 'OP_UNKNOWN198', codepoint: OpCode.OP_UNKNOWN198, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN198) },
{ name: 'OP_UNKNOWN199', codepoint: OpCode.OP_UNKNOWN199, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN199) },
{ name: 'OP_UNKNOWN200', codepoint: OpCode.OP_UNKNOWN200, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN200) },
{ name: 'OP_UNKNOWN201', codepoint: OpCode.OP_UNKNOWN201, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN201) },
{ name: 'OP_UNKNOWN202', codepoint: OpCode.OP_UNKNOWN202, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN202) },
{ name: 'OP_UNKNOWN203', codepoint: OpCode.OP_UNKNOWN203, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN203) },
{ name: 'OP_UNKNOWN204', codepoint: OpCode.OP_UNKNOWN204, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN204) },
{ name: 'OP_UNKNOWN205', codepoint: OpCode.OP_UNKNOWN205, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN205) },
{ name: 'OP_UNKNOWN206', codepoint: OpCode.OP_UNKNOWN206, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN206) },
{ name: 'OP_UNKNOWN207', codepoint: OpCode.OP_UNKNOWN207, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN207) },
{ name: 'OP_UNKNOWN208', codepoint: OpCode.OP_UNKNOWN208, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN208) },
{ name: 'OP_UNKNOWN209', codepoint: OpCode.OP_UNKNOWN209, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN209) },
{ name: 'OP_UNKNOWN210', codepoint: OpCode.OP_UNKNOWN210, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN210) },
{ name: 'OP_UNKNOWN211', codepoint: OpCode.OP_UNKNOWN211, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN211) },
{ name: 'OP_UNKNOWN212', codepoint: OpCode.OP_UNKNOWN212, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN212) },
{ name: 'OP_UNKNOWN213', codepoint: OpCode.OP_UNKNOWN213, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN213) },
{ name: 'OP_UNKNOWN214', codepoint: OpCode.OP_UNKNOWN214, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN214) },
{ name: 'OP_UNKNOWN215', codepoint: OpCode.OP_UNKNOWN215, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN215) },
{ name: 'OP_UNKNOWN216', codepoint: OpCode.OP_UNKNOWN216, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN216) },
{ name: 'OP_UNKNOWN217', codepoint: OpCode.OP_UNKNOWN217, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN217) },
{ name: 'OP_UNKNOWN218', codepoint: OpCode.OP_UNKNOWN218, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN218) },
{ name: 'OP_UNKNOWN219', codepoint: OpCode.OP_UNKNOWN219, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN219) },
{ name: 'OP_UNKNOWN220', codepoint: OpCode.OP_UNKNOWN220, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN220) },
{ name: 'OP_UNKNOWN221', codepoint: OpCode.OP_UNKNOWN221, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN221) },
{ name: 'OP_UNKNOWN222', codepoint: OpCode.OP_UNKNOWN222, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN222) },
{ name: 'OP_UNKNOWN223', codepoint: OpCode.OP_UNKNOWN223, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN223) },
{ name: 'OP_UNKNOWN224', codepoint: OpCode.OP_UNKNOWN224, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN224) },
{ name: 'OP_UNKNOWN225', codepoint: OpCode.OP_UNKNOWN225, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN225) },
{ name: 'OP_UNKNOWN226', codepoint: OpCode.OP_UNKNOWN226, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN226) },
{ name: 'OP_UNKNOWN227', codepoint: OpCode.OP_UNKNOWN227, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN227) },
{ name: 'OP_UNKNOWN228', codepoint: OpCode.OP_UNKNOWN228, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN228) },
{ name: 'OP_UNKNOWN229', codepoint: OpCode.OP_UNKNOWN229, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN229) },
{ name: 'OP_UNKNOWN230', codepoint: OpCode.OP_UNKNOWN230, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN230) },
{ name: 'OP_UNKNOWN231', codepoint: OpCode.OP_UNKNOWN231, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN231) },
{ name: 'OP_UNKNOWN232', codepoint: OpCode.OP_UNKNOWN232, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN232) },
{ name: 'OP_UNKNOWN233', codepoint: OpCode.OP_UNKNOWN233, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN233) },
{ name: 'OP_UNKNOWN234', codepoint: OpCode.OP_UNKNOWN234, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN234) },
{ name: 'OP_UNKNOWN235', codepoint: OpCode.OP_UNKNOWN235, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN235) },
{ name: 'OP_UNKNOWN236', codepoint: OpCode.OP_UNKNOWN236, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN236) },
{ name: 'OP_UNKNOWN237', codepoint: OpCode.OP_UNKNOWN237, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN237) },
{ name: 'OP_UNKNOWN238', codepoint: OpCode.OP_UNKNOWN238, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN238) },
{ name: 'OP_UNKNOWN239', codepoint: OpCode.OP_UNKNOWN239, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN239) },
{ name: 'OP_UNKNOWN240', codepoint: OpCode.OP_UNKNOWN240, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN240) },
{ name: 'OP_UNKNOWN241', codepoint: OpCode.OP_UNKNOWN241, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN241) },
{ name: 'OP_UNKNOWN242', codepoint: OpCode.OP_UNKNOWN242, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN242) },
{ name: 'OP_UNKNOWN243', codepoint: OpCode.OP_UNKNOWN243, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN243) },
{ name: 'OP_UNKNOWN244', codepoint: OpCode.OP_UNKNOWN244, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN244) },
{ name: 'OP_UNKNOWN245', codepoint: OpCode.OP_UNKNOWN245, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN245) },
{ name: 'OP_UNKNOWN246', codepoint: OpCode.OP_UNKNOWN246, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN246) },
{ name: 'OP_UNKNOWN247', codepoint: OpCode.OP_UNKNOWN247, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN247) },
{ name: 'OP_UNKNOWN248', codepoint: OpCode.OP_UNKNOWN248, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN248) },
{ name: 'OP_UNKNOWN249', codepoint: OpCode.OP_UNKNOWN249, description: 'Unassigned or unknown opcode.', operation: unknown(OpCode.OP_UNKNOWN249) },
{ name: 'OP_SMALLINTEGER', codepoint: OpCode.OP_SMALLINTEGER, description: 'OP_SMALLINTEGER is not valid (internal use only).', operation: invalid(OpCode.OP_SMALLINTEGER) },
{ name: 'OP_PUBKEYS', codepoint: OpCode.OP_PUBKEYS, description: 'OP_PUBKEYS is not valid (internal use only).', operation: invalid(OpCode.OP_PUBKEYS) },
{ name: 'OP_UNKNOWN252', codepoint: OpCode.OP_UNKNOWN252, description: 'OP_UNKNOWN252 is not valid (internal use only).', operation: invalid(OpCode.OP_UNKNOWN252) },
{ name: 'OP_PUBKEYHASH', codepoint: OpCode.OP_PUBKEYHASH, description: 'OP_PUBKEYHASH is not valid (internal use only).', operation: invalid(OpCode.OP_PUBKEYHASH) },
{ name: 'OP_PUBKEY', codepoint: OpCode.OP_PUBKEY, description: 'OP_PUBKEY is not valid (internal use only).', operation: invalid(OpCode.OP_PUBKEY) },
{ name: 'OP_INVALIDOPCODE', codepoint: OpCode.OP_INVALIDOPCODE, description: 'OP_INVALIDOPCODE is not valid (internal use only).', operation: invalid(OpCode.OP_INVALIDOPCODE) }
]
