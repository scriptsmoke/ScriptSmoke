@Echo off
scriptcs ./SmokeScript/src/msg.cs
node ./SmokeScript/src/fileContent.js
node ./SmokeScript/src/index.js
scriptcs ./SmokeScript/src/index.cs