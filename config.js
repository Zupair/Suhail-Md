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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_30_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUsXG4gICAgICAgIDc1LFxuICAgICAgICA5NixcbiAgICAgICAgNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTAzLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTY5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDkyLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDYxLFxuICAgICAgICA4LFxuICAgICAgICAyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDU5LFxuICAgICAgICA1NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzksXG4gICAgICAgIDc4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NixcbiAgICAgICAgMTE1LFxuICAgICAgICA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU0LFxuICAgICAgICA5MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImlScFNSZ1RKRWk3V2YwbzAwci8rQVlUeEN0bURKb2pza1ZPb0xNMlBYV3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyNjUzNTUzNTgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MEM0NDcyMjEzRTlBRjIyRjg2NUZDNzUxOURCNDI1MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxNjQ2MTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUDZhTWtuazNTZ2lEaVJRemh2Skk5Z1wiLFxuICBcInBob25lSWRcIjogXCI5NTZkOGNkMy1lOWIwLTRkM2ItOTZlMi1mMjE4OGE5Zjc5NWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICA5LFxuICAgICAgMTI2LFxuICAgICAgMTc4LFxuICAgICAgMTAxLFxuICAgICAgMjIxLFxuICAgICAgMTcsXG4gICAgICAyMixcbiAgICAgIDE3NyxcbiAgICAgIDE5MSxcbiAgICAgIDg2LFxuICAgICAgMTExLFxuICAgICAgMjI3LFxuICAgICAgMTY2LFxuICAgICAgNTIsXG4gICAgICAyMixcbiAgICAgIDM2LFxuICAgICAgOTAsXG4gICAgICAxNSxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDI1MyxcbiAgICAgIDIyOCxcbiAgICAgIDUsXG4gICAgICAxMzQsXG4gICAgICAzMixcbiAgICAgIDQ5LFxuICAgICAgMTk0LFxuICAgICAgMTcwLFxuICAgICAgMTQ3LFxuICAgICAgMjEzLFxuICAgICAgMTgxLFxuICAgICAgMzcsXG4gICAgICAxNDcsXG4gICAgICAyMDMsXG4gICAgICAxODksXG4gICAgICA2NyxcbiAgICAgIDcyLFxuICAgICAgNzcsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWDRRNDdBMVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjY1MzU1MzU4MDo2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTcxMTg5MDQzNDQ4MjM6NjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjJWcFp3SEVJRENuclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyN2VXVUx2cW9DNU1kK2JRandET2Y3QW5WT0todU5QeEQ1blVWSU1WYXhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldCVHdFekJqb2N3Y3Y0eHFkTlNveGRzdDN1c3dPOFhjSVhKYThTUVpwUit6T25VVkw4Q2hrVVJNcVNpcUtpMmp2YmtJcFhDVkMydm5Qdis0TFR6UkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInQyTGI1dStaTUdwL1ZBeUlDMU5UTCtNOHhyd1drOFNWUnVtQ1lvYlk2TkdNaENoVFhGQ3ltZGtGSVQ1Q1R0OFhTdnAvcldTY21zVXJRNGJKMnpxTWlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY1MzU1MzU4MDo2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxNjQ2MTFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
