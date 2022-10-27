/** @jsxImportSource theme-ui */
import { Button, Card as ThemeUICard, Image, Paragraph } from "theme-ui";

export interface CardProps {
  imageSrc: string;
  imageAlt: string;
  cardText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Card = ({ imageSrc, imageAlt, cardText, onClick }: CardProps) => {
  return (
    <ThemeUICard
      sx={{
        maxWidth: 256,
      }}
    >
      <Image src={imageSrc} alt={imageAlt} />
      <div
        sx={{
          display: "grid",
          gridGap: 2,
        }}
      >
        <Paragraph>{cardText}</Paragraph>
        <Button sx={{ marginTop: 2 }} onClick={onClick}>
          View Recipe
        </Button>
      </div>
    </ThemeUICard>
  );
};

export default Card;
