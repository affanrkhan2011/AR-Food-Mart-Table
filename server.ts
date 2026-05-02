import express from 'express';
import { createServer as createViteServer } from 'vite';
import { createServer } from 'http';
import path from 'path';
import { randomUUID } from 'crypto';

async function startServer() {
  const app = express();
  const httpServer = createServer(app);
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // In-memory data store
  let orders: any[] = [];
  let billRequests: any[] = [];
  let unavailableItems: Record<string, boolean> = {};

  // Simple REST API
  app.get('/api/state', (req, res) => {
    res.json({ orders, billRequests, unavailableItems });
  });

  app.post('/api/orders', (req, res) => {
    const newOrder = {
      id: randomUUID(),
      ...req.body,
      timestamp: new Date().toISOString()
    };
    orders.push(newOrder);
    res.json(newOrder);
  });

  app.patch('/api/orders/:id', (req, res) => {
    const { id } = req.params;
    const index = orders.findIndex(o => o.id === id);
    if (index !== -1) {
      orders[index] = { ...orders[index], ...req.body };
      res.json(orders[index]);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  });

  app.post('/api/billRequests', (req, res) => {
    const newRequest = {
      id: randomUUID(),
      ...req.body,
      timestamp: new Date().toISOString()
    };
    billRequests.push(newRequest);
    res.json(newRequest);
  });

  app.patch('/api/billRequests/:id', (req, res) => {
    const { id } = req.params;
    const index = billRequests.findIndex(r => r.id === id);
    if (index !== -1) {
      billRequests[index] = { ...billRequests[index], ...req.body };
      res.json(billRequests[index]);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  });

  app.patch('/api/menuState', (req, res) => {
    unavailableItems = { ...unavailableItems, ...req.body };
    res.json({ unavailableItems });
  });

  // Health check API
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  httpServer.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
