# Storage Management Solution

<div align="center">
  <h3 align="center">Final Year Project</h3>
  <p align="center">Federal College of Animal Health and Production Technology</p>
  <p align="center"><strong>Student:</strong> Abdullahi</p>
  <p align="center"><strong>Department:</strong> Computer Science</p>
  <p align="center"><strong>Supervisor:</strong> [Supervisor Name]</p>
  <p align="center"><strong>Academic Year:</strong> 2024/2025</p>
</div>

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Objectives](#objectives)
3. [Features](#features)
4. [Technology Stack](#technology-stack)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Project Structure](#project-structure)
8. [Screenshots](#screenshots)
9. [Conclusion](#conclusion)

## 🎯 Project Overview

This Storage Management Solution is a comprehensive web application designed to provide efficient file storage, organization, and sharing capabilities. The project demonstrates the application of modern web development technologies and best practices in creating a user-friendly file management system.

The application allows users to:
- Upload and organize various file types
- Manage storage space efficiently
- Share files with other users
- Access files from anywhere through a web interface
- Monitor storage usage with detailed analytics

## 🎯 Objectives

The primary objectives of this project include:

1. **File Management**: Develop a robust system for uploading, organizing, and managing different types of files
2. **User Authentication**: Implement secure user authentication and authorization
3. **Storage Analytics**: Provide detailed insights into storage usage and file statistics
4. **File Sharing**: Enable secure file sharing between users
5. **Responsive Design**: Create a mobile-friendly interface that works across all devices
6. **Modern Architecture**: Demonstrate proficiency in modern web development practices

## ✨ Features

### 🔐 User Authentication
- Secure sign-up and sign-in functionality
- OTP (One-Time Password) verification
- User session management
- Password protection and security

### 📁 File Management
- **Upload**: Support for multiple file types (documents, images, videos, audio)
- **Organize**: Categorize files by type and date
- **Search**: Global search functionality across all files
- **Sort**: Multiple sorting options (date, name, size)
- **Preview**: File preview capabilities

### 📊 Dashboard & Analytics
- Storage usage visualization with charts
- File type distribution analysis
- Recent uploads tracking
- Storage space monitoring

### 🔗 File Sharing
- Share files with specific users
- Manage sharing permissions
- Track shared file access

### 📱 Responsive Design
- Mobile-first approach
- Cross-platform compatibility
- Intuitive user interface
- Modern design principles

## 🛠️ Technology Stack

### Frontend
- **Next.js 15**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **ShadCN/UI**: Modern component library

### Backend & Services
- **Appwrite**: Backend-as-a-Service platform
- **Appwrite Storage**: File storage solution
- **Appwrite Database**: NoSQL database
- **Appwrite Authentication**: User authentication service

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Git**: Version control

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Appwrite account and project

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/ibrahimAlamin347/storage_management_solution-main.git
   cd storage_management_solution-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
   NEXT_PUBLIC_APPWRITE_PROJECT="your-project-id"
   NEXT_PUBLIC_APPWRITE_DATABASE="your-database-id"
   NEXT_PUBLIC_APPWRITE_USERS_COLLECTION="your-users-collection-id"
   NEXT_PUBLIC_APPWRITE_FILES_COLLECTION="your-files-collection-id"
   NEXT_PUBLIC_APPWRITE_BUCKET="your-bucket-id"
   NEXT_APPWRITE_KEY="your-api-key"
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Getting Started
1. Create an account using the sign-up page
2. Verify your email with the OTP sent to your email
3. Sign in to access the dashboard
4. Start uploading and managing your files

### File Operations
- **Upload**: Drag and drop files or click the upload button
- **View**: Click on files to view details or download
- **Share**: Use the share option to collaborate with others
- **Delete**: Remove files you no longer need
- **Rename**: Change file names as needed

### Dashboard Features
- Monitor your storage usage
- View recent uploads
- Check file type distribution
- Access quick navigation to different file categories

## 📁 Project Structure

```
storage_management_solution-main/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (root)/            # Main application pages
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # ShadCN UI components
│   └── ...               # Custom components
├── lib/                  # Utility functions and configurations
│   ├── actions/          # Server actions
│   ├── appwrite/         # Appwrite configuration
│   └── utils.ts          # Utility functions
├── types/                # TypeScript type definitions
├── public/               # Static assets
└── constants/            # Application constants
```

## 📸 Screenshots

*[Screenshots will be added here showing the application interface]*

- Dashboard view with storage analytics
- File management interface
- Authentication pages
- Mobile responsive design

## 🎓 Conclusion

This Storage Management Solution project successfully demonstrates the implementation of modern web development technologies and best practices. The application provides a comprehensive file management system with user authentication, file organization, sharing capabilities, and detailed analytics.

### Key Achievements
- ✅ Modern, responsive web application
- ✅ Secure user authentication system
- ✅ Efficient file management capabilities
- ✅ Real-time storage analytics
- ✅ Cross-platform compatibility
- ✅ Scalable architecture

### Learning Outcomes
Through this project, I have gained practical experience in:
- Modern React development with Next.js
- TypeScript implementation
- Backend-as-a-Service integration
- UI/UX design principles
- Database management
- API development and integration
- Version control with Git
- Deployment and hosting

### Future Enhancements
Potential improvements for future development:
- Advanced file encryption
- Cloud storage integration
- Real-time collaboration features
- Advanced search algorithms
- Mobile application development
- AI-powered file organization

---

**Project submitted in partial fulfillment of the requirements for the award of [Degree/Certificate] in Computer Science at Federal College of Animal Health and Production Technology.**

**© 2024 Abdullahi. All rights reserved.**
