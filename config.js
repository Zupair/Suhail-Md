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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_45_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExLFxuICAgICAgICA5MyxcbiAgICAgICAgNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU1LFxuICAgICAgICA4LFxuICAgICAgICA5MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNixcbiAgICAgICAgMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MixcbiAgICAgICAgMTcwLFxuICAgICAgICA0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyLFxuICAgICAgICA0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NCxcbiAgICAgICAgODksXG4gICAgICAgIDY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU2LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk2LFxuICAgICAgICA0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDc0LFxuICAgICAgICA1NixcbiAgICAgICAgODMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExLFxuICAgICAgICAxODgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDksXG4gICAgICAgIDc5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDU4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMyxcbiAgICAgICAgODgsXG4gICAgICAgIDk4LFxuICAgICAgICA5NixcbiAgICAgICAgOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTG83eW1aZTVHdVVPVDdKMlFoWExNUUc2SDlSbWJDbU5reURUSkQxUDNWTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiai1xbjFiNEFUVGV6dy10VFdjU2NtZ1wiLFxuICBcInBob25lSWRcIjogXCJhYzlhM2QxOS0yOTI4LTQ0MDYtYjg0NC1iODQyOTEwZjRlMzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgMTM2LFxuICAgICAgMTI0LFxuICAgICAgNjQsXG4gICAgICA5LFxuICAgICAgNzIsXG4gICAgICAyMjYsXG4gICAgICAxNDgsXG4gICAgICA4MyxcbiAgICAgIDE0NyxcbiAgICAgIDEzLFxuICAgICAgMTQzLFxuICAgICAgODQsXG4gICAgICAxNCxcbiAgICAgIDIyMixcbiAgICAgIDE0NyxcbiAgICAgIDExLFxuICAgICAgODQsXG4gICAgICAxMTMsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAxNTgsXG4gICAgICAxMzgsXG4gICAgICA3MSxcbiAgICAgIDYsXG4gICAgICAyNTUsXG4gICAgICAxMCxcbiAgICAgIDAsXG4gICAgICAxMSxcbiAgICAgIDE5NyxcbiAgICAgIDU3LFxuICAgICAgMTE3LFxuICAgICAgOSxcbiAgICAgIDEwOSxcbiAgICAgIDE0MyxcbiAgICAgIDI0NSxcbiAgICAgIDE1NyxcbiAgICAgIDIxNSxcbiAgICAgIDI1NCxcbiAgICAgIDE1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQNkg3RFlIQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjU0MzIyNzQ1OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzUyMDE1ODYzMDcxNjE6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUERLc1c4UTVMK2F0UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1RU5nZERrNHpsMXJqOXlNY3R6WnBaV00vYzh2WEQ1NXNxd3lXUzAxM2k0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNXL2ZSQjFRZUhOd1ZHRDhSUDI1dGF4Q29sS0taZENoQ3B4ZWIvbWNwY0IrS1laNU5kN3NwVVF1U1BIU2pJWTVpTHMwNnRZc29WaWgvRW9OdGEyN0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIko5NWlaNXFFcFpVc3VzSlNkNjVDUTQ5L0x6U0Jta3pFZWwvZVBvNnpudmxiU1RYdTlTd3VUSjNLUUtVaUVybXQvMTcwU1Y4aHQzOUhZYTF4dU8xckRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY1NDMyMjc0NToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTk1OTQ1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUc1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNRzUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0V3lybm5pd1FKRmtoZ3pnMWh6SXlDVXgvM0F5QUF2by9QUmhEem96QzFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzMzU5NjI2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxODI3MTkwMDA1XCJ9Igp9"  // PUT your SESSION_ID 


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
