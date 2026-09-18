import {Composition} from "remotion";
import {ChatMotionOverlay} from "./components/ChatMotionOverlay";
import {PresentationVideo} from "./components/PresentationVideo";
import {chatSpec} from "./chatSpec";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="ChatMotionOverlay"
        component={ChatMotionOverlay}
        durationInFrames={chatSpec.durationInFrames}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{chatSpec}}
      />
      <Composition
        id="PresentationVideo"
        component={PresentationVideo}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
