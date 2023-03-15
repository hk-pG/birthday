import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import birthday from "./assets/birthday.png";
import { motion } from "framer-motion";
import "./App.css";
import useSound from "use-sound";
import Sound from "./assets/birthday.mp4";
import Music from "./assets/music.mp3";

function App() {
  const { width, height } = useWindowSize();
  const [play, { stop, pause }] = useSound(Sound);
  const [playMusic] = useSound(Music);
  let isPlayedMusic = false;

  return (
    <div
      onClick={() => {
        play();
        if (!isPlayedMusic) {
          playMusic({});
          isPlayedMusic = true;
        }
      }}
      className="App"
    >
      <Confetti width={width * 1.5} height={height * 1.5} recycle={true} />
      <motion.div
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <img className="b-img" src={birthday} alt="お誕生日おめでとう" />
      </motion.div>
    </div>
  );
}

export default App;
