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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_48_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5LFxuICAgICAgICA5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1OCxcbiAgICAgICAgNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDMsXG4gICAgICAgIDIyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg5LFxuICAgICAgICA5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDY3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDkyLFxuICAgICAgICA3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDMzLFxuICAgICAgICA4MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDU3LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5LFxuICAgICAgICA4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK3Y0dE1JWFJDRjdJNkc3OURZTlByWTRnY0NNaEdxNlVJNHpXRzZiamt0bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTE9iQjdfMUFRZi13ZWNiSHJFTWd5QVwiLFxuICBcInBob25lSWRcIjogXCIxNTg1ZjhmNS1jNDk4LTQxYjYtYTQxNy1jN2M1YmI0MzJlM2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMxLFxuICAgICAgNTQsXG4gICAgICAzNyxcbiAgICAgIDE2MCxcbiAgICAgIDM5LFxuICAgICAgNjQsXG4gICAgICA1LFxuICAgICAgMzgsXG4gICAgICAyMDMsXG4gICAgICAxMDcsXG4gICAgICA1MixcbiAgICAgIDIyMCxcbiAgICAgIDEsXG4gICAgICA3OCxcbiAgICAgIDEzNixcbiAgICAgIDIxOCxcbiAgICAgIDEyLFxuICAgICAgMTU0LFxuICAgICAgNDUsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDEzMyxcbiAgICAgIDIwLFxuICAgICAgMTc3LFxuICAgICAgODAsXG4gICAgICAxOTQsXG4gICAgICA3OSxcbiAgICAgIDIzMixcbiAgICAgIDI1LFxuICAgICAgMjU1LFxuICAgICAgMjM5LFxuICAgICAgMzEsXG4gICAgICA5NCxcbiAgICAgIDE0MyxcbiAgICAgIDk3LFxuICAgICAgNixcbiAgICAgIDM3LFxuICAgICAgMTc4LFxuICAgICAgMTE5LFxuICAgICAgMTk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRERUFHSFpWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI2NTM1NTM1ODA6OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU3MTE4OTA0MzQ0ODIzOjk1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00rbHJNTUdFTDZTenJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU2tWdmpVRU9qaDZXQk9NTEhjd0wweGF4UmFmSDlJQnJ2RWdFNEtoRFVYUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoTXZEODRnQkJhVnBxOGhzUitiYzV4UFlCdkxrdWZZaStNTkRzWmRvaUlxbWM0S1I5b0FaN09VWm5Zb1FuRmdZdWFGcTQrQW1sTnFWVVRBR2VuelpEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXTjU0T3BUYlVoV3V4VXFSdFhmT1RaNTFSZUlIZmtxcThJZUJOOUZ6TVVjbzlOcjNubEd1Z2xTd2J5NmcwSmg4NWpNODBkY0RTeEpMK0REaTFIRGpDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2NTM1NTM1ODA6OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMDQyMTEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEcvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMRy8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
