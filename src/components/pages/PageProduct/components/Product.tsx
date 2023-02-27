import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { formatAsPrice } from "~/utils/utils";
import { useAvailableProduct } from "~/queries/products";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useAvailableProduct(id);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container spacing={4}>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      <Grid item key={product?.id} xs={12} sm={6} md={4}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardMedia
            sx={{ pt: "56.25%" }}
            image={`https://source.unsplash.com/random?sig=${id}`}
            title="Image title"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {product?.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="h3">
              {product?.description}
            </Typography>
            <Typography>{formatAsPrice(Number(product?.price))}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
