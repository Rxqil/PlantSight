PlantSight

PlantSight is a web-based plant monitoring system designed to provide real-time visibility into industrial and manufacturing operations.
It helps teams monitor equipment, detect issues early, and make data-driven decisions to improve efficiency, safety, and uptime.

Purpose of the Project

Modern industrial plants generate large amounts of operational data, but this data is often:

Scattered across systems

Manually monitored

Reacted to only after failures occur

PlantSight centralizes this information into a single dashboard, allowing plant managers and engineers to:

Monitor plant health in real time

Identify anomalies early

Reduce downtime and operational risk

Key Features

Real-time plant monitoring

Machine status tracking (running, idle, fault)

Alert-ready architecture for abnormal readings

RESTful API for scalable integrations

Environment-based configuration for security

Cloud deployed with GitHub integration

Intended Users

Plant & Operations Managers

Maintenance Teams

Industrial Engineers

Safety & Compliance Officers

Manufacturing Executives

🛠️ Tech Stack
Backend

Node.js

Express.js

NPM

dotenv (environment variables)

Hosting & Deployment

GitHub (source control)

Render (cloud hosting)

📁 Project Structure
PlantSight/
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
├── routes/
├── controllers/
├── models/
└── public/

Getting Started (Local Setup)


Clone the repository
git clone https://github.com/YOUR_USERNAME/PlantSight.git
cd PlantSight



Install dependencies
npm install



Create a .env file
PORT=3000


Run the application
npm start


OR (development mode):

npm run dev


Open in browser
http://localhost:3000

☁️ Deployment

PlantSight is deployed using Render, which automatically:

Pulls code from GitHub

Installs dependencies

Runs the Node.js server

Assigns a public URL

Environment variables are securely managed via the Render dashboard.


Security Notes

Sensitive information is stored in environment variables

.env files are excluded from version control

node_modules are not committed to GitHub


Project Status

In active development


Planned improvements:

Authentication & role-based access

Dashboard UI enhancements

Real-time sensor data via WebSockets

Historical analytics & reporting


Author

Raqil Dhookie
Final-year IT student (Software Engineering focus)
Aspiring Software Engineer

GitHub: https://github.com/Rxqil

LinkedIn: www.linkedin.com/in/raqil-dhookie


License

This project is for educational and portfolio purposes.

Interview-ready one-liner

PlantSight is a cloud-deployed plant monitoring web application that provides real-time operational visibility to improve efficiency, safety, and decision-making in industrial environments.
