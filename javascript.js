let nums = ["x:1", "y:2", "x:3", "a:15"];

let dict = nums.reduce((acc, curr) => {
  let [key, value] = curr.split(":");
  acc[key] = (acc[key] || 0) + parseInt(value);
  return acc;
}, {});

let result = Object.keys(dict)
  .sort()
  .filter(key => dict[key] > 0)
  .map(key => `${key}=${dict[key]}`)
  .join(", ");

console.log(result); 
