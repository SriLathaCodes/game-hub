import { Image, ImageProps } from "@chakra-ui/react";
import bullesEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emoji: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullesEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emoji[rating]} marginTop={1} />;
};

export default Emoji;
