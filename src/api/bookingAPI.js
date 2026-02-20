import axios from "axios";

const API_URL = "http://localhost:5000/api/bookings";

export const createBooking = (data) => axios.post(API_URL, data);
export const getBookings = () => axios.get(API_URL);
export const updateBooking = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const downloadInvoice = (id) =>
  axios.get(`${API_URL}/${id}/invoice`, { responseType: "blob" });