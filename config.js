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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_34_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNixcbiAgICAgICAgMzksXG4gICAgICAgIDI4LFxuICAgICAgICA4MixcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDc4LFxuICAgICAgICA4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc3LFxuICAgICAgICA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQxLFxuICAgICAgICA0MixcbiAgICAgICAgNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDUyLFxuICAgICAgICA3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA3LFxuICAgICAgICAxODksXG4gICAgICAgIDM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDgzLFxuICAgICAgICA4MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkEzSDkzTXo3cisvR0pBNDJ3b2lOSmhwTVdFODFhS0wxam5PRzJsOTlja2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyNjUzNTUzNTgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NTUxMjU1NkJFMTFGQUQzQjMyMUJDN0M5MzE2MTRDQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3OTQ4ODBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTG1jU05DQXhUZzJnU3diUVY1S1JHQVwiLFxuICBcInBob25lSWRcIjogXCIwNGE5YmRlNC00YjA3LTQ1YjMtOWE2MC0wYTM5OTI3YzhiYTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ3LFxuICAgICAgMTA0LFxuICAgICAgMjU1LFxuICAgICAgMjE1LFxuICAgICAgMjQ0LFxuICAgICAgMTY4LFxuICAgICAgMTQxLFxuICAgICAgNTksXG4gICAgICAxOTUsXG4gICAgICAyMjcsXG4gICAgICAxMjUsXG4gICAgICAyMzEsXG4gICAgICAxNDEsXG4gICAgICA0NCxcbiAgICAgIDI1MixcbiAgICAgIDYwLFxuICAgICAgMjI0LFxuICAgICAgMjIyLFxuICAgICAgODcsXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDkwLFxuICAgICAgOTcsXG4gICAgICAxOTUsXG4gICAgICAyMDEsXG4gICAgICA5MyxcbiAgICAgIDE4NyxcbiAgICAgIDMxLFxuICAgICAgMTY1LFxuICAgICAgMTY0LFxuICAgICAgNyxcbiAgICAgIDY5LFxuICAgICAgMjIxLFxuICAgICAgMTMyLFxuICAgICAgMjEyLFxuICAgICAgNDgsXG4gICAgICAyMTIsXG4gICAgICAyMTIsXG4gICAgICAyNixcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlo3QjVYV05RXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI2NTM1NTM1ODA6ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU3MTE4OTA0MzQ0ODIzOjg2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08rVnBad0hFUGY5eExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMjdlV1VMdnFvQzVNZCtiUWp3RE9mN0FuVk9LaHVOUHhENW5VVklNVmF4bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXYmN3MEJ5S0JGNjVsUlpZSzdiYkkwdm1WS3RJNnBHWTFvSlJwZGkyN0ZYc1BJUXZ1SEp2MWZxeWdxVzZ3Nk1VeTZnbEpIdWxRdTg2eGlBRVdPaUhBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1cDdnMDhUTTE0NGVrWDYrcnNsZW93QW1BQm9xY3pZVVZwOG05MDBEZkQ0TmtpVlBnN3o4R1FISE5LTUhPNHh4V3R5Y0xITHo5SzBtM0xjRnBMY0NpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2NTM1NTM1ODA6ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzk0ODc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkpLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCSksuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoZktDaU94V2ZBcXRPUXdDTm5pdHlzbm9xcE52clBvVTlsR3RZcy9uZDVrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzgzNzc0NTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MjMzNzQ5MzRcIn0iCn0="  // PUT your SESSION_ID 


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
