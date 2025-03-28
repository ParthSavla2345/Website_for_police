# **Police Case Management System** 🚔  

## **Overview**  
The **Police Case Management System** is a web-based platform that allows police officers to manage and track criminal cases efficiently. The system enables officers to **file, update, and categorize cases**, ensuring transparency and streamlined investigations.  

## **Features**  

### 🔹 **User Roles & Authentication**  
- **Victims (Users)**: File complaints and view case progress.  
- **Police Officers**: Manage cases, upload evidence, and track case status.  
- **Admin**: Monitor overall case data and generate reports.  

### 🔹 **Case Management**  
- **File a Case**: Users can submit complaints, providing details like crime type, location, suspect information, and evidence.  
- **Status Tracking**: Cases are categorized as `Pending`, `Solved`, or `Unsolved`.  
- **Filtering & Sorting**: Officers can filter cases based on status and assigned officer.  

### 🔹 **Evidence Handling**  
- **File Uploads**: Officers can attach evidence files (images, documents).  
- **Secure Storage**: Evidence is stored and retrieved securely.  

### 🔹 **Admin Dashboard (Analytics & Reports)**  
- **Case Insights**: Track case statistics (solved vs. pending).  
- **Officer Performance**: View officers handling the most cases.  

## **Tech Stack**  

### 💻 **Frontend**  
- **React.js**: Interactive UI for managing cases.  
- **CSS**: Custom styling for tables and filtering options.  

### 🖥️ **Backend**  
- **Node.js & Express.js**: API handling and case management logic.  
- **Multer**: Middleware for handling evidence file uploads.  
- **MongoDB & Mongoose**: Database for storing case details.  

## **Database Structure (MongoDB Compass Compatible)**  

Each **case** is stored in MongoDB as a document:  

```json
{
  "_id": "C001",
  "crimeType": "Robbery",
  "victimName": "John Smith",
  "suspectName": "Unknown",
  "location": "Downtown Street",
  "dateTime": { "$date": "2024-12-15T00:00:00.000Z" },
  "description": "Robbery case solved with the arrest of two suspects.",
  "officer": "Officer John Doe",
  "evidence": null,
  "createdAt": { "$date": "2025-03-27T16:36:14.928Z" },
  "updatedAt": { "$date": "2025-03-27T16:36:14.928Z" },
  "__v": 0
}
```

## **Setup & Installation**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/your-repo/police-case-management.git
cd police-case-management
```

### **2️⃣ Install Dependencies**  
```bash
npm install
```

### **3️⃣ Setup MongoDB Compass**  
- Open **MongoDB Compass** and create a database named `police_cases_db`.  
- Insert case data manually or run the backend API.  

### **4️⃣ Start the Backend Server**  
```bash
node server.js
```

### **5️⃣ Start the Frontend**  
```bash
cd client
npm start
```


## **Future Enhancements**  
🚀 AI-powered case recommendations for officers.  
🚀 Automated suspect identification using facial recognition.  
🚀 Mobile app integration for on-the-go case filing.  

---

📌 **Contributors**  
- **Parth Savla**
- **Open for Collaboration!** 🤝  

📌 **License**  
This project is **open-source** under the **MIT License**.  
