// app.ts
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const welcomeMessage = `
    <div style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #000; /* Change background color to black */
    ">
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        background-color: #e74c3c;
        animation: pop 1s infinite alternate;
      ">
        <h1 style="
          font-size: 4rem;
          color: #fff;
          text-transform: uppercase;
          margin: 0;
        ">
          Welcome
        </h1>
        <p style="
          font-size: 1.5rem;
          color: #fff;
          margin-top: 1rem;
        ">
          Explore the beauty of code!
        </p>
        <span style="
          font-size: 3rem;
          margin-top: 1rem;
        ">
          &#128522; <!-- Cute emoji -->
        </span>
      </div>
    </div>
    
    <style>
      @keyframes pop {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.05);
        }
      }
    </style>
  `;
  res.send(welcomeMessage);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
