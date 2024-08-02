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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_45_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDksXG4gICAgICAgIDMwLFxuICAgICAgICAyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY0LFxuICAgICAgICA1LFxuICAgICAgICA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE0LFxuICAgICAgICA5MixcbiAgICAgICAgMjA3LFxuICAgICAgICAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDk3LFxuICAgICAgICA3OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM0LFxuICAgICAgICAzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNixcbiAgICAgICAgMTY3LFxuICAgICAgICA3NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzksXG4gICAgICAgIDYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4LFxuICAgICAgICA5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInJId0praEdnRTlISG1ZVFg3UkN3clBXQkQ3VFJvOHhWcW1lZVBHbnhFckE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyNjUzNTUzNTgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzNEY3MzRENjgzQzczNDU2QTAxRDMxMjcxRkJBNEUwMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2MzUxMDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTmZHOEZ6YXVTX09ha18zUU5JYlpmUVwiLFxuICBcInBob25lSWRcIjogXCJlOTcxMjA2Ny1iNWRkLTQ3MDctOTk4ZC05NzE0NmNmMGM1ODRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDEsXG4gICAgICAxMDgsXG4gICAgICAxMyxcbiAgICAgIDExNixcbiAgICAgIDcsXG4gICAgICAyMTIsXG4gICAgICAyNTUsXG4gICAgICAxMzYsXG4gICAgICAxODEsXG4gICAgICA2MCxcbiAgICAgIDIwOSxcbiAgICAgIDExMCxcbiAgICAgIDEwLFxuICAgICAgMTkyLFxuICAgICAgMTI0LFxuICAgICAgNCxcbiAgICAgIDE2NyxcbiAgICAgIDExLFxuICAgICAgMTY3LFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDI3LFxuICAgICAgMTQxLFxuICAgICAgMTM0LFxuICAgICAgNTgsXG4gICAgICAxMjMsXG4gICAgICAxMzMsXG4gICAgICAyMzUsXG4gICAgICAxMjEsXG4gICAgICA2OCxcbiAgICAgIDkxLFxuICAgICAgODYsXG4gICAgICA3NyxcbiAgICAgIDIxOCxcbiAgICAgIDIyMixcbiAgICAgIDI3LFxuICAgICAgMTg4LFxuICAgICAgMTc4LFxuICAgICAgMjM5LFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkNZODJaREFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjY1MzU1MzU4MDo5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTcxMTg5MDQzNDQ4MjM6OTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXVsck1NR0VOT210YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTa1Z2alVFT2poNldCT01MSGN3TDB4YXhSYWZIOUlCcnZFZ0U0S2hEVVhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlYxeFlqZ2EzTTEwcUV1d2hvNFR3SU9EZGFrY2xLcGxsdFlONUMvTUNHZGRwMFhyUnY2dWxOZjJkdzRZYW0rV1p6bEY0TmdjNWFpU3Y3ZXMxb0FEMkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjREMUlQWFRYNVFzWUswYkJCaXRRVFBSdHFuTnFOZDZWQlkxZGdOZzhNTXEzWmFNYnQ0VUV0U29oNTZad01BY3YzMS9kcitDYkJlOGFXb1J1cURwaGhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY1MzU1MzU4MDo5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2MzUwOTVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
