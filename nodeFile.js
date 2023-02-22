const fs = require('fs');
const { exec } = require('child_process');

const folderName = 'C:\\Users\\Vika\\Desktop\\task1\\zadatak';

const content = 'Sadrzaj';
const content2 = 'Jos'

fs.writeFile('C:\\Users\\Vika\\Desktop\\task1\\zadatak\\test.txt', content, err => {
  if (err) {
    console.error(err);
  }
});
fs.writeFile('C:\\Users\\Vika\\Desktop\\task1\\zadatak\\test2.txt', content2, err => {
    if (err) {
      console.error(err);
    }
  });

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}

exec('dir /b /a-d C:\\Users\\Vika\\Desktop\\task1\\zadatak', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  
    console.log(`${stdout}`);
    console.error(`${stderr}`);
  });