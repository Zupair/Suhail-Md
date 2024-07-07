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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_44_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1LFxuICAgICAgICA4NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDYzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMTA0LFxuICAgICAgICA1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyLFxuICAgICAgICA5LFxuICAgICAgICA5NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc1LFxuICAgICAgICA5MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1LFxuICAgICAgICA1LFxuICAgICAgICAxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDczLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxLFxuICAgICAgICA3NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDcyLFxuICAgICAgICAzMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTExLFxuICAgICAgICA1MixcbiAgICAgICAgMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkx6SXVyaDFyajZzbXBDM0lIYm5mTXVIZmkwUkNwODNOZ2ZyWENkQzBZMmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyNjUzNTUzNTgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENDhFMkFCQ0QxNkQ3NjBFOEM1MzI3NDI3QUNBMTEwRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzNTYyNDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMmRjSXpzcFpUQ1dUZzlEcWtrWnVlZ1wiLFxuICBcInBob25lSWRcIjogXCI5Yzg4YTU5Yy02YmUzLTQ5ZjAtYjk2YS02ZDA3NjY3ZGYyZjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMjEwLFxuICAgICAgODAsXG4gICAgICAxNixcbiAgICAgIDE1MCxcbiAgICAgIDI1MSxcbiAgICAgIDE3NixcbiAgICAgIDIwOSxcbiAgICAgIDkxLFxuICAgICAgMTE2LFxuICAgICAgMTM2LFxuICAgICAgMTA1LFxuICAgICAgMTU3LFxuICAgICAgMjM1LFxuICAgICAgMzUsXG4gICAgICAyMzAsXG4gICAgICAzMyxcbiAgICAgIDQyLFxuICAgICAgMjA5LFxuICAgICAgMTM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDkwLFxuICAgICAgMTMxLFxuICAgICAgNTgsXG4gICAgICAxNzAsXG4gICAgICAxMTEsXG4gICAgICAyMTEsXG4gICAgICAyMDcsXG4gICAgICAxNjAsXG4gICAgICAxMDgsXG4gICAgICAyMzYsXG4gICAgICAzNCxcbiAgICAgIDk4LFxuICAgICAgMTk2LFxuICAgICAgMjI5LFxuICAgICAgMTQ1LFxuICAgICAgMTE2LFxuICAgICAgNjUsXG4gICAgICAxODYsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1N0pSSldGMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjUzNTUzNTgwOjY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NzExODkwNDM0NDgyMzo2OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPQ1ZwWndIRUlxYnFyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjI3ZVdVTHZxb0M1TWQrYlFqd0RPZjdBblZPS2h1TlB4RDVuVVZJTVZheG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidmhrMkNTTlZLRnRvb1M2NDRHRk1UenNYN0kxMjhMR0drMVZ3TlJHNW5jUTk5WFY0UnVHVFlaZHFtU1FCT1FCYXlBdDFKS3RPN0tPdkRJOHhjbDdnQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic1AxY1dFR3hFRSsyMUpYMmRFa1Z3ZmJ3WWN1dHJEc1g1R3RjdlZSeG1OM3lsL2Q5czBWc3QwVGNSTG80WXRMaE1MSW95NGVjaTZhQ2ZkbDB6MGp6Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjUzNTUzNTgwOjY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM1NjIzOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUUyRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTJFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMUVKeDJzVmFnRDdQWHFWYmloeElxYkhGRUkwWFJyaEJWay80ckJka3ZxYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTM4Mzc3NDM5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
