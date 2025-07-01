# ToDo-s-List
# ☁️ Cloud-Based Todo App – Azure Deployed MERN Project

This is a **full-stack Todo application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and deployed on **Microsoft Azure** with a scalable and secure architecture. The app allows users to manage tasks through a responsive UI, backed by a robust API, and securely deployed using cloud-native components.

---

## 🌐 Cloud Technologies & Azure Infrastructure

- **Microsoft Azure Virtual Machines (VMs)**  
  - 2 VMs deployed for application servers (React frontend + Node.js backend)  
  - 1 dedicated VM for **MongoDB**, with **public IP disabled** for security  

- **Azure Load Balancer**  
  - Configured to distribute traffic between the two app VMs  
  - Ensures high availability and load distribution

- **Azure Virtual Network (VNet)**  
  - Used for secure communication between VMs  
  - Configured with **NSGs** to allow only required traffic

- **Azure Point-to-Site VPN**  
  - Enables private access to the MongoDB VM  
  - Ensures encrypted and restricted access for database interaction

- **Azure Blob Storage** (optional for static or backup data)  
  - Can be integrated to store user-generated content or backups

---

## ✅ Key Features

- Create, update, and delete tasks
- User-friendly and responsive UI built with React
- RESTful API for task management
- Centralized MongoDB database with secure access
- Cloud-deployed and load-balanced application stack

---

## 🧰 Tech Stack

### Frontend:
- React.js  
- HTML, CSS, Bootstrap  
- Axios (API requests)

### Backend:
- Node.js  
- Express.js  
- RESTful APIs

### Database:
- MongoDB (hosted on Azure VM)

---

