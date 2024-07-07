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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_39_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMixcbiAgICAgICAgMjMxLFxuICAgICAgICA4MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAzMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDksXG4gICAgICAgIDk5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5LFxuICAgICAgICAyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDY5LFxuICAgICAgICA3MSxcbiAgICAgICAgMyxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU5LFxuICAgICAgICA3LFxuICAgICAgICAzMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODQsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExLFxuICAgICAgICAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE1LFxuICAgICAgICA1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDkwLFxuICAgICAgICA2NixcbiAgICAgICAgOTksXG4gICAgICAgIDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUwLFxuICAgICAgICA4MixcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRIOWx5MFl0YzJZMlpWR1U1U2RFK0xydzJoZy94bHRHc3FaTGJBek9sK1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyNjUzNTUzNTgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1REQyQTc2MzJDMDA5OEYzN0E5QzkwQkI0QzkyQjcyNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzOTE5NzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic2RzVVpTZG1SZ0cwT1p0X0ZsZzgwZ1wiLFxuICBcInBob25lSWRcIjogXCJlNmNkOTA1OC03ZGEzLTRjNjctYjVlOC1iMDBhZWE3YWI3NWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA2LFxuICAgICAgMTA2LFxuICAgICAgMTI0LFxuICAgICAgMTQ4LFxuICAgICAgMjE3LFxuICAgICAgMjQwLFxuICAgICAgMTU2LFxuICAgICAgMTg2LFxuICAgICAgNzUsXG4gICAgICAyMjEsXG4gICAgICAyMzgsXG4gICAgICAxMDgsXG4gICAgICAyMTgsXG4gICAgICAxMDAsXG4gICAgICA1MixcbiAgICAgIDE2NSxcbiAgICAgIDEwMixcbiAgICAgIDExLFxuICAgICAgMTY2LFxuICAgICAgNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY3LFxuICAgICAgMTYyLFxuICAgICAgMjI5LFxuICAgICAgNDAsXG4gICAgICAzMSxcbiAgICAgIDYsXG4gICAgICA4LFxuICAgICAgODgsXG4gICAgICAxOTYsXG4gICAgICA1OCxcbiAgICAgIDE5NyxcbiAgICAgIDYwLFxuICAgICAgMTkwLFxuICAgICAgMjQ0LFxuICAgICAgODEsXG4gICAgICAxNTUsXG4gICAgICA2LFxuICAgICAgMTM5LFxuICAgICAgMTM5LFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0dTNFJNN0dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjY1MzU1MzU4MDo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTcxMTg5MDQzNDQ4MjM6NzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NWcFp3SEVKZXlyTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyN2VXVUx2cW9DNU1kK2JRandET2Y3QW5WT0todU5QeEQ1blVWSU1WYXhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9lZ2ZXQ3RQNnI2V3dHR3ZscUFtRURIZUhHNFpseTVsZmlReHAvdEdSY0tUU1ZpV3d0Lyt5a25Fc3BvMnpsN2dLUkdObCszcE5DQUJPNlJ3bThZRkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRneHFTWnZBQmh1dy9xdmwyQWlEdHZRSWxvVTlCNTc3Ukk4amhjZ0JEZWNBWmxJMGdkUWtJMzlaZTNyQm8zSGNaQWlVWUJwQ0NJRzJZVmhIaTRMVmpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY1MzU1MzU4MDo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzOTE5NjRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
