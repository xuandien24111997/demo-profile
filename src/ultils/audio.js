export const onPlayAudio = (audio, setAudio, audioFile) => {
  if (audio !== null) {
    audio.pause();
    audio.currentTime = 0;
    setAudio(null);
  }
  const audioReceive = new Audio(audioFile);
  setAudio(audioReceive);
  audioReceive.play();
};
