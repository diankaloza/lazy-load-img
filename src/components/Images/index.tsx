import { dummiesAvatar } from "./data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const Images = () => {
  return (
    <div>
      {dummiesAvatar.map((avatar, index) => (
        <div>
          <LazyLoadImage key={index} src={avatar} alt="foto" effect="blur" />
        </div>
      ))}
    </div>
  );
};
