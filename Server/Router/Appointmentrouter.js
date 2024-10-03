const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const nodemailer = require('nodemailer'); // Import nodemailer
const Appointment = require('../Model/AppoinmentSchema'); // Correct spelling if needed
const verifyToken= require('../Verification/doctorsToken')
const router = express.Router();

// Booking route for Razorpay payment creation
router.post('/booking', async (req, res) => {
  try {
    const { amount, currency, receipt } = req.body;
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: amount * 100, // amount in smallest currency unit
      currency: currency,
      receipt: receipt,
    };

    const order = await razorpay.orders.create(options);
    if (!order) {
      return res.status(500).send('Error creating order');
    }
    res.json(order);
  } catch (err) {
    console.error('Payment error', err);
    res.status(500).send('Error creating order');
  }
});

// Route to validate Razorpay payment and create an appointment
router.post('/order/validate', async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    patientName,
    patientAge,
    phone,
    section,
    doctor,
    date,
  } = req.body;

  // Verify payment signature
  const sha = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET);
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest('hex');

  if (digest !== razorpay_signature) {
    return res.status(400).json({ msg: 'Transaction is not legit!' });
  }

  const newAppointment = new Appointment({
    patientName,
    patientAge,
    phone,
    section,
    doctor,
    date,
    paymentId: razorpay_payment_id,
    orderId: razorpay_order_id,
    status: 'Pending', // Set initial status
  });

  try {
    const savedAppointment = await newAppointment.save();
    res.json({
      msg: 'success',
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      appointment: savedAppointment,
    });
  } catch (err) {
    console.error('Error saving appointment', err);
    res.status(500).send('Error saving appointment');
  }
});

// Route to get all appointments
router.get('/getappointments', async (req, res) => {
  try {
    const datas = await Appointment.find();
    res.status(200).json(datas);
  } catch (err) {
    console.error('Error fetching appointments', err);
    res.status(500).json({ msg: 'Failed to fetch appointments' });
  }
});

// Initialize Nodemailer with environment variables for secure credentials
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any email service like SendGrid, etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email address from environment variables
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password from environment variables
  },
});

// Endpoint to approve an appointment
router.post('/approve-appointment', async (req, res) => {
  const { appointmentId, userEmail } = req.body;

  try {
    // Update appointment status to "approved" in your database
    await Appointment.findByIdAndUpdate(appointmentId, { status: 'Approved' });

    // Send an approval email
    const mailOptions = {
      from: process.env.EMAIL_USER, // Use environment variable
      to: userEmail,
      subject: 'Appointment Approved',
      text: 'Your appointment has been successfully approved.',
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Appointment approved and email sent.' });
  } catch (error) {
    console.error('Error approving appointment:', error);
    res.status(500).json({ message: 'Error approving appointment.' });
  }
});

// Endpoint to cancel an appointment
router.post('/cancel-appointment', async (req, res) => {
  const { appointmentId, userEmail } = req.body;

  try {
    // Update appointment status to "canceled" in your database
    await Appointment.findByIdAndUpdate(appointmentId, { status: 'Canceled' });

    // Send a cancellation email
    const mailOptions = {
      from: process.env.EMAIL_USER, // Use environment variable
      to: userEmail,
      subject: 'Appointment Canceled',
      text: 'Your appointment has been canceled.',
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Appointment canceled and email sent.' });
  } catch (error) {
    console.error('Error canceling appointment:', error);
    res.status(500).json({ message: 'Error canceling appointment.' });
  }
});

// Fetch appointments for the logged-in doctor
router.get('/appointments/:doctorId', verifyToken, async (req, res) => {
  try {
    const doctorId = req.user.id;
    const appointments = await Appointment.find({ doctor: doctorId });
    if (!appointments.length) {
      return res.status(404).json({ msg: 'No appointments found' });
    }
    res.json(appointments);
  } catch (err) {
    console.error('Error fetching appointments', err);
    res.status(500).send('Error fetching appointments');
  }
});

module.exports = router;
