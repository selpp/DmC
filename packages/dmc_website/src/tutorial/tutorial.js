let tuto_code = "" +
"# Advices\n" + 
"	show info To ensure you the best experience youm may need to follow some advices\n" + 
"	show info\n" + 
"		The experience is slightly better on the Chrome browser\n" + 
"		if you enable some advanced features\n" + 
"	show info\n" + 
"		If you are a Chrome user please enable 'Experimental Web Platform features'\n" + 
"		by going to the URL: 'chrome://flags'\n" + 
"	show info Use 'F11' to toggle fullscreen, enjoy...\n" + 
"\n" + 
"# DmC Language Howto\n" + 
"	show line -1\n" + 
"	show info Welcome to the DmC language 'Howto'\n" + 
"	show info This tutorial will teach you the key principles of the DmC's language\n" + 
"\n" + 
"		## Language Structure\n" + 
"			move to line 1\n" + 
"			show line 1 to 145\n" + 
"			show info\n" + 
"				Here you can see the DmC file for this tutorial,\n" + 
"				the DmC code is a script language to describe how your\n" + 
"				presentation should look\n" + 
"			show info\n" + 
"				We tried to keep the language syntax overhead to a minimal,\n" + 
"				so you can focus on your presentation\n" + 
"			show line -1\n" + 
"\n" + 
"			### Language key words\n" + 
"				show info There are a few key words in the DmC language:\n" + 
"\n" + 
"				// HEADERS\n" + 
"				show info\n" + 
"					'# HEADER' highlight the main structure of your presentation.\n" + 
"					It is inspired from Markdown and displays a big text in a rectangle.\n" + 
"					There are 6 levels of headers (html tag h1 to h6)\n" + 
"				# HEADER 1\n" + 
"				## HEADER 2\n" + 
"				### HEADER 3\n" + 
"				#### HEADER 4\n" + 
"				##### HEADER 5\n" + 
"				###### HEADER 6\n" + 
"\n" + 
"				// show info\n" + 
"				show info The 'show' instruction helps you by showing various components\n" + 
"				show info 'show info' Shows additional text informations\n" + 
"\n" + 
"				// show image\n" + 
"				show info 'show image' shows an image from an URL\n" + 
"				show image https://img00.deviantart.net/8c9d/i/2017/196/c/2/metamorphie_faciesse_by_taitsujin-dbgeh6a.jpg\n" + 
"\n" + 
"				// show youtube\n" + 
"				show info 'show youtube' shows a youtube video with its videoID\n" + 
"				show youtube hVEPXzve5EY\n" + 
"\n" + 
"				// show sound\n" + 
"				show info 'show sound' is able to play you a audio given an URL\n" + 
"				show sound http://live02.rfi.fr/rfimonde-64.mp3\n" + 
"\n" + 
"				// show line\n" + 
"				show info 'show line X to Y' highlights lines of your code from line X to line Y\n" + 
"				move to line 1\n" + 
"				show line 1 to 2\n" + 
"				show line 4\n" + 
"				show line 2 to 9\n" + 
"				show info 'show line' can be interspersed with other commands\n" + 
"				show line 4 to 10\n" + 
"				show line -1\n" + 
"				move to line 1\n" + 
"\n" + 
"				//show qrcode\n" + 
"				show info\n" + 
"					'show qrcode' can be used to display a qrcode\n" + 
"					Here is a qrcode to google.com\n" + 
"				show qrcode http://google.com\n" + 
"\n" + 
"				// show maths\n" + 
"				show info\n" + 
"					'show maths' work the same as 'show info' but shows\n" + 
"					maths equations written in Katex syntax. Katex is\n" + 
"					Latex for web so don't worry the syntax is the same.\n" + 
"				show maths \frac{a_i}{1+x}\n" + 
"				show maths\n" + 
"					\frac{ \frac{a_i}{1+x} }{ \frac{a_i}{1+x} } = 1\n" + 
"\n" + 
"				// move to line\n" + 
"				show info 'move to line X' moves the focus to the given line X\n" + 
"				show line 1 to 100\n" + 
"				move to line 10\n" + 
"				wait\n" + 
"				move to line 100\n" + 
"				wait\n" + 
"\n" + 
"				// wait\n" + 
"				show info\n" + 
"					You can force the presentation to wait until a key is pressed at certain points\n" + 
"					with the 'wait' command\n" + 
"				wait\n" + 
"\n" + 
"		## Language syntax\n" + 
"			move to line 99\n" + 
"			show line 99 to 105\n" + 
"			show info The language doesn't bother with indentation levels (1 exception below)\n" + 
"			show info this works as well\n" + 
"							show info This also works, but is ugly as hell\n" + 
"\n" + 
"			show info\n" + 
"				Show info's arguments can be given on multiple lines\n" + 
"				If the indentation the indentation is respected\n" + 
"\n" + 
"			// Comment\n" + 
"			/*\n" + 
"				Multi Line\n" + 
"				Comment\n" + 
"			*/\n" + 
"\n" + 
"			show info Comments are possible\n" + 
"			move to line 106\n" + 
"			show line 110 to 115\n" + 
"\n" + 
"			show info And as you can see, DmC doesn't requires quotes to give textual information\n" + 
"			show info But you can't use escape sequences \n \t \r etc..\n" + 
"			show info You can't add comments at the end of a show info // no comment\n" + 
"\n" + 
"			show line -1\n" + 
"			move to line 1\n" + 
"\n" + 
"# Using the website\n" + 
"	show info The website nav bar has a few options\n" + 
"	show info 'Home' brings you back to the homepage\n" + 
"	show image https://i.kym-cdn.com/entries/icons/mobile/000/000/015/oreally.jpg\n" + 
"\n" + 
"	show info 'Session' asks you the code document and the the DmC file to start your presentation\n" + 
"	show info If the DmC file contains warnings, the border will turn orange.\n" + 
"	show info The warnings are shwown at the page's bottom\n" + 
"	show image https://i.kym-cdn.com/entries/icons/mobile/000/025/351/afoeeee.jpg\n" + 
"\n" + 
"	show info Click 'Tutorial' to go back to this presentation\n" + 
"\n" + 
"	show info\n" + 
"		The 'Donate' button brings Peace to the world don't hesitate to click it.\n" + 
"		Seriously though, donations are always appreciated. Thank you for your support!\n" + 
"	show image https://i.kym-cdn.com/entries/icons/mobile/000/025/351/afoeeee.jpg\n" + 
"\n" + 
"# The END\n" + 
"\n" + 
"\n";

let tuto_seq = {
  "0": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 1,
        "content": "Advices"
      }
    }
  ],
  "1": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "To ensure you the best experience youm may need to follow some advices"
      }
    }
  ],
  "2": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "The experience is slightly better on the Chrome browser\nif you enable some advanced features\n"
      }
    }
  ],
  "3": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "If you are a Chrome user please enable 'Experimental Web Platform features'\nby going to the URL: 'chrome://flags'\n"
      }
    }
  ],
  "4": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "Use 'F11' to toggle fullscreen, enjoy..."
      }
    }
  ],
  "5": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 1,
        "content": "DmC Language Howto"
      }
    }
  ],
  "6": [
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
        "content": "Welcome to the DmC language 'Howto'"
      }
    }
  ],
  "7": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "This tutorial will teach you the key principles of the DmC's language"
      }
    }
  ],
  "8": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 2,
        "content": "Language Structure"
      }
    }
  ],
  "9": [
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
        "to": 145
      }
    }
  ],
  "10": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "Here you can see the DmC file for this tutorial,\nthe DmC code is a script language to describe how your\npresentation should look\n"
      }
    }
  ],
  "11": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "We tried to keep the language syntax overhead to a minimal,\nso you can focus on your presentation\n"
      }
    }
  ],
  "12": [
    {
      "type": "SHOW LINE",
      "params": {
        "from": -1,
        "to": null
      }
    },
    {
      "type": "HEADER",
      "params": {
        "lvl": 3,
        "content": "Language key words"
      }
    }
  ],
  "13": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "There are a few key words in the DmC language:"
      }
    }
  ],
  "14": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "'# HEADER' highlight the main structure of your presentation.\nIt is inspired from Markdown and displays a big text in a rectangle.\nThere are 6 levels of headers (html tag h1 to h6)\n"
      }
    }
  ],
  "15": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 1,
        "content": "HEADER 1"
      }
    }
  ],
  "16": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 2,
        "content": "HEADER 2"
      }
    }
  ],
  "17": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 3,
        "content": "HEADER 3"
      }
    }
  ],
  "18": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 4,
        "content": "HEADER 4"
      }
    }
  ],
  "19": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 5,
        "content": "HEADER 5"
      }
    }
  ],
  "20": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 6,
        "content": "HEADER 6"
      }
    }
  ],
  "21": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "The 'show' instruction helps you by showing various components"
      }
    }
  ],
  "22": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "'show info' Shows additional text informations"
      }
    }
  ],
  "23": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "'show image' shows an image from an URL"
      }
    }
  ],
  "24": [
    {
      "type": "SHOW IMAGE",
      "params": {
        "url": "https://img00.deviantart.net/8c9d/i/2017/196/c/2/metamorphie_faciesse_by_taitsujin-dbgeh6a.jpg"
      }
    }
  ],
  "25": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "'show youtube' shows a youtube video with its videoID"
      }
    }
  ],
  "26": [
    {
      "type": "SHOW YOUTUBE",
      "params": {
        "url": "hVEPXzve5EY"
      }
    }
  ],
  "27": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "'show sound' is able to play you a audio given an URL"
      }
    }
  ],
  "28": [
    {
      "type": "SHOW SOUND",
      "params": {
        "url": "http://live02.rfi.fr/rfimonde-64.mp3"
      }
    }
  ],
  "29": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "'show line X to Y' highlights lines of your code from line X to line Y"
      }
    }
  ],
  "30": [
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
        "to": 2
      }
    }
  ],
  "31": [
    {
      "type": "SHOW LINE",
      "params": {
        "from": 4,
        "to": null
      }
    },
    {
      "type": "SHOW LINE",
      "params": {
        "from": 2,
        "to": 9
      }
    }
  ],
  "32": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "'show line' can be interspersed with other commands"
      }
    }
  ],
  "33": [
    {
      "type": "SHOW LINE",
      "params": {
        "from": 4,
        "to": 10
      }
    }
  ],
  "34": [
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
        "to": 1
      }
    },
    {
      "type": "SHOW INFO",
      "params": {
        "content": "'show qrcode' can be used to display a qrcode\nHere is a qrcode to google.com\n"
      }
    }
  ],
  "35": [
    {
      "type": "SHOW QRCODE",
      "params": {
        "base64": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 27 27\"><path d=\"M1 1h7v7h-7zM9 1h1v2h1v-2h3v3h-1v-1h-1v1h-1v1h2v1h1v2h1v6h1v-4h1v1h1v4h2v1h-1v1h1v-1h1v-2h1v1h2v-1h1v1h1v2h-1v-1h-1v1h1v2h-1v-1h-1v-2h-1v3h1v1h-1v1h1v2h-1v-1h-2v1h-1v1h-1v-1h-2v3h-2v-1h1v-3h-2v-2h1v1h1v-1h1v1h1v-4h1v-1h-1v1h-1v-2h-1v1h-2v1h-1v1h-2v-1h1v-1h1v-1h2v-1h-1v-3h1v-2h-2v1h1v1h-2v-1h-1v1h1v1h1v3h-1v-2h-2v-1h-2v-1h2v-1h-5v-1h7v-2h1v1h1v-1h-1v-1h-1v1h-1v-1h-1v-1h1v-1h-1zM15 1h3v2h-1v-1h-2zM19 1h7v7h-7zM2 2v5h5v-5zM20 2v5h5v-5zM3 3h3v3h-3zM16 3h1v1h1v2h-1v-1h-1zM21 3h3v3h-3zM15 5h1v1h-1zM9 7h1v1h-1zM15 7h1v1h-1zM17 7h1v2h1v1h-2v-1h-1v-1h1zM1 9h1v5h1v2h-1v2h-1zM21 9h1v1h1v-1h3v1h-1v1h-2v1h2v-1h1v3h-1v-1h-4v1h-2v-1h1v-3h1zM3 10h1v1h-1zM21 11v1h1v-1zM3 12h2v2h-1v-1h-1zM6 12h1v1h-1zM7 13h2v1h1v1h-2v-1h-1zM4 15h4v1h-3v1h-1v1h-1v-2h1zM10 15h1v1h-1zM8 16h1v2h-4v-1h3zM15 17h1v2h-3v1h-1v-2h3zM9 18h1v5h-1zM18 18v3h3v-3zM1 19h7v7h-7zM19 19h1v1h-1zM25 19h1v7h-1v-1h-2v-2h1v-1h1v-1h-1v-1h1zM2 20v5h5v-5zM3 21h3v3h-3zM11 23h1v1h-1zM13 23h1v1h-1zM20 23h2v2h-2zM10 24h1v2h-2v-1h1zM17 25h3v1h-3zM22 25h1v1h-1z\"/></svg>",
        "url": "http://google.com"
      }
    }
  ],
  "36": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "'show maths' work the same as 'show info' but shows\nmaths equations written in Katex syntax. Katex is\nLatex for web so don't worry the syntax is the same.\n"
      }
    }
  ],
  "37": [
    {
      "type": "SHOW MATHS",
      "params": {
        "content": "\\frac{a_i}{1+x}"
      }
    }
  ],
  "38": [
    {
      "type": "SHOW MATHS",
      "params": {
        "content": "\\frac{ \\frac{a_i}{1+x} }{ \\frac{a_i}{1+x} } = 1\n"
      }
    }
  ],
  "39": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "'move to line X' moves the focus to the given line X"
      }
    }
  ],
  "40": [
    {
      "type": "SHOW LINE",
      "params": {
        "from": 1,
        "to": 100
      }
    }
  ],
  "41": [
    {
      "type": "MOVE TO",
      "params": {
        "to": 10
      }
    }
  ],
  "42": [
    {
      "type": "MOVE TO",
      "params": {
        "to": 100
      }
    }
  ],
  "43": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "You can force the presentation to wait until a key is pressed at certain points\nwith the 'wait' command\n"
      }
    }
  ],
  "44": [
    {
      "type": "HEADER",
      "params": {
        "lvl": 2,
        "content": "Language syntax"
      }
    }
  ],
  "45": [
    {
      "type": "MOVE TO",
      "params": {
        "to": 99
      }
    },
    {
      "type": "SHOW LINE",
      "params": {
        "from": 99,
        "to": 105
      }
    }
  ],
  "46": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "The language doesn't bother with indentation levels (1 exception below)"
      }
    }
  ],
  "47": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "this works as well"
      }
    }
  ],
  "48": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "This also works, but is ugly as hell"
      }
    }
  ],
  "49": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "Show info's arguments can be given on multiple lines\nIf the indentation the indentation is respected\n"
      }
    }
  ],
  "50": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "Comments are possible"
      }
    }
  ],
  "51": [
    {
      "type": "MOVE TO",
      "params": {
        "to": 106
      }
    },
    {
      "type": "SHOW LINE",
      "params": {
        "from": 110,
        "to": 115
      }
    }
  ],
  "52": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "And as you can see, DmC doesn't requires quotes to give textual information"
      }
    }
  ],
  "53": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "But you can't use escape sequences \\n \\t \\r etc.."
      }
    }
  ],
  "54": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "You can't add comments at the end of a show info // no comment"
      }
    }
  ],
  "55": [
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
        "to": 1
      }
    },
    {
      "type": "HEADER",
      "params": {
        "lvl": 1,
        "content": "Using the website"
      }
    }
  ],
  "56": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "The website nav bar has a few options"
      }
    }
  ],
  "57": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "'Home' brings you back to the homepage"
      }
    }
  ],
  "58": [
    {
      "type": "SHOW IMAGE",
      "params": {
        "url": "https://i.kym-cdn.com/entries/icons/mobile/000/000/015/oreally.jpg"
      }
    }
  ],
  "59": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "'Session' asks you the code document and the the DmC file to start your presentation"
      }
    }
  ],
  "60": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "If the DmC file contains warnings, the border will turn orange."
      }
    }
  ],
  "61": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "The warnings are shwown at the page's bottom"
      }
    }
  ],
  "62": [
    {
      "type": "SHOW IMAGE",
      "params": {
        "url": "https://i.kym-cdn.com/entries/icons/mobile/000/025/351/afoeeee.jpg"
      }
    }
  ],
  "63": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "Click 'Tutorial' to go back to this presentation"
      }
    }
  ],
  "64": [
    {
      "type": "SHOW INFO",
      "params": {
        "content": "The 'Donate' button brings Peace to the world don't hesitate to click it.\nSeriously though, donations are always appreciated. Thank you for your support!\n"
      }
    }
  ],
  "65": [
    {
      "type": "SHOW IMAGE",
      "params": {
        "url": "https://i.kym-cdn.com/entries/icons/mobile/000/025/351/afoeeee.jpg"
      }
    }
  ],
  "66": [
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
