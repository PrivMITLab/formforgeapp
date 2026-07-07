import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

app.use('*', cors());

// Health Check API
app.get('/api/health', (c) => c.json({ status: 'ok', time: new Date().toISOString() }));

// Form Submission Edge API Endpoint
app.post('/api/submit/:endpointId', async (c) => {
  const endpointId = c.req.param('endpointId');
  
  // Custom body parsing logic
  const body = await c.req.parseBody();
  
  // TODO: Add honeypot checking and database persistence
  
  return c.json({
    ok: true,
    message: 'Submission received successfully via Hono API Engine!',
    endpointId
  }, 202);
});

// Serve assets / dashboard routes
app.get('/dashboard/*', async (c) => {
  // Cloudflare pages fallback to static index.html
  return c.env.ASSETS.fetch(c.req.raw);
});

export default app;
