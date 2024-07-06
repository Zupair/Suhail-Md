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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_34_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk3LFxuICAgICAgICA4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDgxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTksXG4gICAgICAgIDg1LFxuICAgICAgICAzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExLFxuICAgICAgICAzNixcbiAgICAgICAgOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAyLFxuICAgICAgICAzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDM5LFxuICAgICAgICA0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgMTE0LFxuICAgICAgICAzMixcbiAgICAgICAgMTIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA0LFxuICAgICAgICA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDUwLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoMXNEQk5OU0hKVDVSRDZhdFBpWnB5d1hCVXgxTmxRczNidUNZNVU3akRZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxbXhVTU5wWFJnTzVjQUh3bGI2NmJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU3NDQ2NzNlLTg2NmItNGVjZC1iMTUyLWJkOGRkYzViY2I1YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODUsXG4gICAgICA0NixcbiAgICAgIDM2LFxuICAgICAgMjIyLFxuICAgICAgMjMyLFxuICAgICAgNixcbiAgICAgIDIyMyxcbiAgICAgIDExOCxcbiAgICAgIDI0OSxcbiAgICAgIDEzMyxcbiAgICAgIDE0NCxcbiAgICAgIDIwNSxcbiAgICAgIDE1MixcbiAgICAgIDE5OSxcbiAgICAgIDUsXG4gICAgICAyMDIsXG4gICAgICAxMDgsXG4gICAgICA2NCxcbiAgICAgIDE2MyxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk3LFxuICAgICAgMTA0LFxuICAgICAgMTkxLFxuICAgICAgOTUsXG4gICAgICAxMCxcbiAgICAgIDIwNCxcbiAgICAgIDE5MixcbiAgICAgIDU4LFxuICAgICAgMTQ0LFxuICAgICAgMTg0LFxuICAgICAgMTQ3LFxuICAgICAgMjQ3LFxuICAgICAgMjQ3LFxuICAgICAgMTY1LFxuICAgICAgODAsXG4gICAgICAxMDIsXG4gICAgICAxMjksXG4gICAgICAyLFxuICAgICAgMjYsXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1SlkzVjhQNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjUzNTUzNTgwOjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NzExODkwNDM0NDgyMzo2N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOK1ZwWndIRUtMWHBMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjI3ZVdVTHZxb0M1TWQrYlFqd0RPZjdBblZPS2h1TlB4RDVuVVZJTVZheG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYjE2NHVGOEhEMWNQMjR2V2dFM2hUV2xBQ0tEZlZ1Tm5SVXF2VUxjLytVUk1vZUhsdGt2dVVub2FpcEF5aFpiRFNCUUtHZmt3cjlTNFpRVk92YTkwQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwick9MdDRwVkIveVFMVk5YcDdJVWZWS2RQTmNabDlkVjEyeDlpSG1mMVB1cVhRR2VnL2hSZ2VORjJubFJuK01vdGhROHBSd0FCdzJKRERWdnBGZGtwaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjUzNTUzNTgwOjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI2NTYzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUUyQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTJCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ2ptUndHazNrYWdZai9BcXVYRG1DMTBtUXVWMnQ4amZoUHlPenEzUDcyZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTM4Mzc3NDM3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
