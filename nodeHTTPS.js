const https = require('node:https');

https.get('https://reqres.in/api/users?page=2', (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const users = JSON.parse(data).data;
    const userNames = users.map(user => `${user.first_name}, `);
    console.log(userNames.join('\n'));
  });
}).on('error', (e) => {
  console.error(e);
});
