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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_01_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYzLFxuICAgICAgICA1NixcbiAgICAgICAgMTM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzLFxuICAgICAgICA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NixcbiAgICAgICAgMTg5LFxuICAgICAgICA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkxLFxuICAgICAgICA1NyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTksXG4gICAgICAgIDY3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDgxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDkwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgOTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgODIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU2LFxuICAgICAgICA2MyxcbiAgICAgICAgMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDYsXG4gICAgICAgIDksXG4gICAgICAgIDQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ2RPUm5RMEJaend2SEdwQ25iZGFDSk5rZjJ2L0JPT3U1cmNvaEttTVpQWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicVcxS1J2NW9TSjJvQnE3cVRyaDRvUVwiLFxuICBcInBob25lSWRcIjogXCI5NjA3NTllNy01ZWM3LTRkYWUtYmMwNi0wODU3MWRhYzgyNGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgNzgsXG4gICAgICAxMjQsXG4gICAgICAyMjgsXG4gICAgICA3NyxcbiAgICAgIDE2OSxcbiAgICAgIDkxLFxuICAgICAgMjgsXG4gICAgICAyMjksXG4gICAgICAxMyxcbiAgICAgIDIzOCxcbiAgICAgIDI0MSxcbiAgICAgIDUwLFxuICAgICAgMixcbiAgICAgIDE0NCxcbiAgICAgIDE5LFxuICAgICAgMTcyLFxuICAgICAgMTc2LFxuICAgICAgMTgsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgNDEsXG4gICAgICAzNSxcbiAgICAgIDIzMixcbiAgICAgIDE0MixcbiAgICAgIDEyMSxcbiAgICAgIDM1LFxuICAgICAgMTc5LFxuICAgICAgMjEzLFxuICAgICAgMTkwLFxuICAgICAgNzYsXG4gICAgICAxNDYsXG4gICAgICAxOTIsXG4gICAgICA5MixcbiAgICAgIDExNCxcbiAgICAgIDMzLFxuICAgICAgMTI0LFxuICAgICAgMzYsXG4gICAgICAyNDEsXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJENjkzUUJZWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjUzNTUzNTgwOjk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NzExODkwNDM0NDgyMzo5NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOQ2xyTU1HRUlPdjByVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNrVnZqVUVPamg2V0JPTUxIY3dMMHhheFJhZkg5SUJydkVnRTRLaERVWFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVGcvdE9meGZDTURRVnc0VHJVVFhuNnVUTXQ4QjA1dVlLV2hGQlZTSkVoYnVtWXJibG5adXNKNXNFNWZqdGYvVGE0VzRUa2xDWVRURlJEL2RPUDdvQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQk1VclNsRFZsb3ZGa1cwKzRoTjNURG1QSTRHZkJrM1hSSmhhVm1vaURQbCtSdHBhQVlBT0EvSVkzaVJQdVRPUjF5MTRiNytFUEhHTXlYRzVibXpxamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjUzNTUzNTgwOjk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzExMTMwMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxHL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTEcvLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
