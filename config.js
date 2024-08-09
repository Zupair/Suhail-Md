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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_38_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYzLFxuICAgICAgICA3MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgwLFxuICAgICAgICA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTczLFxuICAgICAgICA3MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc2LFxuICAgICAgICA0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgODUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU4LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDksXG4gICAgICAgIDE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTExLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZCSXlhNDkwWWZVZjlFbmE5UzhMbGJSWDBWdjhKckxzdDVQMFkrT2U5OFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyNjUzNTUzNTgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNjdBQkNFMTZDODBFNzMxQzY5QjlEQzUzN0JFMzNEOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMxOTI3MjJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVVRIclBfemJUcmVTUGlvV2Q5RF8xd1wiLFxuICBcInBob25lSWRcIjogXCJhYmQzMzFlMy1hNWEwLTRlZDgtODVhOC0yMWFiM2EwNDYyZjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAxNjUsXG4gICAgICAyMzUsXG4gICAgICA4MCxcbiAgICAgIDMyLFxuICAgICAgMTYwLFxuICAgICAgMTE5LFxuICAgICAgMTMwLFxuICAgICAgMTQ4LFxuICAgICAgMTc5LFxuICAgICAgMTE5LFxuICAgICAgMTksXG4gICAgICAyMDEsXG4gICAgICAyNTQsXG4gICAgICAxMzQsXG4gICAgICAxMzgsXG4gICAgICAyMDQsXG4gICAgICAxOSxcbiAgICAgIDE3NyxcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICA5MyxcbiAgICAgIDMyLFxuICAgICAgODEsXG4gICAgICAyMzUsXG4gICAgICA1MixcbiAgICAgIDM2LFxuICAgICAgMjQ4LFxuICAgICAgNDYsXG4gICAgICA2OCxcbiAgICAgIDg1LFxuICAgICAgMTE4LFxuICAgICAgMTA4LFxuICAgICAgNjcsXG4gICAgICAyMTksXG4gICAgICAxMjIsXG4gICAgICA1MCxcbiAgICAgIDEyNCxcbiAgICAgIDEzNixcbiAgICAgIDE2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzRlZLMlZOVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjUzNTUzNTgwOjk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NzExODkwNDM0NDgyMzo5OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOR2xyTU1HRUllcjE3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNrVnZqVUVPamg2V0JPTUxIY3dMMHhheFJhZkg5SUJydkVnRTRLaERVWFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVEFGUXFGZ1dXUFZMUVRnUlFRcWNEd3RMWExDUzFrWHgxZUNmcUZhRFVFMCtRaGFYdjVDZTNBTkhiMFd3ZmpFZ2FaenVtZndLUmJjWnJCNGU4VjRDQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibGpKWUx4VU9UaG83UWpBSmRHUXcxYmhVTE9kVS82c3JSVHhqZTVDQ09RZGJYNlE0RnJQUG5DY01TRWIwRG1FbnprNGMzNldlNFgyK3RqR2hDejQyaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjUzNTUzNTgwOjk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzE5MjcxNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxISlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTEhKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRXErallYOVlYY0JIeFJDZFhRb3ZXSHlZNHArOExPMW1nT09XUVlWN28ybz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzUxODQ3NjMyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
