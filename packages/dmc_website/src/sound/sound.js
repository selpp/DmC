let load_sound = (sound) => { return new Audio(sound); };
const BUTTON_CLICK = load_sound(require('../assets/button_click.wav'));
const BUTTON_HOVER = load_sound(require('../assets/button_hover.wav'));
const LOADING = load_sound(require('../assets/loading.wav'));
const MODAL_POP = load_sound(require('../assets/modal_pop.wav'));
const NEXT_SEQUENCE = load_sound(require('../assets/next_sequence.wav'));
const FILE_WARNING = load_sound(require('../assets/file_warning.wav'));

let audios = {
  BUTTON_CLICK: {  sound: BUTTON_CLICK, volume: 0.5 },
  BUTTON_HOVER: {  sound: BUTTON_HOVER, volume: 0.3 },
  LOADING: {  sound: LOADING, volume: 0.5 },
  MODAL_POP: {  sound: MODAL_POP, volume: 0.5 },
  NEXT_SEQUENCE: {  sound: NEXT_SEQUENCE, volume: 0.8 },
  FILE_WARNING: {  sound: FILE_WARNING, volume: 0.5 }
}

let play = (type) => {
  let audio = audios[type]; let sound = audio.sound;
  sound.currentTime = 0; sound.volume = audio.volume;
  sound.play();
};

module.exports = { play };
