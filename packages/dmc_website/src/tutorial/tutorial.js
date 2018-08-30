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
"	show info \n" + 
"		There are a few key words in the DMC language:\n" + 
"	\n" + 
"	// HEADERS\n" + 
"	show info\n" + 
"		\"# HEADER\" highlight the main structure of your presentation\n" + 
"		It is inspired from Markdown and displays a big text in a rectangle\n" + 
"	# EXAMPLE\n" + 
"	\n" + 
"	show info\n" + 
"		the \"show\" instruction helps you by showing various components\n" + 
"	show info \"show info\" Shows additional text informations\n" + 
"\n" + 
"	// show image\n" + 
"	show info \"show image\" Shows an image from an URL\n" + 
"	show image https://img00.deviantart.net/8c9d/i/2017/196/c/2/metamorphie_faciesse_by_taitsujin-dbgeh6a.jpg	\n" + 
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
"	show line 5\n" + 
"	wait\n" + 
"	show line 3 to 7\n" + 
"	wait\n" + 
"	show info \"show line\" can be interspersed with other commands\n" + 
"	show line 4 to 10\n" + 
"	show line -1\n" + 
"	move to line 0\n" + 
"	\n" + 
"\n" + 
"	// move to line\n" + 
"	show info \"move to line X\" moves the focus to the given line\n" + 
"	show line 1 to 100\n" + 
"	move to line 4\n" + 
"	wait\n" + 
"	move to line 30\n" + 
"	wait	\n" + 
"\n" + 
"	// wait\n" + 
"	show info \n" + 
"		You can force the presentation to wait until a key is pressed at certain points\n" + 
"		with the \"wait\" command\n" + 
"	wait\n" + 
"	\n" + 
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
"	\n" + 
"	show info And as you can see, DMC doesn't requires quotes to give textual information. \n" + 
"	show info But you can't use escape sequences \n \t \r etc..\n" + 
"	show info You can't add comments at the end of a show info // no comment\n" + 
"\n" + 
"	# Using the website\n" + 
"	show info The website tab bar has a few options \n" + 
"	show info \"Home\" brings you back to the homepage \n" + 
"	show image https://i.kym-cdn.com/entries/icons/mobile/000/000/015/oreally.jpg\n" + 
"	\n" + 
"	show info \"Session\" asks you the code document and the the dmc file to start your presentation\n" + 
"	show info If the dmc file contains warnings, the border will turn orange.\n" + 
"	show info The warnings are shwown in the console, so you can show off a bit\n" + 
"	show image https://i.kym-cdn.com/entries/icons/mobile/000/025/351/afoeeee.jpg\n" + 
"	\n" + 
"	show info Click \"Tutorial\" to go	 back to this presentation\n" + 
"	\n" + 
"	show info \n" + 
"		The \"Donate\" button brings Peace to the world\n" + 
"		don't hesitate to click it.\n" + 
"		Seriously though, donations are always appreciated. Thank you for your support !\n" + 
"	\n" + 
"	# The END\n" + 
"\n" + 
"\n" + 
"\n" + 
"\n" + 
"\n" + 
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
    },
    {
      "type": "SHOW INFO",
      "params": {
        "content": "Here you can see the DMC file for this tutorial,\nthe DMC code is a script language to describe how your\npresentation should look\n"
      }
    }
  ],
  "5": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "We tried to keep the language syntax overhead to a minimal,\nso you can focus on your presentation\n"
      }
    }
  ],
  "6": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 2,
        "content": "Language key words"
      }
    }
  ],
  "7": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "There are a few key words in the DMC language:\n"
      }
    }
  ],
  "8": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"# HEADER\" highlight the main structure of your presentation\nIt is inspired from Markdown and displays a big text in a rectangle\n"
      }
    }
  ],
  "9": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 1,
        "content": "EXAMPLE"
      }
    }
  ],
  "10": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "the \"show\" instruction helps you by showing various components\n"
      }
    }
  ],
  "11": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"show info\" Shows additional text informations"
      }
    }
  ],
  "12": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"show image\" Shows an image from an URL"
      }
    }
  ],
  "13": [
    {
      "type": "SHOW IMAGE",
      "params": {
        "url": "https://img00.deviantart.net/8c9d/i/2017/196/c/2/metamorphie_faciesse_by_taitsujin-dbgeh6a.jpg"
      }
    }
  ],
  "14": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"show youtube\" shows a youtube video with its videoID"
      }
    }
  ],
  "15": [
    {
      "type": "SHOW YOUTUBE",
      "params": {
        "url": "hVEPXzve5EY"
      }
    }
  ],
  "16": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"show line X to Y\" highlights lines of your code from line X to line Y"
      }
    }
  ],
  "17": [
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
  "18": [
    {
      "type": "SHOW LINE",
      "params": {
        "from": 5,
        "to": null
      }
    }
  ],
  "19": [
    {
      "type": "SHOW LINE",
      "params": {
        "from": 3,
        "to": 7
      }
    }
  ],
  "20": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"show line\" can be interspersed with other commands"
      }
    }
  ],
  "21": [
    {
      "type": "SHOW LINE",
      "params": {
        "from": 4,
        "to": 10
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
      "type": "MOVE TO",
      "params": {
        "to": 0
      }
    },
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"move to line X\" moves the focus to the given line"
      }
    }
  ],
  "22": [
    {
      "type": "SHOW LINE",
      "params": {
        "from": 1,
        "to": 100
      }
    },
    {
      "type": "MOVE TO",
      "params": {
        "to": 4
      }
    }
  ],
  "23": [
    {
      "type": "MOVE TO",
      "params": {
        "to": 30
      }
    }
  ],
  "24": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "You can force the presentation to wait until a key is pressed at certain points\nwith the \"wait\" command\n"
      }
    }
  ],
  "25": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 2,
        "content": "Language syntax"
      }
    }
  ],
  "26": [
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
    },
    {
      "type": "SHOW INFO",
      "params": {
        "content": "The language doesn't bother with indentation levels (1 exception below)"
      }
    }
  ],
  "27": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "this works as well"
      }
    }
  ],
  "28": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "This also works, but is ugly as hell"
      }
    }
  ],
  "29": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "Show info's arguments can be given on multiple lines\nIf the indentation the indentation is respected\n"
      }
    }
  ],
  "30": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "Comments are possible"
      }
    }
  ],
  "31": [
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
  "32": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "And as you can see, DMC doesn't requires quotes to give textual information."
      }
    }
  ],
  "33": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "But you can't use escape sequences \\n \\t \\r etc.."
      }
    }
  ],
  "34": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "You can't add comments at the end of a show info // no comment"
      }
    }
  ],
  "35": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 1,
        "content": "Using the website"
      }
    }
  ],
  "36": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "The website tab bar has a few options"
      }
    }
  ],
  "37": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"Home\" brings you back to the homepage"
      }
    }
  ],
  "38": [
    {
      "type": "SHOW IMAGE",
      "params": {
        "url": "https://i.kym-cdn.com/entries/icons/mobile/000/000/015/oreally.jpg"
      }
    }
  ],
  "39": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "\"Session\" asks you the code document and the the dmc file to start your presentation"
      }
    }
  ],
  "40": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "If the dmc file contains warnings, the border will turn orange."
      }
    }
  ],
  "41": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "The warnings are shwown in the console, so you can show off a bit"
      }
    }
  ],
  "42": [
    {
      "type": "SHOW IMAGE",
      "params": {
        "url": "https://i.kym-cdn.com/entries/icons/mobile/000/025/351/afoeeee.jpg"
      }
    }
  ],
  "43": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "Click \"Tutorial\" to go\t back to this presentation"
      }
    }
  ],
  "44": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "The \"Donate\" button brings Peace to the world\ndon't hesitate to click it.\nSeriously though, donations are always appreciated. Thank you for your support !\n"
      }
    }
  ],
  "45": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 1,
        "content": "The END"
      }
    }
  ]
};

module.exports = { tuto_code, tuto_seq };
