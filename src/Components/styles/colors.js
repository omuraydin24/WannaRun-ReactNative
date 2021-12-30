// hex
const constantColors = {
  white: '#FFFFFF',
  black: '#2D2D2D',
  transparent: 'transparent',
  pink: '#ff9cf7',
  blue: '#189ad3', // main blue #189ad3
  purple: '#800080',
  darkblack: 'black',
  headerBlue: '#189ad3',
  fadedBlue: '#71c7ec',
  drawerBlues:{
      1: '#06afce',
      2: '#59d1e8',
      3: '#b5d7df',
      4: '#c3dfe5',
  },

  greys: {
      1: '#383838',
      2: '#ACACAC',
      3: '#868686',
      4: '#BCBCBC',
      5: '#E0E0E0', //checkbox border color
  },
};

const toRGBA = (hexCode, opacity) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};

export const colorNames = {
  auth: {
      background: 'auth/background',
      inputBorder: 'auth/inputBorder',
      inputBackground: 'auth/inputBackground',
      inputText: 'auth/inputText',
      inputPlaceholder: 'auth/inputPlaceholder',
      coloredButtonBackground: 'auth/coloredButtonBackground',
      coloredButtonText: 'auth/coloredButtonText',
      paleButtonBackground: 'auth/paleButtonBackground',
      paleButtonText: 'auth/paleButtonText',
      appNameText: 'auth/appNameText',
      appNameText: 'auth/appNameText',
      appIcon: 'auth/appIcon',
  },
  todo: {
      background: 'todo/background',
      headerText: 'todo/headerText',
      contentBorder: 'todo/contentBorder',
      checkBoxColor: 'todo/checkBoxColor',
      addButton: 'todo/addButton',
      todoBoxText: 'todo/todoBoxText',
      checkBoxBorder: 'todo/checkBoxBorder',
      headerBlue: 'todo/headerBlue',
      completedText: 'todo/completedText',
      doneBoxBorder: 'todo/doneBoxBorder',
      deleteButton: 'todo/deleteButton',
  },
  settings: {
      background: 'settings/background',
      radioButtonSelected: 'settings/radioButtonSelected',
      radioButtonUnselected: 'settings/radioButtonUnselected',
      signOutBorder: 'settings/signOutBorder',
      signOutButtonBackground: 'settings/signOutButtonBackground',
      signOutText: 'settings/singOutText',
      titleColor: 'settings/titleColor',
      username: "settings/username",
      eMail: "settings/eMail",
      tintColor:"settings/tintColor"
  },
  addNewNote: {
      border: "addNewNote/border",
      background: "addNewNote/background",
      todayText: "addNewNote/todayText",
      text:"addNewNote/text",
      headerText:"addNewNote/headerText",
      placeHolderText:"addNewNote/placeHolderText",
  },
  drawer: {
      infoBackground: "drawer/infoBackground",
      categoryTitleBackground: "drawer/categoryTitleBackground",
      touchableBackground: "drawer/touchableBackground",
      settingsBackground: "drawer/settingsBackground"
  }
  
};

export const darkColors = {
  // auth
  [colorNames.auth.background]: constantColors.black, 
  [colorNames.auth.paleButtonText]: constantColors.white,
  [colorNames.auth.appNameText]: constantColors.blue,
  [colorNames.auth.inputPlaceholder]: toRGBA(constantColors.white, 40),
  [colorNames.auth.appIcon]: constantColors.blue,
  [colorNames.auth.coloredButtonBackground]: constantColors.blue,
  [colorNames.auth.inputBorder]: constantColors.blue,
  [colorNames.auth.coloredButtonText]: constantColors.white,
  [colorNames.auth.inputBackground]: toRGBA(constantColors.blue, 10),
  [colorNames.auth.paleButtonBackground]: constantColors.transparent,
  [colorNames.auth.inputText]: constantColors.white,

  //todo
  [colorNames.todo.background]: constantColors.black,
  [colorNames.todo.addButton]: constantColors.blue,
  [colorNames.todo.todoBoxText]: constantColors.white,
  [colorNames.todo.checkBoxBorder]: constantColors.greys[5],
  [colorNames.todo.headerBlue]: constantColors.headerBlue,
  [colorNames.todo.completedText]: constantColors.white,
  [colorNames.todo.doneBoxBorder]: constantColors.fadedBlue,
  [colorNames.todo.deleteButton]: constantColors.blue,

  //settings
  [colorNames.settings.background]: constantColors.black,
  [colorNames.settings.radioButtonSelected]: constantColors.blue,
  [colorNames.settings.radioButtonUnselected]: constantColors.white,
  [colorNames.settings.signOutBorder]: constantColors.blue,
  [colorNames.settings.signOutText]: constantColors.white,
  [colorNames.settings.titleColor]: constantColors.blue,
  [colorNames.settings.signOutButtonBackground]: constantColors.black,
  [colorNames.settings.eMail]: constantColors.white,
  [colorNames.settings.username]: constantColors.white,
  [colorNames.settings.tintColor]: constantColors.white,
  //addNewNote
  [colorNames.addNewNote.background]: constantColors.black,
  [colorNames.addNewNote.border]: constantColors.blue,
  [colorNames.addNewNote.text]: constantColors.white,
  [colorNames.addNewNote.todayText]: constantColors.white,
  [colorNames.addNewNote.headerText]: constantColors.white,
  [colorNames.addNewNote.placeHolderText]: toRGBA(constantColors.white,60),
  //drawer
  [colorNames.drawer.infoBackground]: constantColors.drawerBlues[1],
  [colorNames.drawer.categoryTitleBackground]: constantColors.drawerBlues[2],
  [colorNames.drawer.touchableBackground]: constantColors.drawerBlues[3],
  [colorNames.drawer.settingsBackground]: constantColors.drawerBlues[4],
};

export const lightColors = {
  // auth
  [colorNames.auth.background]: constantColors.white, 
  [colorNames.auth.paleButtonText]: constantColors.black,
  [colorNames.auth.appNameText]: constantColors.blue,
  [colorNames.auth.inputPlaceholder]: toRGBA(constantColors.black, 50),
  [colorNames.auth.appIcon]: constantColors.blue,
  [colorNames.auth.coloredButtonBackground]: constantColors.white,
  [colorNames.auth.inputBorder]: constantColors.blue, 
  [colorNames.auth.coloredButtonText]: constantColors.black,
  [colorNames.auth.inputBackground]: toRGBA(constantColors.black, 3),
  [colorNames.auth.paleButtonBackground]: constantColors.transparent,
  [colorNames.auth.inputText]: constantColors.black,


  //todo
  [colorNames.todo.background]: constantColors.white,
  [colorNames.todo.addButton]: constantColors.blue,
  [colorNames.todo.todoBoxText]: constantColors.darkblack,
  [colorNames.todo.checkBoxBorder]: constantColors.greys[5],
  [colorNames.todo.headerBlue]: constantColors.headerBlue,
  [colorNames.todo.completedText]: constantColors.white,
  [colorNames.todo.doneBoxBorder]: constantColors.fadedBlue,
  [colorNames.todo.deleteButton]: constantColors.blue,


  //settings
  [colorNames.settings.background]: constantColors.white,
  [colorNames.settings.radioButtonSelected]: constantColors.blue,
  [colorNames.settings.radioButtonUnselected]: constantColors.black,
  [colorNames.settings.signOutBorder]: constantColors.blue,
  [colorNames.settings.signOutText]: constantColors.black,
  [colorNames.settings.signOutButtonBackground]: constantColors.white,
  [colorNames.settings.titleColor]: constantColors.blue,
  [colorNames.settings.username]: constantColors.black,
  [colorNames.settings.eMail]: constantColors.black,
  [colorNames.settings.tintColor]: constantColors.white,

  //addNewNote
  [colorNames.addNewNote.background]: constantColors.white,
  [colorNames.addNewNote.border]: constantColors.blue,
  [colorNames.addNewNote.text]: constantColors.black,
  [colorNames.addNewNote.todayText]: constantColors.blue,
  [colorNames.addNewNote.headerText]: constantColors.white,
  [colorNames.addNewNote.placeHolderText]: toRGBA(constantColors.greys[2], 80),

  //drawer
  [colorNames.drawer.infoBackground]: constantColors.drawerBlues[1],
  [colorNames.drawer.categoryTitleBackground]: constantColors.drawerBlues[2],
  [colorNames.drawer.touchableBackground]: constantColors.drawerBlues[3],
  [colorNames.drawer.settingsBackground]: constantColors.drawerBlues[4],

};
