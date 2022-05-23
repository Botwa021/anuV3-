let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(thanks)).buffer(), `
╭◪ 〔 BIG THANKS TO 〕
》Thank you to ALLAH Swt
》Thank you to Nurutomo
》Thank you to ariffb
》Thank you to botstylee
》Thank you to bochilgaming 
》Thank you to benni ismael
》Thank you to zerochanBot
》Thank you to fernazer
》Thank ypi to Krizyn
》Thank you to Zeks
》Thank you to MikeBot Dev Team
》Thank you to BOTCAHX
》Thank you to Maikeru
》Thank you to AlyaaXd
》Thank you to xteam
》Thank you to RaselComel
》Thank you to Amirul Dev
》Thank you to Syahrul/Lev Bot
》Thank you to Fauzan
》Thank you to Hardianto
》Thank you to Mursid S
》Thank you to ALL Bot creator
》Thank you to penyediq apikey
》and Thanks you to support my Bot
╰◪
`.trim(), watermark, 'Back', '.menu')
handler.help = ['Thanksto', 'tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh
