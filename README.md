# FF ID BuySell - Free Fire Account Marketplace

A modern, full-stack web application for buying and selling Free Fire gaming accounts. Built with Next.js 15, MongoDB, and NextAuth for secure authentication.

## 🚀 Features

### 🎮 Core Functionality
- **Account Marketplace**: Browse and purchase Free Fire accounts
- **Secure Authentication**: NextAuth with credentials and social login
- **Admin Dashboard**: Complete admin panel for managing users and accounts
- **Real-time Data**: Dynamic content with MongoDB integration
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### 🎨 UI/UX Features
- **Dark/Light Mode**: System-wide theme switching
- **Smooth Animations**: AOS (Animate On Scroll) throughout the site
- **Modern Components**: Shadcn/ui component library
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Mobile Navigation**: Collapsible mobile menu

### 🔐 Authentication & Security
- **NextAuth Integration**: Secure session management
- **Role-based Access**: Admin and user roles
- **Protected Routes**: Dashboard access control
- **Password Hashing**: Bcrypt for secure password storage

### 📱 Pages & Sections
- **Homepage**: Hero section, recent IDs, FAQ
- **All IDs**: Paginated account listings with search
- **Contact**: Email integration with EmailJS
- **Auth Pages**: Login/Register with form validation
- **Admin Dashboard**: User management, ID management, analytics

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **React 19**: Latest React features
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: Modern component library
- **Lucide React**: Beautiful icons
- **AOS**: Animate on scroll library

### Backend
- **Next.js API Routes**: Serverless API endpoints
- **MongoDB**: NoSQL database with Mongoose ODM
- **NextAuth**: Authentication library
- **Bcrypt**: Password hashing

### Development Tools
- **Turbopack**: Fast bundler for development
- **ESLint**: Code linting
- **PostCSS**: CSS processing


# Database
MONGODB_URI=your_mongodb_connection_string

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# EmailJS (for contact form)
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_PUBLIC_KEY=your_emailjs_public_key

# ImageBB (for image uploads)
NEXT_PUBLIC_IMAGEBB_API_KEY=your_imagebb_api_key

# Other
NEXT_PUBLIC_NUMBER=your_contact_number

