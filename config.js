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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_10_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQzLFxuICAgICAgICA1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDg2LFxuICAgICAgICA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgNjgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDk4LFxuICAgICAgICA5NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDc4LFxuICAgICAgICA3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MixcbiAgICAgICAgMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTExLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgODgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNCxcbiAgICAgICAgODcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNixcbiAgICAgICAgMTcyLFxuICAgICAgICA3OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYwLFxuICAgICAgICA4OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4ZDU0R2ZRdnYwd0UrQjdtMHYvbkpoTUdmSVVJUmM5Nzl2OE5pcElEaUMwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPTUo3eGFxblNOS05sS1ZJZlRxdXF3XCIsXG4gIFwicGhvbmVJZFwiOiBcImRlZDU4OTQ2LWM5MzQtNDFiNy04MjgwLWJlY2NmYWY5MjJhNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzAsXG4gICAgICAyMzQsXG4gICAgICAxMTMsXG4gICAgICAyNDIsXG4gICAgICAyNDgsXG4gICAgICA4NSxcbiAgICAgIDQsXG4gICAgICAxODUsXG4gICAgICAxMzcsXG4gICAgICAxODUsXG4gICAgICAyMzgsXG4gICAgICAxMjAsXG4gICAgICAyNDQsXG4gICAgICA3MCxcbiAgICAgIDIyMSxcbiAgICAgIDE5OSxcbiAgICAgIDI1NSxcbiAgICAgIDExMyxcbiAgICAgIDEzNixcbiAgICAgIDExOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjYsXG4gICAgICAyMDAsXG4gICAgICA1OSxcbiAgICAgIDE0OCxcbiAgICAgIDE0NyxcbiAgICAgIDc5LFxuICAgICAgMTAwLFxuICAgICAgMTYwLFxuICAgICAgMTY2LFxuICAgICAgNjcsXG4gICAgICAyMzEsXG4gICAgICAyOCxcbiAgICAgIDIxOSxcbiAgICAgIDE0MCxcbiAgICAgIDE1NCxcbiAgICAgIDUsXG4gICAgICAyNDYsXG4gICAgICAyMTEsXG4gICAgICAxODcsXG4gICAgICA5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNQ0xSSEhIV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjU0MzIyNzQ1OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzUyMDE1ODYzMDcxNjE6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEhLc1c4UWg5S2Z0UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1RU5nZERrNHpsMXJqOXlNY3R6WnBaV00vYzh2WEQ1NXNxd3lXUzAxM2k0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldvaC9rcTJ4dU1BTUlOcGgwTzVGdURXTG5MUzFOd09VZWhGV2w1cTRLMDByeWdsUlNUK3JqZ0hRbHFxVG1qb0tUYUppNE9QdnIwdlBJdldZOUVhVUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInQ1NG9YNGhpZGtheXNBYTVQQ0RkMWVKZ0o5RVZMaStod00xZmRHaTB0dkRaaGw3ZytUT1JLeC96cnl1YlJHYUcySVBKRmlsdWZwL2ljbjIvMTVncUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY1NDMyMjc0NToxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjgwMjAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUc1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNRzUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0V3lybm5pd1FKRmtoZ3pnMWh6SXlDVXgvM0F5QUF2by9QUmhEem96QzFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzMzU5NjI2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxODI3MTkwMDA1XCJ9Igp9"  // PUT your SESSION_ID 


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
