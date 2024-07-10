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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_59_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDU5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDM4LFxuICAgICAgICA5NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDczLFxuICAgICAgICA1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM4LFxuICAgICAgICA1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDU3LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICA4MixcbiAgICAgICAgNjksXG4gICAgICAgIDY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NyxcbiAgICAgICAgMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MyxcbiAgICAgICAgODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDM4LFxuICAgICAgICA1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNlhNYiswVTgzYjhFNFc0L2xkd0llYmpRbk8zUDFxS2hrRGczQnlwMWJ5Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTI2NTM1NTM1ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZDMzE0Nzk3OEFDODRDREIzMDhDMEM1RTM3M0RCQzM2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDYyMzU5N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGZlVTdE83a1NnLW1KTWwwNjh5em9BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY4ZDQxMjZiLTNhNWEtNDA5Ni1iNGQzLTNiYThiODRkMzVkYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyMzQsXG4gICAgICAxMzAsXG4gICAgICAyMixcbiAgICAgIDE4LFxuICAgICAgNTMsXG4gICAgICAyMzcsXG4gICAgICAyNDMsXG4gICAgICAxNzEsXG4gICAgICAxMTAsXG4gICAgICAxNjIsXG4gICAgICA5NyxcbiAgICAgIDI1MixcbiAgICAgIDE1LFxuICAgICAgMjEwLFxuICAgICAgMjE1LFxuICAgICAgMjE0LFxuICAgICAgMjgsXG4gICAgICA5MCxcbiAgICAgIDIyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICA0MSxcbiAgICAgIDI0MixcbiAgICAgIDExMixcbiAgICAgIDgyLFxuICAgICAgMjMxLFxuICAgICAgNzMsXG4gICAgICAxMzgsXG4gICAgICA2MixcbiAgICAgIDEwMyxcbiAgICAgIDE4MSxcbiAgICAgIDE0OSxcbiAgICAgIDkyLFxuICAgICAgMjAwLFxuICAgICAgMzMsXG4gICAgICA4OCxcbiAgICAgIDIzNixcbiAgICAgIDIwMyxcbiAgICAgIDE0OCxcbiAgICAgIDE4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKRUwyNUhERFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjUzNTUzNTgwOjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NzExODkwNDM0NDgyMzo4M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPeVZwWndIRU9QRHVyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjI3ZVdVTHZxb0M1TWQrYlFqd0RPZjdBblZPS2h1TlB4RDVuVVZJTVZheG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZnZpaFlpcnFzbklKbEZacDdsbGdrMHI5N0NQSFBzd0JjMHhIL1pNWEtmbjA5clJ6Ym5YNmY4QmYzOU14U3lYWmdQTkhFdFdlKzhEdlNOZFdpSXNrQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNTdqWG9yb3BJY1pScjNaejBKWG9sYVRGcUFscUZtL1IvNlV4S3duMFFNOGRPSVkzZFVmVjlXQ0g5N1B0RGFEZGJHL2NPOVhtQkMrRFJ6VHJFNi9lanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjUzNTUzNTgwOjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYyMzU5MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJKS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkpLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaGZLQ2lPeFdmQXF0T1F3Q05uaXR5c25vcXBOdnJQb1U5bEd0WXMvbmQ1az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTM4Mzc3NDUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNjIzMzc0OTM0XCJ9Igp9"  // PUT your SESSION_ID 


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
