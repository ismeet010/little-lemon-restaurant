import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemText,
  Tabs,
  Tab,
} from "@mui/material";
import { ComContainer } from "../../style/style";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    profilePic: "",
  });
  const [orderHistory, setOrderHistory] = useState([
    { id: 1, item: "Pizza", date: "2024-11-20", price: "$12" },
    { id: 2, item: "Pasta", date: "2024-11-18", price: "$15" },
  ]);
  const [bookingHistory, setBookingHistory] = useState([
    { id: 1, date: "2024-11-22", table: "Table 4" },
    { id: 2, date: "2024-11-15", table: "Table 2" },
  ]);
  const [newProfilePic, setNewProfilePic] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState(0); // State for active tab

  useEffect(() => {
    // Fetch user details, order history, and booking history from the server
    // Example: fetchUserProfile(), fetchOrderHistory(), fetchBookingHistory()
  }, []);

  const handleProfilePicChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      setNewProfilePic(event.target.files[0]);
    }
  };

  const handleProfilePicUpload = () => {
    if (newProfilePic) {
      const newPicURL = URL.createObjectURL(newProfilePic);
      setUser({ ...user, profilePic: newPicURL });
      alert("Profile picture updated!");
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <ComContainer sx={{ padding: "20px" }}>
      {/* User Info Section */}
      <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
        <Avatar
          src={user.profilePic || "/default-avatar.png"}
          alt="Profile Picture"
          sx={{ width: "120px", height: "120px", margin: "auto" }}
        />
        <Typography variant="h5" sx={{ marginTop: "10px" }}>
          {user.name}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {user.email}
        </Typography>
        <Box sx={{ marginTop: "15px" }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            style={{ marginBottom: "10px" }}
          />
          <Button
            variant="contained"
            onClick={handleProfilePicUpload}
            disabled={!newProfilePic}
          >
            Upload Profile Picture
          </Button>
        </Box>
      </Box>

      <Divider sx={{ marginBottom: "30px" }} />

      {/* History Section with Tabs */}
      <Typography variant="h6" sx={{ marginBottom: "20px" }}>
        History
      </Typography>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Orders" />
        <Tab label="Bookings" />
      </Tabs>

      <Box sx={{ marginTop: "20px" }}>
        {/* Conditionally render based on active tab */}
        {activeTab === 0 && (
          <List>
            {orderHistory.map((order) => (
              <ListItem key={order.id}>
                <ListItemText
                  primary={order.item}
                  secondary={`Date: ${order.date}, Price: ${order.price}`}
                />
              </ListItem>
            ))}
          </List>
        )}
        {activeTab === 1 && (
          <List>
            {bookingHistory.map((booking) => (
              <ListItem key={booking.id}>
                <ListItemText
                  primary={`Table: ${booking.table}`}
                  secondary={`Date: ${booking.date}`}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </ComContainer>
  );
};

export { ProfilePage };
