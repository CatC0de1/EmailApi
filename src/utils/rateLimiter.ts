import rateLimit from 'express-rate-limit';

const emailLimiter = rateLimit({
  windowMs: 60 * 1000,  // interval di reset tiap 1 menit
  max: 5,  // max 5 request per IP
  handler: (_req, res) => {
    res.status(429).json({
      success: false,
      error: 'Too many request, try again later',
    });
  },
  standardHeaders: true,
  legacyHeaders: true,
});

export default emailLimiter;
