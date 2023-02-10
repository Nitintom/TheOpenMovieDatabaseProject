import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

function MainContent({ data }) {
  return (
    <>
      <Grid container alignItems="center" mt="6">
        <Grid items xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
          <Typography gutterBottom variant="h4" component="div">
            {data.Title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Released {data.Year}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Rating {data.imdbRating}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            {data.Plot}
          </Typography>
        </Grid>
        <Grid
          container
          items
          xs={12}
          sm={6}
          justifyContent="center"
          order={{ xs: 1, sm: 2 }}
        >
          <Box
            component="img"
            alt={data.Title}
            height="240"
            src={data.Poster}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
}

export default MainContent;
