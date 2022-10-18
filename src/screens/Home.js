import React, { useState, useEffect } from "react";
// import MediaCard from '../../components/MediaCard'
import ResponsiveAppBar from '../components/AppBar';
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Grid, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const navigate = useNavigate()

  let getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setMyData(res.data);
      })
      .catch((err) => {
        setIsError(err.message);
      });
  };

  // console.log(myData)

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <ResponsiveAppBar />
      {isError !== "" ? (
        <h2>{isError}</h2>
      ) : (
        <Grid container spacing={2} p={15}>
          {myData.map((post, i) => {
            const { id, title, price, description, category, image, rating } =
              post;
            return (
              <Grid item key={i} xl={3} lg={4} md={6} sm={12} xs={12}>
                <Card mt={5} sx={{ border: "1px solid lightGrey" }}>
                  <CardMedia
                    sx={{ height: "350px", objectFit: "contain" }}
                    component="img"
                    image={image}
                    alt="iPhone"
                  />
                  <CardContent>
                    <Chip
                      label={
                        category.slice(0, 1).toUpperCase() + category.slice(1)
                      }
                    />
                    <Tooltip title={title}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="center"
                        color="red"
                        sx={{ fontWeight: "bold" }}
                      >
                        {title.slice(0, 10) + (title.length > 10 ? "..." : "")}
                      </Typography>
                    </Tooltip>
                    <Tooltip title={description}>
                      <Typography variant="body3">
                        {description.slice(0, 60) +
                          (description.length > 60 ? "..." : "")}
                      </Typography>
                    </Tooltip>
                    <Typography
                      variant="body1"
                      mt={2}
                      sx={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {`USD ${price}`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      // size="large"
                      variant="contained"
                      // color="warning"
                      onClick={() => {
                        navigate('/product', {
                          state: {
                            id: id,
                            title: title,
                            price: price,
                            rating: rating,
                            image: image,
                            description: description,
                            category: category,
                            // count: count,
                            // rate: rate
                          }
                        })
                      }}
                      sx={{ width: 1, fontWeight: "bold", fontSize: "18px" }}
                    >
                      Show Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
}

export default Home;
