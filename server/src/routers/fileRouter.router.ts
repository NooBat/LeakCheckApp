import multer from 'multer';
import { Router } from 'express';
import { v5 as uuid } from 'uuid';

import fileController from '../controllers/file.controller';
import config from '../utils/config';

const storage = multer.diskStorage({
  destination(_req, _file, cb) {
    cb(
      null,
      `/tmp/__test__/${uuid(
        `${Date.now()}-${Math.round(Math.random() * 1e11)}`,
        config.NAMESPACE
      )}`
    );
  },
  filename(_req, file, cb) {
    cb(null, file.filename);
  },
});

const upload = multer({ storage });

const router = Router();

router.post('/', upload.array('files', 2), async (req, res) => {
  const { files } = req as { files: Express.Multer.File[] | undefined };

  if (!files || files.length < 2) {
    res.status(404).send({ message: 'no file(s) included' });
  } else {
    const headerFile = files.find(
      (file) => file.filename === 'ConcatStringTree.h'
    );
    const implementationFile = files.find(
      (file) => file.filename === 'ConcatStringTree.cpp'
    );

    const successful = fileController.runTest(headerFile, implementationFile);

    if (!successful) {
      res.status(500).send({ message: 'invalid file(s)' });
    } else {
      res.status(200).send();
    }
  }
});

export default router;
