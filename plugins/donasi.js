let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), `
╭──『 𝗗𝗢𝗡𝗔𝗦𝗜 』──⬣
│⬣ 𝘋𝘢𝘯𝘢 : 088233832771
│⬣ 𝘎𝘰𝘱𝘢𝘺 : 088233832771
╰────────⬣
`.trim(), footer, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
