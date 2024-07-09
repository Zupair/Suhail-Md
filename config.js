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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_30_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDY3LFxuICAgICAgICA5OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA4LFxuICAgICAgICA0NCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA4MixcbiAgICAgICAgMTQxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg1LFxuICAgICAgICA2MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk2LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5LFxuICAgICAgICA5MixcbiAgICAgICAgNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMixcbiAgICAgICAgMTcyLFxuICAgICAgICA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA1MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICA5NixcbiAgICAgICAgMTQzLFxuICAgICAgICAzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NixcbiAgICAgICAgMTMyLFxuICAgICAgICA1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNixcbiAgICAgICAgODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDkwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgODUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJncE1KdUlqL05FdVVCbWgxdE5JN0sraDBzK1pnRGswQVZUZGlIczdQTzhZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0NG15cHlYQVFTdWZheW5Ldno5Mk5BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg0MDgyZTRmLWY0MTItNDM2ZS04MTc3LTM1YmUzNGMwZWE4YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDE4MCxcbiAgICAgIDE2MyxcbiAgICAgIDIyLFxuICAgICAgNTEsXG4gICAgICAxMDUsXG4gICAgICA2MCxcbiAgICAgIDM1LFxuICAgICAgMjM0LFxuICAgICAgNzIsXG4gICAgICAxNjUsXG4gICAgICAyMDgsXG4gICAgICAyNDEsXG4gICAgICAyNyxcbiAgICAgIDkxLFxuICAgICAgMTM4LFxuICAgICAgMzIsXG4gICAgICAxNzYsXG4gICAgICAxNDEsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDgsXG4gICAgICAxNCxcbiAgICAgIDE3NyxcbiAgICAgIDE1NCxcbiAgICAgIDE3MCxcbiAgICAgIDIwMyxcbiAgICAgIDQ2LFxuICAgICAgMTk0LFxuICAgICAgNDEsXG4gICAgICAxOTMsXG4gICAgICAxNzAsXG4gICAgICAyNSxcbiAgICAgIDcxLFxuICAgICAgMTM1LFxuICAgICAgNjksXG4gICAgICAxODQsXG4gICAgICAxMzMsXG4gICAgICAxOTAsXG4gICAgICAxMDYsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUQ4UDZWUThcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjY1MzU1MzU4MDo3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTcxMTg5MDQzNDQ4MjM6NzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2lWcFp3SEVPN2F0TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyN2VXVUx2cW9DNU1kK2JRandET2Y3QW5WT0todU5QeEQ1blVWSU1WYXhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImp5eTAyU0wvL2ViaFNIWGJmdmZaSzF3NytuY3hqNnJzRFNJeW9QTVYzYWthU0s3OTJNaG5LMnZxY3ZqaCt4Qkx5VnN4dXBEK1dEaEtJRG5lRjdoSUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFaL3p6YXFqWXBKa1k5cGhDUFJudG10akdDYTNubUNIWFJ2RktWeFFNc09kRmsvcHNWNkdWam9jcUtINjR4d2NDMlpwSzYxMkx6T0FaOHROZENjZURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY1MzU1MzU4MDo3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1MjgyNDFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
