# 🚀 Resume & Cover Letter Generator API

This API generates **professional resumes and cover letters** using AI, with **support for PDF/DOCX exports** and **Paystack payment integration**.

## 📌 Features
✅ **AI-Powered Resume & Cover Letter Generation**  
✅ **Supports PDF & DOCX Resume Export**  
✅ **User Authentication & API Key Protection**  
✅ **Paystack Payment Integration**  
✅ **Swagger API Documentation**  
✅ **Logging with Winston & Monitoring with Mixpanel**  
✅ **Automated Tests & CI/CD Deployment**  

---

## 📂 Project Structure
```
resume-api/
│── src/
│   ├── controllers/
│   │   ├── resumeController.js
│   │   ├── paymentController.js
│   │   ├── webhookController.js
│   ├── models/
│   │   ├── userModel.js
│   ├── routes/
│   │   ├── resumeRoutes.js
│   │   ├── paymentRoutes.js
│   │   ├── webhookRoutes.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   ├── apiKeyMiddleware.js
│   ├── utils/
│   │   ├── generatePdf.js
│   │   ├── generateApiKey.js
│   │   ├── generateDocx.js
│   ├── config/
│   │   ├── db.js
│   │   ├── paystack.js
│   ├── app.js
│   ├── server.js
│── .env
│── package.json
│── README.md
```

---

## ⚙️ **Installation & Setup**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/stephendache/resume-api.git
cd resume-api
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the root directory:
```env
PORT=5000
OPENAI_API_KEY=your_openai_api_key
PAYSTACK_SECRET_KEY=your_paystack_secret_key
MONGO_URI=your_mongodb_connection_string
```

### **4️⃣ Start the Server**
```bash
npm start
```
or for development:
```bash
npm run dev
```
API runs on `http://localhost:5000`.

---

## 🚀 **API Endpoints**
### **1️⃣ Generate Resume (Text, PDF, DOCX)**
**`POST /api/resumes/generate-resume`**

📌 **Request Body (JSON)**:
```json
{
  "name": "John Doe",
  "experience": "Software Engineer at Google",
  "skills": "JavaScript, React, Node.js",
  "education": "B.Sc Computer Science",
  "format": "pdf"
}
```
📌 **Response (Text Format)**
```json
{
  "resume": "John Doe is an experienced Software Engineer at Google..."
}
```
📌 **Response (PDF/DOCX)**
- The API returns a **downloadable PDF or DOCX file**.

---

### **2️⃣ Generate Cover Letter**
**`POST /api/resumes/generate-cover-letter`**

📌 **Request Body (JSON)**:
```json
{
  "name": "Jane Doe",
  "job_title": "Product Manager",
  "company": "Microsoft",
  "experience": "Worked on AI-driven SaaS products."
}
```
📌 **Response**
```json
{
  "coverLetter": "Dear Hiring Manager, I am excited to apply for the Product Manager role at Microsoft..."
}
```

---

### **3️⃣ Payment Integration (Paystack)**
#### **Initiate Payment**
**`POST /api/payments/pay`**
📌 **Request Body:**
```json
{
  "email": "user@example.com",
  "amount": 10000
}
```
📌 **Response:**
```json
{
  "authorization_url": "https://checkout.paystack.com/xxxx",
  "reference": "abc123"
}
```

#### **Verify Payment & Activate API Key**
**`GET /api/payments/verify-payment/:reference`**
📌 **Response:**
```json
{
  "message": "Payment successful",
  "apiKey": "ab12cd34ef56gh78"
}
```

#### **Webhook for Auto-Activation**
**`POST /api/webhooks/paystack-webhook`**
📌 **Automatically generates API key after successful payment.**

---

## 🔑 **Authentication & Security**
- **API Key Authentication** → Required for all `/generate-resume` and `/generate-cover-letter` routes.
- **Role-Based Access Control** → Admin users have extra permissions.

### **Middleware: `verifyApiKey`**
To use the API, include your **API key** in the headers:
```
x-api-key: your_api_key_here
```

---

## 🧪 **Testing**
Run tests using:
```bash
npm test
```
### **✅ Includes:**
- API key validation
- Resume generation
- Payment processing

---

## 🔧 **Deployment**
### **1️⃣ Deploy on Vercel**
```bash
vercel
```

### **2️⃣ Deploy on Railway**
```bash
git push railway main
```

### **3️⃣ CI/CD (GitHub Actions)**
Every push to `main` runs **tests & deploys automatically**.

---

## 📊 **Logging & Monitoring**
- **Winston** → Logs API requests & errors  
- **Mixpanel** → Tracks API usage analytics  

---

## 🎯 **Future Improvements**
1️⃣ **AI-powered resume optimization**  
2️⃣ **Multi-language support**  
3️⃣ **Job recommendation system**  

---

## 🤝 **Contributing**
Pull requests are welcome! Please follow the guidelines.

---

## 📩 **Contact**
For support, contact:
📧 **Email:** paulstephenedache@gmail.com  
🌍 **Website:** [stephendache.github.io](https://stephendache.github.io)

---

## ⭐ **Like this project? Give it a star!**
```markdown
⭐ Star this repo on GitHub → [GitHub Repo](https://github.com/stephendache/resume-api)
