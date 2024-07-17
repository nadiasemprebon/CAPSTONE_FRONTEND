# CAPSTONE_FRONTEND

# CAPSTONE_FRONTEND

# 🌍 Travel Packages Management 🌍

Welcome to the Travel Packages Management project! This is a Spring Boot 3.3 application integrated with Angular for managing travel packages. It includes features such as image upload via Cloudinary and user registration with email confirmation using Gmail.

## 📜 Table of Contents

- [✨ Features](#-features)
- [⚙️ Installation](#️-installation)
- [🚀 Usage](#-usage)
- [🔧 Configuration](#-configuration)
- [📚 API Endpoints](#-api-endpoints)
- [💻 Technologies Used](#-technologies-used)
- [🤝 Contributing](#-contributing)
- [🙏 Acknowledgements](#-acknowledgements)
- [📄 License](#-license)

## ✨ Features

- **👥 User Registration and Authentication**: Users can register and confirm their email via Gmail.
- **🌐 Travel Packages Management**: Create, update, delete, and view travel packages.
- **🖼️ Image Upload**: Upload travel package images to Cloudinary.
- **📱 Frontend Integration**: An Angular frontend for interacting with the backend.

## ⚙️ Installation

1. **📥 Clone the repository**:
    ```bash
    git clone https://github.com/your-username/travel-packages-management.git
    cd travel-packages-management
    ```

2. **Backend Setup**:
    - Navigate to the backend directory:
      ```bash
      cd backend
      ```
    - 🛠️ Configure your `application.properties` file with your database and Cloudinary credentials.
    - ▶️ Run the Spring Boot application:
      ```bash
      ./mvnw spring-boot:run
      ```

3. **Frontend Setup**:
    - Navigate to the frontend directory:
      ```bash
      cd frontend
      ```
    - 📦 Install the dependencies:
      ```bash
      npm install
      ```
    - ▶️ Run the Angular application:
      ```bash
      ng serve
      ```

## 🚀 Usage

1. **📝 Register a new user**: Access the registration page on the frontend and register a new user.
2. **📧 Confirm your email**: Check your email for the confirmation link and confirm your registration.
3. **✈️ Manage travel packages**: Use the frontend interface to create, update, delete, and view travel packages. Upload images as part of the package details.

## 🔧 Configuration

- **✉️ Gmail Configuration**:
  - Set up Gmail SMTP for sending email confirmations.
  - Configure your Gmail credentials in the `application.properties` file.

- **☁️ Cloudinary Configuration**:
  - Set up your Cloudinary account and get your credentials.
  - Configure your Cloudinary credentials in the `application.properties` file.

## 📚 API Endpoints

- **🔒 User Registration and Authentication**:
  - `POST /api/register`: Register a new user.
  - `POST /api/confirm`: Confirm email address.

- **🌐 Travel Packages**:
  - `GET /api/packages`: Get all travel packages.
  - `POST /api/packages`: Create a new travel package.
  - `PUT /api/packages/{id}`: Update a travel package.
  - `DELETE /api/packages/{id}`: Delete a travel package.

## 💻 Technologies Used

- **Backend**:
  - Spring Boot 3.3
  - Spring Security
  - Spring Data JPA
  - Cloudinary

- **Frontend**:
  - Angular
  - Angular Material
  - Bootstrap

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## 🙏 Acknowledgements
I would like to express my gratitude to my colleagues Andrea Petruzzo and Simone Giarnera for their invaluable support. Your help has been essential in the completion of this project. Thank you! 😊

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

Here my backend repository
https://github.com/nadiasemprebon/CAPSTONE_BACKEND



