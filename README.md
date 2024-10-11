<h1 align="center">next-fit-track</h1>
<p align="center">
  <strong>Next.js App for Tracking Weight Loss Progress</strong><br />
  Built with Redux, Firebase, and Chart.js
</p>

## Features

<ul>
  <li><strong>Ideal Weight Calculator:</strong> Calculates your ideal weight based on height, age, and gender.</li>
  <li><strong>Daily Weight Input:</strong> Track your weight daily and monitor progress towards your goal.</li>
  <li><strong>Progress Charts:</strong> Visualize your weight loss journey with dynamic charts powered by <a href="https://www.chartjs.org/">Chart.js</a>.</li>
  <li><strong>Serverless Backend:</strong> Uses <a href="https://firebase.google.com/">Firebase</a> for data persistence, ensuring your data is stored securely and is accessible anywhere.</li>
  <li><strong>State Management:</strong> Leverages <a href="https://redux.js.org/">Redux</a> for advanced state management and scalability.</li>
</ul>

## Technologies Used

<table>
  <tr>
    <th>Technology</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td><a href="https://nextjs.org/">Next.js</a></td>
    <td>Framework for server-side rendering and building fast, scalable applications.</td>
  </tr>
  <tr>
    <td><a href="https://redux.js.org/">Redux</a></td>
    <td>State management for handling complex data and app logic.</td>
  </tr>
  <tr>
    <td><a href="https://www.chartjs.org/">Chart.js</a></td>
    <td>Used for creating responsive and interactive charts to track progress.</td>
  </tr>
  <tr>
    <td><a href="https://firebase.google.com/">Firebase</a></td>
    <td>Serverless backend for storing and syncing user data.</td>
  </tr>
</table>

## How It Works

<ol>
  <li>Users input their current weight, height, age, gender, and desired weight loss target.</li>
  <li>The app calculates the ideal weight and generates a timeline based on the user’s input.</li>
  <li>Daily weight entries are logged and visualized through progress charts.</li>
  <li>Firebase stores user data securely, allowing for future access across devices.</li>
  <li>Redux handles the global state to ensure smooth data flow and updates across the app.</li>
</ol>

## Installation

To run this project locally:

```bash
git clone https://github.com/StefanHritcu/next-fit-track.git
cd frontend
npm install
npm run dev
