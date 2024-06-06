import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FC } from "react";

interface MultiCardProps {
  description: string;
  title: string;
  author: string;
  year: number;
  image: string;
}

export const MultiCard: FC<MultiCardProps> = ({
  description,
  title,
  author,
  year,
  image,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="140"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{ width: "140px" }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
        <Button size="small" color="primary">
          Share
        </Button>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
