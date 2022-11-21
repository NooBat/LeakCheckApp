import multer from 'multer';
import { Router } from 'express';

const options: multer.Options = { dest: 'scripts/' };
const upload: multer.Multer = multer(options) as multer.Multer;

const router = Router();

router.post('/', upload.array('files', 2), async (req, res) => {});

export default router;
