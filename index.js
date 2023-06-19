import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const init = () => {
  // setting up server
  const server = express();
  server.use(bodyParser.json({ limit: '10mb', extended: true }));
  server.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  server.use(cors());

  const router = express.Router()
  router.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Hello, world'
    })
  })

  server.use(router)

  // get port from .env
  const PORT = process.env.PORT || 5000;

  server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))

};

init();