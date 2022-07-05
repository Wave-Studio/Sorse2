import {
  Sorse,
  useAudioPlayer,
  useEffect,
  useMousePosition,
  useState,
} from "sorse";
import Scene from "./scene";
import "./styles.css";

// new CollisionBox(new Box(new Position(0, 0), new Position(100, 100)))

Sorse.init({
  name: "beans",
  canvas: {
    nativeSize: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  },
  author: "Wave",
  version: "1",
  component: () => {
    const [started, setStarted] = useState(false);

    const { x, y } = useMousePosition();

    if (x >= 0 && x <= 100 && y >= 0 && y <= 100) {
      setStarted(true);
    } else {
      setStarted(false);
    }

    const audio = useAudioPlayer("song-3.mp3", 25);

    useEffect(() => {
      // audio.play();
      // setTimeout(() => {
      //   audio.setLoop(true)
      // }, 50);

      // setTimeout(() => {
      //   audio.pause();
      // }, 10000);
    }, []);

    return (
      <>
        <Scene gameStarted={started} audioTime={audio.getPosition()} />
      </>
    );
  },
});