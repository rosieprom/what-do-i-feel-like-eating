/** @jsxImportSource theme-ui */
import { Button, Card as ThemeUICard, Image, Paragraph, Flex } from "theme-ui";
import { Trash2 } from "lucide-react";

export interface CardProps {
  imageSrc: string;
  imageAlt: string;
  cardText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onDelete: () => void;
}

const Card = ({
  imageSrc,
  imageAlt,
  cardText,
  onClick,
  onDelete,
}: CardProps) => {
  return (
    <ThemeUICard
      sx={{
        maxWidth: ["100%"],
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Image src={imageSrc} alt={imageAlt} />
      <Flex
        sx={{
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Paragraph
          sx={{
            color: "text",
            fontWeight: 600,
            fontSize: [16, 18],
            textAlign: "center",
            my: 2,
          }}
        >
          {cardText}
        </Paragraph>
      </Flex>
      {/* Footer */}
      <Flex
        sx={{
          gap: 3,
          justifyContent: "flex-end",
        }}
      >
        <Button sx={{ marginTop: 2, flex: 6 }} onClick={onClick}>
          View Recipe
        </Button>
        <Button
          variant="destruction"
          sx={{ marginTop: 2, flex: 1 }}
          onClick={onDelete}
        >
          <Trash2 size={24} />
        </Button>
      </Flex>
    </ThemeUICard>
  );
};

export default Card;
