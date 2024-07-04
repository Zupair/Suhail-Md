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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_39_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxODEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk0LFxuICAgICAgICA5MixcbiAgICAgICAgNjAsXG4gICAgICAgIDc3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDU0LFxuICAgICAgICAzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTExLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDc1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTksXG4gICAgICAgIDI1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU5LFxuICAgICAgICAyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkY5VVYzamZBY3BBd3cxSHNHQXorZWF4SkZoQlhNMExrMFF6R09pQ0xjbUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1KeDFHdTdyUzBpSk5ZalBoQWZWRmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTU5NWI3NGEtMGQ4YS00YTM2LTgwOWItMGEyNDE4NTlmZDAxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgMzksXG4gICAgICA5OSxcbiAgICAgIDE0LFxuICAgICAgNjYsXG4gICAgICA4MCxcbiAgICAgIDE5NixcbiAgICAgIDMzLFxuICAgICAgMjMyLFxuICAgICAgODksXG4gICAgICAyMjQsXG4gICAgICAxNDQsXG4gICAgICAyMjAsXG4gICAgICAyMzYsXG4gICAgICA2NyxcbiAgICAgIDI1MixcbiAgICAgIDEzNixcbiAgICAgIDE0OCxcbiAgICAgIDg0LFxuICAgICAgMjQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgMTA4LFxuICAgICAgMTc5LFxuICAgICAgNTIsXG4gICAgICAyNDAsXG4gICAgICAxMzAsXG4gICAgICAxNzgsXG4gICAgICAxNzcsXG4gICAgICA1LFxuICAgICAgMTkzLFxuICAgICAgMTk1LFxuICAgICAgMjQzLFxuICAgICAgMTQ0LFxuICAgICAgMTc2LFxuICAgICAgMTAxLFxuICAgICAgNDUsXG4gICAgICAyMjMsXG4gICAgICAyNyxcbiAgICAgIDk1LFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkI5S1JDNkQzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI2NTM1NTM1ODA6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU3MTE4OTA0MzQ0ODIzOjYzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ055VnBad0hFTjI4bTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMjdlV1VMdnFvQzVNZCtiUWp3RE9mN0FuVk9LaHVOUHhENW5VVklNVmF4bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMZWpTTHMrSm82b3RoNVlBQ0xHVTc5ZW12Z2pLb2o5WGZoTkJFK01JMUVWYjNlNXVlalh2REZRTFRhZjN0blROZEptWWIwT1dIZHoxWTBzcTczZXFBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2QUk1TDdNRHB2aVJvbVdxbXcrSXdXWFdXZTVncWtpL0ZJNE5NZUpXZ3J1dGhHK0pWSlY4eUw0b0oxMWhyWUhJQmovK21lQUN3OC93OGRJdmM1T3NEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2NTM1NTM1ODA6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTE0Nzg1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXk0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJeTQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZVGV3NGR4U0UvL1lXbkRaRzBjOS9oYXJRdWJ5Yys2ODJnMURmMlMyWjNvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzgzNzc0MjcsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTk2MjQxMTA2N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
