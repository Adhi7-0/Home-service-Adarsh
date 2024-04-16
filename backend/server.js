const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const nodemailer = require("nodemailer"); // Add this line to import nodemailer

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "signup"
});

con.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});
//registeration
app.post('/register', (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;

  const sql = "INSERT INTO `login` (name, email, password) VALUES (?, ?, ?)";
  const values = [userName, email, password];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error registering user:", err);
      return res.json({ message: "Error registering user" });
    }
    
    console.log("User registered successfully");
    return res.json({ message: "User registered successfully" });
  });
});
//login
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sql = "SELECT * FROM `login` WHERE email = ? AND password = ?";
  const values = [email, password];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.json({ message: "Error fetching user" });
    }

    if (result.length > 0) {
      console.log("User login successful");
      return res.json({ message: "User login successful" });
    } else {
      console.log("Invalid email or password");
      return res.json({ message: "Invalid email or password" });
    }
  });
});

// Assuming you have a MySQL query for login that retrieves the name, id, and email
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  con.query(
    "SELECT id, name, email FROM login WHERE email = ? AND password = ?",
    [email, password],
    (err, data) => {
      if (err) {
        return res.json("Error");
      }
      if (data.length > 0) {
        return res.json(data[0]);
      } else {
        return res.json("fail");
      }
    }
  );
});

//booking service
app.post('/service', (req, res) => {
  const { name, email, serviceType, serviceDate, specialRequest } = req.body;

  const sql = "INSERT INTO booking (name, email, serviceType, serviceDate, specialRequest) VALUES (?, ?, ?, ?, ?)";
  const values = [name, email, serviceType, serviceDate, specialRequest];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error booking service:", err);
      sendConfirmationEmail(email); // Send email after booking
      return res.json({ message: "Error booking service" });
    }
    
    console.log("Service booked successfully");
    return res.json({ message: "Service booked successfully" });
  });
});

app.get("/booking", (req, res) => {
  const sql = "SELECT * FROM booking";

  con.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching booking:", err);
      return res.json({ message: "Error fetching booking" });
    }

    console.log("Bookings retrieved successfully");
    return res.json(result);
  });
});

// Function to send confirmation email
function sendConfirmationEmail(emailAddress) {
  const transporter = nodemailer.createTransport({
    service: "Gmail", // e.g., 'Gmail', 'Yahoo', 'Outlook', etc.
    auth: {
      type: "OAuth2",
      user: "adarshsundaram978@gmail.com", // Your email address
      clientId: "616489285644-qukffnmqnp03l15m9s37mo95grrej9gj.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: "your_refresh_token",
      accessToken: "your_access_token", // Optional, can be generated if refreshToken is not provided
    },
  });

  const mailOptions = {
    from: "adarshadhi978@gmail.com", // Your email address
    to: email, // User's email address
    subject: "Service Booking Confirmation",
    text: "Your service has been booked successfully. Thank you for choosing our services!",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending confirmation email:", error);
    } else {
      console.log("Confirmation email sent:", info.response);
    }
  });
}

//feedback form
app.post("/feedback", (req, res) => {
  const { category, message, rating } = req.body;

  const sql = "INSERT INTO feedbacks (category, message, rating) VALUES (?, ?, ?)";
  const values = [category, message, rating];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error submitting feedback:", err);
      return res.json({ message: "Error submitting feedback" });
    }

    console.log("Feedback submitted successfully");
    return res.json({ message: "Feedback submitted successfully" });
  });
});

app.listen(3001, () => {
  console.log("Running backend server on port 3001");
});
