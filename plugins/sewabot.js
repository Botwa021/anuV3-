let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
╭───『 𝙇𝙄𝙎𝙏 𝙎𝙀𝙒𝘼 𝘽𝙊𝙏 』──⬣
│⬣ 1 Minggu
│⬣ 2 Minggu
│⬣ 2 Bulan
│⬣ 3 Bulan
╰────────────⬣
𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗸𝗹𝗶𝗸 𝗽𝗮𝗱𝗮 "𝗟𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮" 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗹𝗶𝗵𝗮𝘁 𝗹𝗶𝘀𝘁.
╭──『 𝙑𝙄𝘼 𝙈𝙊𝘽𝙄𝙇𝙀 』──⬣
│⬣ 𝘿𝙖𝙣𝙖 : 088233832771
│⬣ 𝙂𝙤𝙥𝙖𝙮: 088233832771
╰────────────⬣
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '1 Minggu', description: "Rp10.000\nSewa bot selama 1 Minggu.", rowId:".owner"},
        {title: '2 Minggu', description: "Rp20.000\nSewa bot selama 2 Minggu.", rowId:".owner"},
        {title: '2 Bulan', description: "Rp30.000\nSewa bot selama 2 bulan.", rowId:".owner"},
        {title: '3 Bulan', description: "Rp450.000\nSewa bot selama 3 bulan.", rowId:".owner"},
        {title: '𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: '𝙍𝙪𝙡𝙚𝙨 𝘽𝙤𝙩', description: "PERATURAN BOT", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^sewa(bot)?$/i
handler.help = ['sewa']
module.exports = handler
//Haruno Bot
