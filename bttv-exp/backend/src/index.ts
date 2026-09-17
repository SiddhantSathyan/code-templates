import http from 'http';
import app from './app';

const server = http.createServer(app);
const PORT = process.env.PORT;

server.listen(PORT || 3000, () => {
  console.log(`Server is running on port ${PORT || 3000}`);
});