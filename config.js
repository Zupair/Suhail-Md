const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252653553580";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_53_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDUzLFxuICAgICAgICA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkwLFxuICAgICAgICA3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA0LFxuICAgICAgICAxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiemJWWDB4NkIzcWNDcWlKSWxmU3d5YUtYaHQ4MkNXNVhwNHJCakovTzhyMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYXhzN1FHczdTb3lSSlJwOTRsWnpwQVwiLFxuICBcInBob25lSWRcIjogXCIwMzVjMWViYi1jNmQ0LTRjMjktOWRlZi1jODdkZTBmNGQ2MDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICAyNDgsXG4gICAgICAxMixcbiAgICAgIDIwNCxcbiAgICAgIDU0LFxuICAgICAgMTIwLFxuICAgICAgMTg0LFxuICAgICAgMTI1LFxuICAgICAgMTY4LFxuICAgICAgMTYsXG4gICAgICAxNzEsXG4gICAgICAxNjEsXG4gICAgICAxODUsXG4gICAgICAxMTAsXG4gICAgICAxMzUsXG4gICAgICAyMTcsXG4gICAgICAyMDIsXG4gICAgICAxMjksXG4gICAgICAxNDAsXG4gICAgICA4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICA2LFxuICAgICAgNzMsXG4gICAgICAyMzIsXG4gICAgICAyMTcsXG4gICAgICAxOTMsXG4gICAgICAyMzEsXG4gICAgICA1OSxcbiAgICAgIDI0LFxuICAgICAgNjIsXG4gICAgICAxOTgsXG4gICAgICAyNTIsXG4gICAgICAxMzMsXG4gICAgICA3MCxcbiAgICAgIDEyNyxcbiAgICAgIDE1MixcbiAgICAgIDMxLFxuICAgICAgNTcsXG4gICAgICAxNzcsXG4gICAgICAxMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEVXVFNFTkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjY1MzU1MzU4MDo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTcxMTg5MDQzNDQ4MjM6NzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1dWcFp3SEVPcjlyYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyN2VXVUx2cW9DNU1kK2JRandET2Y3QW5WT0todU5QeEQ1blVWSU1WYXhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRHdE45SHQ0dWpZQWZjYjBmUEFZczlxNnVXOUx1dm54V3h0SnlRS01FK2pCSHdoZXVrS0ZuT1dpU3czR0lJeUdOejBRWmd5b3haN1hZekpEWTdQK0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlNQkgzcWxNRXc1bmZzWE80RzhjM0xTL1NFYWtFK2FXY25LeWdEeTJmYlVid3RWUmQrdUZpWmQrUVpHZXRpUTdMV3VBWWw2U2lxVEl3ckhzOXdYTENBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY1MzU1MzU4MDo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0MTgwMzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCSThcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJJOC5qc29uIjogIntcImtleURhdGFcIjpcInFnV1FjeXFMY0FoNkUzeU1Db2t1aEdIa0tnajdIUjNFUlFKeUgxeWZPV0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzODM3NzQ0NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
