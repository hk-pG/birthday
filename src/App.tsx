import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import birthday from "./assets/birthday.png";
import { motion } from "framer-motion";
import "./App.css";
import useSound from "use-sound";
import Sound from "./assets/birthday.mp4";

function App() {
  const { width, height } = useWindowSize();
  const [play, { stop, pause }] = useSound(Sound);

  return (
    <div
      onClick={() => {
        play();
      }}
      className="App"
    >
      <Confetti width={width * 4} height={height * 2} recycle={true} />
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
