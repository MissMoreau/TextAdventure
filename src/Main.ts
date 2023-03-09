// A Room value is exactly one of these four strings.
// It is impossible for a Room variable to contain any other string.
type Room = "A" | "B" | "C" | "Exit";
import { languages } from "./languages";
let selectedLanguage = 0;

/**
 * The main body for the game
 */
export function play(): void {
  getLanguage();

  console.info(languages[selectedLanguage].rooms.welcome);

  console.warn(languages[selectedLanguage].messages.enterName);
  const playerName = getName();

  console.info(languages[selectedLanguage].messages.hello + playerName + ".");

  console.info(languages[selectedLanguage].rooms.inBuilding);
  console.info(languages[selectedLanguage].rooms.inEmptyRoom);

  let currentRoom: Room = "A";
  let hasKey: boolean = false;
  let windowOpen: boolean = false;

  while (currentRoom != "Exit") {
    const command: string | null = getCommand();

    switch (currentRoom) {
      case "A":
        switch (command) {
          case languages[selectedLanguage].inputs.east:
            currentRoom = printRoomBDescription(hasKey);
            break;
          case languages[selectedLanguage].inputs.south:
            currentRoom = unlockDoor(currentRoom, hasKey);
            break;
          default:
            console.error(languages[selectedLanguage].messages.badCommand);
            break;
        }
        break;

      case "B":
        switch (command) {
          case languages[selectedLanguage].inputs.west:
            currentRoom = printRoomADescription();
            break;
          case languages[selectedLanguage].inputs.takeKey:
            hasKey = grabKey(hasKey);
            break;
          default:
            console.error(languages[selectedLanguage].messages.badCommand);
            break;
        }
        break;

      case "C":
        switch (command) {
          case languages[selectedLanguage].inputs.north:
            currentRoom = printRoomADescription();
            break;
          case languages[selectedLanguage].inputs.east:
            currentRoom = checkWindow(windowOpen, currentRoom);
            break;
          case languages[selectedLanguage].inputs.openWindow:
            windowOpen = openWindow(windowOpen);
            break;
          default:
            console.error(languages[selectedLanguage].messages.badCommand);
            break;
        }
        break;
    }
  }

  console.info(languages[selectedLanguage].rooms.winText);
  console.info(
    languages[selectedLanguage].messages.congratulations + playerName + "!"
  );
}
/**
 * gets a list of languages that the program supports
 *
 * @returns a string containing the language selection prompts
 */
export function listLanguages(): string {
  let languageList: string = "";
  for (const x of languages) {
    console.log(x.messages.getLanguage);
    languageList += x.messages.getLanguage + "\n";
  }

  return languageList;
}

/**
 * gets the language that the user wants the game to run with
 */
export function getLanguage(): void {
  let foundLang = false;
  while (!foundLang) {
    let desiredLanguage: string | null = prompt(listLanguages());
    while (desiredLanguage == null || desiredLanguage == "") {
      console.error(languages[selectedLanguage].messages.invalidInput);
      desiredLanguage = prompt(listLanguages());
    }
    console.log(desiredLanguage);

    for (let i = 0; i < languages.length; i++) {
      if (desiredLanguage == languages[i].code) {
        foundLang = true;
        selectedLanguage = i;
      }
    }

    if (!foundLang) {
      for (const x of languages) {
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
export function getCommand(): string {
  console.warn(languages[selectedLanguage].messages.enterCommand);
  let command: string | null = prompt(
    languages[selectedLanguage].messages.enterCommand
  );
  while (command == null || command == "") {
    console.error(languages[selectedLanguage].messages.invalidInput);
    command = prompt(languages[selectedLanguage].messages.enterCommand);
  }
  console.log(command);
  return command;
}

/**
 * Gets the user's name.
 *
 * @returns the name the user enters.
 */
export function getName(): string {
  console.warn(languages[selectedLanguage].messages.enterName);
  let playerName: string | null = prompt(
    languages[selectedLanguage].messages.enterName
  );
  while (playerName == null || playerName == "") {
    console.error(languages[selectedLanguage].messages.invalidInput);
    playerName = prompt(languages[selectedLanguage].messages.enterName);
  }
  console.log(playerName);
  return playerName;
}

/**
 * Prints out the description for case A.
 *
 * @returns case A.
 */
function printRoomADescription(): Room {
  console.info(languages[selectedLanguage].rooms.inEmptyRoom);
  return "A";
}

/**
 * Prints out the description for case B.
 *
 * @param hasKey the boolean to check if the user has picked up the key or not.
 * @returns case B.
 */
function printRoomBDescription(hasKey: boolean): Room {
  console.info(languages[selectedLanguage].rooms.selectedEastDoor);
  if (!hasKey) {
    console.info(languages[selectedLanguage].rooms.onTable);
  }
  console.info(languages[selectedLanguage].rooms.westDoor);

  return "B";
}

/**
 * changes the flag as to whether or not the player has the key.
 *
 * @param hasKey the boolean to check if the user has picked up the key or not.
 * @returns hasKey or true depending on whether the key is available to be grabbed.
 */
function grabKey(hasKey: boolean): boolean {
  if (hasKey) {
    console.error(languages[selectedLanguage].rooms.haveKey);
    return hasKey;
  } else {
    console.info(languages[selectedLanguage].rooms.takeKeyFromTable);
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
function unlockDoor(currentRoom: Room, hasKey: boolean): Room {
  type CurrentRoom = "A" | "B" | "C" | "Exit";
  let current: CurrentRoom = currentRoom;
  if (hasKey) {
    current = "C";
    console.info(languages[selectedLanguage].rooms.unlockSouthDoor);
    console.info(languages[selectedLanguage].rooms.inBrightRoom);
  } else {
    console.error(languages[selectedLanguage].rooms.lockedSouthDoor);
  }

  return current;
}

/**
 * changes the flag as to whether or not the player has the key.
 *
 * @param windowOpen the boolean to check if the user has opened the window or not.
 * @returns windowOpen or true depending on whether the window is available to be opened.
 */
function openWindow(windowOpen: boolean): boolean {
  if (windowOpen) {
    console.error(languages[selectedLanguage].rooms.windowIsOpen);
    return windowOpen;
  } else {
    console.info(languages[selectedLanguage].rooms.openTheWindow);
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
function checkWindow(windowOpen: boolean, currentRoom: Room): Room {
  type CurrentRoom = "A" | "B" | "C" | "Exit";
  let current: CurrentRoom = currentRoom;
  if (windowOpen) {
    current = "Exit";
    console.info(languages[selectedLanguage].rooms.stepOutOfWindow);
  } else {
    console.error(languages[selectedLanguage].rooms.windowIsClosed);
  }

  return current;
}
