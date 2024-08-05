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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_17_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI5LFxuICAgICAgICAzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4LFxuICAgICAgICA4MSxcbiAgICAgICAgNDksXG4gICAgICAgIDk3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzksXG4gICAgICAgIDM4LFxuICAgICAgICA5MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYxLFxuICAgICAgICAzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDksXG4gICAgICAgIDkxLFxuICAgICAgICAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgzLFxuICAgICAgICA2NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMixcbiAgICAgICAgNixcbiAgICAgICAgMTM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUwLFxuICAgICAgICA3NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgODMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3LFxuICAgICAgICA4MixcbiAgICAgICAgODQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIxLFxuICAgICAgICA2NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ2R2VUJqZ1pSSmpnVlpqOXJVSzJWNnhZYklhcTJQT09ybFdEZndFTHJmRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNDQ1czQ3YkxUQnlfSmxxZEFpVG1IQVwiLFxuICBcInBob25lSWRcIjogXCIyMzcxZmM3Zi1lZTFhLTQ3N2MtODZiMC05ZmJhMzA4OWY5MjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgNDcsXG4gICAgICAyNDEsXG4gICAgICAyMjQsXG4gICAgICA4MSxcbiAgICAgIDE5NixcbiAgICAgIDEzOCxcbiAgICAgIDkzLFxuICAgICAgMTUsXG4gICAgICAyMDUsXG4gICAgICA5OCxcbiAgICAgIDUxLFxuICAgICAgMTcwLFxuICAgICAgNTIsXG4gICAgICAxOTksXG4gICAgICAxNzgsXG4gICAgICAxMDEsXG4gICAgICA3MixcbiAgICAgIDE0NSxcbiAgICAgIDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjEsXG4gICAgICA3LFxuICAgICAgNCxcbiAgICAgIDExMixcbiAgICAgIDQ4LFxuICAgICAgMTEwLFxuICAgICAgOTUsXG4gICAgICAyNDIsXG4gICAgICAxMzcsXG4gICAgICAxLFxuICAgICAgMTE1LFxuICAgICAgMjAxLFxuICAgICAgNixcbiAgICAgIDMsXG4gICAgICA2OSxcbiAgICAgIDMsXG4gICAgICAyMzAsXG4gICAgICAxMzgsXG4gICAgICAxNjMsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0YxUFpMRlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjY1MzU1MzU4MDo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTcxMTg5MDQzNDQ4MjM6OTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTJsck1NR0VOYUZ3N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTa1Z2alVFT2poNldCT01MSGN3TDB4YXhSYWZIOUlCcnZFZ0U0S2hEVVhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZnNHZoRGxIdHhWcW82QVdEeUR3MFpkcDh0Z1BnUGpvQllwVUJwaGJib0pkNTc0cWVBUUVjY05vUEFOTVpDRzIzZkQyUXFkQjlyOStGZjc5alVQT0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkV4Vml1bkhuL2FaQ1NsYXFjWXIvMGlacmozN25DNCtidEU3czl3bE1vemQwR3doajYzTDA0QjczbklTeHMyYzUrNDYrazRjSlpubDNjakkvOTBuZENRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY1MzU1MzU4MDo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI4NjAyNTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMRy9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxHLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
