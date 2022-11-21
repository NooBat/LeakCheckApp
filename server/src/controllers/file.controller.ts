import cp from 'child_process';
import fs from 'fs';
import path from 'path';

function runTest(
  headerFile: Express.Multer.File | undefined,
  implementationFile: Express.Multer.File | undefined
): boolean {
  if (!headerFile || !implementationFile) {
    return false;
  }

  const destDir = headerFile.destination;
  const sourceDir = path.join(process.cwd(), 'scripts');

  fs.copyFileSync(
    path.join(sourceDir, 'main.cpp'),
    path.join(destDir, 'main.cpp')
  );
  fs.copyFileSync(path.join(sourceDir, 'main.h'), path.join(destDir, 'main.h'));

  const execFilePath = fs.realpathSync('../bin/main.sh');
  fs.chmodSync(execFilePath, 0o755);

  cp.spawn(`sh ${execFilePath} ${destDir} 2>&1 | tee output.txt`);

  return true;
}

export default {
  runTest,
};
