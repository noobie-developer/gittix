import express from 'express';
import { currentUser } from '@apgittix/common'; 

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});


//test
export { router as currentUserRouter }; 