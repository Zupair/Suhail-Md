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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_38_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk5LFxuICAgICAgICAzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDg5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk2LFxuICAgICAgICA2MixcbiAgICAgICAgMjM5LFxuICAgICAgICA0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyLFxuICAgICAgICA3OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDgzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODksXG4gICAgICAgIDMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAwLFxuICAgICAgICA3NixcbiAgICAgICAgMTEyLFxuICAgICAgICA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICA5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MCxcbiAgICAgICAgNixcbiAgICAgICAgOTgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgwLFxuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg3LFxuICAgICAgICA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQzluSUF4Q2xxNEplemIyZFFtRUNpRUI4VU9HYUF0eGQ3MGQ5cklxeWliYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieExLZG1HSUZRQ1dPUkp1SlpocWdBUVwiLFxuICBcInBob25lSWRcIjogXCJiZGMzZmYxZC1iNjk4LTRmNzgtYTBmMy03ZWQ0NmIxM2QyMDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQsXG4gICAgICAxOCxcbiAgICAgIDEyMCxcbiAgICAgIDU3LFxuICAgICAgOTgsXG4gICAgICAxNDMsXG4gICAgICAxNjYsXG4gICAgICAxNTksXG4gICAgICAxOTIsXG4gICAgICAyMjksXG4gICAgICAyNTIsXG4gICAgICAxNzIsXG4gICAgICAyMTAsXG4gICAgICAxNDEsXG4gICAgICA0MSxcbiAgICAgIDI0OCxcbiAgICAgIDE2OSxcbiAgICAgIDEzMCxcbiAgICAgIDcwLFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDk2LFxuICAgICAgMTgsXG4gICAgICA2NSxcbiAgICAgIDIyOCxcbiAgICAgIDIzMSxcbiAgICAgIDEwMCxcbiAgICAgIDIzNixcbiAgICAgIDExLFxuICAgICAgMTc2LFxuICAgICAgMTQsXG4gICAgICAxOTIsXG4gICAgICA5MyxcbiAgICAgIDE2NixcbiAgICAgIDYyLFxuICAgICAgMTQyLFxuICAgICAgMjE1LFxuICAgICAgMTIsXG4gICAgICAyNDEsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWE5NM1NUUVNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjY1MzU1MzU4MDo4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTcxMTg5MDQzNDQ4MjM6ODdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUENWcFp3SEVPYkV4clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyN2VXVUx2cW9DNU1kK2JRandET2Y3QW5WT0todU5QeEQ1blVWSU1WYXhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNNYnJDdlRsVkVjWm0zNEFsdVlNQjBIMVAyY1U0MlBhd0EyMDRvZVg3UVN5YVhLV0FxNDdkZUlkRzliU0h3Snp4NzVES1A3aisyVHdQdTdpVHU0OERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZOcnZ3cmlwajlTRkh6dDk0RFR5L3BKbE1EWktINlNHdTVTZXNUL2dDSVBhcS9VbnBmTTc4MGpHS0tGZ1dGSGVML0JReGFGYjRON2pmbVFUUEVhTWlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY1MzU1MzU4MDo4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4MjAzMzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCSktcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJKSy5qc29uIjogIntcImtleURhdGFcIjpcImhmS0NpT3hXZkFxdE9Rd0NObml0eXNub3FwTnZyUG9VOWxHdFlzL25kNWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzODM3NzQ1MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDYyMzM3NDkzNFwifSIKfQ=="  // PUT your SESSION_ID 


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
