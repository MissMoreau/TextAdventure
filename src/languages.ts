/**
 * This interface is for all inputs a user could give in the game
 */
interface Inputs {
  east: string;
  north: string;
  south: string;
  west: string;
  openWindow: string;
  takeKey: string;
}
/**
 * This interface is for messages that appear in the game
 */
interface Messages {
  getLanguage: string;
  enterCommand: string;
  badCommand: string;
  enterName: string;
  invalidInput: string;
  hello: string;
  congratulations: string;
}
/**
 * This interface is for all possible room messages that may appear in the game
 */
interface Rooms {
  inBuilding: string;
  winText: string;
  onTable: string;
  windowIsOpen: string;
  windowIsClosed: string;
  westDoor: string;
  welcome: string;
  haveKey: string;
  inBrightRoom: string;
  inEmptyRoom: string;
  selectedEastDoor: string;
  openTheWindow: string;
  stepOutOfWindow: string;
  takeKeyFromTable: string;
  lockedSouthDoor: string;
  unlockSouthDoor: string;
}
/**
 * This is the main language interface.
 * This is the outline for all languages.
 * If you want to add a new language, follow the given layout:
 * language code, inputs, messages, and rooms.
 */
export interface Language {
  /** The language code from ISO 639-1 */
  code: string;
  /** The selection of inputs the user may make in the game */
  inputs: Inputs;
  /** The selection of messages that may appear during the game */
  messages: Messages;
  /** The selection of room specific messages that appear throughout the game */
  rooms: Rooms;
}
/**
 * This is the list of all languages in the game with their translations.
 * When adding a new language, follow the given formatting: code, then input list, then messages, and finally room.
 * All new languages should be added after the last language in the file.
 */
export const languages: Language[] = [
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
      welcome:
        "Welcome to the text adventure! Open your browser's developer console to play.",
      haveKey: "You already have the key.",
      inBrightRoom:
        "You are in a bright room. There is a door on the north wall of this room and a window on the east wall.",
      inEmptyRoom:
        "You are in an empty room. There are doors on the south and east walls of this room.",
      selectedEastDoor:
        "You go through the east door. You are in a room with a table.",
      openTheWindow: "You open the window.",
      stepOutOfWindow: "You step out from the open window.",
      takeKeyFromTable: "You take the key from the table.",
      lockedSouthDoor: "You try to open the south door, but it is locked.",
      unlockSouthDoor:
        "You unlock the south door with the key and go through the door.",
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
      inBuilding:
        "Anda berada di sebuah gedung. Tujuan anda adalah keluar dari gedung ini.",
      winText: "Anda telah keluar dari gedung ini. Selamat, kamu menang!",
      onTable: "Di atas meja ada kunci.",
      windowIsOpen: "Jendela itu sudah terbuka.",
      windowIsClosed: "Jendela itu saat ini tertutup.",
      westDoor: "Di dinding barat ruangan ini ada sebuah pintu.",
      welcome:
        "Selamat datang di pertualangan teks! Buka konsol developer di browser anda untuk bermain.",
      haveKey: "Anda sudah memiliki kuncinya.",
      inBrightRoom:
        "Anda berada di dalam ruangan yang terang. Di dinding utara ruangan ini ada pintu, dan di dinding timur ruangan ini ada jendela.",
      inEmptyRoom:
        "Anda berada di ruangan kosong. Ada pintu di dinding selatan dan dinding timur dalam ruangan ini.",
      selectedEastDoor:
        "Anda masuk melalui pintu timur. Anda berada di sebuah ruangan dengan sebuah meja.",
      openTheWindow: "Anda membuka jendela itu.",
      stepOutOfWindow: "Anda melangkah keluar dari jendela yang terbuka.",
      takeKeyFromTable: "Anda mengambil kunci dari atas meja.",
      lockedSouthDoor:
        "Anda mencoba membuka pintu selatan, tapi pintu itu terkunci.",
      unlockSouthDoor:
        "Anda membuka kunci pintu selatan dan jalan melewati pintu tersebut.",
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
      welcome:
        "テキストアドベンチャーへようこそ！ブラウザのコンソールで遊んでください。",
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
      welcome:
        "choqmeH 'ej vItlhutlh! vIleghmeyDaq Hov leng, pe'vIl DIpDaq ghu'vetlh.",
      haveKey: "QoDchu'wI' tlhIngan vItlhutlh.",
      inBrightRoom:
        "ghap vIlo'. qaSpu'D 'op tIqwI' 'e' HoS je neH 'ej 'eSqa' qet.",
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
      welcome:
        "Nai tiruvantes i hárar mahalmassen! Áva quettar i lambë enyalien",
      haveKey: "Hlarëva nauvanna",
      inBrightRoom:
        "Manenyo milya, ar mal teltava telta tulya ar hyaryava helka",
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
