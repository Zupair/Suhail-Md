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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_28_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgwLFxuICAgICAgICA5NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDc3LFxuICAgICAgICA5NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDUxLFxuICAgICAgICA1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDYwLFxuICAgICAgICAyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDc1LFxuICAgICAgICA1OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDczLFxuICAgICAgICA3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2LFxuICAgICAgICA2NSxcbiAgICAgICAgOTksXG4gICAgICAgIDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4LFxuICAgICAgICA2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMixcbiAgICAgICAgODYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MixcbiAgICAgICAgMTg2LFxuICAgICAgICA4OCxcbiAgICAgICAgMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxLFxuICAgICAgICAzMixcbiAgICAgICAgOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4OGRxbGFrWjlrMytsYWU4TE42ZXdRTUgzOFdSc0d3akVhbUpFWEl3TFBvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxT2VkSHNyOVNIT0E5TUtvRmxqZVl3XCIsXG4gIFwicGhvbmVJZFwiOiBcImI0Mjc2ZmZiLTQxOTYtNDZkZC1iYTdjLWRmOGU3M2Y2MjA5NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICAxNTMsXG4gICAgICAxODQsXG4gICAgICAxMzUsXG4gICAgICAyMixcbiAgICAgIDExNyxcbiAgICAgIDYsXG4gICAgICAxMyxcbiAgICAgIDIxMixcbiAgICAgIDIxMSxcbiAgICAgIDU2LFxuICAgICAgOTAsXG4gICAgICAxNjQsXG4gICAgICAyLFxuICAgICAgMjUyLFxuICAgICAgMjQ2LFxuICAgICAgMjEzLFxuICAgICAgMTkxLFxuICAgICAgMTk1LFxuICAgICAgMTAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNCxcbiAgICAgIDgyLFxuICAgICAgODMsXG4gICAgICAyMjAsXG4gICAgICAxLFxuICAgICAgMTcxLFxuICAgICAgNzgsXG4gICAgICA3MixcbiAgICAgIDMxLFxuICAgICAgMjAxLFxuICAgICAgNTMsXG4gICAgICAxNzIsXG4gICAgICAxNzgsXG4gICAgICAxNjcsXG4gICAgICA5MSxcbiAgICAgIDE5MSxcbiAgICAgIDI0MixcbiAgICAgIDk5LFxuICAgICAgMTMwLFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllIUzc2VlA4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI2NTQzMjI3NDU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM1MjAxNTg2MzA3MTYxOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3pLc1c4UXFyeU50UVlZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1RU5nZERrNHpsMXJqOXlNY3R6WnBaV00vYzh2WEQ1NXNxd3lXUzAxM2k0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZUUE8xamFwSHhMTlpURXFKSjMrS3Z3L2REYmdSd0kzeTQrWWk5c0MyWnBtWWNPZmRncEtlQVlvUmlTWm9kT3VZeDVhemhPajd3emF6RVYxNHErZ0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInF1d3pybERWM29IOXpoWG5aUXM4SFNvWHEyamZYODdxNTNRODkxWVZjcGRKcFE4cHIvQXNHbFlJVTN2cmp3MlUrTmVNbmtMa2lqT0hYTGk0ZkJHOWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY1NDMyMjc0NTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5ODI1MTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNRzVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1HNS5qc29uIjogIntcImtleURhdGFcIjpcInRXeXJubml3UUpGa2hnemcxaHpJeUNVeC8zQXlBQXZvL1BSaER6b3pDMVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjMzNTk2MjY4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE4MjcxOTAwMDVcIn0iCn0="  // PUT your SESSION_ID 


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
