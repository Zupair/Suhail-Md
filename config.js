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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_34_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4LFxuICAgICAgICA3NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU4LFxuICAgICAgICA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDk1LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDg4LFxuICAgICAgICA4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMTAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDk5LFxuICAgICAgICA5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcsXG4gICAgICAgIDE5LFxuICAgICAgICA3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkxLFxuICAgICAgICA5NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI2LFxuICAgICAgICAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkyLFxuICAgICAgICA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVQVhucE1OVkpiYWtGbTRNclA3QjNReEU4ZzZXR1h5VkpKVko3ZG9kR2VRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIeUJJOGRyeFJZR1ZFWWJZQmNsV2xnXCIsXG4gIFwicGhvbmVJZFwiOiBcImE5Zjc4YzkxLTQ4MjItNGRkMi1iZDNiLWU0ZDU3MjRiMWZiMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAzMSxcbiAgICAgIDEyMixcbiAgICAgIDI0MyxcbiAgICAgIDE3LFxuICAgICAgMTMwLFxuICAgICAgODQsXG4gICAgICAxMDksXG4gICAgICAyMzksXG4gICAgICAyMDQsXG4gICAgICAzNyxcbiAgICAgIDgwLFxuICAgICAgNTAsXG4gICAgICAyMzEsXG4gICAgICAyMTIsXG4gICAgICAxNTUsXG4gICAgICAxMzYsXG4gICAgICAxNzEsXG4gICAgICA1OSxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDIzOSxcbiAgICAgIDczLFxuICAgICAgOTMsXG4gICAgICA4OSxcbiAgICAgIDEyNyxcbiAgICAgIDE0MCxcbiAgICAgIDUwLFxuICAgICAgNzksXG4gICAgICAyMzksXG4gICAgICAyMDgsXG4gICAgICAxODksXG4gICAgICA3MyxcbiAgICAgIDE3NyxcbiAgICAgIDIwMyxcbiAgICAgIDE5MixcbiAgICAgIDIyNSxcbiAgICAgIDI4LFxuICAgICAgMTM3LFxuICAgICAgMjA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFERllXU1NYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI2NTM1NTM1ODA6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU3MTE4OTA0MzQ0ODIzOjcwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09LVnBad0hFT3ZPcXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMjdlV1VMdnFvQzVNZCtiUWp3RE9mN0FuVk9LaHVOUHhENW5VVklNVmF4bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtQmJrYlYzSWZmcGcwWTdxRFBadjNNZWQ4RTl2WU1lbGNUekFCeWkwZjRhdEVKWWxUQTVQdjVZYTkxY3hhTmh0U2o0VVJDN215QkxaQ2pqK1ZYa2JBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjTVRDcGwrbURVZlhSMVdtZnlBU2p3cG54RGxRL3E2eFdRRmVvVmcxMVQ0YS9iSXkwQnZWOFhaamNsL1Rjak1PL21lNDNMa2pMTUpFcWRHaGN4eU5qQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2NTM1NTM1ODA6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzYyODYzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
