interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Paco",
    year: 2010
  }
}

const { song: anotherSong, songDuration: duration, details } = audioPlayer;
const { author } = details;

console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);

const [, , Francisco = 'not found'] = ['Juan', 'Ruben'];

console.error('Persona 3: ', Francisco);

export { };