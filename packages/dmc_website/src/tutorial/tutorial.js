let tuto_code = "" +
"# DMC Language Howto\n" + 
"	show line -1\n" + 
"	show info Welcome to the DMC language howto\n" + 
"	show info This tutorial will teach you the key principles of the DMC's language\n" + 
"\n" + 
"	## Language Structure\n" + 
"	move to line 1\n" + 
"	show line 1 to 100\n" + 
"	show info\n" + 
"		Here you can see the DMC file for this tutorial,\n" + 
"		the DMC code is a script language to describe how your\n" + 
"		presentation should look\n" + 
"\n" + 
"	show info\n" + 
"		We tried to keep the language syntax overhead to a minimal,\n" + 
"		so you can focus on your presentation\n" + 
"\n" + 
"	## Language key words\n" + 
"	show info\n" + 
"		There are a few key words in the DMC language:\n" + 
"\n" + 
"	// HEADERS\n" + 
"	show info\n" + 
"		\"# HEADER\" highlight the main structure of your presentation\n" + 
"		It is inspired from Markdown and displays a big text in a rectangle\n" + 
"	# EXAMPLE\n" + 
"\n" + 
"	show info\n" + 
"		the \"show\" instruction helps you by showing various components\n" + 
"	show info \"show info\" Shows additional text informations\n" + 
"\n" + 
"	// show image\n" + 
"	show info \"show image\" Shows an image from an URL\n" + 
"	show image https://img00.deviantart.net/8c9d/i/2017/196/c/2/metamorphie_faciesse_by_taitsujin-dbgeh6a.jpg\n" + 
"\n" + 
"	// show youtube\n" + 
"	show info \"show youtube\" shows a youtube video with its videoID\n" + 
"	show youtube hVEPXzve5EY\n" + 
"\n" + 
"	// show line\n" + 
"	show info \"show line X to Y\" highlights lines of your code from line X to line Y\n" + 
"	move to line 0\n" + 
"	show line 1 to 2\n" + 
"	wait\n" + 
"	show line 4\n" + 
"	wait\n" + 
"	show line 3 to 7\n" + 
"	wait\n" + 
"	show info \"show line\" can be interspersed with other commands\n" + 
"	show line 4 to 10\n" + 
"	show line -1\n" + 
"	move to line 0\n" + 
"\n" + 
"	//show qrcode\n" + 
"	show info\n" + 
"		\"show qrcode\" can be used to display a qrcode\n" + 
"		Here is a qrcode to google.com\n" + 
"\n" + 
"	show qrcode http://google.com\n" + 
"\n" + 
"	// move to line\n" + 
"	show info \"move to line X\" moves the focus to the given line\n" + 
"	show line 1 to 100\n" + 
"	move to line 4\n" + 
"	wait\n" + 
"	move to line 30\n" + 
"	wait\n" + 
"\n" + 
"	// wait\n" + 
"	show info\n" + 
"		You can force the presentation to wait until a key is pressed at certain points\n" + 
"		with the \"wait\" command\n" + 
"	wait\n" + 
"\n" + 
"\n" + 
"\n" + 
"	## Language syntax\n" + 
"	move to line 59\n" + 
"	show line 70 to 81\n" + 
"	show info The language doesn't bother with indentation levels (1 exception below)\n" + 
"show info this works as well\n" + 
"					show info This also works, but is ugly as hell\n" + 
"\n" + 
"	show info\n" + 
"		Show info's arguments can be given on multiple lines\n" + 
"		If the indentation the indentation is respected\n" + 
"\n" + 
"\n" + 
"	// comment\n" + 
"	/*\n" + 
"	Multi line comments\n" + 
"	*/\n" + 
"\n" + 
"	show info Comments are possible\n" + 
"	move to line 81\n" + 
"	show line 83 to 86\n" + 
"	wait\n" + 
"\n" + 
"	show info And as you can see, DMC doesn't requires quotes to give textual information.\n" + 
"	show info But you can't use escape sequences \n \t \r etc..\n" + 
"	show info You can't add comments at the end of a show info // no comment\n" + 
"\n" + 
"	# Using the website\n" + 
"	show info The website tab bar has a few options\n" + 
"	show info \"Home\" brings you back to the homepage\n" + 
"	show image https://i.kym-cdn.com/entries/icons/mobile/000/000/015/oreally.jpg\n" + 
"\n" + 
"	show info \"Session\" asks you the code document and the the dmc file to start your presentation\n" + 
"	show info If the dmc file contains warnings, the border will turn orange.\n" + 
"	show info The warnings are shwown in the console, so you can show off a bit\n" + 
"	show image https://i.kym-cdn.com/entries/icons/mobile/000/025/351/afoeeee.jpg\n" + 
"\n" + 
"	show info Click \"Tutorial\" to go	 back to this presentation\n" + 
"\n" + 
"	show info\n" + 
"		The \"Donate\" button brings Peace to the world\n" + 
"		don't hesitate to click it.\n" + 
"		Seriously though, donations are always appreciated. Thank you for your support !\n" + 
"\n" + 
"	# The END\n" + 
"\n" + 
"	## Maths\n" + 
"	show info \"show maths\" work the same as \"show info\" but shows maths equations written in Katex syntax\n" + 
"	show maths \frac{a_i}{1+x}\n" + 
"	show maths\n" + 
"		\frac{\frac{a_i}{1+x}}{\frac{a_i}{1+x}} = 1\n" + 
"\n" + 
"\n";

let tuto_seq = {
  "0": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 1,
        "content": "DMC Language Howto"
      }
    }
  ],
  "1": [
    {
      "type": "SHOW LINE",
      "params": {
        "from": -1,
        "to": null
      }
    },
    {
      "type": "SHOW INFO",
      "params": {
        "content": "Welcome to the DMC language howto"
      }
    }
  ],
  "2": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "This tutorial will teach you the key principles of the DMC's language"
      }
    }
  ],
  "3": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 2,
        "content": "Language Structure"
      }
    }
  ],
  "4": [
    {
      "type": "MOVE TO",
      "params": {
        "to": 1
      }
    },
    {
      "type": "SHOW LINE",
      "params": {
        "from": 1,
        "to": 100
      }
    }
  ],
  "5": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "Here you can see the DMC file for this tutorial,\nthe DMC code is a script language to describe how your\npresentation should look\n"
      }
    }
  ],
  "6": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "We tried to keep the language syntax overhead to a minimal,\nso you can focus on your presentation\n"
      }
    }
  ],
  "7": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 2,
        "content": "Language key words"
      }
    }
  ],
  "8": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "There are a few key words in the DMC language:\n"
      }
    }
  ],
  "9": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"# HEADER\" highlight the main structure of your presentation\nIt is inspired from Markdown and displays a big text in a rectangle\n"
      }
    }
  ],
  "10": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 1,
        "content": "EXAMPLE"
      }
    }
  ],
  "11": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "the \"show\" instruction helps you by showing various components\n"
      }
    }
  ],
  "12": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"show info\" Shows additional text informations"
      }
    }
  ],
  "13": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"show image\" Shows an image from an URL"
      }
    }
  ],
  "14": [
    {
      "type": "SHOW IMAGE",
      "params": {
        "url": "https://img00.deviantart.net/8c9d/i/2017/196/c/2/metamorphie_faciesse_by_taitsujin-dbgeh6a.jpg"
      }
    }
  ],
  "15": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"show youtube\" shows a youtube video with its videoID"
      }
    }
  ],
  "16": [
    {
      "type": "SHOW YOUTUBE",
      "params": {
        "url": "hVEPXzve5EY"
      }
    }
  ],
  "17": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"show line X to Y\" highlights lines of your code from line X to line Y"
      }
    }
  ],
  "18": [
    {
      "type": "MOVE TO",
      "params": {
        "to": 0
      }
    },
    {
      "type": "SHOW LINE",
      "params": {
        "from": 1,
        "to": 2
      }
    }
  ],
  "19": [
    {
      "type": "SHOW LINE",
      "params": {
        "from": 4,
        "to": null
      }
    }
  ],
  "20": [
    {
      "type": "SHOW LINE",
      "params": {
        "from": 3,
        "to": 7
      }
    }
  ],
  "21": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"show line\" can be interspersed with other commands"
      }
    }
  ],
  "22": [
    {
      "type": "SHOW LINE",
      "params": {
        "from": 4,
        "to": 10
      }
    }
  ],
  "23": [
    {
      "type": "SHOW LINE",
      "params": {
        "from": -1,
        "to": null
      }
    },
    {
      "type": "MOVE TO",
      "params": {
        "to": 0
      }
    },
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"show qrcode\" can be used to display a qrcode\nHere is a qrcode to google.com\n"
      }
    }
  ],
  "24": [
    {
      "type": "SHOW QRCODE",
      "params": {
        "base64": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 27 27\"><path d=\"M1 1h7v7h-7zM9 1h1v2h1v-2h3v3h-1v-1h-1v1h-1v1h2v1h1v2h1v6h1v-4h1v1h1v4h2v1h-1v1h1v-1h1v-2h1v1h2v-1h1v1h1v2h-1v-1h-1v1h1v2h-1v-1h-1v-2h-1v3h1v1h-1v1h1v2h-1v-1h-2v1h-1v1h-1v-1h-2v3h-2v-1h1v-3h-2v-2h1v1h1v-1h1v1h1v-4h1v-1h-1v1h-1v-2h-1v1h-2v1h-1v1h-2v-1h1v-1h1v-1h2v-1h-1v-3h1v-2h-2v1h1v1h-2v-1h-1v1h1v1h1v3h-1v-2h-2v-1h-2v-1h2v-1h-5v-1h7v-2h1v1h1v-1h-1v-1h-1v1h-1v-1h-1v-1h1v-1h-1zM15 1h3v2h-1v-1h-2zM19 1h7v7h-7zM2 2v5h5v-5zM20 2v5h5v-5zM3 3h3v3h-3zM16 3h1v1h1v2h-1v-1h-1zM21 3h3v3h-3zM15 5h1v1h-1zM9 7h1v1h-1zM15 7h1v1h-1zM17 7h1v2h1v1h-2v-1h-1v-1h1zM1 9h1v5h1v2h-1v2h-1zM21 9h1v1h1v-1h3v1h-1v1h-2v1h2v-1h1v3h-1v-1h-4v1h-2v-1h1v-3h1zM3 10h1v1h-1zM21 11v1h1v-1zM3 12h2v2h-1v-1h-1zM6 12h1v1h-1zM7 13h2v1h1v1h-2v-1h-1zM4 15h4v1h-3v1h-1v1h-1v-2h1zM10 15h1v1h-1zM8 16h1v2h-4v-1h3zM15 17h1v2h-3v1h-1v-2h3zM9 18h1v5h-1zM18 18v3h3v-3zM1 19h7v7h-7zM19 19h1v1h-1zM25 19h1v7h-1v-1h-2v-2h1v-1h1v-1h-1v-1h1zM2 20v5h5v-5zM3 21h3v3h-3zM11 23h1v1h-1zM13 23h1v1h-1zM20 23h2v2h-2zM10 24h1v2h-2v-1h1zM17 25h3v1h-3zM22 25h1v1h-1z\"/></svg>",
        "url": "http://google.com"
      }
    }
  ],
  "25": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"move to line X\" moves the focus to the given line"
      }
    }
  ],
  "26": [
    {
      "type": "SHOW LINE",
      "params": {
        "from": 1,
        "to": 100
      }
    }
  ],
  "27": [
    {
      "type": "MOVE TO",
      "params": {
        "to": 4
      }
    }
  ],
  "28": [
    {
      "type": "MOVE TO",
      "params": {
        "to": 30
      }
    }
  ],
  "29": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "You can force the presentation to wait until a key is pressed at certain points\nwith the \"wait\" command\n"
      }
    }
  ],
  "30": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 2,
        "content": "Language syntax"
      }
    }
  ],
  "31": [
    {
      "type": "MOVE TO",
      "params": {
        "to": 59
      }
    },
    {
      "type": "SHOW LINE",
      "params": {
        "from": 70,
        "to": 81
      }
    }
  ],
  "32": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "The language doesn't bother with indentation levels (1 exception below)"
      }
    }
  ],
  "33": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "this works as well"
      }
    }
  ],
  "34": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "This also works, but is ugly as hell"
      }
    }
  ],
  "35": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "Show info's arguments can be given on multiple lines\nIf the indentation the indentation is respected\n"
      }
    }
  ],
  "36": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "Comments are possible"
      }
    }
  ],
  "37": [
    {
      "type": "MOVE TO",
      "params": {
        "to": 81
      }
    },
    {
      "type": "SHOW LINE",
      "params": {
        "from": 83,
        "to": 86
      }
    }
  ],
  "38": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "And as you can see, DMC doesn't requires quotes to give textual information."
      }
    }
  ],
  "39": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "But you can't use escape sequences \\n \\t \\r etc.."
      }
    }
  ],
  "40": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "You can't add comments at the end of a show info // no comment"
      }
    }
  ],
  "41": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 1,
        "content": "Using the website"
      }
    }
  ],
  "42": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "The website tab bar has a few options"
      }
    }
  ],
  "43": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"Home\" brings you back to the homepage"
      }
    }
  ],
  "44": [
    {
      "type": "SHOW IMAGE",
      "params": {
        "url": "https://i.kym-cdn.com/entries/icons/mobile/000/000/015/oreally.jpg"
      }
    }
  ],
  "45": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"Session\" asks you the code document and the the dmc file to start your presentation"
      }
    }
  ],
  "46": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "If the dmc file contains warnings, the border will turn orange."
      }
    }
  ],
  "47": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "The warnings are shwown in the console, so you can show off a bit"
      }
    }
  ],
  "48": [
    {
      "type": "SHOW IMAGE",
      "params": {
        "url": "https://i.kym-cdn.com/entries/icons/mobile/000/025/351/afoeeee.jpg"
      }
    }
  ],
  "49": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "Click \"Tutorial\" to go\t back to this presentation"
      }
    }
  ],
  "50": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "The \"Donate\" button brings Peace to the world\ndon't hesitate to click it.\nSeriously though, donations are always appreciated. Thank you for your support !\n"
      }
    }
  ],
  "51": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 1,
        "content": "The END"
      }
    }
  ],
  "52": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 2,
        "content": "Maths"
      }
    }
  ],
  "53": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"show maths\" work the same as \"show info\" but shows maths equations written in Katex syntax"
      }
    }
  ],
  "54": [
    {
      "type": "SHOW MATHS",
      "params": {
        "content": "\\frac{a_i}{1+x}"
      }
    }
  ],
  "55": [
    {
      "type": "SHOW MATHS",
      "params": {
        "content": "\\frac{\\frac{a_i}{1+x}}{\\frac{a_i}{1+x}} = 1\n"
      }
    }
  ]
};

module.exports = { tuto_code, tuto_seq };
