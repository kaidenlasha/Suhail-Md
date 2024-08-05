const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Ghana,Accra."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Ghana/Accra";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "541654443" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "531654443";




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


global.SESSION_ID = process.env.SESSION_ID |"SUHAIL_11_20_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MCxcbiAgICAgICAgODAsXG4gICAgICAgIDk5LFxuICAgICAgICA4MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDExLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODksXG4gICAgICAgIDE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM0LFxuICAgICAgICA1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDU3LFxuICAgICAgICAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgyLFxuICAgICAgICA4LFxuICAgICAgICAzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA1NixcbiAgICAgICAgMjM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkxLFxuICAgICAgICA0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDksXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDksXG4gICAgICAgIDg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM1LFxuICAgICAgICA4MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiekRnODIwSDVMNmJvbFVodVFzbTJmd2ZiL2JXaXgyT2pwbzZJbDBkdWRSST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzM1MzE2NTQ0NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQzFDRERBRjFERDEwNTNFRDBEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjg1Njg0N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzUzMTY1NDQ0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FFN0JCNzEyQTBGMUUzMTU3MkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyODU2ODUwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNHaWlKUXQ4U3VlZGU3RFdCOUc4X1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjJlNjY0MDAtZGE1MC00YTU4LWI5NTUtMjlhMmFhOTYxYWI4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDg1LFxuICAgICAgMTY4LFxuICAgICAgMTM2LFxuICAgICAgMTMwLFxuICAgICAgMTA2LFxuICAgICAgMjM4LFxuICAgICAgMTgwLFxuICAgICAgNjgsXG4gICAgICA5OSxcbiAgICAgIDI0NSxcbiAgICAgIDE4NixcbiAgICAgIDk2LFxuICAgICAgODUsXG4gICAgICAxMjMsXG4gICAgICAyMTAsXG4gICAgICAxNDIsXG4gICAgICA5MCxcbiAgICAgIDE3NCxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMjksXG4gICAgICAxNixcbiAgICAgIDc0LFxuICAgICAgMTA4LFxuICAgICAgMjQzLFxuICAgICAgMTEsXG4gICAgICA1MyxcbiAgICAgIDExOSxcbiAgICAgIDIwNCxcbiAgICAgIDM3LFxuICAgICAgMzYsXG4gICAgICAxNzIsXG4gICAgICAxNTMsXG4gICAgICAxNzcsXG4gICAgICAxNjMsXG4gICAgICAxMTYsXG4gICAgICAxMjksXG4gICAgICAxOCxcbiAgICAgIDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUxNM00xMk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzUzMTY1NDQ0MzoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY4MzUwMTM1MTA3Njc5OjE3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcImthaWRlbi5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcUJrZUlHRUlqcndyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJYWWxDR29PWG5aTFQ1QVNVQm5tV0pwSUhzcXcwY3hGK3k1a0VpZGN4aTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMDU2RER2d01UMDhpVHhyaW5DSjAvQkZVV3ovUXhPTWo0L2JXWklUa2g5SDlJV1c5aE1OLytnbzhXWFlGNlk3enQ4dkxmSGZwcFhQS1R1U1RSSHZtanc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidUF2c3lKVnNWRWlNVjd2OHhiV0JMWGlSSENrUlhjek0vYkNWZjFPZUx6STZuY1FMc0c5cTVDbEtoUllhYmpRM1hIdm43OVd3TlpFdjRLYUxMeDlGaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTMxNjU0NDQzOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjg1Njg0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZvSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRm9KLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY2RuOThNL2Ntb05xNy8xYW05U0xYK01OQXVaV2hoWXRXSVlXa0FGVm9mdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODE2NDEyMzE0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI4NTY4NDU1MjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
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
