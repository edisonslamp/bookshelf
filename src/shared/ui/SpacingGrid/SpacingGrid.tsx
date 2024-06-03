import Grid from "@mui/material/Grid";
import { FC, ReactNode } from "react";

interface SpacingGridProps {
  children: ReactNode;
}
export const SpacingGrid: FC<SpacingGridProps> = ({ children }) => {
  return (
    <Grid
      sx={{ flexGrow: 1, justifyContent: "space-around" }}
      container
      spacing={2}
    >
      <Grid item xs={8}>
        <Grid container justifyContent="center" spacing={1}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
            <Grid key={value} item>
              {children}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
