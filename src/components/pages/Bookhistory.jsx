import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";
import Navs from "../../ui/Navs";

function createData(
  roomName,
  roomDescription,
  bookingStartDate,
  bookingEndDate,
  price
) {
  return {
    roomName,
    roomDescription,
    bookingStartDate,
    bookingEndDate,
    price,
  };
}

export default function Bookhistory() {
  const currentUser = {
    displayName: "John Doe",
    photoURL: "https://example.com/avatar.jpg",
  };

  const bookings = [
    createData(
      "Room 1",
      "Description of Room 1",
      "1/1/2023",
      "11/1/2023",
      256
    ),
    createData(
      "Room 2",
      "Description of Room 2",
      "2/1/2023",
      "12/1/2023",
      512
    ),
    // Add more bookings as needed
    createData(
        "Room 2",
        "Description of Room 2",
        "2/1/2023",
        "12/1/2023",
        512
      ),
      createData(
        "Room 2",
        "Description of Room 2",
        "2/1/2023",
        "12/1/2023",
        512
      ),
  ];

  return (
    <>
    <Navs />
      <Container maxWidth="lg">
        <Box
          sx={{
            marginTop: 15,
            display: "flex",
            alignItems: "center",
            gap: "0 14px",
            marginLeft: '50px'
          }}
        >
          <Avatar
            src={currentUser?.photoURL}
            alt={currentUser?.displayName}
            sx={{ width: 60, height: 60, borderRadius: "100%" }}
          />
          <Typography variant="h6">{currentUser?.displayName}</Typography>
        </Box>

        <Typography marginTop={3} fontWeight="bold" variant="h6">
          Booking History
        </Typography>

        <Grid container spacing={3} sx={{ marginTop: 3 }}>
          {bookings.map((booking, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{booking.roomName}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {booking.roomDescription}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                    Start Date: {booking.bookingStartDate}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    End Date: {booking.bookingEndDate}
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    Price: ${booking.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
