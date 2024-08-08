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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_12_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDcyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDMwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODksXG4gICAgICAgIDczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA2LFxuICAgICAgICAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDc0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MixcbiAgICAgICAgMjcsXG4gICAgICAgIDY2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDg3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0LFxuICAgICAgICA3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDcyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMVhuYmlPR01mRTZ4Z293L3FoY2k4N2M5bUNxTnNyY2NRTFUrWHNnZU83Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUE43dzZ1V2xRYkNLUlZ6TXhOQno3UVwiLFxuICBcInBob25lSWRcIjogXCJjNzY2MDc2Mi1mNDBjLTQ3N2MtYmRkNC1lYzJjMjk3YTM0M2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgMjIwLFxuICAgICAgMjMzLFxuICAgICAgNDAsXG4gICAgICAxMDksXG4gICAgICAyMjEsXG4gICAgICA4OSxcbiAgICAgIDgxLFxuICAgICAgODgsXG4gICAgICAyMzMsXG4gICAgICA2MCxcbiAgICAgIDI0NyxcbiAgICAgIDU5LFxuICAgICAgMTU0LFxuICAgICAgMTk4LFxuICAgICAgMjA0LFxuICAgICAgODMsXG4gICAgICAxNjgsXG4gICAgICA1NCxcbiAgICAgIDIyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTksXG4gICAgICA5LFxuICAgICAgMTMsXG4gICAgICAyMjMsXG4gICAgICAxOTAsXG4gICAgICAxNzIsXG4gICAgICA1OCxcbiAgICAgIDE1MCxcbiAgICAgIDUzLFxuICAgICAgMTU3LFxuICAgICAgNjQsXG4gICAgICAyNDcsXG4gICAgICAyMDUsXG4gICAgICAyMjIsXG4gICAgICAxMjQsXG4gICAgICAxMyxcbiAgICAgIDI2LFxuICAgICAgNzUsXG4gICAgICAyMjQsXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4QzJGV1dUOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjUzNTUzNTgwOjk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NzExODkwNDM0NDgyMzo5N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOQ2xyTU1HRU9YNDA3VUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNrVnZqVUVPamg2V0JPTUxIY3dMMHhheFJhZkg5SUJydkVnRTRLaERVWFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYkxaNnB5MERJOVg5YVdmdWJKYXJsL05UNEZNbWhpczBObTZVTnd0ZFlrdmZlNVNwaTVDSmwwZDBBQ3ZhajBueFd3NGlDUmdkeFpoZVhnY2YwSXU2QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaTdPSFQ3Ty9OS0Y3UFl6NjVPQzdPVHpsK3E2YitaOFhGWTAxa2IxcFZWaVBNQUZDOGN3clJrbk5pWGtHSUovc2ZLK1Q4K09GMFFBTUJvWG5GcmZBalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjUzNTUzNTgwOjk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzEzNzEyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxISVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTEhJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWUUyMCtPTG9IZ1Bid3lkZ2VOc2RUUkFsVk9WQ1lmV0IxckoxL2JJalRTTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzUxODQ3NjMyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMxMTEzMTM2NDVcIn0iCn0="  // PUT your SESSION_ID 


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
