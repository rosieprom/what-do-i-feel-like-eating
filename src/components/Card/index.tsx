/** @jsxImportSource theme-ui */
import { Button, Card as ThemeUICard, Image, Text } from "theme-ui";

export interface CardProps {
    imageSrc: string;
    imageAlt: string;
    cardText: string;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Card = ({ imageSrc, imageAlt, cardText, onClick}: CardProps) => {
  return (
    <ThemeUICard
      sx={{
        maxWidth: 256,
        flexDirection: 'column'
      }}
    >
      <Image src={imageSrc} alt={imageAlt}/>
      <div sx={{ width: '100%', marginTop: 2}}>
        <Text>{cardText}</Text>
      </div>
      <Button sx={{marginTop: 2}} onClick={onClick}>View Recipe</Button>
    </ThemeUICard>
  );
};

export default Card;
