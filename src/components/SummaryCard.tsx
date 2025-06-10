"use client";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

export default function SummaryCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image="night.jpeg" title="Croatia" />
      <CardContent>
        <Stack
          direction="row"
          spacing={2}
          alignItems={"center"}
          sx={{ width: "100%", marginTop: 2, marginBottom: 2 }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/avatar.jpeg"
            sx={{ width: 60, height: 60 }}
          />
          <Typography gutterBottom variant="h5" component="div">
            Croatia at Night
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          voluptatibus molestiae nobis quam accusamus rerum tenetur est repellat
          nemo autem.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
