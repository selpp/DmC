let tuto_js = '' +
'// USELESS JS FILE\n' +
'\n' +
'// ======== PART 1 ========\n' +
'\n' +
'// TEST TEST TEST\n' +
'let a1 = function(params) {\n' +
'  return params;\n' +
'};\n' +
'\n' +
'// TEST TEST TEST\n' +
'let a2 = function(params) {\n' +
'  return params;\n' +
'};\n' +
'\n' +
'// TEST TEST TEST\n' +
'let a3 = function(params) {\n' +
'  return params;\n' +
'};\n' +
'\n' +
'// TEST TEST TEST\n' +
'let a4 = function(params) {\n' +
'  return params;\n' +
'};\n' +
'\n' +
'// TEST TEST TEST\n' +
'let a5 = function(params) {\n' +
'  return params;\n' +
'};\n' +
'\n' +
'\n' +
'// ======== PART 2 ========\n' +
'\n' +
'// TEST TEST TEST\n' +
'let a6 = function(params) {\n' +
'  return params;\n' +
'};\n' +
'\n' +
'// TEST TEST TEST\n' +
'let a7 = function(params) {\n' +
'  return params;\n' +
'};\n' +
'\n' +
'// TEST TEST TEST\n' +
'let a8 = function(params) {\n' +
'  return params;\n' +
'};\n' +
'\n' +
'// TEST TEST TEST\n' +
'let a9 = function(params) {\n' +
'  return params;\n' +
'};\n' +
'\n' +
'\n';

let tuto_dmc = {
  "0": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 1,
        "content": "DMC EXAMPLE"
      }
    }
  ],
  "1": [
    {
      "type": "MOVE TO",
      "params": {
        "to": 0
      }
    },
    {
      "type": "SHOW INFO",
      "params": {
        "content": "You can move forward pressing the D key on your keyword or backward with Q..."
      }
    }
  ],
  "2": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "This tutorial will show you the basics of DmC code presentation tool. Enjoy!"
      }
    }
  ],
  "3": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 2,
        "content": "THE CODE"
      }
    }
  ],
  "4": [
    {
      "type": "MOVE TO",
      "params": {
        "to": 0
      }
    },
    {
      "type": "SHOW LINE",
      "params": {
        "from": 0,
        "to": 50
      }
    }
  ],
  "5": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "DmC can move to a specific line and amphasis a set of lines."
      }
    }
  ],
  "6": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 3,
        "content": "PART 1"
      }
    }
  ],
  "7": [
    {
      "type": "MOVE TO",
      "params": {
        "to": 2
      }
    },
    {
      "type": "SHOW LINE",
      "params": {
        "from": 2,
        "to": 29
      }
    }
  ],
  "8": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "Add info here to explain PART 1!"
      }
    }
  ],
  "9": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 3,
        "content": "PART 2"
      }
    }
  ],
  "10": [
    {
      "type": "MOVE TO",
      "params": {
        "to": 30
      }
    },
    {
      "type": "SHOW LINE",
      "params": {
        "from": 30,
        "to": 50
      }
    }
  ],
  "11": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "Add info here to explain PART 2!"
      }
    }
  ],
  "12": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 6,
        "content": "APPENDIX"
      }
    }
  ],
  "13": [
    {
      "type": "MOVE TO",
      "params": {
        "to": 0
      }
    },
    {
      "type": "SHOW LINE",
      "params": {
        "from": -1,
        "to": null
      }
    },
    {
      "type": "SHOW IMAGE",
      "params": {
        "url": "https://img00.deviantart.net/8c9d/i/2017/196/c/2/metamorphie_faciesse_by_taitsujin-dbgeh6a.jpg"
      }
    }
  ],
  "14": [
    {
      "type": "SHOW YOUTUBE",
      "params": {
        "url": "hVEPXzve5EY"
      }
    }
  ],
  "15": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 1,
        "content": "THE END"
      }
    }
  ]
};

module.exports = { tuto_js, tuto_dmc };
