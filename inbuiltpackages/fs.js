fs = require('fs');
fs.writeFileSync("sample.txt", "Node is terrififc. But sync functions block", handleFileCreation);
//console.log('Created a file');
console.log("End");

function handleFileCreation(err){
  if(err) throw err;
  console.log('Created a file');

}