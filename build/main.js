var main;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/languages.ts":
/*!**************************!*\
  !*** ./src/languages.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "languages": () => (/* binding */ languages)
/* harmony export */ });
/**
 * This is the list of all languages in the game with their translations.
 * When adding a new language, follow the given formatting: code, then input list, then messages, and finally room.
 * All new languages should be added after the last language in the file.
 */
var languages = [
    /**
     * English Language
     */
    {
        code: "EN",
        inputs: {
            east: "east",
            north: "north",
            south: "south",
            west: "west",
            openWindow: "open window",
            takeKey: "take key",
        },
        messages: {
            getLanguage: "Enter EN to play in English.",
            enterCommand: "Please enter a command.",
            badCommand: "Unrecognized command.",
            enterName: "Please enter your name.",
            invalidInput: "Invalid input.",
            hello: "Hello",
            congratulations: "Congratulations ",
        },
        rooms: {
            inBuilding: "You are in a building. Your goal is to exit this building.",
            winText: "You have exited the building. You win!",
            onTable: "On the table there is a key.",
            windowIsOpen: "The window is already open.",
            windowIsClosed: "The window is closed.",
            westDoor: "There is a door on the west wall of this room.",
            welcome: "Welcome to the text adventure! Open your browser's developer console to play.",
            haveKey: "You already have the key.",
            inBrightRoom: "You are in a bright room. There is a door on the north wall of this room and a window on the east wall.",
            inEmptyRoom: "You are in an empty room. There are doors on the south and east walls of this room.",
            selectedEastDoor: "You go through the east door. You are in a room with a table.",
            openTheWindow: "You open the window.",
            stepOutOfWindow: "You step out from the open window.",
            takeKeyFromTable: "You take the key from the table.",
            lockedSouthDoor: "You try to open the south door, but it is locked.",
            unlockSouthDoor: "You unlock the south door with the key and go through the door.",
        },
    },
    /**
     * Indonesian Language
     */
    {
        code: "ID",
        inputs: {
            east: "timur",
            north: "utara",
            south: "selatan",
            west: "barat",
            openWindow: "buka jendela",
            takeKey: "ambil kunci",
        },
        messages: {
            getLanguage: "Masukkan ID untuk bermain dalam Bahasa Indonesia.",
            enterCommand: "Silahkan masukkan perintah.",
            badCommand: "Perintah tidak dikenal.",
            enterName: "Silahkan masukkan namamu.",
            invalidInput: "Masukkan anda tidak valid.",
            hello: "Halo",
            congratulations: "Selamat berbahagia ",
        },
        rooms: {
            inBuilding: "Anda berada di sebuah gedung. Tujuan anda adalah keluar dari gedung ini.",
            winText: "Anda telah keluar dari gedung ini. Selamat, kamu menang!",
            onTable: "Di atas meja ada kunci.",
            windowIsOpen: "Jendela itu sudah terbuka.",
            windowIsClosed: "Jendela itu saat ini tertutup.",
            westDoor: "Di dinding barat ruangan ini ada sebuah pintu.",
            welcome: "Selamat datang di pertualangan teks! Buka konsol developer di browser anda untuk bermain.",
            haveKey: "Anda sudah memiliki kuncinya.",
            inBrightRoom: "Anda berada di dalam ruangan yang terang. Di dinding utara ruangan ini ada pintu, dan di dinding timur ruangan ini ada jendela.",
            inEmptyRoom: "Anda berada di ruangan kosong. Ada pintu di dinding selatan dan dinding timur dalam ruangan ini.",
            selectedEastDoor: "Anda masuk melalui pintu timur. Anda berada di sebuah ruangan dengan sebuah meja.",
            openTheWindow: "Anda membuka jendela itu.",
            stepOutOfWindow: "Anda melangkah keluar dari jendela yang terbuka.",
            takeKeyFromTable: "Anda mengambil kunci dari atas meja.",
            lockedSouthDoor: "Anda mencoba membuka pintu selatan, tapi pintu itu terkunci.",
            unlockSouthDoor: "Anda membuka kunci pintu selatan dan jalan melewati pintu tersebut.",
        },
    },
    /**
     * Japanese Language
     */
    {
        code: "JP",
        inputs: {
            east: "ひがし",
            north: "きた",
            south: "みなみ",
            west: "にし",
            openWindow: "まどをあける",
            takeKey: "キーをとる",
        },
        messages: {
            getLanguage: "「JP」を入れて日本語で遊ぶ。",
            enterCommand: "コマンドを入れてください。",
            badCommand: "認識不能なコマンド。",
            enterName: "名前を入れてください。",
            invalidInput: "不正な入力。",
            hello: "こんにちは",
            congratulations: "おめでとう ",
        },
        rooms: {
            inBuilding: "建物にいる。ゴールは「出る」。",
            winText: "建物から出た！YOU　WIN！",
            onTable: "テーブルの上に鍵がある。",
            windowIsOpen: "窓はすでに開けている。",
            windowIsClosed: "窓は閉めている。",
            westDoor: "西にドアがある。",
            welcome: "テキストアドベンチャーへようこそ！ブラウザのコンソールで遊んでください。",
            haveKey: "すでにキーを手に入れた。",
            inBrightRoom: "明るい部屋にいる。北にドアがある。東に窓がある。",
            inEmptyRoom: "空室にいる。南にドアがある。東にドアがある。",
            selectedEastDoor: "東のドアを通てテーブルがある部屋にいる。",
            openTheWindow: "窓を開ける。",
            stepOutOfWindow: "開けた窓から踏む。",
            takeKeyFromTable: "テーブルからキーをとる",
            lockedSouthDoor: "南のドアを開けてみたけど鍵がかかっていた。",
            unlockSouthDoor: "南のドアをキーでかけて行った。",
        },
    },
    /**
     * Klingon Language
     */
    {
        code: "TLH",
        inputs: {
            east: "Huy'be'",
            north: "tIq",
            south: "cha'",
            west: "ghung",
            openWindow: "Qo'",
            takeKey: "QoD",
        },
        messages: {
            getLanguage: "qIb TLH vItlhutlh.",
            enterCommand: "ghu'vam vIta'pu' 'e' vIparHa'.",
            badCommand: "vo' jIH!",
            enterName: "ngImmoH vIta'pu'.",
            invalidInput: "qo' yIquv!",
            hello: "nuqneH",
            congratulations: "qoS",
        },
        rooms: {
            inBuilding: "qaSpu'DI' vIghoS. ngIq HeH vIlegh.",
            winText: "qaSpu'DI' vIlIgh. qoS!",
            onTable: "qaSpu'DI' 'e' loSlu'chugh vItlhutlh.",
            windowIsOpen: "Qo'chuq lo'",
            windowIsClosed: "Qo' loS.",
            westDoor: "qaSpu'D 'op Ho'DoS neH.",
            welcome: "choqmeH 'ej vItlhutlh! vIleghmeyDaq Hov leng, pe'vIl DIpDaq ghu'vetlh.",
            haveKey: "QoDchu'wI' tlhIngan vItlhutlh.",
            inBrightRoom: "ghap vIlo'. qaSpu'D 'op tIqwI' 'e' HoS je neH 'ej 'eSqa' qet.",
            inEmptyRoom: "peghmey vIlo'. qaSpu'D 'op cha'wI' 'ej tIqDaj qet.",
            selectedEastDoor: "Huy'be'wI' vIlIgh. qaSpu'D 'e' loSlu'chugh 'e'",
            openTheWindow: "Qo'chu'.",
            stepOutOfWindow: "Qo'wI' latlh vIlIj.",
            takeKeyFromTable: "qaSpu'D 'e' loSlu'chugh QoD vItlhutlh.",
            lockedSouthDoor: "cha'wI' vItu'laHbe'.",
            unlockSouthDoor: "QoDchu'wI' cha'wI' vItu'lu'pu' 'ej vIlIgh.",
        },
    },
    /**
     * Quenya Language
     */
    {
        code: "QYU",
        inputs: {
            east: "lerya",
            north: "telta",
            south: "númenya",
            west: "hyarya",
            openWindow: "háralya",
            takeKey: "hlarë",
        },
        messages: {
            getLanguage: "QYU-valya atarinyen Quenyanen lárë.",
            enterCommand: "Auta i lómë, antolle?",
            badCommand: "Ná quetë!",
            enterName: "Cenuval, mellon?",
            invalidInput: "Etyëa ar?",
            hello: "Elen síla lúmenn' omentielvo",
            congratulations: "Vanimelda",
        },
        rooms: {
            inBuilding: "Manenyo nauva, ar mal tárelya ciryamo",
            winText: "Tárelyava cirya nána ar vanimelda!",
            onTable: "Lampë tárië antaina hlarë",
            windowIsOpen: "Háralyë telta",
            windowIsClosed: "Háralyë lá",
            westDoor: "Ciryava hyaryava fírima númenta",
            welcome: "Nai tiruvantes i hárar mahalmassen! Áva quettar i lambë enyalien",
            haveKey: "Hlarëva nauvanna",
            inBrightRoom: "Manenyo milya, ar mal teltava telta tulya ar hyaryava helka",
            inEmptyRoom: "Manenyo utúlië, ar mal telta númenyava fírima",
            selectedEastDoor: "Leryava nauvanna. Malampë tárië antaina",
            openTheWindow: "Háralyë tárië",
            stepOutOfWindow: "Háralyë latta hlarëva",
            takeKeyFromTable: "Hlarëva lampë antaina táriëva nauvanna",
            lockedSouthDoor: "Númenyava taruva, ar mal samë",
            unlockSouthDoor: "Hlarëva númenyava taruvanna, ar mal ciryava nauvanna",
        },
    },
];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCommand": () => (/* binding */ getCommand),
/* harmony export */   "getLanguage": () => (/* binding */ getLanguage),
/* harmony export */   "getName": () => (/* binding */ getName),
/* harmony export */   "listLanguages": () => (/* binding */ listLanguages),
/* harmony export */   "play": () => (/* binding */ play)
/* harmony export */ });
/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languages */ "./src/languages.ts");

var selectedLanguage = 0;
/**
 * The main body for the game
 */
function play() {
    getLanguage();
    console.info(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.welcome);
    console.warn(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].messages.enterName);
    var playerName = getName();
    console.info(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].messages.hello + playerName + ".");
    console.info(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.inBuilding);
    console.info(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.inEmptyRoom);
    var currentRoom = "A";
    var hasKey = false;
    var windowOpen = false;
    while (currentRoom != "Exit") {
        var command = getCommand();
        switch (currentRoom) {
            case "A":
                switch (command) {
                    case _languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].inputs.east:
                        currentRoom = printRoomBDescription(hasKey);
                        break;
                    case _languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].inputs.south:
                        currentRoom = unlockDoor(currentRoom, hasKey);
                        break;
                    default:
                        console.error(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].messages.badCommand);
                        break;
                }
                break;
            case "B":
                switch (command) {
                    case _languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].inputs.west:
                        currentRoom = printRoomADescription();
                        break;
                    case _languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].inputs.takeKey:
                        hasKey = grabKey(hasKey);
                        break;
                    default:
                        console.error(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].messages.badCommand);
                        break;
                }
                break;
            case "C":
                switch (command) {
                    case _languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].inputs.north:
                        currentRoom = printRoomADescription();
                        break;
                    case _languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].inputs.east:
                        currentRoom = checkWindow(windowOpen, currentRoom);
                        break;
                    case _languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].inputs.openWindow:
                        windowOpen = openWindow(windowOpen);
                        break;
                    default:
                        console.error(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].messages.badCommand);
                        break;
                }
                break;
        }
    }
    console.info(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.winText);
    console.info(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].messages.congratulations + playerName + "!");
}
/**
 * gets a list of languages that the program supports
 *
 * @returns a string containing the language selection prompts
 */
function listLanguages() {
    var languageList = "";
    for (var _i = 0, languages_1 = _languages__WEBPACK_IMPORTED_MODULE_0__.languages; _i < languages_1.length; _i++) {
        var x = languages_1[_i];
        console.log(x.messages.getLanguage);
        languageList += x.messages.getLanguage + "\n";
    }
    return languageList;
}
/**
 * gets the language that the user wants the game to run with
 */
function getLanguage() {
    var foundLang = false;
    while (!foundLang) {
        var desiredLanguage = prompt(listLanguages());
        while (desiredLanguage == null || desiredLanguage == "") {
            console.error(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].messages.invalidInput);
            desiredLanguage = prompt(listLanguages());
        }
        console.log(desiredLanguage);
        for (var i = 0; i < _languages__WEBPACK_IMPORTED_MODULE_0__.languages.length; i++) {
            if (desiredLanguage == _languages__WEBPACK_IMPORTED_MODULE_0__.languages[i].code) {
                foundLang = true;
                selectedLanguage = i;
            }
        }
        if (!foundLang) {
            for (var _i = 0, languages_2 = _languages__WEBPACK_IMPORTED_MODULE_0__.languages; _i < languages_2.length; _i++) {
                var x = languages_2[_i];
                console.log(x.messages.invalidInput);
            }
        }
    }
}
/**
 * Gets all commands from the user.
 *
 * @returns all commands that the user enters.
 */
function getCommand() {
    console.warn(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].messages.enterCommand);
    var command = prompt(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].messages.enterCommand);
    while (command == null || command == "") {
        console.error(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].messages.invalidInput);
        command = prompt(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].messages.enterCommand);
    }
    console.log(command);
    return command;
}
/**
 * Gets the user's name.
 *
 * @returns the name the user enters.
 */
function getName() {
    console.warn(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].messages.enterName);
    var playerName = prompt(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].messages.enterName);
    while (playerName == null || playerName == "") {
        console.error(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].messages.invalidInput);
        playerName = prompt(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].messages.enterName);
    }
    console.log(playerName);
    return playerName;
}
/**
 * Prints out the description for case A.
 *
 * @returns case A.
 */
function printRoomADescription() {
    console.info(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.inEmptyRoom);
    return "A";
}
/**
 * Prints out the description for case B.
 *
 * @param hasKey the boolean to check if the user has picked up the key or not.
 * @returns case B.
 */
function printRoomBDescription(hasKey) {
    console.info(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.selectedEastDoor);
    if (!hasKey) {
        console.info(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.onTable);
    }
    console.info(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.westDoor);
    return "B";
}
/**
 * changes the flag as to whether or not the player has the key.
 *
 * @param hasKey the boolean to check if the user has picked up the key or not.
 * @returns hasKey or true depending on whether the key is available to be grabbed.
 */
function grabKey(hasKey) {
    if (hasKey) {
        console.error(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.haveKey);
        return hasKey;
    }
    else {
        console.info(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.takeKeyFromTable);
        return true;
    }
}
/**
 * Unlocks the south door if the user has the key.
 *
 * @param hasKey the boolean to check if the user has picked up the key or not.
 * @param currentRoom the room that the user is currently in.
 * @returns hasKey or true depending on whether the key is available to be grabbed.
 */
function unlockDoor(currentRoom, hasKey) {
    var current = currentRoom;
    if (hasKey) {
        current = "C";
        console.info(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.unlockSouthDoor);
        console.info(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.inBrightRoom);
    }
    else {
        console.error(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.lockedSouthDoor);
    }
    return current;
}
/**
 * changes the flag as to whether or not the player has the key.
 *
 * @param windowOpen the boolean to check if the user has opened the window or not.
 * @returns windowOpen or true depending on whether the window is available to be opened.
 */
function openWindow(windowOpen) {
    if (windowOpen) {
        console.error(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.windowIsOpen);
        return windowOpen;
    }
    else {
        console.info(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.openTheWindow);
        return true;
    }
}
/**
 * changes the flag as to whether or not the player has the key.
 *
 * @param windowOpen the boolean to check if the user has opened the window or not.
 * @param currentRoom the room that the user is currently in.
 * @returns current room or exit depending on whether the user is able to leave the building or not.
 */
function checkWindow(windowOpen, currentRoom) {
    var current = currentRoom;
    if (windowOpen) {
        current = "Exit";
        console.info(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.stepOutOfWindow);
    }
    else {
        console.error(_languages__WEBPACK_IMPORTED_MODULE_0__.languages[selectedLanguage].rooms.windowIsClosed);
    }
    return current;
}

})();

main = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlEQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDakU7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xhbmd1YWdlcy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvTWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGhpcyBpbnRlcmZhY2UgaXMgZm9yIGFsbCBpbnB1dHMgYSB1c2VyIGNvdWxkIGdpdmUgaW4gdGhlIGdhbWVcclxuICovXHJcbmludGVyZmFjZSBJbnB1dHMge1xyXG4gIGVhc3Q6IHN0cmluZztcclxuICBub3J0aDogc3RyaW5nO1xyXG4gIHNvdXRoOiBzdHJpbmc7XHJcbiAgd2VzdDogc3RyaW5nO1xyXG4gIG9wZW5XaW5kb3c6IHN0cmluZztcclxuICB0YWtlS2V5OiBzdHJpbmc7XHJcbn1cclxuLyoqXHJcbiAqIFRoaXMgaW50ZXJmYWNlIGlzIGZvciBtZXNzYWdlcyB0aGF0IGFwcGVhciBpbiB0aGUgZ2FtZVxyXG4gKi9cclxuaW50ZXJmYWNlIE1lc3NhZ2VzIHtcclxuICBnZXRMYW5ndWFnZTogc3RyaW5nO1xyXG4gIGVudGVyQ29tbWFuZDogc3RyaW5nO1xyXG4gIGJhZENvbW1hbmQ6IHN0cmluZztcclxuICBlbnRlck5hbWU6IHN0cmluZztcclxuICBpbnZhbGlkSW5wdXQ6IHN0cmluZztcclxuICBoZWxsbzogc3RyaW5nO1xyXG4gIGNvbmdyYXR1bGF0aW9uczogc3RyaW5nO1xyXG59XHJcbi8qKlxyXG4gKiBUaGlzIGludGVyZmFjZSBpcyBmb3IgYWxsIHBvc3NpYmxlIHJvb20gbWVzc2FnZXMgdGhhdCBtYXkgYXBwZWFyIGluIHRoZSBnYW1lXHJcbiAqL1xyXG5pbnRlcmZhY2UgUm9vbXMge1xyXG4gIGluQnVpbGRpbmc6IHN0cmluZztcclxuICB3aW5UZXh0OiBzdHJpbmc7XHJcbiAgb25UYWJsZTogc3RyaW5nO1xyXG4gIHdpbmRvd0lzT3Blbjogc3RyaW5nO1xyXG4gIHdpbmRvd0lzQ2xvc2VkOiBzdHJpbmc7XHJcbiAgd2VzdERvb3I6IHN0cmluZztcclxuICB3ZWxjb21lOiBzdHJpbmc7XHJcbiAgaGF2ZUtleTogc3RyaW5nO1xyXG4gIGluQnJpZ2h0Um9vbTogc3RyaW5nO1xyXG4gIGluRW1wdHlSb29tOiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWRFYXN0RG9vcjogc3RyaW5nO1xyXG4gIG9wZW5UaGVXaW5kb3c6IHN0cmluZztcclxuICBzdGVwT3V0T2ZXaW5kb3c6IHN0cmluZztcclxuICB0YWtlS2V5RnJvbVRhYmxlOiBzdHJpbmc7XHJcbiAgbG9ja2VkU291dGhEb29yOiBzdHJpbmc7XHJcbiAgdW5sb2NrU291dGhEb29yOiBzdHJpbmc7XHJcbn1cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIG1haW4gbGFuZ3VhZ2UgaW50ZXJmYWNlLlxyXG4gKiBUaGlzIGlzIHRoZSBvdXRsaW5lIGZvciBhbGwgbGFuZ3VhZ2VzLlxyXG4gKiBJZiB5b3Ugd2FudCB0byBhZGQgYSBuZXcgbGFuZ3VhZ2UsIGZvbGxvdyB0aGUgZ2l2ZW4gbGF5b3V0OlxyXG4gKiBsYW5ndWFnZSBjb2RlLCBpbnB1dHMsIG1lc3NhZ2VzLCBhbmQgcm9vbXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlIHtcclxuICAvKiogVGhlIGxhbmd1YWdlIGNvZGUgZnJvbSBJU08gNjM5LTEgKi9cclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgLyoqIFRoZSBzZWxlY3Rpb24gb2YgaW5wdXRzIHRoZSB1c2VyIG1heSBtYWtlIGluIHRoZSBnYW1lICovXHJcbiAgaW5wdXRzOiBJbnB1dHM7XHJcbiAgLyoqIFRoZSBzZWxlY3Rpb24gb2YgbWVzc2FnZXMgdGhhdCBtYXkgYXBwZWFyIGR1cmluZyB0aGUgZ2FtZSAqL1xyXG4gIG1lc3NhZ2VzOiBNZXNzYWdlcztcclxuICAvKiogVGhlIHNlbGVjdGlvbiBvZiByb29tIHNwZWNpZmljIG1lc3NhZ2VzIHRoYXQgYXBwZWFyIHRocm91Z2hvdXQgdGhlIGdhbWUgKi9cclxuICByb29tczogUm9vbXM7XHJcbn1cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIGxpc3Qgb2YgYWxsIGxhbmd1YWdlcyBpbiB0aGUgZ2FtZSB3aXRoIHRoZWlyIHRyYW5zbGF0aW9ucy5cclxuICogV2hlbiBhZGRpbmcgYSBuZXcgbGFuZ3VhZ2UsIGZvbGxvdyB0aGUgZ2l2ZW4gZm9ybWF0dGluZzogY29kZSwgdGhlbiBpbnB1dCBsaXN0LCB0aGVuIG1lc3NhZ2VzLCBhbmQgZmluYWxseSByb29tLlxyXG4gKiBBbGwgbmV3IGxhbmd1YWdlcyBzaG91bGQgYmUgYWRkZWQgYWZ0ZXIgdGhlIGxhc3QgbGFuZ3VhZ2UgaW4gdGhlIGZpbGUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VzOiBMYW5ndWFnZVtdID0gW1xyXG4gIC8qKlxyXG4gICAqIEVuZ2xpc2ggTGFuZ3VhZ2VcclxuICAgKi9cclxuICB7XHJcbiAgICBjb2RlOiBcIkVOXCIsXHJcbiAgICBpbnB1dHM6IHtcclxuICAgICAgZWFzdDogXCJlYXN0XCIsXHJcbiAgICAgIG5vcnRoOiBcIm5vcnRoXCIsXHJcbiAgICAgIHNvdXRoOiBcInNvdXRoXCIsXHJcbiAgICAgIHdlc3Q6IFwid2VzdFwiLFxyXG4gICAgICBvcGVuV2luZG93OiBcIm9wZW4gd2luZG93XCIsXHJcbiAgICAgIHRha2VLZXk6IFwidGFrZSBrZXlcIixcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlczoge1xyXG4gICAgICBnZXRMYW5ndWFnZTogXCJFbnRlciBFTiB0byBwbGF5IGluIEVuZ2xpc2guXCIsXHJcbiAgICAgIGVudGVyQ29tbWFuZDogXCJQbGVhc2UgZW50ZXIgYSBjb21tYW5kLlwiLFxyXG4gICAgICBiYWRDb21tYW5kOiBcIlVucmVjb2duaXplZCBjb21tYW5kLlwiLFxyXG4gICAgICBlbnRlck5hbWU6IFwiUGxlYXNlIGVudGVyIHlvdXIgbmFtZS5cIixcclxuICAgICAgaW52YWxpZElucHV0OiBcIkludmFsaWQgaW5wdXQuXCIsXHJcbiAgICAgIGhlbGxvOiBcIkhlbGxvXCIsXHJcbiAgICAgIGNvbmdyYXR1bGF0aW9uczogXCJDb25ncmF0dWxhdGlvbnMgXCIsXHJcbiAgICB9LFxyXG4gICAgcm9vbXM6IHtcclxuICAgICAgaW5CdWlsZGluZzogXCJZb3UgYXJlIGluIGEgYnVpbGRpbmcuIFlvdXIgZ29hbCBpcyB0byBleGl0IHRoaXMgYnVpbGRpbmcuXCIsXHJcbiAgICAgIHdpblRleHQ6IFwiWW91IGhhdmUgZXhpdGVkIHRoZSBidWlsZGluZy4gWW91IHdpbiFcIixcclxuICAgICAgb25UYWJsZTogXCJPbiB0aGUgdGFibGUgdGhlcmUgaXMgYSBrZXkuXCIsXHJcbiAgICAgIHdpbmRvd0lzT3BlbjogXCJUaGUgd2luZG93IGlzIGFscmVhZHkgb3Blbi5cIixcclxuICAgICAgd2luZG93SXNDbG9zZWQ6IFwiVGhlIHdpbmRvdyBpcyBjbG9zZWQuXCIsXHJcbiAgICAgIHdlc3REb29yOiBcIlRoZXJlIGlzIGEgZG9vciBvbiB0aGUgd2VzdCB3YWxsIG9mIHRoaXMgcm9vbS5cIixcclxuICAgICAgd2VsY29tZTpcclxuICAgICAgICBcIldlbGNvbWUgdG8gdGhlIHRleHQgYWR2ZW50dXJlISBPcGVuIHlvdXIgYnJvd3NlcidzIGRldmVsb3BlciBjb25zb2xlIHRvIHBsYXkuXCIsXHJcbiAgICAgIGhhdmVLZXk6IFwiWW91IGFscmVhZHkgaGF2ZSB0aGUga2V5LlwiLFxyXG4gICAgICBpbkJyaWdodFJvb206XHJcbiAgICAgICAgXCJZb3UgYXJlIGluIGEgYnJpZ2h0IHJvb20uIFRoZXJlIGlzIGEgZG9vciBvbiB0aGUgbm9ydGggd2FsbCBvZiB0aGlzIHJvb20gYW5kIGEgd2luZG93IG9uIHRoZSBlYXN0IHdhbGwuXCIsXHJcbiAgICAgIGluRW1wdHlSb29tOlxyXG4gICAgICAgIFwiWW91IGFyZSBpbiBhbiBlbXB0eSByb29tLiBUaGVyZSBhcmUgZG9vcnMgb24gdGhlIHNvdXRoIGFuZCBlYXN0IHdhbGxzIG9mIHRoaXMgcm9vbS5cIixcclxuICAgICAgc2VsZWN0ZWRFYXN0RG9vcjpcclxuICAgICAgICBcIllvdSBnbyB0aHJvdWdoIHRoZSBlYXN0IGRvb3IuIFlvdSBhcmUgaW4gYSByb29tIHdpdGggYSB0YWJsZS5cIixcclxuICAgICAgb3BlblRoZVdpbmRvdzogXCJZb3Ugb3BlbiB0aGUgd2luZG93LlwiLFxyXG4gICAgICBzdGVwT3V0T2ZXaW5kb3c6IFwiWW91IHN0ZXAgb3V0IGZyb20gdGhlIG9wZW4gd2luZG93LlwiLFxyXG4gICAgICB0YWtlS2V5RnJvbVRhYmxlOiBcIllvdSB0YWtlIHRoZSBrZXkgZnJvbSB0aGUgdGFibGUuXCIsXHJcbiAgICAgIGxvY2tlZFNvdXRoRG9vcjogXCJZb3UgdHJ5IHRvIG9wZW4gdGhlIHNvdXRoIGRvb3IsIGJ1dCBpdCBpcyBsb2NrZWQuXCIsXHJcbiAgICAgIHVubG9ja1NvdXRoRG9vcjpcclxuICAgICAgICBcIllvdSB1bmxvY2sgdGhlIHNvdXRoIGRvb3Igd2l0aCB0aGUga2V5IGFuZCBnbyB0aHJvdWdoIHRoZSBkb29yLlwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEluZG9uZXNpYW4gTGFuZ3VhZ2VcclxuICAgKi9cclxuICB7XHJcbiAgICBjb2RlOiBcIklEXCIsXHJcbiAgICBpbnB1dHM6IHtcclxuICAgICAgZWFzdDogXCJ0aW11clwiLFxyXG4gICAgICBub3J0aDogXCJ1dGFyYVwiLFxyXG4gICAgICBzb3V0aDogXCJzZWxhdGFuXCIsXHJcbiAgICAgIHdlc3Q6IFwiYmFyYXRcIixcclxuICAgICAgb3BlbldpbmRvdzogXCJidWthIGplbmRlbGFcIixcclxuICAgICAgdGFrZUtleTogXCJhbWJpbCBrdW5jaVwiLFxyXG4gICAgfSxcclxuICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgIGdldExhbmd1YWdlOiBcIk1hc3Vra2FuIElEIHVudHVrIGJlcm1haW4gZGFsYW0gQmFoYXNhIEluZG9uZXNpYS5cIixcclxuICAgICAgZW50ZXJDb21tYW5kOiBcIlNpbGFoa2FuIG1hc3Vra2FuIHBlcmludGFoLlwiLFxyXG4gICAgICBiYWRDb21tYW5kOiBcIlBlcmludGFoIHRpZGFrIGRpa2VuYWwuXCIsXHJcbiAgICAgIGVudGVyTmFtZTogXCJTaWxhaGthbiBtYXN1a2thbiBuYW1hbXUuXCIsXHJcbiAgICAgIGludmFsaWRJbnB1dDogXCJNYXN1a2thbiBhbmRhIHRpZGFrIHZhbGlkLlwiLFxyXG4gICAgICBoZWxsbzogXCJIYWxvXCIsXHJcbiAgICAgIGNvbmdyYXR1bGF0aW9uczogXCJTZWxhbWF0IGJlcmJhaGFnaWEgXCIsXHJcbiAgICB9LFxyXG4gICAgcm9vbXM6IHtcclxuICAgICAgaW5CdWlsZGluZzpcclxuICAgICAgICBcIkFuZGEgYmVyYWRhIGRpIHNlYnVhaCBnZWR1bmcuIFR1anVhbiBhbmRhIGFkYWxhaCBrZWx1YXIgZGFyaSBnZWR1bmcgaW5pLlwiLFxyXG4gICAgICB3aW5UZXh0OiBcIkFuZGEgdGVsYWgga2VsdWFyIGRhcmkgZ2VkdW5nIGluaS4gU2VsYW1hdCwga2FtdSBtZW5hbmchXCIsXHJcbiAgICAgIG9uVGFibGU6IFwiRGkgYXRhcyBtZWphIGFkYSBrdW5jaS5cIixcclxuICAgICAgd2luZG93SXNPcGVuOiBcIkplbmRlbGEgaXR1IHN1ZGFoIHRlcmJ1a2EuXCIsXHJcbiAgICAgIHdpbmRvd0lzQ2xvc2VkOiBcIkplbmRlbGEgaXR1IHNhYXQgaW5pIHRlcnR1dHVwLlwiLFxyXG4gICAgICB3ZXN0RG9vcjogXCJEaSBkaW5kaW5nIGJhcmF0IHJ1YW5nYW4gaW5pIGFkYSBzZWJ1YWggcGludHUuXCIsXHJcbiAgICAgIHdlbGNvbWU6XHJcbiAgICAgICAgXCJTZWxhbWF0IGRhdGFuZyBkaSBwZXJ0dWFsYW5nYW4gdGVrcyEgQnVrYSBrb25zb2wgZGV2ZWxvcGVyIGRpIGJyb3dzZXIgYW5kYSB1bnR1ayBiZXJtYWluLlwiLFxyXG4gICAgICBoYXZlS2V5OiBcIkFuZGEgc3VkYWggbWVtaWxpa2kga3VuY2lueWEuXCIsXHJcbiAgICAgIGluQnJpZ2h0Um9vbTpcclxuICAgICAgICBcIkFuZGEgYmVyYWRhIGRpIGRhbGFtIHJ1YW5nYW4geWFuZyB0ZXJhbmcuIERpIGRpbmRpbmcgdXRhcmEgcnVhbmdhbiBpbmkgYWRhIHBpbnR1LCBkYW4gZGkgZGluZGluZyB0aW11ciBydWFuZ2FuIGluaSBhZGEgamVuZGVsYS5cIixcclxuICAgICAgaW5FbXB0eVJvb206XHJcbiAgICAgICAgXCJBbmRhIGJlcmFkYSBkaSBydWFuZ2FuIGtvc29uZy4gQWRhIHBpbnR1IGRpIGRpbmRpbmcgc2VsYXRhbiBkYW4gZGluZGluZyB0aW11ciBkYWxhbSBydWFuZ2FuIGluaS5cIixcclxuICAgICAgc2VsZWN0ZWRFYXN0RG9vcjpcclxuICAgICAgICBcIkFuZGEgbWFzdWsgbWVsYWx1aSBwaW50dSB0aW11ci4gQW5kYSBiZXJhZGEgZGkgc2VidWFoIHJ1YW5nYW4gZGVuZ2FuIHNlYnVhaCBtZWphLlwiLFxyXG4gICAgICBvcGVuVGhlV2luZG93OiBcIkFuZGEgbWVtYnVrYSBqZW5kZWxhIGl0dS5cIixcclxuICAgICAgc3RlcE91dE9mV2luZG93OiBcIkFuZGEgbWVsYW5na2FoIGtlbHVhciBkYXJpIGplbmRlbGEgeWFuZyB0ZXJidWthLlwiLFxyXG4gICAgICB0YWtlS2V5RnJvbVRhYmxlOiBcIkFuZGEgbWVuZ2FtYmlsIGt1bmNpIGRhcmkgYXRhcyBtZWphLlwiLFxyXG4gICAgICBsb2NrZWRTb3V0aERvb3I6XHJcbiAgICAgICAgXCJBbmRhIG1lbmNvYmEgbWVtYnVrYSBwaW50dSBzZWxhdGFuLCB0YXBpIHBpbnR1IGl0dSB0ZXJrdW5jaS5cIixcclxuICAgICAgdW5sb2NrU291dGhEb29yOlxyXG4gICAgICAgIFwiQW5kYSBtZW1idWthIGt1bmNpIHBpbnR1IHNlbGF0YW4gZGFuIGphbGFuIG1lbGV3YXRpIHBpbnR1IHRlcnNlYnV0LlwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEphcGFuZXNlIExhbmd1YWdlXHJcbiAgICovXHJcbiAge1xyXG4gICAgY29kZTogXCJKUFwiLFxyXG4gICAgaW5wdXRzOiB7XHJcbiAgICAgIGVhc3Q6IFwi44Gy44GM44GXXCIsXHJcbiAgICAgIG5vcnRoOiBcIuOBjeOBn1wiLFxyXG4gICAgICBzb3V0aDogXCLjgb/jgarjgb9cIixcclxuICAgICAgd2VzdDogXCLjgavjgZdcIixcclxuICAgICAgb3BlbldpbmRvdzogXCLjgb7jganjgpLjgYLjgZHjgotcIixcclxuICAgICAgdGFrZUtleTogXCLjgq3jg7zjgpLjgajjgotcIixcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlczoge1xyXG4gICAgICBnZXRMYW5ndWFnZTogXCLjgIxKUOOAjeOCkuWFpeOCjOOBpuaXpeacrOiqnuOBp+mBiuOBtuOAglwiLFxyXG4gICAgICBlbnRlckNvbW1hbmQ6IFwi44Kz44Oe44Oz44OJ44KS5YWl44KM44Gm44GP44Gg44GV44GE44CCXCIsXHJcbiAgICAgIGJhZENvbW1hbmQ6IFwi6KqN6K2Y5LiN6IO944Gq44Kz44Oe44Oz44OJ44CCXCIsXHJcbiAgICAgIGVudGVyTmFtZTogXCLlkI3liY3jgpLlhaXjgozjgabjgY/jgaDjgZXjgYTjgIJcIixcclxuICAgICAgaW52YWxpZElucHV0OiBcIuS4jeato+OBquWFpeWKm+OAglwiLFxyXG4gICAgICBoZWxsbzogXCLjgZPjgpPjgavjgaHjga9cIixcclxuICAgICAgY29uZ3JhdHVsYXRpb25zOiBcIuOBiuOCgeOBp+OBqOOBhiBcIixcclxuICAgIH0sXHJcbiAgICByb29tczoge1xyXG4gICAgICBpbkJ1aWxkaW5nOiBcIuW7uueJqeOBq+OBhOOCi+OAguOCtOODvOODq+OBr+OAjOWHuuOCi+OAjeOAglwiLFxyXG4gICAgICB3aW5UZXh0OiBcIuW7uueJqeOBi+OCieWHuuOBn++8gVlPVeOAgFdJTu+8gVwiLFxyXG4gICAgICBvblRhYmxlOiBcIuODhuODvOODluODq+OBruS4iuOBq+mNteOBjOOBguOCi+OAglwiLFxyXG4gICAgICB3aW5kb3dJc09wZW46IFwi56qT44Gv44GZ44Gn44Gr6ZaL44GR44Gm44GE44KL44CCXCIsXHJcbiAgICAgIHdpbmRvd0lzQ2xvc2VkOiBcIueqk+OBr+mWieOCgeOBpuOBhOOCi+OAglwiLFxyXG4gICAgICB3ZXN0RG9vcjogXCLopb/jgavjg4njgqLjgYzjgYLjgovjgIJcIixcclxuICAgICAgd2VsY29tZTpcclxuICAgICAgICBcIuODhuOCreOCueODiOOCouODieODmeODs+ODgeODo+ODvOOBuOOCiOOBhuOBk+OBne+8geODluODqeOCpuOCtuOBruOCs+ODs+OCveODvOODq+OBp+mBiuOCk+OBp+OBj+OBoOOBleOBhOOAglwiLFxyXG4gICAgICBoYXZlS2V5OiBcIuOBmeOBp+OBq+OCreODvOOCkuaJi+OBq+WFpeOCjOOBn+OAglwiLFxyXG4gICAgICBpbkJyaWdodFJvb206IFwi5piO44KL44GE6YOo5bGL44Gr44GE44KL44CC5YyX44Gr44OJ44Ki44GM44GC44KL44CC5p2x44Gr56qT44GM44GC44KL44CCXCIsXHJcbiAgICAgIGluRW1wdHlSb29tOiBcIuepuuWupOOBq+OBhOOCi+OAguWNl+OBq+ODieOCouOBjOOBguOCi+OAguadseOBq+ODieOCouOBjOOBguOCi+OAglwiLFxyXG4gICAgICBzZWxlY3RlZEVhc3REb29yOiBcIuadseOBruODieOCouOCkumAmuOBpuODhuODvOODluODq+OBjOOBguOCi+mDqOWxi+OBq+OBhOOCi+OAglwiLFxyXG4gICAgICBvcGVuVGhlV2luZG93OiBcIueqk+OCkumWi+OBkeOCi+OAglwiLFxyXG4gICAgICBzdGVwT3V0T2ZXaW5kb3c6IFwi6ZaL44GR44Gf56qT44GL44KJ6LiP44KA44CCXCIsXHJcbiAgICAgIHRha2VLZXlGcm9tVGFibGU6IFwi44OG44O844OW44Or44GL44KJ44Kt44O844KS44Go44KLXCIsXHJcbiAgICAgIGxvY2tlZFNvdXRoRG9vcjogXCLljZfjga7jg4njgqLjgpLplovjgZHjgabjgb/jgZ/jgZHjganpjbXjgYzjgYvjgYvjgaPjgabjgYTjgZ/jgIJcIixcclxuICAgICAgdW5sb2NrU291dGhEb29yOiBcIuWNl+OBruODieOCouOCkuOCreODvOOBp+OBi+OBkeOBpuihjOOBo+OBn+OAglwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEtsaW5nb24gTGFuZ3VhZ2VcclxuICAgKi9cclxuICB7XHJcbiAgICBjb2RlOiBcIlRMSFwiLFxyXG4gICAgaW5wdXRzOiB7XHJcbiAgICAgIGVhc3Q6IFwiSHV5J2JlJ1wiLFxyXG4gICAgICBub3J0aDogXCJ0SXFcIixcclxuICAgICAgc291dGg6IFwiY2hhJ1wiLFxyXG4gICAgICB3ZXN0OiBcImdodW5nXCIsXHJcbiAgICAgIG9wZW5XaW5kb3c6IFwiUW8nXCIsXHJcbiAgICAgIHRha2VLZXk6IFwiUW9EXCIsXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZXM6IHtcclxuICAgICAgZ2V0TGFuZ3VhZ2U6IFwicUliIFRMSCB2SXRsaHV0bGguXCIsXHJcbiAgICAgIGVudGVyQ29tbWFuZDogXCJnaHUndmFtIHZJdGEncHUnICdlJyB2SXBhckhhJy5cIixcclxuICAgICAgYmFkQ29tbWFuZDogXCJ2bycgaklIIVwiLFxyXG4gICAgICBlbnRlck5hbWU6IFwibmdJbW1vSCB2SXRhJ3B1Jy5cIixcclxuICAgICAgaW52YWxpZElucHV0OiBcInFvJyB5SXF1diFcIixcclxuICAgICAgaGVsbG86IFwibnVxbmVIXCIsXHJcbiAgICAgIGNvbmdyYXR1bGF0aW9uczogXCJxb1NcIixcclxuICAgIH0sXHJcbiAgICByb29tczoge1xyXG4gICAgICBpbkJ1aWxkaW5nOiBcInFhU3B1J0RJJyB2SWdob1MuIG5nSXEgSGVIIHZJbGVnaC5cIixcclxuICAgICAgd2luVGV4dDogXCJxYVNwdSdESScgdklsSWdoLiBxb1MhXCIsXHJcbiAgICAgIG9uVGFibGU6IFwicWFTcHUnREknICdlJyBsb1NsdSdjaHVnaCB2SXRsaHV0bGguXCIsXHJcbiAgICAgIHdpbmRvd0lzT3BlbjogXCJRbydjaHVxIGxvJ1wiLFxyXG4gICAgICB3aW5kb3dJc0Nsb3NlZDogXCJRbycgbG9TLlwiLFxyXG4gICAgICB3ZXN0RG9vcjogXCJxYVNwdSdEICdvcCBIbydEb1MgbmVILlwiLFxyXG4gICAgICB3ZWxjb21lOlxyXG4gICAgICAgIFwiY2hvcW1lSCAnZWogdkl0bGh1dGxoISB2SWxlZ2htZXlEYXEgSG92IGxlbmcsIHBlJ3ZJbCBESXBEYXEgZ2h1J3ZldGxoLlwiLFxyXG4gICAgICBoYXZlS2V5OiBcIlFvRGNodSd3SScgdGxoSW5nYW4gdkl0bGh1dGxoLlwiLFxyXG4gICAgICBpbkJyaWdodFJvb206XHJcbiAgICAgICAgXCJnaGFwIHZJbG8nLiBxYVNwdSdEICdvcCB0SXF3SScgJ2UnIEhvUyBqZSBuZUggJ2VqICdlU3FhJyBxZXQuXCIsXHJcbiAgICAgIGluRW1wdHlSb29tOiBcInBlZ2htZXkgdklsbycuIHFhU3B1J0QgJ29wIGNoYSd3SScgJ2VqIHRJcURhaiBxZXQuXCIsXHJcbiAgICAgIHNlbGVjdGVkRWFzdERvb3I6IFwiSHV5J2JlJ3dJJyB2SWxJZ2guIHFhU3B1J0QgJ2UnIGxvU2x1J2NodWdoICdlJ1wiLFxyXG4gICAgICBvcGVuVGhlV2luZG93OiBcIlFvJ2NodScuXCIsXHJcbiAgICAgIHN0ZXBPdXRPZldpbmRvdzogXCJRbyd3SScgbGF0bGggdklsSWouXCIsXHJcbiAgICAgIHRha2VLZXlGcm9tVGFibGU6IFwicWFTcHUnRCAnZScgbG9TbHUnY2h1Z2ggUW9EIHZJdGxodXRsaC5cIixcclxuICAgICAgbG9ja2VkU291dGhEb29yOiBcImNoYSd3SScgdkl0dSdsYUhiZScuXCIsXHJcbiAgICAgIHVubG9ja1NvdXRoRG9vcjogXCJRb0RjaHUnd0knIGNoYSd3SScgdkl0dSdsdSdwdScgJ2VqIHZJbElnaC5cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBRdWVueWEgTGFuZ3VhZ2VcclxuICAgKi9cclxuICB7XHJcbiAgICBjb2RlOiBcIlFZVVwiLFxyXG4gICAgaW5wdXRzOiB7XHJcbiAgICAgIGVhc3Q6IFwibGVyeWFcIixcclxuICAgICAgbm9ydGg6IFwidGVsdGFcIixcclxuICAgICAgc291dGg6IFwibsO6bWVueWFcIixcclxuICAgICAgd2VzdDogXCJoeWFyeWFcIixcclxuICAgICAgb3BlbldpbmRvdzogXCJow6FyYWx5YVwiLFxyXG4gICAgICB0YWtlS2V5OiBcImhsYXLDq1wiLFxyXG4gICAgfSxcclxuICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgIGdldExhbmd1YWdlOiBcIlFZVS12YWx5YSBhdGFyaW55ZW4gUXVlbnlhbmVuIGzDoXLDqy5cIixcclxuICAgICAgZW50ZXJDb21tYW5kOiBcIkF1dGEgaSBsw7Ntw6ssIGFudG9sbGU/XCIsXHJcbiAgICAgIGJhZENvbW1hbmQ6IFwiTsOhIHF1ZXTDqyFcIixcclxuICAgICAgZW50ZXJOYW1lOiBcIkNlbnV2YWwsIG1lbGxvbj9cIixcclxuICAgICAgaW52YWxpZElucHV0OiBcIkV0ecOrYSBhcj9cIixcclxuICAgICAgaGVsbG86IFwiRWxlbiBzw61sYSBsw7ptZW5uJyBvbWVudGllbHZvXCIsXHJcbiAgICAgIGNvbmdyYXR1bGF0aW9uczogXCJWYW5pbWVsZGFcIixcclxuICAgIH0sXHJcbiAgICByb29tczoge1xyXG4gICAgICBpbkJ1aWxkaW5nOiBcIk1hbmVueW8gbmF1dmEsIGFyIG1hbCB0w6FyZWx5YSBjaXJ5YW1vXCIsXHJcbiAgICAgIHdpblRleHQ6IFwiVMOhcmVseWF2YSBjaXJ5YSBuw6FuYSBhciB2YW5pbWVsZGEhXCIsXHJcbiAgICAgIG9uVGFibGU6IFwiTGFtcMOrIHTDoXJpw6sgYW50YWluYSBobGFyw6tcIixcclxuICAgICAgd2luZG93SXNPcGVuOiBcIkjDoXJhbHnDqyB0ZWx0YVwiLFxyXG4gICAgICB3aW5kb3dJc0Nsb3NlZDogXCJIw6FyYWx5w6sgbMOhXCIsXHJcbiAgICAgIHdlc3REb29yOiBcIkNpcnlhdmEgaHlhcnlhdmEgZsOtcmltYSBuw7ptZW50YVwiLFxyXG4gICAgICB3ZWxjb21lOlxyXG4gICAgICAgIFwiTmFpIHRpcnV2YW50ZXMgaSBow6FyYXIgbWFoYWxtYXNzZW4hIMOBdmEgcXVldHRhciBpIGxhbWLDqyBlbnlhbGllblwiLFxyXG4gICAgICBoYXZlS2V5OiBcIkhsYXLDq3ZhIG5hdXZhbm5hXCIsXHJcbiAgICAgIGluQnJpZ2h0Um9vbTpcclxuICAgICAgICBcIk1hbmVueW8gbWlseWEsIGFyIG1hbCB0ZWx0YXZhIHRlbHRhIHR1bHlhIGFyIGh5YXJ5YXZhIGhlbGthXCIsXHJcbiAgICAgIGluRW1wdHlSb29tOiBcIk1hbmVueW8gdXTDumxpw6ssIGFyIG1hbCB0ZWx0YSBuw7ptZW55YXZhIGbDrXJpbWFcIixcclxuICAgICAgc2VsZWN0ZWRFYXN0RG9vcjogXCJMZXJ5YXZhIG5hdXZhbm5hLiBNYWxhbXDDqyB0w6FyacOrIGFudGFpbmFcIixcclxuICAgICAgb3BlblRoZVdpbmRvdzogXCJIw6FyYWx5w6sgdMOhcmnDq1wiLFxyXG4gICAgICBzdGVwT3V0T2ZXaW5kb3c6IFwiSMOhcmFsecOrIGxhdHRhIGhsYXLDq3ZhXCIsXHJcbiAgICAgIHRha2VLZXlGcm9tVGFibGU6IFwiSGxhcsOrdmEgbGFtcMOrIGFudGFpbmEgdMOhcmnDq3ZhIG5hdXZhbm5hXCIsXHJcbiAgICAgIGxvY2tlZFNvdXRoRG9vcjogXCJOw7ptZW55YXZhIHRhcnV2YSwgYXIgbWFsIHNhbcOrXCIsXHJcbiAgICAgIHVubG9ja1NvdXRoRG9vcjogXCJIbGFyw6t2YSBuw7ptZW55YXZhIHRhcnV2YW5uYSwgYXIgbWFsIGNpcnlhdmEgbmF1dmFubmFcIixcclxuICAgIH0sXHJcbiAgfSxcclxuXTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBBIFJvb20gdmFsdWUgaXMgZXhhY3RseSBvbmUgb2YgdGhlc2UgZm91ciBzdHJpbmdzLlxyXG4vLyBJdCBpcyBpbXBvc3NpYmxlIGZvciBhIFJvb20gdmFyaWFibGUgdG8gY29udGFpbiBhbnkgb3RoZXIgc3RyaW5nLlxyXG50eXBlIFJvb20gPSBcIkFcIiB8IFwiQlwiIHwgXCJDXCIgfCBcIkV4aXRcIjtcclxuaW1wb3J0IHsgbGFuZ3VhZ2VzIH0gZnJvbSBcIi4vbGFuZ3VhZ2VzXCI7XHJcbmxldCBzZWxlY3RlZExhbmd1YWdlID0gMDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgbWFpbiBib2R5IGZvciB0aGUgZ2FtZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBsYXkoKTogdm9pZCB7XHJcbiAgZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgY29uc29sZS5pbmZvKGxhbmd1YWdlc1tzZWxlY3RlZExhbmd1YWdlXS5yb29tcy53ZWxjb21lKTtcclxuXHJcbiAgY29uc29sZS53YXJuKGxhbmd1YWdlc1tzZWxlY3RlZExhbmd1YWdlXS5tZXNzYWdlcy5lbnRlck5hbWUpO1xyXG4gIGNvbnN0IHBsYXllck5hbWUgPSBnZXROYW1lKCk7XHJcblxyXG4gIGNvbnNvbGUuaW5mbyhsYW5ndWFnZXNbc2VsZWN0ZWRMYW5ndWFnZV0ubWVzc2FnZXMuaGVsbG8gKyBwbGF5ZXJOYW1lICsgXCIuXCIpO1xyXG5cclxuICBjb25zb2xlLmluZm8obGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLnJvb21zLmluQnVpbGRpbmcpO1xyXG4gIGNvbnNvbGUuaW5mbyhsYW5ndWFnZXNbc2VsZWN0ZWRMYW5ndWFnZV0ucm9vbXMuaW5FbXB0eVJvb20pO1xyXG5cclxuICBsZXQgY3VycmVudFJvb206IFJvb20gPSBcIkFcIjtcclxuICBsZXQgaGFzS2V5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgbGV0IHdpbmRvd09wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgd2hpbGUgKGN1cnJlbnRSb29tICE9IFwiRXhpdFwiKSB7XHJcbiAgICBjb25zdCBjb21tYW5kOiBzdHJpbmcgfCBudWxsID0gZ2V0Q29tbWFuZCgpO1xyXG5cclxuICAgIHN3aXRjaCAoY3VycmVudFJvb20pIHtcclxuICAgICAgY2FzZSBcIkFcIjpcclxuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcclxuICAgICAgICAgIGNhc2UgbGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLmlucHV0cy5lYXN0OlxyXG4gICAgICAgICAgICBjdXJyZW50Um9vbSA9IHByaW50Um9vbUJEZXNjcmlwdGlvbihoYXNLZXkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgbGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLmlucHV0cy5zb3V0aDpcclxuICAgICAgICAgICAgY3VycmVudFJvb20gPSB1bmxvY2tEb29yKGN1cnJlbnRSb29tLCBoYXNLZXkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLm1lc3NhZ2VzLmJhZENvbW1hbmQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiQlwiOlxyXG4gICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xyXG4gICAgICAgICAgY2FzZSBsYW5ndWFnZXNbc2VsZWN0ZWRMYW5ndWFnZV0uaW5wdXRzLndlc3Q6XHJcbiAgICAgICAgICAgIGN1cnJlbnRSb29tID0gcHJpbnRSb29tQURlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBsYW5ndWFnZXNbc2VsZWN0ZWRMYW5ndWFnZV0uaW5wdXRzLnRha2VLZXk6XHJcbiAgICAgICAgICAgIGhhc0tleSA9IGdyYWJLZXkoaGFzS2V5KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGxhbmd1YWdlc1tzZWxlY3RlZExhbmd1YWdlXS5tZXNzYWdlcy5iYWRDb21tYW5kKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcIkNcIjpcclxuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcclxuICAgICAgICAgIGNhc2UgbGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLmlucHV0cy5ub3J0aDpcclxuICAgICAgICAgICAgY3VycmVudFJvb20gPSBwcmludFJvb21BRGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIGxhbmd1YWdlc1tzZWxlY3RlZExhbmd1YWdlXS5pbnB1dHMuZWFzdDpcclxuICAgICAgICAgICAgY3VycmVudFJvb20gPSBjaGVja1dpbmRvdyh3aW5kb3dPcGVuLCBjdXJyZW50Um9vbSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBsYW5ndWFnZXNbc2VsZWN0ZWRMYW5ndWFnZV0uaW5wdXRzLm9wZW5XaW5kb3c6XHJcbiAgICAgICAgICAgIHdpbmRvd09wZW4gPSBvcGVuV2luZG93KHdpbmRvd09wZW4pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLm1lc3NhZ2VzLmJhZENvbW1hbmQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmluZm8obGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLnJvb21zLndpblRleHQpO1xyXG4gIGNvbnNvbGUuaW5mbyhcclxuICAgIGxhbmd1YWdlc1tzZWxlY3RlZExhbmd1YWdlXS5tZXNzYWdlcy5jb25ncmF0dWxhdGlvbnMgKyBwbGF5ZXJOYW1lICsgXCIhXCJcclxuICApO1xyXG59XHJcbi8qKlxyXG4gKiBnZXRzIGEgbGlzdCBvZiBsYW5ndWFnZXMgdGhhdCB0aGUgcHJvZ3JhbSBzdXBwb3J0c1xyXG4gKlxyXG4gKiBAcmV0dXJucyBhIHN0cmluZyBjb250YWluaW5nIHRoZSBsYW5ndWFnZSBzZWxlY3Rpb24gcHJvbXB0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RMYW5ndWFnZXMoKTogc3RyaW5nIHtcclxuICBsZXQgbGFuZ3VhZ2VMaXN0OiBzdHJpbmcgPSBcIlwiO1xyXG4gIGZvciAoY29uc3QgeCBvZiBsYW5ndWFnZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKHgubWVzc2FnZXMuZ2V0TGFuZ3VhZ2UpO1xyXG4gICAgbGFuZ3VhZ2VMaXN0ICs9IHgubWVzc2FnZXMuZ2V0TGFuZ3VhZ2UgKyBcIlxcblwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGxhbmd1YWdlTGlzdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIGdldHMgdGhlIGxhbmd1YWdlIHRoYXQgdGhlIHVzZXIgd2FudHMgdGhlIGdhbWUgdG8gcnVuIHdpdGhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5ndWFnZSgpOiB2b2lkIHtcclxuICBsZXQgZm91bmRMYW5nID0gZmFsc2U7XHJcbiAgd2hpbGUgKCFmb3VuZExhbmcpIHtcclxuICAgIGxldCBkZXNpcmVkTGFuZ3VhZ2U6IHN0cmluZyB8IG51bGwgPSBwcm9tcHQobGlzdExhbmd1YWdlcygpKTtcclxuICAgIHdoaWxlIChkZXNpcmVkTGFuZ3VhZ2UgPT0gbnVsbCB8fCBkZXNpcmVkTGFuZ3VhZ2UgPT0gXCJcIikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGxhbmd1YWdlc1tzZWxlY3RlZExhbmd1YWdlXS5tZXNzYWdlcy5pbnZhbGlkSW5wdXQpO1xyXG4gICAgICBkZXNpcmVkTGFuZ3VhZ2UgPSBwcm9tcHQobGlzdExhbmd1YWdlcygpKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGRlc2lyZWRMYW5ndWFnZSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYW5ndWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGRlc2lyZWRMYW5ndWFnZSA9PSBsYW5ndWFnZXNbaV0uY29kZSkge1xyXG4gICAgICAgIGZvdW5kTGFuZyA9IHRydWU7XHJcbiAgICAgICAgc2VsZWN0ZWRMYW5ndWFnZSA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWZvdW5kTGFuZykge1xyXG4gICAgICBmb3IgKGNvbnN0IHggb2YgbGFuZ3VhZ2VzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coeC5tZXNzYWdlcy5pbnZhbGlkSW5wdXQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0cyBhbGwgY29tbWFuZHMgZnJvbSB0aGUgdXNlci5cclxuICpcclxuICogQHJldHVybnMgYWxsIGNvbW1hbmRzIHRoYXQgdGhlIHVzZXIgZW50ZXJzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbW1hbmQoKTogc3RyaW5nIHtcclxuICBjb25zb2xlLndhcm4obGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLm1lc3NhZ2VzLmVudGVyQ29tbWFuZCk7XHJcbiAgbGV0IGNvbW1hbmQ6IHN0cmluZyB8IG51bGwgPSBwcm9tcHQoXHJcbiAgICBsYW5ndWFnZXNbc2VsZWN0ZWRMYW5ndWFnZV0ubWVzc2FnZXMuZW50ZXJDb21tYW5kXHJcbiAgKTtcclxuICB3aGlsZSAoY29tbWFuZCA9PSBudWxsIHx8IGNvbW1hbmQgPT0gXCJcIikge1xyXG4gICAgY29uc29sZS5lcnJvcihsYW5ndWFnZXNbc2VsZWN0ZWRMYW5ndWFnZV0ubWVzc2FnZXMuaW52YWxpZElucHV0KTtcclxuICAgIGNvbW1hbmQgPSBwcm9tcHQobGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLm1lc3NhZ2VzLmVudGVyQ29tbWFuZCk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKGNvbW1hbmQpO1xyXG4gIHJldHVybiBjb21tYW5kO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0cyB0aGUgdXNlcidzIG5hbWUuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHRoZSBuYW1lIHRoZSB1c2VyIGVudGVycy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKCk6IHN0cmluZyB7XHJcbiAgY29uc29sZS53YXJuKGxhbmd1YWdlc1tzZWxlY3RlZExhbmd1YWdlXS5tZXNzYWdlcy5lbnRlck5hbWUpO1xyXG4gIGxldCBwbGF5ZXJOYW1lOiBzdHJpbmcgfCBudWxsID0gcHJvbXB0KFxyXG4gICAgbGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLm1lc3NhZ2VzLmVudGVyTmFtZVxyXG4gICk7XHJcbiAgd2hpbGUgKHBsYXllck5hbWUgPT0gbnVsbCB8fCBwbGF5ZXJOYW1lID09IFwiXCIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IobGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLm1lc3NhZ2VzLmludmFsaWRJbnB1dCk7XHJcbiAgICBwbGF5ZXJOYW1lID0gcHJvbXB0KGxhbmd1YWdlc1tzZWxlY3RlZExhbmd1YWdlXS5tZXNzYWdlcy5lbnRlck5hbWUpO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhwbGF5ZXJOYW1lKTtcclxuICByZXR1cm4gcGxheWVyTmFtZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFByaW50cyBvdXQgdGhlIGRlc2NyaXB0aW9uIGZvciBjYXNlIEEuXHJcbiAqXHJcbiAqIEByZXR1cm5zIGNhc2UgQS5cclxuICovXHJcbmZ1bmN0aW9uIHByaW50Um9vbUFEZXNjcmlwdGlvbigpOiBSb29tIHtcclxuICBjb25zb2xlLmluZm8obGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLnJvb21zLmluRW1wdHlSb29tKTtcclxuICByZXR1cm4gXCJBXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcmludHMgb3V0IHRoZSBkZXNjcmlwdGlvbiBmb3IgY2FzZSBCLlxyXG4gKlxyXG4gKiBAcGFyYW0gaGFzS2V5IHRoZSBib29sZWFuIHRvIGNoZWNrIGlmIHRoZSB1c2VyIGhhcyBwaWNrZWQgdXAgdGhlIGtleSBvciBub3QuXHJcbiAqIEByZXR1cm5zIGNhc2UgQi5cclxuICovXHJcbmZ1bmN0aW9uIHByaW50Um9vbUJEZXNjcmlwdGlvbihoYXNLZXk6IGJvb2xlYW4pOiBSb29tIHtcclxuICBjb25zb2xlLmluZm8obGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLnJvb21zLnNlbGVjdGVkRWFzdERvb3IpO1xyXG4gIGlmICghaGFzS2V5KSB7XHJcbiAgICBjb25zb2xlLmluZm8obGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLnJvb21zLm9uVGFibGUpO1xyXG4gIH1cclxuICBjb25zb2xlLmluZm8obGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLnJvb21zLndlc3REb29yKTtcclxuXHJcbiAgcmV0dXJuIFwiQlwiO1xyXG59XHJcblxyXG4vKipcclxuICogY2hhbmdlcyB0aGUgZmxhZyBhcyB0byB3aGV0aGVyIG9yIG5vdCB0aGUgcGxheWVyIGhhcyB0aGUga2V5LlxyXG4gKlxyXG4gKiBAcGFyYW0gaGFzS2V5IHRoZSBib29sZWFuIHRvIGNoZWNrIGlmIHRoZSB1c2VyIGhhcyBwaWNrZWQgdXAgdGhlIGtleSBvciBub3QuXHJcbiAqIEByZXR1cm5zIGhhc0tleSBvciB0cnVlIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBrZXkgaXMgYXZhaWxhYmxlIHRvIGJlIGdyYWJiZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBncmFiS2V5KGhhc0tleTogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gIGlmIChoYXNLZXkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IobGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLnJvb21zLmhhdmVLZXkpO1xyXG4gICAgcmV0dXJuIGhhc0tleTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5pbmZvKGxhbmd1YWdlc1tzZWxlY3RlZExhbmd1YWdlXS5yb29tcy50YWtlS2V5RnJvbVRhYmxlKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVubG9ja3MgdGhlIHNvdXRoIGRvb3IgaWYgdGhlIHVzZXIgaGFzIHRoZSBrZXkuXHJcbiAqXHJcbiAqIEBwYXJhbSBoYXNLZXkgdGhlIGJvb2xlYW4gdG8gY2hlY2sgaWYgdGhlIHVzZXIgaGFzIHBpY2tlZCB1cCB0aGUga2V5IG9yIG5vdC5cclxuICogQHBhcmFtIGN1cnJlbnRSb29tIHRoZSByb29tIHRoYXQgdGhlIHVzZXIgaXMgY3VycmVudGx5IGluLlxyXG4gKiBAcmV0dXJucyBoYXNLZXkgb3IgdHJ1ZSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUga2V5IGlzIGF2YWlsYWJsZSB0byBiZSBncmFiYmVkLlxyXG4gKi9cclxuZnVuY3Rpb24gdW5sb2NrRG9vcihjdXJyZW50Um9vbTogUm9vbSwgaGFzS2V5OiBib29sZWFuKTogUm9vbSB7XHJcbiAgdHlwZSBDdXJyZW50Um9vbSA9IFwiQVwiIHwgXCJCXCIgfCBcIkNcIiB8IFwiRXhpdFwiO1xyXG4gIGxldCBjdXJyZW50OiBDdXJyZW50Um9vbSA9IGN1cnJlbnRSb29tO1xyXG4gIGlmIChoYXNLZXkpIHtcclxuICAgIGN1cnJlbnQgPSBcIkNcIjtcclxuICAgIGNvbnNvbGUuaW5mbyhsYW5ndWFnZXNbc2VsZWN0ZWRMYW5ndWFnZV0ucm9vbXMudW5sb2NrU291dGhEb29yKTtcclxuICAgIGNvbnNvbGUuaW5mbyhsYW5ndWFnZXNbc2VsZWN0ZWRMYW5ndWFnZV0ucm9vbXMuaW5CcmlnaHRSb29tKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihsYW5ndWFnZXNbc2VsZWN0ZWRMYW5ndWFnZV0ucm9vbXMubG9ja2VkU291dGhEb29yKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjdXJyZW50O1xyXG59XHJcblxyXG4vKipcclxuICogY2hhbmdlcyB0aGUgZmxhZyBhcyB0byB3aGV0aGVyIG9yIG5vdCB0aGUgcGxheWVyIGhhcyB0aGUga2V5LlxyXG4gKlxyXG4gKiBAcGFyYW0gd2luZG93T3BlbiB0aGUgYm9vbGVhbiB0byBjaGVjayBpZiB0aGUgdXNlciBoYXMgb3BlbmVkIHRoZSB3aW5kb3cgb3Igbm90LlxyXG4gKiBAcmV0dXJucyB3aW5kb3dPcGVuIG9yIHRydWUgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIHdpbmRvdyBpcyBhdmFpbGFibGUgdG8gYmUgb3BlbmVkLlxyXG4gKi9cclxuZnVuY3Rpb24gb3BlbldpbmRvdyh3aW5kb3dPcGVuOiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgaWYgKHdpbmRvd09wZW4pIHtcclxuICAgIGNvbnNvbGUuZXJyb3IobGFuZ3VhZ2VzW3NlbGVjdGVkTGFuZ3VhZ2VdLnJvb21zLndpbmRvd0lzT3Blbik7XHJcbiAgICByZXR1cm4gd2luZG93T3BlbjtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5pbmZvKGxhbmd1YWdlc1tzZWxlY3RlZExhbmd1YWdlXS5yb29tcy5vcGVuVGhlV2luZG93KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIGNoYW5nZXMgdGhlIGZsYWcgYXMgdG8gd2hldGhlciBvciBub3QgdGhlIHBsYXllciBoYXMgdGhlIGtleS5cclxuICpcclxuICogQHBhcmFtIHdpbmRvd09wZW4gdGhlIGJvb2xlYW4gdG8gY2hlY2sgaWYgdGhlIHVzZXIgaGFzIG9wZW5lZCB0aGUgd2luZG93IG9yIG5vdC5cclxuICogQHBhcmFtIGN1cnJlbnRSb29tIHRoZSByb29tIHRoYXQgdGhlIHVzZXIgaXMgY3VycmVudGx5IGluLlxyXG4gKiBAcmV0dXJucyBjdXJyZW50IHJvb20gb3IgZXhpdCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgdXNlciBpcyBhYmxlIHRvIGxlYXZlIHRoZSBidWlsZGluZyBvciBub3QuXHJcbiAqL1xyXG5mdW5jdGlvbiBjaGVja1dpbmRvdyh3aW5kb3dPcGVuOiBib29sZWFuLCBjdXJyZW50Um9vbTogUm9vbSk6IFJvb20ge1xyXG4gIHR5cGUgQ3VycmVudFJvb20gPSBcIkFcIiB8IFwiQlwiIHwgXCJDXCIgfCBcIkV4aXRcIjtcclxuICBsZXQgY3VycmVudDogQ3VycmVudFJvb20gPSBjdXJyZW50Um9vbTtcclxuICBpZiAod2luZG93T3Blbikge1xyXG4gICAgY3VycmVudCA9IFwiRXhpdFwiO1xyXG4gICAgY29uc29sZS5pbmZvKGxhbmd1YWdlc1tzZWxlY3RlZExhbmd1YWdlXS5yb29tcy5zdGVwT3V0T2ZXaW5kb3cpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGxhbmd1YWdlc1tzZWxlY3RlZExhbmd1YWdlXS5yb29tcy53aW5kb3dJc0Nsb3NlZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3VycmVudDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=