import { CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FC } from "react";

interface MultiCardProps {
  description: string;
  title: string;
  author: string[];
  year: string;
  image: string;
  ToFavoriteIcon?: React.ReactNode;
  ToWishlistIcon?: React.ReactNode;
}

export const MultiCard: FC<MultiCardProps> = ({
  description,
  title,
  author,
  year,
  image,
  ToFavoriteIcon,
  ToWishlistIcon,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          sx={{ objectFit: "fill" }}
          component="img"
          height="500px"
          width="auto"
          image={image}
          alt="test alt"
        />
        <CardContent sx={{ height: "140px" }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="text.secondary"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {year}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ height: "3rem" }}>
        {ToWishlistIcon}
        {ToFavoriteIcon}
      </CardActions>
    </Card>
  );
};
