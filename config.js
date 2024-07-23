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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VathusJP20yWxQ6N643";
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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "False";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 100
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_19_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxLFxuICAgICAgICA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NixcbiAgICAgICAgNTksXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgMTA0LFxuICAgICAgICAzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDU1LFxuICAgICAgICAxMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDg3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMixcbiAgICAgICAgNjgsXG4gICAgICAgIDU1LFxuICAgICAgICA0NixcbiAgICAgICAgMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4LFxuICAgICAgICA4NixcbiAgICAgICAgNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxODksXG4gICAgICAgIDUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWk9JZFVYcDhYeDJhRjVZeEszT3hXVERSOG1OR1pXOVZlTkxJVmRZaGpjTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTI2NTQzMjI3NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFEREM5OEU1RUFCMjAxRjNEN0IzOEI5OEJCQ0E1RTRGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTcyNjM2OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJreXh0a2laRFJ1R0JTal9CQ3BGTlVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBmYjY3MDQ2LWJkNTUtNDhkYi1iNzk5LTlmODA2NTY3ODM1YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDE4NSxcbiAgICAgIDE5MSxcbiAgICAgIDE0MyxcbiAgICAgIDQwLFxuICAgICAgNzUsXG4gICAgICAxNjMsXG4gICAgICAxMzgsXG4gICAgICA5MixcbiAgICAgIDEyMixcbiAgICAgIDE4NyxcbiAgICAgIDE5MCxcbiAgICAgIDY4LFxuICAgICAgMjQ3LFxuICAgICAgNixcbiAgICAgIDM1LFxuICAgICAgMTgzLFxuICAgICAgMzAsXG4gICAgICAxODEsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgOCxcbiAgICAgIDIwLFxuICAgICAgNTgsXG4gICAgICAyMDMsXG4gICAgICAxODIsXG4gICAgICAxNjksXG4gICAgICAxNjIsXG4gICAgICAyMDksXG4gICAgICAyMDEsXG4gICAgICA4MCxcbiAgICAgIDIyNSxcbiAgICAgIDE5NSxcbiAgICAgIDMxLFxuICAgICAgMjUwLFxuICAgICAgMTQ3LFxuICAgICAgMjQ2LFxuICAgICAgMjM3LFxuICAgICAgODMsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZWVo0VDlEOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjU0MzIyNzQ1OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNTIwMTU4NjMwNzE2MTo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ092S3NXOFFtK3Y5dEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidUVOZ2REazR6bDFyajl5TWN0elpwWldNL2M4dlhENTVzcXd5V1MwMTNpND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJT2xWSVNaYmdZcWh6ZFA1NVUraldqRy9qbDFzekpBV3RGOFV2andaRmtKaFZZbFdkWENweGo2L0daMWQ3Y3cwZEZWNzdMbCtrVVhnWm8xU0Y4N2FBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyMzd1RnFQd3dyV3AxdFBUSnZqMjhwVVRhdUlHTk9udGRJN0ZBcDFQNjhLUjB0eENlOG1SZEJjdTRaVVRzSU4vWndHTkREcitYZUZwVVRGVjVOZ29qdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2NTQzMjI3NDU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzI2MzY3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUcxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNRzEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHMTJJdEZJb3QzdG5TSjJhQUh6VFhVa2J4a0RxM1hZR2ZHNTJVM3k2aDNVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzMzU5NjI2NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTY2NTMxMDY1MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ZUPAIR",


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
