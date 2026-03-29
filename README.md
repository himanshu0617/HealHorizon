# HealHorizon

A comprehensive healthcare management platform connecting patients, doctors, and administrators. Book appointments, manage medical profiles, and streamline healthcare services seamlessly.

---

## 🌟 Features

### Patient Portal (Client)
- User registration and login
- Book appointments with doctors
- View available doctors by speciality
- Manage personal health profile
- Track appointment history
- Receive appointment notifications
- Payment integration with Razorpay

### Doctor Portal (Admin Role: Doctor)
- Doctor profile management
- View and manage appointments
- Update availability status
- Track patient records
- Manage consultation history

### Admin Dashboard
- Add and manage doctors
- View all appointments system-wide
- Manage platform users
- Monitor system metrics
- Handle administrative tasks

### Core Features
- **JWT Authentication** - Secure user sessions
- **Role-based Access Control** - Patient, Doctor, Admin roles
- **Cloud Storage** - Cloudinary integration for image uploads
- **Email Notifications** - SMTP integration for alerts
- **Payment Processing** - Razorpay integration
- **Real-time Data** - MongoDB for data persistence

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Navigation
- **Axios** - HTTP client
- **Context API** - State management

### Backend
- **Node.js & Express** - Server framework
- **MongoDB** - NoSQL database
- **JWT** - Authentication
- **Multer** - File uploads
- **Cloudinary** - Image management
- **Razorpay** - Payment gateway
- **Nodemailer** - Email service

### Deployment
- **Vercel** - Frontend & Backend hosting
- **MongoDB Atlas** - Cloud database

---

## 📁 Project Structure

```
HealHorizon/
├── client/              # Patient web application (React)
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── context/     # Context API setup
│   │   ├── pages/       # Page components
│   │   └── assets/      # Images, styles
│   └── package.json
├── admin/               # Admin web application (React)
│   ├── src/
│   │   ├── components/  # Admin components
│   │   ├── context/     # Context API setup
│   │   ├── pages/       # Admin pages
│   │   └── assets/      # Images, styles
│   └── package.json
├── server/              # Backend API (Node.js)
│   ├── config/          # Database & Cloudinary config
│   ├── controllers/     # Route handlers
│   ├── middleware/      # Authentication & file upload
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── server.js        # Express app entry
│   └── .env.example     # Environment variables template
└── README.md            # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ and npm installed
- MongoDB Atlas account (free tier available)
- Cloudinary account for image storage
- Razorpay account for payment processing
- SMTP credentials (Gmail recommended)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/himanshu0617/HealHorizon.git
cd HealHorizon
```

2. **Setup Server**
```bash
cd server
npm install
```

3. **Setup Client**
```bash
cd ../client
npm install
```

4. **Setup Admin**
```bash
cd ../admin
npm install
```

---

## ⚙️ Environment Configuration

### Server `.env` File
Create `server/.env` with the following:

```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/HealHorizon

# JWT Secret Key
JWT_SECRET=your_strong_random_secret_key_here

# Admin Credentials
ADMIN_EMAIL=admin@healhorizon.com
ADMIN_PASSWORD=Admin@12345

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key

# Razorpay Payment Gateway
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret

# SMTP Configuration (for emails)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Other Settings
CURRENCY=INR
PORT=4000
```

### Getting Credentials

**MongoDB Atlas**
1. Visit [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create free cluster
3. Copy connection string

**Cloudinary**
1. Sign up at [Cloudinary](https://cloudinary.com)
2. Get API credentials from dashboard

**Razorpay**
1. Sign up at [Razorpay](https://razorpay.com)
2. Get API keys from settings

**Gmail SMTP**
1. Enable 2FA on Gmail account
2. Generate app-specific password
3. Use credential in SMTP_PASS

---

## 💻 Running Locally

### Terminal 1 - Start Server
```bash
cd server
npm start
# Server runs on http://localhost:4000
```

### Terminal 2 - Start Client
```bash
cd client
npm run dev
# Client runs on http://localhost:5173
```

### Terminal 3 - Start Admin
```bash
cd admin
npm run dev
# Admin runs on http://localhost:5174
```

---

## 🔨 Build for Production

### Build Client
```bash
cd client
npm run build
# Creates `dist/` folder
```

### Build Admin
```bash
cd admin
npm run build
# Creates `dist/` folder
```

### Server
```bash
cd server
# No build needed (Node.js runs source directly)
```

---

## 🌍 Deployment on Vercel

### Deploy via Vercel Dashboard

1. **Connect GitHub Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Import your HealHorizon repo

2. **Deploy Client**
   - New Project → Select repo
   - Framework: Vite
   - Root Directory: `client/`
   - Deploy

3. **Deploy Admin**
   - New Project → Select repo
   - Framework: Vite
   - Root Directory: `admin/`
   - Deploy

4. **Deploy Server**
   - New Project → Select repo
   - Framework: Other
   - Root Directory: `server/`
   - Add Environment Variables from `.env`
   - Deploy

5. **Update API URLs**
   - In client/admin code, replace `localhost:4000` with deployed server URL
   - Commit and Vercel auto-redeploys

---

## 📋 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/admin/login` - Admin login
- `POST /api/doctor/login` - Doctor login

### Appointments
- `GET /api/user/appointments` - Get user appointments
- `POST /api/user/book-appointment` - Book new appointment
- `GET /api/doctor/appointments` - Get doctor's appointments
- `GET /api/admin/appointments` - Get all appointments

### Users & Doctors
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `GET /api/doc/all-doctors` - Get all doctors
- `GET /api/doc/doctor/:id` - Get doctor details
- `POST /api/admin/add-doctor` - Add new doctor (Admin only)

---

## 🔐 Security Features

- **JWT Token Authentication** - Secure session management
- **Password Hashing** - Bcrypt encryption
- **Role-Based Access Control** - Patient/Doctor/Admin segregation
- **Input Validation** - Prevent SQL injection and XSS
- **CORS Configuration** - API access control
- **Environment Variables** - Sensitive data protection

---

## 🐛 Troubleshooting

### MongoDB Connection Failed
- Verify connection string in `.env`
- Add your IP to MongoDB Atlas Network Access
- Check username/password

### Build Errors
- Delete `node_modules/` and `npm install` again
- Clear npm cache: `npm cache clean --force`

### Deployment Issues
- Check Vercel build logs in dashboard
- Ensure all environment variables are set
- Verify root directories match project structure

---

## 📞 Support & Issues

For bugs or feature requests, please open an issue on [GitHub](https://github.com/himanshu0617/HealHorizon/issues).

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 👨‍💻 Author

**Himanshu Karan**
- GitHub: [@himanshu0617](https://github.com/himanshu0617)
- Email: himanshu.karan@example.com

---

## 🎯 Future Enhancements

- [ ] Video consultation feature
- [ ] Prescription management
- [ ] Medical reports storage
- [ ] Insurance integration
- [ ] Mobile app (React Native)
- [ ] Real-time notifications
- [ ] Analytics dashboard

---

Happy healing! 🏥✨
#   D e p l o y m e n t   f i x  
 