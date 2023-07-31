const express = require('express');
import loteriaRoutes from './routes/loteriaRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', loteriaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default PORT;