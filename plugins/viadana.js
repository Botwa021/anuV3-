let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via DANA
╠➥ NOMER INI
║➥ 088233832771
║
╠═〘 Fitur 〙 ═
║
╠➥ *FITUR DOWNLOADER 500++
║    YouTube, Twitter, 
║    Tiktok, Instagram, dll.
║    FITUR STIKER
╠➥ *FITUR ADMIN*
║   *KICK ORANG/JANGAN KESERINGAN*
║   *JADIIN ADMIN*
╠➥ *FITUR ISLAM*
║   *QURAN*
║   *CEK JADWAL SHALAT*
╠➥ *INTERNET*
║   *BRAINLY*
║   *GOOGLE*
╠➥ *DAN 200 LEBIH*
║   *FITUR LAINNYA*
║ 
╠═ ©2021 Rpg wabot-aq
╠═ Scrip original by Nurutomo
╠═〘 ${namabot} 〙 ═`.trim(), m)
}

handler.command = /^viadana$/i

module.exports = handler
