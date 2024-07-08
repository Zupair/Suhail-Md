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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_06_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgzLFxuICAgICAgICA3MSxcbiAgICAgICAgOTksXG4gICAgICAgIDUzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYxLFxuICAgICAgICA3MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyLFxuICAgICAgICA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MixcbiAgICAgICAgMTUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgODcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODksXG4gICAgICAgIDExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODAsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyLFxuICAgICAgICA5NixcbiAgICAgICAgMTMwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYyLFxuICAgICAgICA2MSxcbiAgICAgICAgMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTUNXbHUyVjQzQmIzN2JWR0VabHcrcVQ3U1lraVdIT3lNclViUVF6WlQ0MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTI2NTM1NTM1ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI3RUE1NEFCNjUxQTg4OERGODRDNTI0QTA5QzM3NUNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQ2NTYxMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoc2J2YkpWT1JHeXVwUFpSeFBvSDlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ5ODQxNmZiLWZlOTItNDFmNS05N2JkLTk2ZTU3MDdjNzNhN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTMsXG4gICAgICAxMTUsXG4gICAgICA5NCxcbiAgICAgIDI0NixcbiAgICAgIDE0OSxcbiAgICAgIDIyNSxcbiAgICAgIDE3NSxcbiAgICAgIDIyNyxcbiAgICAgIDc0LFxuICAgICAgMzIsXG4gICAgICAyMSxcbiAgICAgIDEwMCxcbiAgICAgIDI1MyxcbiAgICAgIDEwNixcbiAgICAgIDIxLFxuICAgICAgMTg2LFxuICAgICAgMTMzLFxuICAgICAgMjI5LFxuICAgICAgMTUzLFxuICAgICAgMjQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NCxcbiAgICAgIDQ5LFxuICAgICAgMTg0LFxuICAgICAgMjMyLFxuICAgICAgMjEzLFxuICAgICAgODAsXG4gICAgICAxNjEsXG4gICAgICA4NixcbiAgICAgIDEyMyxcbiAgICAgIDEzMCxcbiAgICAgIDExOSxcbiAgICAgIDIxMSxcbiAgICAgIDE4NSxcbiAgICAgIDI0LFxuICAgICAgMjEyLFxuICAgICAgMTE1LFxuICAgICAgMTU0LFxuICAgICAgMjA0LFxuICAgICAgMjA2LFxuICAgICAgOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVhBQ1NXQjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjY1MzU1MzU4MDo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTcxMTg5MDQzNDQ4MjM6NzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2VWcFp3SEVNTHhzTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyN2VXVUx2cW9DNU1kK2JRandET2Y3QW5WT0todU5QeEQ1blVWSU1WYXhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFjdWVBckhQTS9hZXEwNXlFMEtPb2ZGVGRZUENqVlZnRjhMNk8xMmJFbDRQMjJtRlFjVDdpcm5xNGFoZm9GZlprVzhHUXNHUkZPRE5QTXhIckI0Q0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNJSEgyMmcwZmk4anNxQW5leVpvb2xSOG5SbHVxamt6Y0QxMHltekU1Nk5zcFJBS0h6SUpVRUJUcWYxUmRrOGN4bFgvRmszZGpKK1U0TjkxYlJWdWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY1MzU1MzU4MDo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NjU2MDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCSThcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJJOC5qc29uIjogIntcImtleURhdGFcIjpcInFnV1FjeXFMY0FoNkUzeU1Db2t1aEdIa0tnajdIUjNFUlFKeUgxeWZPV0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzODM3NzQ0NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
