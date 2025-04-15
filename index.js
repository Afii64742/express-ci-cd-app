import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=>{
  res.send("Hello from Express CI-CD app");
})

app.get("/health", (req, res)=>{
  res.send("Healthy");
})

app.get("/profile", (req, res)=>{
  res.send("Hi, I am Aftab, Learning CI/CD with Express");
})

app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})