import * as fs from 'node:fs';
fs.copyFile(
  'dist/ng-pizza-app/index.html',
  'dist/ng-pizza-app/404.html',
  (err) => {
    if (err) {
      console.error('index.html -> 404.html copy failed:');
      throw err;
    }
  }
);
