import { Button, Card as ThemeUICard, Image, Text } from "theme-ui";

export interface CardProps {
    imageSrc: string;
    imageAlt: string;
    cardText: string;
    onClick: () => {};
}

const Card = ({ imageSrc, imageAlt, cardText, onClick}: CardProps) => {
  return (
    <ThemeUICard
      sx={{
        maxWidth: 256,
      }}
    >
      <Image src={imageSrc} alt={imageAlt}/>
      <Text>{cardText}</Text>
      <Button onClick={onClick}>View Recipe</Button>
    </ThemeUICard>
  );
};

export default Card;
