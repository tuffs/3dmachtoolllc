
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.floridaSalesTax.createMany({
      data: [
        {
          "zipCode": 32601,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32603,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32605,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32606,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32607,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32608,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32609,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32610,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32611,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32612,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32615,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32618,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32631,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32640,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32641,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32643,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32653,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32667,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32669,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32694,
          "county": "Alachua",
          "rate": 0.015
        },
        {
          "zipCode": 32040,
          "county": "Baker",
          "rate": 0.01
        },
        {
          "zipCode": 32063,
          "county": "Baker",
          "rate": 0.01
        },
        {
          "zipCode": 32087,
          "county": "Baker",
          "rate": 0.01
        },
        {
          "zipCode": 32401,
          "county": "Bay",
          "rate": 0.01
        },
        {
          "zipCode": 32403,
          "county": "Bay",
          "rate": 0.01
        },
        {
          "zipCode": 32404,
          "county": "Bay",
          "rate": 0.01
        },
        {
          "zipCode": 32405,
          "county": "Bay",
          "rate": 0.01
        },
        {
          "zipCode": 32407,
          "county": "Bay",
          "rate": 0.01
        },
        {
          "zipCode": 32408,
          "county": "Bay",
          "rate": 0.01
        },
        {
          "zipCode": 32409,
          "county": "Bay",
          "rate": 0.01
        },
        {
          "zipCode": 32413,
          "county": "Bay",
          "rate": 0.01
        },
        {
          "zipCode": 32438,
          "county": "Bay",
          "rate": 0.01
        },
        {
          "zipCode": 32444,
          "county": "Bay",
          "rate": 0.01
        },
        {
          "zipCode": 32466,
          "county": "Bay",
          "rate": 0.01
        },
        {
          "zipCode": 32044,
          "county": "Bradford",
          "rate": 0.01
        },
        {
          "zipCode": 32058,
          "county": "Bradford",
          "rate": 0.01
        },
        {
          "zipCode": 32091,
          "county": "Bradford",
          "rate": 0.01
        },
        {
          "zipCode": 32622,
          "county": "Bradford",
          "rate": 0.01
        },
        {
          "zipCode": 32754,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32780,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32796,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32899,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32901,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32903,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32904,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32905,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32907,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32908,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32909,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32919,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32920,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32922,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32926,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32927,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32931,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32934,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32935,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32937,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32940,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32949,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32950,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32951,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32952,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32953,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32955,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 32976,
          "county": "Brevard",
          "rate": 0.01
        },
        {
          "zipCode": 33004,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33009,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33019,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33020,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33021,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33023,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33024,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33025,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33026,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33027,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33028,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33029,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33060,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33062,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33063,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33064,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33064,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33065,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33066,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33067,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33068,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33069,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33071,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33073,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33076,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33301,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33304,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33305,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33306,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33308,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33309,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33311,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33312,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33313,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33314,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33315,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33316,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33317,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33319,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33321,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33322,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33323,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33324,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33325,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33326,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33327,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33328,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33330,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33331,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33332,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33334,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33336,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33337,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33351,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33388,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33394,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33441,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 33442,
          "county": "Broward",
          "rate": 0.01
        },
        {
          "zipCode": 32421,
          "county": "Calhoun",
          "rate": 0.015
        },
        {
          "zipCode": 32424,
          "county": "Calhoun",
          "rate": 0.015
        },
        {
          "zipCode": 32430,
          "county": "Calhoun",
          "rate": 0.015
        },
        {
          "zipCode": 32449,
          "county": "Calhoun",
          "rate": 0.015
        },
        {
          "zipCode": 33946,
          "county": "Charlotte",
          "rate": 0.01
        },
        {
          "zipCode": 33947,
          "county": "Charlotte",
          "rate": 0.01
        },
        {
          "zipCode": 33950,
          "county": "Charlotte",
          "rate": 0.01
        },
        {
          "zipCode": 33955,
          "county": "Charlotte",
          "rate": 0.01
        },
        {
          "zipCode": 33980,
          "county": "Charlotte",
          "rate": 0.01
        },
        {
          "zipCode": 33982,
          "county": "Charlotte",
          "rate": 0.01
        },
        {
          "zipCode": 33983,
          "county": "Charlotte",
          "rate": 0.01
        },
        {
          "zipCode": 34224,
          "county": "Charlotte",
          "rate": 0.01
        },
        {
          "zipCode": 34428,
          "county": "Citrus",
          "rate": 0
        },
        {
          "zipCode": 34429,
          "county": "Citrus",
          "rate": 0
        },
        {
          "zipCode": 34433,
          "county": "Citrus",
          "rate": 0
        },
        {
          "zipCode": 34434,
          "county": "Citrus",
          "rate": 0
        },
        {
          "zipCode": 34436,
          "county": "Citrus",
          "rate": 0
        },
        {
          "zipCode": 34442,
          "county": "Citrus",
          "rate": 0
        },
        {
          "zipCode": 34446,
          "county": "Citrus",
          "rate": 0
        },
        {
          "zipCode": 34446,
          "county": "Citrus",
          "rate": 0
        },
        {
          "zipCode": 34448,
          "county": "Citrus",
          "rate": 0
        },
        {
          "zipCode": 34448,
          "county": "Citrus",
          "rate": 0
        },
        {
          "zipCode": 34450,
          "county": "Citrus",
          "rate": 0
        },
        {
          "zipCode": 34452,
          "county": "Citrus",
          "rate": 0
        },
        {
          "zipCode": 34453,
          "county": "Citrus",
          "rate": 0
        },
        {
          "zipCode": 34461,
          "county": "Citrus",
          "rate": 0
        },
        {
          "zipCode": 32003,
          "county": "Clay",
          "rate": 0.015
        },
        {
          "zipCode": 32043,
          "county": "Clay",
          "rate": 0.015
        },
        {
          "zipCode": 32065,
          "county": "Clay",
          "rate": 0.015
        },
        {
          "zipCode": 32068,
          "county": "Clay",
          "rate": 0.015
        },
        {
          "zipCode": 32073,
          "county": "Clay",
          "rate": 0.015
        },
        {
          "zipCode": 32656,
          "county": "Clay",
          "rate": 0.015
        },
        {
          "zipCode": 34102,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 34103,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 34104,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 34105,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 34108,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 34109,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 34110,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 34112,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 34113,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 34114,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 34116,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 34117,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 34119,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 34120,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 34141,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 34142,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 34145,
          "county": "Collier",
          "rate": 0
        },
        {
          "zipCode": 32024,
          "county": "Columbia",
          "rate": 0.015
        },
        {
          "zipCode": 32025,
          "county": "Columbia",
          "rate": 0.015
        },
        {
          "zipCode": 32038,
          "county": "Columbia",
          "rate": 0.015
        },
        {
          "zipCode": 32055,
          "county": "Columbia",
          "rate": 0.015
        },
        {
          "zipCode": 34266,
          "county": "Desoto",
          "rate": 0.015
        },
        {
          "zipCode": 34269,
          "county": "Desoto",
          "rate": 0.015
        },
        {
          "zipCode": 32628,
          "county": "Dixie",
          "rate": 0.01
        },
        {
          "zipCode": 32648,
          "county": "Dixie",
          "rate": 0.01
        },
        {
          "zipCode": 32680,
          "county": "Dixie",
          "rate": 0.01
        },
        {
          "zipCode": 32099,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32202,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32204,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32205,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32206,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32207,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32208,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32209,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32210,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32211,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32212,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32214,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32216,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32217,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32218,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32219,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32220,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32221,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32222,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32223,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32224,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32225,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32226,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32227,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32233,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32234,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32244,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32246,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32250,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32254,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32256,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32257,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32258,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32266,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32277,
          "county": "Duval",
          "rate": 0.015
        },
        {
          "zipCode": 32501,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32502,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32503,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32504,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32505,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32506,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32507,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32508,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32509,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32511,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32512,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32514,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32520,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32521,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32526,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32533,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32534,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32535,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32559,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32568,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32577,
          "county": "Escambia",
          "rate": 0.015
        },
        {
          "zipCode": 32110,
          "county": "Flagler",
          "rate": 0.01
        },
        {
          "zipCode": 32136,
          "county": "Flagler",
          "rate": 0.01
        },
        {
          "zipCode": 32320,
          "county": "Franklin",
          "rate": 0.015
        },
        {
          "zipCode": 32322,
          "county": "Franklin",
          "rate": 0.015
        },
        {
          "zipCode": 32328,
          "county": "Franklin",
          "rate": 0.015
        },
        {
          "zipCode": 32324,
          "county": "Gadsden",
          "rate": 0.015
        },
        {
          "zipCode": 32332,
          "county": "Gadsden",
          "rate": 0.015
        },
        {
          "zipCode": 32333,
          "county": "Gadsden",
          "rate": 0.015
        },
        {
          "zipCode": 32343,
          "county": "Gadsden",
          "rate": 0.015
        },
        {
          "zipCode": 32351,
          "county": "Gadsden",
          "rate": 0.015
        },
        {
          "zipCode": 32352,
          "county": "Gadsden",
          "rate": 0.015
        },
        {
          "zipCode": 32619,
          "county": "Gilchrist",
          "rate": 0.01
        },
        {
          "zipCode": 32693,
          "county": "Gilchrist",
          "rate": 0.01
        },
        {
          "zipCode": 33471,
          "county": "Glades",
          "rate": 0.01
        },
        {
          "zipCode": 32456,
          "county": "Gulf",
          "rate": 0.01
        },
        {
          "zipCode": 32465,
          "county": "Gulf",
          "rate": 0.01
        },
        {
          "zipCode": 32052,
          "county": "Hamilton",
          "rate": 0.02
        },
        {
          "zipCode": 32053,
          "county": "Hamilton",
          "rate": 0.02
        },
        {
          "zipCode": 32096,
          "county": "Hamilton",
          "rate": 0.02
        },
        {
          "zipCode": 33834,
          "county": "Hardee",
          "rate": 0.01
        },
        {
          "zipCode": 33865,
          "county": "Hardee",
          "rate": 0.01
        },
        {
          "zipCode": 33873,
          "county": "Hardee",
          "rate": 0.01
        },
        {
          "zipCode": 33890,
          "county": "Hardee",
          "rate": 0.01
        },
        {
          "zipCode": 33440,
          "county": "Hendry",
          "rate": 0.015
        },
        {
          "zipCode": 33935,
          "county": "Hendry",
          "rate": 0.015
        },
        {
          "zipCode": 34601,
          "county": "Hernando",
          "rate": 0.005
        },
        {
          "zipCode": 34602,
          "county": "Hernando",
          "rate": 0.005
        },
        {
          "zipCode": 34604,
          "county": "Hernando",
          "rate": 0.005
        },
        {
          "zipCode": 34606,
          "county": "Hernando",
          "rate": 0.005
        },
        {
          "zipCode": 34607,
          "county": "Hernando",
          "rate": 0.005
        },
        {
          "zipCode": 34608,
          "county": "Hernando",
          "rate": 0.005
        },
        {
          "zipCode": 34609,
          "county": "Hernando",
          "rate": 0.005
        },
        {
          "zipCode": 34613,
          "county": "Hernando",
          "rate": 0.005
        },
        {
          "zipCode": 34614,
          "county": "Hernando",
          "rate": 0.005
        },
        {
          "zipCode": 33825,
          "county": "Highlands",
          "rate": 0.015
        },
        {
          "zipCode": 33852,
          "county": "Highlands",
          "rate": 0.015
        },
        {
          "zipCode": 33857,
          "county": "Highlands",
          "rate": 0.015
        },
        {
          "zipCode": 33870,
          "county": "Highlands",
          "rate": 0.015
        },
        {
          "zipCode": 33872,
          "county": "Highlands",
          "rate": 0.015
        },
        {
          "zipCode": 33875,
          "county": "Highlands",
          "rate": 0.015
        },
        {
          "zipCode": 33876,
          "county": "Highlands",
          "rate": 0.015
        },
        {
          "zipCode": 33960,
          "county": "Highlands",
          "rate": 0.015
        },
        {
          "zipCode": 33510,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33511,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33527,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33534,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33547,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33548,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33549,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33556,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33558,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33559,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33563,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33565,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33566,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33567,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33569,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33570,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33572,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33573,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33578,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33579,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33584,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33592,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33594,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33596,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33598,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33602,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33603,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33604,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33605,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33606,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33607,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33609,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33610,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33611,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33612,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33613,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33614,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33615,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33616,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33617,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33618,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33619,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33620,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33621,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33624,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33625,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33626,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33629,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33633,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33634,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33635,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33637,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33647,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33650,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33655,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33660,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33662,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33663,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 33664,
          "county": "Hillsborough",
          "rate": 0.015
        },
        {
          "zipCode": 32425,
          "county": "Holmes",
          "rate": 0.015
        },
        {
          "zipCode": 32425,
          "county": "Holmes",
          "rate": 0.015
        },
        {
          "zipCode": 32425,
          "county": "Holmes",
          "rate": 0.015
        },
        {
          "zipCode": 32455,
          "county": "Holmes",
          "rate": 0.015
        },
        {
          "zipCode": 32464,
          "county": "Holmes",
          "rate": 0.015
        },
        {
          "zipCode": 32948,
          "county": "Indian River",
          "rate": 0.01
        },
        {
          "zipCode": 32958,
          "county": "Indian River",
          "rate": 0.01
        },
        {
          "zipCode": 32960,
          "county": "Indian River",
          "rate": 0.01
        },
        {
          "zipCode": 32962,
          "county": "Indian River",
          "rate": 0.01
        },
        {
          "zipCode": 32963,
          "county": "Indian River",
          "rate": 0.01
        },
        {
          "zipCode": 32966,
          "county": "Indian River",
          "rate": 0.01
        },
        {
          "zipCode": 32967,
          "county": "Indian River",
          "rate": 0.01
        },
        {
          "zipCode": 32968,
          "county": "Indian River",
          "rate": 0.01
        },
        {
          "zipCode": 32420,
          "county": "Jackson",
          "rate": 0.015
        },
        {
          "zipCode": 32423,
          "county": "Jackson",
          "rate": 0.015
        },
        {
          "zipCode": 32426,
          "county": "Jackson",
          "rate": 0.015
        },
        {
          "zipCode": 32431,
          "county": "Jackson",
          "rate": 0.015
        },
        {
          "zipCode": 32440,
          "county": "Jackson",
          "rate": 0.015
        },
        {
          "zipCode": 32442,
          "county": "Jackson",
          "rate": 0.015
        },
        {
          "zipCode": 32443,
          "county": "Jackson",
          "rate": 0.015
        },
        {
          "zipCode": 32445,
          "county": "Jackson",
          "rate": 0.015
        },
        {
          "zipCode": 32446,
          "county": "Jackson",
          "rate": 0.015
        },
        {
          "zipCode": 32448,
          "county": "Jackson",
          "rate": 0.015
        },
        {
          "zipCode": 32460,
          "county": "Jackson",
          "rate": 0.015
        },
        {
          "zipCode": 32336,
          "county": "Jefferson",
          "rate": 0.01
        },
        {
          "zipCode": 32344,
          "county": "Jefferson",
          "rate": 0.01
        },
        {
          "zipCode": 32066,
          "county": "Lafayette",
          "rate": 0.01
        },
        {
          "zipCode": 32102,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 32159,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 32702,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 32726,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 32735,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 32736,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 32757,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 32767,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 32776,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 32778,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 32784,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 34705,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 34711,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 34714,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 34715,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 34715,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 34731,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 34736,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 34737,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 34737,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 34748,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 34753,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 34756,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 34762,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 34788,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 34797,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 34797,
          "county": "Lake",
          "rate": 0.01
        },
        {
          "zipCode": 33901,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33903,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33905,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33907,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33908,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33912,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33913,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33916,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33917,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33919,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33920,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33922,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33928,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33931,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33931,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33936,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33956,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33957,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33965,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33966,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33967,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33967,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33971,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33972,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33973,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33974,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33976,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 33993,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 34134,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 34134,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 34135,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 34135,
          "county": "Lee",
          "rate": 0.005
        },
        {
          "zipCode": 32301,
          "county": "Leon",
          "rate": 0.015
        },
        {
          "zipCode": 32303,
          "county": "Leon",
          "rate": 0.015
        },
        {
          "zipCode": 32304,
          "county": "Leon",
          "rate": 0.015
        },
        {
          "zipCode": 32305,
          "county": "Leon",
          "rate": 0.015
        },
        {
          "zipCode": 32306,
          "county": "Leon",
          "rate": 0.015
        },
        {
          "zipCode": 32307,
          "county": "Leon",
          "rate": 0.015
        },
        {
          "zipCode": 32308,
          "county": "Leon",
          "rate": 0.015
        },
        {
          "zipCode": 32309,
          "county": "Leon",
          "rate": 0.015
        },
        {
          "zipCode": 32310,
          "county": "Leon",
          "rate": 0.015
        },
        {
          "zipCode": 32311,
          "county": "Leon",
          "rate": 0.015
        },
        {
          "zipCode": 32312,
          "county": "Leon",
          "rate": 0.015
        },
        {
          "zipCode": 32313,
          "county": "Leon",
          "rate": 0.015
        },
        {
          "zipCode": 32317,
          "county": "Leon",
          "rate": 0.015
        },
        {
          "zipCode": 32399,
          "county": "Leon",
          "rate": 0.015
        },
        {
          "zipCode": 32621,
          "county": "Levy",
          "rate": 0.01
        },
        {
          "zipCode": 32625,
          "county": "Levy",
          "rate": 0.01
        },
        {
          "zipCode": 32626,
          "county": "Levy",
          "rate": 0.01
        },
        {
          "zipCode": 32668,
          "county": "Levy",
          "rate": 0.01
        },
        {
          "zipCode": 32696,
          "county": "Levy",
          "rate": 0.01
        },
        {
          "zipCode": 34449,
          "county": "Levy",
          "rate": 0.01
        },
        {
          "zipCode": 34498,
          "county": "Levy",
          "rate": 0.01
        },
        {
          "zipCode": 32321,
          "county": "Liberty",
          "rate": 0.015
        },
        {
          "zipCode": 32334,
          "county": "Liberty",
          "rate": 0.015
        },
        {
          "zipCode": 32059,
          "county": "Madison",
          "rate": 0.015
        },
        {
          "zipCode": 32331,
          "county": "Madison",
          "rate": 0.015
        },
        {
          "zipCode": 32340,
          "county": "Madison",
          "rate": 0.015
        },
        {
          "zipCode": 32350,
          "county": "Madison",
          "rate": 0.015
        },
        {
          "zipCode": 34201,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34202,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34203,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34205,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34207,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34208,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34209,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34210,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34211,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34212,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34215,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34217,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34219,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34221,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34222,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34228,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34243,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 34251,
          "county": "Manatee",
          "rate": 0.01
        },
        {
          "zipCode": 32113,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 32134,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 32134,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 32179,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 32617,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 32686,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 34420,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 34431,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 34432,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 34470,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 34471,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 34472,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 34473,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 34474,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 34475,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 34476,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 34479,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 34480,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 34481,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 34482,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 34488,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 34491,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 32195,
          "county": "Marion",
          "rate": 0.015
        },
        {
          "zipCode": 33455,
          "county": "Martin",
          "rate": 0.01
        },
        {
          "zipCode": 34956,
          "county": "Martin",
          "rate": 0.01
        },
        {
          "zipCode": 34957,
          "county": "Martin",
          "rate": 0.01
        },
        {
          "zipCode": 34990,
          "county": "Martin",
          "rate": 0.01
        },
        {
          "zipCode": 34994,
          "county": "Martin",
          "rate": 0.01
        },
        {
          "zipCode": 34996,
          "county": "Martin",
          "rate": 0.01
        },
        {
          "zipCode": 34997,
          "county": "Martin",
          "rate": 0.01
        },
        {
          "zipCode": 33010,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33012,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33013,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33014,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33015,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33016,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33018,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33030,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33031,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33032,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33033,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33034,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33035,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33039,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33054,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33055,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33056,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33106,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33109,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33109,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33112,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33122,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33125,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33126,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33127,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33128,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33129,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33130,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33131,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33132,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33133,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33134,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33135,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33136,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33137,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33138,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33139,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33140,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33140,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33141,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33141,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33142,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33143,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33144,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33145,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33146,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33147,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33149,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33150,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33154,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33154,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33155,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33156,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33157,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33158,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33160,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33161,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33162,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33165,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33166,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33167,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33168,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33169,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33170,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33172,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33173,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33174,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33175,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33176,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33177,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33178,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33179,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33180,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33181,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33182,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33183,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33184,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33185,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33186,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33187,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33188,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33189,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33190,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33191,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33192,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33193,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33194,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33195,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33196,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33198,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33199,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33206,
          "county": "Miami-Dade",
          "rate": 0.01
        },
        {
          "zipCode": 33036,
          "county": "Monroe",
          "rate": 0.015
        },
        {
          "zipCode": 33037,
          "county": "Monroe",
          "rate": 0.015
        },
        {
          "zipCode": 33040,
          "county": "Monroe",
          "rate": 0.015
        },
        {
          "zipCode": 33042,
          "county": "Monroe",
          "rate": 0.015
        },
        {
          "zipCode": 33043,
          "county": "Monroe",
          "rate": 0.015
        },
        {
          "zipCode": 33050,
          "county": "Monroe",
          "rate": 0.015
        },
        {
          "zipCode": 33070,
          "county": "Monroe",
          "rate": 0.015
        },
        {
          "zipCode": 32009,
          "county": "Nassau",
          "rate": 0.01
        },
        {
          "zipCode": 32011,
          "county": "Nassau",
          "rate": 0.01
        },
        {
          "zipCode": 32034,
          "county": "Nassau",
          "rate": 0.01
        },
        {
          "zipCode": 32046,
          "county": "Nassau",
          "rate": 0.01
        },
        {
          "zipCode": 32097,
          "county": "Nassau",
          "rate": 0.01
        },
        {
          "zipCode": 32531,
          "county": "Okaloosa",
          "rate": 0.01
        },
        {
          "zipCode": 32536,
          "county": "Okaloosa",
          "rate": 0.01
        },
        {
          "zipCode": 32539,
          "county": "Okaloosa",
          "rate": 0.01
        },
        {
          "zipCode": 32541,
          "county": "Okaloosa",
          "rate": 0.01
        },
        {
          "zipCode": 32542,
          "county": "Okaloosa",
          "rate": 0.01
        },
        {
          "zipCode": 32547,
          "county": "Okaloosa",
          "rate": 0.01
        },
        {
          "zipCode": 32548,
          "county": "Okaloosa",
          "rate": 0.01
        },
        {
          "zipCode": 32564,
          "county": "Okaloosa",
          "rate": 0.01
        },
        {
          "zipCode": 32567,
          "county": "Okaloosa",
          "rate": 0.01
        },
        {
          "zipCode": 32569,
          "county": "Okaloosa",
          "rate": 0.01
        },
        {
          "zipCode": 32578,
          "county": "Okaloosa",
          "rate": 0.01
        },
        {
          "zipCode": 32579,
          "county": "Okaloosa",
          "rate": 0.01
        },
        {
          "zipCode": 32580,
          "county": "Okaloosa",
          "rate": 0.01
        },
        {
          "zipCode": 34972,
          "county": "Okeechobee",
          "rate": 0.01
        },
        {
          "zipCode": 34974,
          "county": "Okeechobee",
          "rate": 0.01
        },
        {
          "zipCode": 32703,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32709,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32712,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32789,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32792,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32798,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32801,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32803,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32804,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32805,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32806,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32807,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32808,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32809,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32810,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32811,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32812,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32814,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32816,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32817,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32818,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32819,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32820,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32821,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32822,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32824,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32825,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32826,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32827,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32828,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32829,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32831,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32832,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32833,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32834,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32835,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32836,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32837,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32839,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32885,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32886,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32887,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32891,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32896,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32897,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 32751,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 34734,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 34761,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 34786,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 34787,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 34787,
          "county": "Orange",
          "rate": 0.005
        },
        {
          "zipCode": 34739,
          "county": "Osceola",
          "rate": 0.015
        },
        {
          "zipCode": 34741,
          "county": "Osceola",
          "rate": 0.015
        },
        {
          "zipCode": 34743,
          "county": "Osceola",
          "rate": 0.015
        },
        {
          "zipCode": 34744,
          "county": "Osceola",
          "rate": 0.015
        },
        {
          "zipCode": 34746,
          "county": "Osceola",
          "rate": 0.015
        },
        {
          "zipCode": 34747,
          "county": "Osceola",
          "rate": 0.015
        },
        {
          "zipCode": 34758,
          "county": "Osceola",
          "rate": 0.015
        },
        {
          "zipCode": 34769,
          "county": "Osceola",
          "rate": 0.015
        },
        {
          "zipCode": 34771,
          "county": "Osceola",
          "rate": 0.015
        },
        {
          "zipCode": 34772,
          "county": "Osceola",
          "rate": 0.015
        },
        {
          "zipCode": 34773,
          "county": "Osceola",
          "rate": 0.015
        },
        {
          "zipCode": 33401,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33403,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33404,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33405,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33406,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33407,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33408,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33409,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33410,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33411,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33412,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33413,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33414,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33415,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33417,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33418,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33426,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33428,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33430,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33431,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33432,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33433,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33434,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33435,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33436,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33437,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33438,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33444,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33445,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33446,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33449,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33458,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33460,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33461,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33462,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33463,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33464,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33467,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33469,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33470,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33472,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33473,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33476,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33477,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33478,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33480,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33483,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33484,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33486,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33487,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33493,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33496,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33498,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33499,
          "county": "Palm Beach",
          "rate": 0.01
        },
        {
          "zipCode": 33523,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 33525,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 33540,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 33541,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 33542,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 33543,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 33544,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 33545,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 33576,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 34610,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 34637,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 34638,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 34639,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 34652,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 34653,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 34654,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 34655,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 34667,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 34668,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 34669,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 34690,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 34691,
          "county": "Pasco",
          "rate": 0.01
        },
        {
          "zipCode": 33701,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33702,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33703,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33704,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33705,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33706,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33707,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33708,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33709,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33710,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33711,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33712,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33713,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33714,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33715,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33716,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33729,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33730,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33755,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33756,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33759,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33760,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33761,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33762,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33763,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33764,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33765,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33767,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33769,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33770,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33771,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33773,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33774,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33776,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33777,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33778,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33781,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33782,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33785,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33786,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 34677,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 34683,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 34684,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 34685,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 34688,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 34689,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 34695,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 34698,
          "county": "Pinellas",
          "rate": 0.01
        },
        {
          "zipCode": 33801,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33803,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33805,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33809,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33810,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33811,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33812,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33813,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33815,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33823,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33827,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33830,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33837,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33838,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33839,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33841,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33843,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33844,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33849,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33850,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33853,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33859,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33860,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33867,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33868,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33880,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33881,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33884,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33888,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33896,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33897,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 33898,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 34759,
          "county": "Polk",
          "rate": 0.01
        },
        {
          "zipCode": 32112,
          "county": "Putnam",
          "rate": 0.01
        },
        {
          "zipCode": 32112,
          "county": "Putnam",
          "rate": 0.01
        },
        {
          "zipCode": 32131,
          "county": "Putnam",
          "rate": 0.01
        },
        {
          "zipCode": 32139,
          "county": "Putnam",
          "rate": 0.01
        },
        {
          "zipCode": 32140,
          "county": "Putnam",
          "rate": 0.01
        },
        {
          "zipCode": 32148,
          "county": "Putnam",
          "rate": 0.01
        },
        {
          "zipCode": 32177,
          "county": "Putnam",
          "rate": 0.01
        },
        {
          "zipCode": 32181,
          "county": "Putnam",
          "rate": 0.01
        },
        {
          "zipCode": 32181,
          "county": "Putnam",
          "rate": 0.01
        },
        {
          "zipCode": 32187,
          "county": "Putnam",
          "rate": 0.01
        },
        {
          "zipCode": 32189,
          "county": "Putnam",
          "rate": 0.01
        },
        {
          "zipCode": 32193,
          "county": "Putnam",
          "rate": 0.01
        },
        {
          "zipCode": 32193,
          "county": "Putnam",
          "rate": 0.01
        },
        {
          "zipCode": 32193,
          "county": "Putnam",
          "rate": 0.01
        },
        {
          "zipCode": 32666,
          "county": "Putnam",
          "rate": 0.01
        },
        {
          "zipCode": 32080,
          "county": "Saint Johns",
          "rate": 0.005
        },
        {
          "zipCode": 32081,
          "county": "Saint Johns",
          "rate": 0.005
        },
        {
          "zipCode": 32082,
          "county": "Saint Johns",
          "rate": 0.005
        },
        {
          "zipCode": 32084,
          "county": "Saint Johns",
          "rate": 0.005
        },
        {
          "zipCode": 32086,
          "county": "Saint Johns",
          "rate": 0.005
        },
        {
          "zipCode": 32092,
          "county": "Saint Johns",
          "rate": 0.005
        },
        {
          "zipCode": 32095,
          "county": "Saint Johns",
          "rate": 0.005
        },
        {
          "zipCode": 32145,
          "county": "Saint Johns",
          "rate": 0.005
        },
        {
          "zipCode": 32259,
          "county": "Saint Johns",
          "rate": 0.005
        },
        {
          "zipCode": 32033,
          "county": "Saint Johns",
          "rate": 0.005
        },
        {
          "zipCode": 32561,
          "county": "Santa Rosa",
          "rate": 0.01
        },
        {
          "zipCode": 32563,
          "county": "Santa Rosa",
          "rate": 0.01
        },
        {
          "zipCode": 32565,
          "county": "Santa Rosa",
          "rate": 0.01
        },
        {
          "zipCode": 32566,
          "county": "Santa Rosa",
          "rate": 0.01
        },
        {
          "zipCode": 32570,
          "county": "Santa Rosa",
          "rate": 0.01
        },
        {
          "zipCode": 32571,
          "county": "Santa Rosa",
          "rate": 0.01
        },
        {
          "zipCode": 32583,
          "county": "Santa Rosa",
          "rate": 0.01
        },
        {
          "zipCode": 34223,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34229,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34231,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34232,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34233,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34234,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34235,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34236,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34237,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34238,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34239,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34240,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34241,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34242,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34249,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34275,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34285,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34286,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34287,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34291,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34292,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 34293,
          "county": "Sarasota",
          "rate": 0.01
        },
        {
          "zipCode": 32765,
          "county": "Seminole",
          "rate": 0.01
        },
        {
          "zipCode": 32766,
          "county": "Seminole",
          "rate": 0.01
        },
        {
          "zipCode": 32771,
          "county": "Seminole",
          "rate": 0.01
        },
        {
          "zipCode": 32773,
          "county": "Seminole",
          "rate": 0.01
        },
        {
          "zipCode": 32779,
          "county": "Seminole",
          "rate": 0.01
        },
        {
          "zipCode": 32730,
          "county": "Seminole",
          "rate": 0.01
        },
        {
          "zipCode": 32732,
          "county": "Seminole",
          "rate": 0.01
        },
        {
          "zipCode": 32746,
          "county": "Seminole",
          "rate": 0.01
        },
        {
          "zipCode": 32750,
          "county": "Seminole",
          "rate": 0.01
        },
        {
          "zipCode": 32701,
          "county": "Seminole",
          "rate": 0.01
        },
        {
          "zipCode": 32707,
          "county": "Seminole",
          "rate": 0.01
        },
        {
          "zipCode": 32708,
          "county": "Seminole",
          "rate": 0.01
        },
        {
          "zipCode": 32714,
          "county": "Seminole",
          "rate": 0.01
        },
        {
          "zipCode": 34945,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34946,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34947,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34949,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34950,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34951,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34952,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34952,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34953,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34953,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34981,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34982,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34983,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34983,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34984,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34984,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34986,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34986,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34987,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34987,
          "county": "Saint Lucie",
          "rate": 0.01
        },
        {
          "zipCode": 34484,
          "county": "Sumter",
          "rate": 0.01
        },
        {
          "zipCode": 34785,
          "county": "Sumter",
          "rate": 0.01
        },
        {
          "zipCode": 33585,
          "county": "Sumter",
          "rate": 0.01
        },
        {
          "zipCode": 33597,
          "county": "Sumter",
          "rate": 0.01
        },
        {
          "zipCode": 33513,
          "county": "Sumter",
          "rate": 0.01
        },
        {
          "zipCode": 33514,
          "county": "Sumter",
          "rate": 0.01
        },
        {
          "zipCode": 33538,
          "county": "Sumter",
          "rate": 0.01
        },
        {
          "zipCode": 32162,
          "county": "Sumter",
          "rate": 0.01
        },
        {
          "zipCode": 32094,
          "county": "Suwannee",
          "rate": 0.01
        },
        {
          "zipCode": 32060,
          "county": "Suwannee",
          "rate": 0.01
        },
        {
          "zipCode": 32062,
          "county": "Suwannee",
          "rate": 0.01
        },
        {
          "zipCode": 32064,
          "county": "Suwannee",
          "rate": 0.01
        },
        {
          "zipCode": 32071,
          "county": "Suwannee",
          "rate": 0.01
        },
        {
          "zipCode": 32008,
          "county": "Suwannee",
          "rate": 0.01
        },
        {
          "zipCode": 32054,
          "county": "Union",
          "rate": 0.01
        },
        {
          "zipCode": 32083,
          "county": "Union",
          "rate": 0.01
        },
        {
          "zipCode": 32347,
          "county": "Taylor",
          "rate": 0.01
        },
        {
          "zipCode": 32348,
          "county": "Taylor",
          "rate": 0.01
        },
        {
          "zipCode": 32359,
          "county": "Taylor",
          "rate": 0.01
        },
        {
          "zipCode": 32114,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32117,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32118,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32119,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32124,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32127,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32128,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32129,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32130,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32132,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32141,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32168,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32169,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32174,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32176,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32180,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32190,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32198,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32713,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32720,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32723,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32724,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32725,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32738,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32744,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32759,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32763,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32764,
          "county": "Volusia",
          "rate": 0.005
        },
        {
          "zipCode": 32327,
          "county": "Wakulla",
          "rate": 0.015
        },
        {
          "zipCode": 32346,
          "county": "Wakulla",
          "rate": 0.015
        },
        {
          "zipCode": 32358,
          "county": "Wakulla",
          "rate": 0.015
        },
        {
          "zipCode": 32433,
          "county": "Walton",
          "rate": 0.01
        },
        {
          "zipCode": 32435,
          "county": "Walton",
          "rate": 0.01
        },
        {
          "zipCode": 32439,
          "county": "Walton",
          "rate": 0.01
        },
        {
          "zipCode": 32459,
          "county": "Walton",
          "rate": 0.01
        },
        {
          "zipCode": 32461,
          "county": "Walton",
          "rate": 0.01
        },
        {
          "zipCode": 32550,
          "county": "Walton",
          "rate": 0.01
        },
        {
          "zipCode": 32427,
          "county": "Washington",
          "rate": 0.015
        },
        {
          "zipCode": 32428,
          "county": "Washington",
          "rate": 0.015
        },
        {
          "zipCode": 32437,
          "county": "Washington",
          "rate": 0.015
        },
        {
          "zipCode": 32462,
          "county": "Washington",
          "rate": 0.015
        },
      ],
      skipDuplicates: true,
    });
    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
