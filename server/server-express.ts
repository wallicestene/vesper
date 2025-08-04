// import express, { Request, Response } from 'express';
// import cors from 'cors';
// import morgan from 'morgan';

// const app = express();
// const PORT: number = parseInt(process.env.PORT as string) || 3030;

// // Middleware
// app.use(cors());
// app.use(morgan('combined'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.get('/', (req: Request, res: Response) => {
//   res.json({ 
//     message: 'Hello World from Express TypeScript server!',
//     timestamp: new Date().toISOString()
//   });
// });

// app.get('/api/health', (req: Request, res: Response) => {
//   res.json({ 
//     status: 'OK',
//     uptime: process.uptime(),
//     timestamp: new Date().toISOString()
//   });
// });

// // Error handling middleware
// app.use((err: Error, req: Request, res: Response, next: any) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Something went wrong!' });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Express server is running on http://localhost:${PORT}`);
//   console.log(`📊 Health check available at http://localhost:${PORT}/api/health`);
// });

// export default app;
