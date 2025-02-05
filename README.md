# 🚀 Resume & Cover Letter Generator API

![License](https://img.shields.io/badge/license-MIT-green) ![Node.js](https://img.shields.io/badge/node.js-18.x-green) ![Express.js](https://img.shields.io/badge/express.js-4.x-blue) ![Paystack](https://img.shields.io/badge/Paystack-API-orange) ![Swagger](https://img.shields.io/badge/Swagger-UI-yellow)

The **Resume & Cover Letter Generator API** is a powerful **Node.js + Express API** that generates professional **resumes & cover letters** using **AI (GPT-4)**. It includes **Paystack integration** for payments, API authentication, and **Swagger documentation** for easy testing.

## 📌 **Features**
✅ AI-generated **resumes & cover letters** using OpenAI  
✅ **Paystack payment integration** for monetization  
✅ **API Key authentication** for secure access  
✅ **MongoDB/PostgreSQL database support**  
✅ **Swagger UI documentation** for easy testing  
✅ **Automated testing with Jest + Supertest**  
✅ **CI/CD with GitHub Actions (Auto Deployment to Vercel/Railway)**  
✅ **Logging with Winston & Mixpanel for analytics**

---

## 📦 **Installation**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/resume-api.git
cd resume-api
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the project root and add:
```ini
PORT=5000
OPENAI_API_KEY=your_openai_api_key
PAYSTACK_SECRET_KEY=your_paystack_secret_key
MONGO_URI=your_mongodb_connection_string
```

---

## 🚀 **Running the API Locally**
Start the API in development mode:
```bash
npm run dev
```
It should be accessible at:
```
http://localhost:5000
```

### **🛠 Test API Endpoints Using Swagger**
Visit:
```
http://localhost:5000/api-docs
```

---

## 📝 **API Endpoints**
### **💡 Resume & Cover Letter Generation**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/resumes/generate-resume` | Generates a resume using AI |
| `POST` | `/api/resumes/generate-cover-letter` | Creates a personalized cover letter |

#### **Example Request:**
```json
{
  "name": "John Doe",
  "experience": "Software Engineer at Google",
  "skills": "JavaScript, React, Node.js",
  "education": "B.Sc Computer Science"
}
```

#### **Example Response:**
```json
{
  "resume": "John Doe is a skilled Software Engineer at Google..."
}
```

---

### **💰 Payment & Subscription (Paystack)**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/payments/pay` | Initiates a payment with Paystack |
| `GET`  | `/api/payments/verify-payment/:reference` | Verifies payment and returns API key |

#### **Example Response (Successful Payment):**
```json
{
  "message": "Payment successful",
  "apiKey": "ab12cd34ef56gh78"
}
```

---

## 🔑 **Authentication**
This API requires **API keys** for resume generation.  
Include the API key in the request headers:
```http
x-api-key: your_api_key_here
```

---

## ✅ **Running Automated Tests**
Run Jest tests to verify the API:
```bash
npm test
```

---

## 🚀 **Deployment**
### **🔹 Deploy to Vercel**
```bash
vercel
```

### **🔹 Deploy to Railway**
1️⃣ Push your code to GitHub  
2️⃣ Go to [Railway.app](https://railway.app) and create a project  
3️⃣ Connect your GitHub repo & deploy 🎉  

---

## 🛠 **Tech Stack**
- **Backend:** Node.js, Express.js
- **AI:** OpenAI GPT-4
- **Payments:** Paystack API
- **Database:** MongoDB / PostgreSQL
- **Authentication:** API Keys
- **Logging:** Winston, Mixpanel
- **Docs:** Swagger UI
- **Testing:** Jest, Supertest
- **CI/CD:** GitHub Actions

---

## 🎯 **Future Improvements**
- [ ] Add **Google Cloud Functions** for better scalability  
- [ ] Implement **PDF resume export**  
- [ ] Create a **React frontend UI**  

---

## 🤝 **Contributing**
Contributions are welcome!  
Fork the repo, create a branch, and submit a PR.  

---

## 📄 **License**
This project is licensed under the **MIT License**.

---

## ✨ **Star this Repo! ⭐**
If you found this useful, consider **starring** ⭐ the repo & sharing it! 😊  