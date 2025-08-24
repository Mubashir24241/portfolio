# Portfolio Website

A full-stack portfolio website built with the MERN stack (MySQL, Express.js, React.js, Node.js) and Tailwind CSS.

## Features

- Responsive design with Tailwind CSS
- Dynamic content management through MySQL database
- Contact form functionality
- Sections for:
  - About Me
  - Education
  - Experience
  - Projects
  - Contact

## Prerequisites

- Node.js (v14 or higher)
- MySQL
- npm or yarn

## Setup Instructions

### Database Setup

1. Create a MySQL database:
```bash
mysql -u root -p
# Enter your password when prompted
```

2. Configure environment variables:
   - Copy `.env.example` to `.env` in the server directory
   - Update the database credentials in `.env`

3. Run the database setup script:
```bash
cd server
npm run setup-db
```

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The server will start on http://localhost:5000

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The client will start on http://localhost:5173

## Project Structure

```
portfolio/
├── client/                # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.tsx       # Main application component
│   │   └── ...
│   └── ...
├── server/                # Backend Express application
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── config/       # Configuration files
│   │   ├── db/          # Database setup and schemas
│   │   └── index.ts     # Entry point
│   └── ...
└── README.md
```

## Development

1. The frontend is built with React.js and Tailwind CSS
2. The backend uses Express.js with TypeScript
3. MySQL is used for data persistence
4. API endpoints are available at `/api/[resource]`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
