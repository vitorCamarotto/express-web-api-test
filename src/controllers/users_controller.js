import express from "express";

const router = express.Router();

// import { createClient } from '@supabase/supabase-js'
// const supabase = createClient('https://obmkbfhqtemwvinyjhkc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ibWtiZmhxdGVtd3ZpbnlqaGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NzkwOTYsImV4cCI6MjAzMzI1NTA5Nn0.8p1OIG6jfA_pbI5kI9j2JRNh2tlltyVeIipzaUBntRw')


// const { error } = await supabase
//   .from('users')
//   .insert({ idname: 'Dinamarco' })

// Define routes specific to books
router.get("/", async (req, res) => {
  // Implement book-related logic here (e.g., call services, access database)
  const books = [{ title: "Book 1" }, { title: "Book 2" }]; // Example data
  res.json(books);
});

export default router