require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const open = require('open');

const authRouter = require('./routes/auth');
const coursesRouter = require('./routes/courses');
const enrollmentsRouter = require('./routes/enrollments');
const profilesRouter = require('./routes/profiles');
const paymentsRouter = require('./routes/payments');
const courseManagementRouter = require('./routes/courseManagement');

const app = express();

// Environment detection
const isProduction = process.env.NODE_ENV === 'production';
const ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5000';

// CORS configuration
app.use(cors({ 
  origin: ORIGIN, 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Security headers for production
if (isProduction) {
  app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    next();
  });
}

app.use(express.json());
app.use(morgan(isProduction ? 'combined' : 'dev'));

// Serve static frontend from /public
const publicRoot = path.join(__dirname, 'public');
app.use(express.static(publicRoot));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'learntrack-api', time: new Date().toISOString() });
});

app.use('/api', authRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/enrollments', enrollmentsRouter);
app.use('/api/profiles', profilesRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/course-management', courseManagementRouter);

app.use((req, res) => {
  // If the request is for an API path, return JSON 404; otherwise serve 404 page
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'Not found', path: req.path });
  }
  return res.status(404).sendFile(path.join(publicRoot, 'errors', '404.html'));
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  console.error(err);
  const status = err.status || 500;
  if (req.path && req.path.startsWith('/api/')) {
    return res.status(status).json({ error: err.message || 'Server error' });
  }
  const map = { 401: '401.html', 403: '403.html', 404: '404.html', 500: '500.html' };
  const file = map[status] || '500.html';
  return res.status(status).sendFile(path.join(publicRoot, 'errors', file));
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0'; // Bind to all interfaces for Render

app.listen(PORT, HOST, async () => {
  const protocol = isProduction ? 'https' : 'http';
  const url = isProduction ? (process.env.FRONTEND_URL || `${protocol}://localhost:${PORT}`) : `http://localhost:${PORT}`;
  
  console.log('='.repeat(50));
  console.log(`🚀 LearnTrack Server Started`);
  console.log('='.repeat(50));
  console.log(`Environment: ${isProduction ? 'PRODUCTION' : 'DEVELOPMENT'}`);
  console.log(`Host: ${HOST}`);
  console.log(`Port: ${PORT}`);
  console.log(`URL: ${url}`);
  console.log(`CORS Origin: ${ORIGIN}`);
  console.log('='.repeat(50));
  
  // Only auto-open browser in development
  if (!isProduction) {
    console.log(`Opening landing page...`);
    try {
      await open(`${url}/landing.html`);
    } catch (err) {
      console.log(`Could not auto-open browser. Please visit: ${url}/landing.html`);
    }
  } else {
    console.log(`✅ Production server ready at: ${url}`);
    console.log(`📊 Health check: ${url}/api/health`);
  }
});
