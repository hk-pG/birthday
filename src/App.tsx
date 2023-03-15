import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import birthday from "./assets/birthday.png";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const { width, height } = useWindowSize();

  return (
    <div onClick={() => {}} className="App">
      <Confetti width={width} height={height} recycle={true} />
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
        <img height={height} src={birthday} alt="お誕生日おめでとう" />
      </motion.div>
    </div>
  );
}

export default App;
