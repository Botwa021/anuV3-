process.env.TZ = 'Asia/Jakarta'
let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const os = require('os')
var sisaram = `${Math.round(os.freemem / 1024 / 1024)}`
var totalram = `${Math.round(os.totalmem / 1024 / 1024)}`
var ramDipake = totalram - sisaram
const defaultMenu = {
    before: `
┏──『 𝙈𝙎 𝘽𝙊𝙏 』──⬣
│⬡ *Hai*, %name!
│
│⬡ *Tersisa* : %limit Limit
│⬡ *Role* : %role
│⬡ *Level* : %level (%exp / %maxexp) 
│⬡ *Exp* : %totalexp XP 
│ 
│⬡ *Hari* : %week %weton 
│⬡ *Tanggal* : %date
│⬡ *Tanggal Islam* : %dateIslamic
│⬡ *Waktu* : %time
│
│⬡ *Uptime* : %uptime
│⬡ *Database* : %rtotalreg dari %totalreg
│⬡ *Memory Used* : ${ramDipake}MB / ${totalram}MB
│⬡ *Instagram* :
│⬡ https://instagram.com/mursid.st
┗───────────⬣`.trimStart(),
    header: '┏──『 %category 』──⬣',
    body: '│⬡%cmd %islimit %isPremium',
    footer: '┗──────⬣\n',
   footerText: '© 𝙈𝙎 𝘽𝙊𝙏',
    after: `
%npmname@^%version
${'%npmdesc'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
    let bzz = fs.readFileSync('./vn/anu.mp3')
    let bzz2 = fs.readFileSync('./vn/hihi.mp3')
    let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let tags
    let teks = `${args[0]}`.toLowerCase()
    let arrayMenu = ['all', 'game', 'edukasi', 'news', 'nsfw', 'xp', 'stiker', 'image', 'anime', 'kerangajaib', 'quotes', 'admin', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'vote', 'tanpakategori', 'owner']
    if (!arrayMenu.includes(teks)) teks = '404'
    if (teks == 'all') tags = {
        'main': 'Utama',
        'game': 'Game',
        'xp': 'Exp & Limit',
        'nsfw': `NSFW ${global.opts['nsfw'] ? '' : '(Dinonaktifkan)'}`,
        'sticker': 'Stiker',
        'edukasi': 'Edukasi',
        'news': 'News',
        'kerang': 'Kerang Ajaib',
        'quotes': 'Quotes',
        'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
        'rpg': 'Epic Rpg',
        'group': 'Grup',
        'anime': 'Anime',
        'premium': 'Premium',
        'internet': 'Internet',
        'image': 'Random Image',
        'anonymous': 'Anonymous Chat',
        'nulis': 'MagerNulis & Logo',
        'downloader': 'Downloader',
        'tools': 'Tools',
        'fun': 'Fun',
        'database': 'Database',
        'vote': 'Voting',
        'absen': 'Absen',
        'quran': 'Islam',
        'audio': 'Pengubah Suara',
        'jadibot': 'Jadi Bot',
        'info': 'Info',
        '': 'Tanpa Kategori',
    }
    if (teks == 'game') tags = {
        'game': 'Game'
    }
    if (teks == 'xp') tags = {
        'xp': 'Exp & Limit'
    }
    if (teks == 'news') tags = {
        'news': 'News'
    }
    if (teks == 'edukasi') tags = {
        'edukasi': 'Edukasi'
    }
    if (teks == 'nsfw') tags = {
        'hentai': 'Hentai',
        'bokep': 'Bokep'
    }
    if (teks == 'stiker') tags = {
        'sticker': 'Stiker'
    }
    if (teks == 'rpg') tags = {
        'rpg': 'Epic RPG'
    }
    if (teks == 'kerangajaib') tags = {
        'kerang': 'Kerang Ajaib'
    }
    if (teks == 'quotes') tags = {
        'quotes': 'Quotes'
    }
    if (teks == 'admin') tags = {
        'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
    }
    if (teks == 'grup') tags = {
        'group': 'Grup'
    }
    if (teks == 'premium') tags = {
        'premium': 'Premium'
    }
    if (teks == 'internet') tags = {
        'internet': 'Internet'
    }
    if (teks == 'image') tags = {
        'image': 'Random Image'
    }
    if (teks == 'anonymous') tags = {
        'anonymous': 'Anonymous Chat'
    }
    if (teks == 'nulis') tags = {
        'nulis': 'MagerNulis & Logo'
    }
    if (teks == 'downloader') tags = {
        'downloader': 'Downloader'
    }
    if (teks == 'tools') tags = {
        'tools': 'Tools'
    }
    if (teks == 'fun') tags = {
        'fun': 'Fun'
    }
    if (teks == 'database') tags = {
        'database': 'Database'
    }
    if (teks == 'vote') tags = {
        'vote': 'Voting',
        'absen': 'Absen'
    }
    if (teks == 'anime') tags = {
        'anime': 'Anime'
    }
    if (teks == 'quran') tags = {
        'quran': 'Islam'
    }
    if (teks == 'audio') tags = {
        'audio': 'Pengubah Suara'
    }
    if (teks == 'jadibot') tags = {
        'jadibot': 'Jadi Bot'
    }
    if (teks == 'info') tags = {
        'info': 'Info'
    }
    if (teks == 'tanpakategori') tags = {
        '': 'Tanpa Kategori'
    }
    if (teks == 'owner') tags = {
        'owner': 'Owner',
        'host': 'Host',
        'advanced': 'Advanced'
    }



    try {
        let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => _))
        let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
        let { min, xp, max } = levelling.xpRange(level, global.multiplier)
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let names = m.fromMe ? conn.user : conn.contacts[who]
        let pushname = `${names.vnmae || names.notify || names.names || ('+' + names.jid.split`@`[0])}`
        let pushn = 'daftar dulu ya'
        let name = registered ? global.db.data.users[m.sender].name : pushn
        let d = new Date(new Date + 3600000)
        let locale = 'id'
        // d.getTimeZoneOffset()
        // Offset -420 is 18.00
        // Offset    0 is  0.00
        // Offset  420 is  7.00
        let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
        let week = d.toLocaleDateString(locale, { weekday: 'long' })
        let date = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(d)
        let time = d.toLocaleTimeString(locale, {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
        let _uptime = process.uptime() * 1000
        let _muptime
        if (process.send) {
            process.send('uptime')
            _muptime = await new Promise(resolve => {
                process.once('message', resolve)
                setTimeout(resolve, 1000)
            }) * 1000
        }
        let muptime = clockString(_muptime)
        let uptime = clockString(_uptime)
        let totalreg = Object.keys(global.db.data.users).length
        let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
        let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
            return {
                help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
                tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
                prefix: 'customPrefix' in plugin,
                limit: plugin.limit,
                premium: plugin.premium,
                enabled: !plugin.disabled,
            }
        })
        if (teks == '404') {
            let mens = global.conn.user.jid
            return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                "listMessage": {
                    "title": `${ucapan()}, ${name}`.trim(),
                    "description": `
┏──『 𝙎𝙩𝙖𝙩𝙪𝙨 𝘽𝙤𝙩 』──⬣
│⬡ Aktif selama : ${uptime}
│⬡ Baterai : ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Charger' : ''}` : 'tidak diketahui'}
│⬡ Pengguna : ${Object.keys(global.db.data.users).length}
│⬡ Jadibot : ${totaljadibot.length}
│⬡ Terblock : ${conn.blocklist.length} 
│⬡ Chat Terbanned : ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}
│⬡ Pengguna Terbanned : ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
┗──────────⬣
┏──『 𝘽𝙤𝙩 𝙄𝙣𝙛𝙤 』──⬣
│⬡ Version :  ${conn.browserDescription[2]}
│⬡ Browser : ${conn.browserDescription[1]}
│⬡ Host Number : @${global.conn.user.jid.split('@')[0]}
│⬡ Web Name : ${conn.browserDescription[0]}
│⬡ Platform : Unbuntu Linux
┗──────────⬣`.trim(),
                    "footerText": "_*© MS BOT*_",
                    "buttonText": "𝘾𝙡𝙞𝙘𝙠 𝙃𝙚𝙧𝙚",
                    "listType": "SINGLE_SELECT",
                    "sections": [
                        {
                            "rows": [{
                                "title": "Status Bot",
                                "description": "𝙎𝙩𝙖𝙩𝙪𝙨 𝙙𝙖𝙣 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙨𝙞 𝘽𝙤𝙩",
                                "rowId": ".botstatus"
                            }, {
                                "title": "Rules",
                                "description": "𝙐𝙨𝙚𝙧 𝙮𝙖𝙣𝙜 𝙗𝙞𝙟𝙖𝙠 𝙨𝙚𝙡𝙖𝙡𝙪 𝙢𝙚𝙢𝙖𝙩𝙪𝙝𝙞 𝙍𝙪𝙡𝙚𝙨.",
                                "rowId": ".rules"
                            }, {
                                "title": "Info Mursid",
                                "description": "𝙄𝙣𝙛𝙤 𝙏𝙚𝙣𝙩𝙖𝙣𝙜 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩",
                                "rowId": ".infomursid"
                            }, {
                                "title": "Donasi",
                                "description": "𝙃𝙖𝙨𝙞𝙡 𝙙𝙤𝙣𝙖𝙨𝙞 𝙖𝙠𝙖𝙣 𝙙𝙞𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙗𝙪𝙖𝙩 𝙨𝙚𝙬𝙖 𝙖𝙩𝙖𝙪 𝙗𝙚𝙡𝙞 𝙍𝘿𝙋/𝙑𝙋𝙎 𝙖𝙜𝙖𝙧 𝙗𝙤𝙩 𝙗𝙞𝙨𝙖 𝙗𝙚𝙧𝙟𝙖𝙡𝙖𝙣 24 𝙟𝙖𝙢 𝙩𝙖𝙣𝙥𝙖 𝙖𝙙𝙖 𝙠𝙚𝙣𝙙𝙖𝙡𝙖",
                                "rowId": ".donasi"
                            }, {
                                "title": "Sewa bot - Premium",
                                "description": "𝙐𝙣𝙩𝙪𝙠 𝙠𝙖𝙢𝙪 𝙮𝙖𝙣𝙜 𝙞𝙣𝙜𝙞𝙣 𝙢𝙚𝙡𝙞𝙝𝙖𝙩 𝙙𝙖𝙛𝙩𝙖𝙧 𝙝𝙖𝙧𝙜𝙖 𝙨𝙚𝙬𝙖 𝙙𝙖𝙣 𝙥𝙧𝙚𝙢𝙞𝙪𝙢.",
                                "rowId": ".sewabot"
                            }],
                            "title": "⬡────────────❲ 𝙎𝙚𝙢𝙪𝙖 𝙋𝙚𝙧𝙞𝙣𝙩𝙖𝙝 ❳────────────⬡"
                        }, {
                            "rows": [{
                                "title": `[🧾| Semua Perintah`,
                                "description": "𝙈𝙚𝙢𝙗𝙚𝙧𝙞𝙠𝙖𝙣 𝙎𝙚𝙢𝙪𝙖𝙣𝙮𝙖 𝙁𝙞𝙩𝙪𝙧 𝘽𝙤𝙩",
                                "rowId": ".? all"
                            }, {
                                "title": "|🕋| Islam",
                                "description": "𝙈𝙚𝙣𝙪 𝙏𝙚𝙣𝙩𝙖𝙣𝙜 𝙄𝙨𝙡𝙖𝙢",
                                "rowId": ".? quran"
                            }, {
                                "title": "|🏫| Edukasi",
                                "description": "𝙈𝙚𝙣𝙪 𝗘𝗱𝘂𝗸𝗮𝘀𝗶",
                                "rowId": ".? edukasi"
                            }, {
                                "title": "|📰| News",
                                "description": "𝙈𝙚𝙣𝙪 𝘽𝙚𝙧𝙞𝙩𝙖",
                                "rowId": ".? News"
                            }, {
                                "title": "|🎮| Game",
                                "description": "𝙈𝙚𝙣𝙪 𝗚𝗮𝗺𝗲",
                                "rowId": ".? game"
                            }, {
                                "title": "|🗺️| Epic Rpg",
                                "description": "𝗠𝗲𝗻𝘂 𝗚𝗮𝗺𝗲 𝗥𝗣𝗚",
                                "rowId": ".? rpg"
                            }, {
                                "title": "|📈| XP",
                                "description": "𝗫𝗣 𝗗𝗮𝗻 𝗟𝗲𝘃𝗲𝗹",
                                "rowId": ".? xp"
                            }, {
                                "title": "|🔞| NSFW",
                                "description": "𝙈𝙚𝙣𝙪 𝘽𝙤𝙠𝙚𝙥/𝘿𝙞 𝙇𝙖𝙧𝙖𝙣𝙜 𝙆𝙚𝙧𝙖𝙨 𝘿𝙞 𝙂𝙪𝙣𝙖𝙠𝙖𝙣 𝙅𝙞𝙠𝙖 𝙐𝙨𝙚𝙧 𝙠𝙚𝙩𝙖𝙝𝙪𝙖𝙣 𝙈𝙚𝙣𝙜𝙜𝙪𝙣𝙖𝙠𝙖𝙣, 𝙐𝙨𝙚𝙧 𝙏𝙚𝙧𝙨𝙚𝙗𝙪𝙩 𝘼𝙠𝙖𝙣 𝙎𝙖𝙮𝙖 𝘽𝙖𝙣 𝙋𝙚𝙧𝙢𝙖𝙣𝙚𝙣",
                                "rowId": ".? nsfw"
                            }, {
                                "title": "|🖼️| Random Image",
                                "description": "𝙈𝙚𝙣𝙪 𝙁𝙤𝙩𝙤 𝙍𝙖𝙣𝙙𝙤𝙢",
                                "rowId": ".? image"
                            }, {
                                "title": "|🎇| Stiker",
                                "description": "𝙈𝙚𝙣𝙪 𝘽𝙪𝙖𝙩 𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝙎𝙚𝙨𝙪𝙠𝙖 𝙃𝙖𝙩𝙞",
                                "rowId": ".? stiker"
                            }, {
                                "title": "|🐚| Kerang Ajaib",
                                "description": "𝙈𝙚𝙣𝙪𝙧𝙪𝙩 𝙆𝙚𝙧𝙖𝙣𝙜 𝘼𝙟𝙖𝙞𝙗",
                                "rowId": ".? kerangajaib"
                            }, {
                                "title": "|📑| Quotes",
                                "description": "𝙈𝙚𝙣𝙪 𝙌𝙪𝙤𝙩𝙚𝙨",
                                "rowId": ".? quotes"
                            }, {
                                "title": "|🏛️| Admin",
                                "description": "𝙈𝙚𝙣𝙪 𝙐𝙣𝙩𝙪𝙠 𝘼𝙙𝙢𝙞𝙣 𝙂𝙧𝙪𝙥",
                                "rowId": ".? admin"
                            }, {
                                "title": "|🏢| Grup",
                                "description": "𝙈𝙚𝙣𝙪 𝙂𝙧𝙪𝙥",
                                "rowId": ".? grup"
                            }, {
                                "title": "|🔝| Premium",
                                "description": "𝙈𝙚𝙣𝙪 𝙐𝙣𝙩𝙪𝙠 𝙐𝙨𝙚𝙧 𝙋𝙧𝙚𝙢𝙞𝙪𝙢",
                                "rowId": ".? premium"
                            }, {
                                "title": "|🖥️| Internet",
                                "description": "𝘾𝙖𝙧𝙞 𝙎𝙚𝙨𝙪𝙖𝙩𝙪 𝘿𝙞 𝘽𝙤𝙩",
                                "rowId": ".? internet"
                            }, {
                                "title": "|🥷| Anonymous",
                                "description": "𝙈𝙖𝙞𝙣𝙠𝙖𝙣 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨 𝘾𝙝𝙖𝙩 𝙏𝙖𝙥𝙞 𝙅𝙖𝙣𝙜𝙖𝙣 𝙎𝙥𝙖𝙢 𝙔𝙖𝙖",
                                "rowId": ".? anonymous"
                            }, {
                                "title": "|✒️| Nulis & Logo",
                                "description": "𝙈𝙚𝙣𝙪 𝙉𝙪𝙡𝙞𝙨 & 𝙇𝙤𝙜𝙤",
                                "rowId": ".? nulis"
                            }, {
                                "title": "|📺| Downloader",
                                "description": "𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙎𝙚𝙨𝙪𝙖𝙩𝙪 𝘿𝙞 𝘽𝙤𝙩",
                                "rowId": ".? downloader"
                            }, {
                                "title": "|🔧| Tools",
                                "description": "𝙏𝙤𝙤𝙡𝙨 𝙔𝙖𝙣𝙜 𝘽𝙞𝙨𝙖 𝙙𝙞 𝙂𝙪𝙣𝙖𝙠𝙖𝙣 𝘿𝙞 𝘽𝙤𝙩",
                                "rowId": ".? tools"
                            }, {
                                "title": "|🎇| Fun",
                                "description": "𝙈𝙚𝙣𝙪 𝘾𝙚𝙧𝙞𝙖",
                                "rowId": ".? fun"
                            }, {
                                "title": "|📂| Database",
                                "description": "𝙎𝙞𝙢𝙥𝙖𝙣 𝙎𝙚𝙨𝙪𝙖𝙩𝙪 𝘿𝙞 𝘽𝙤𝙩",
                                "rowId": ".? database"
                            }, {
                                "title": "|📝| Vote & Absen",
                                "description": "𝙈𝙚𝙣𝙪 𝙑𝙤𝙩𝙚 & 𝘼𝙗𝙨𝙚𝙣",
                                "rowId": ".? vote"
                            }, {
                                "title": "|🎙️| Pengubah Suara",
                                "description": "𝙐𝙗𝙖𝙝 𝙎𝙪𝙖𝙧𝙖𝙢𝙪",
                                "rowId": ".? audio"
                            }, {
                                "title": "|🤖| Jadi Bot",
                                "description": "𝙅𝙖𝙙𝙞 𝘽𝙤𝙩",
                                "rowId": ".? jadibot"
                            }, {
                                "title": "|⛩️| Anime",
                                "description": "𝘾𝙖𝙧𝙞 𝘼𝙣𝙞𝙢𝙚 𝘿𝙞 𝘽𝙤𝙩",
                                "rowId": ".? anime"
                            }, {
                                "title": "|ℹ️| Info",
                                "description": "𝙄𝙣𝙛𝙤 𝙏𝙚𝙣𝙩𝙖𝙣𝙜 𝘽𝙤𝙩",
                                "rowId": ".? info"
                            }, {
                                "title": "|🌴|Tanpa Kategori",
                                "description": "𝙈𝙚𝙣𝙪 𝙏𝙖𝙣𝙥𝙖 𝙆𝙖𝙩𝙚𝙜𝙤𝙧𝙞/𝘽𝙚𝙡𝙪𝙢 𝙐𝙥𝙙𝙖𝙩𝙚",
                                "rowId": ".? tanpakategori"
                            }, {
                                "title": "|🧑‍💻| Owner",
                                "description": "𝙈𝙚𝙣𝙪 𝙆𝙝𝙪𝙨𝙪𝙨 𝙊𝙬𝙣𝙚𝙧",
                                "rowId": ".? owner"
                            }],
                            "title": "⬡─────────❲ 𝙏𝙚𝙣𝙩𝙖𝙣𝙜 𝘽𝙤𝙩 𝘿𝙖𝙣 𝙇𝙖𝙞𝙣𝙣𝙮𝙖 ❳─────────⬡"
                        }, {
                            "rows": [{
                                "title": "Owner Bot",
                                "description": "𝙋𝙚𝙢𝙞𝙡𝙞𝙠 𝘽𝙤𝙩/𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 𝙈𝙪𝙧𝙨𝙞𝙙 𝙎",
                                "rowId": ".owner"
                            }, {
                                "title": "Donasi",
                                "description": "𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙙𝙤𝙣𝙖𝙨𝙞 𝙪𝙣𝙩𝙪𝙠 𝙢𝙚𝙣𝙙𝙪𝙠𝙪𝙣𝙜 𝙗𝙤𝙩 𝙖𝙜𝙖𝙧 𝙖𝙠𝙩𝙞𝙛 𝙨𝙚𝙡𝙖𝙡𝙪",
                                "rowId": ".donasi"
                            }, {
                                "title": "Kata penutup",
                                "description": "𝙏𝙚𝙧𝙞𝙢𝙖𝙠𝙖𝙨𝙞𝙝 𝙪𝙣𝙩𝙪𝙠 𝙪𝙨𝙚𝙧 𝙮𝙖𝙣𝙜 𝙩𝙚𝙡𝙖𝙝 𝙢𝙚𝙣𝙜𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙗𝙤𝙩, 𝙟𝙞𝙠𝙖 𝙖𝙙𝙖 𝙠𝙚𝙨𝙖𝙡𝙖𝙝𝙖𝙣 𝙖𝙩𝙖𝙪 𝙥𝙚𝙧𝙢𝙞𝙣𝙩𝙖𝙖𝙣 𝙗𝙞𝙨𝙖 𝙘𝙝𝙖𝙩 𝙠𝙚 𝙣𝙤𝙢𝙤𝙧 𝙤𝙬𝙣𝙚𝙧\n𝙉𝙤𝙩𝙚: 𝙘𝙝𝙖𝙩 𝙋/𝙢𝙖𝙞𝙣² 𝙩𝙞𝙙𝙖𝙠 𝙖𝙠𝙖𝙣 𝙙𝙞 𝙧𝙚𝙨𝙥𝙤𝙣(𝙪𝙨𝙚𝙧 𝙗𝙞𝙨𝙖 𝙩𝙚𝙧𝙠𝙚𝙣𝙖 𝙗𝙖𝙣𝙣𝙚𝙙/𝙗𝙡𝙤𝙘𝙠",
                                "rowId": ".creator"
                            }, {
                                "title": "Thanks To |🎖️|",
                                "description": "𝙏𝙚𝙧𝙞𝙢𝙖 𝙠𝙖𝙨𝙞𝙝 𝙗𝙖𝙣𝙮𝙖𝙠 𝙪𝙣𝙩𝙪𝙠 𝙪𝙨𝙚𝙧 𝙮𝙖𝙣𝙜 𝙩𝙚𝙡𝙖𝙝 𝙗𝙚𝙧𝙥𝙖𝙧𝙩𝙞𝙨𝙞𝙥𝙖𝙨𝙞 𝙙𝙖𝙡𝙖𝙢 𝙗𝙤𝙩",
                                "rowId": ".tqto"
                            }],
                            "title": "⬡────────────❲ 𝙋𝙚𝙣𝙪𝙩𝙪𝙥 ❳────────────⬡"
                        }
                    ], "contextInfo":
                    {
                        "stanzaId": m.key.id,
                        "participant": "0@s.whatsapp.net",
                        "remoteJid": "6283136505591-1614953337@g.us",
                        "mentionedJid": [mens],
                        "quotedMessage": m.message
                    }
                }
            }, {}), { waitForAck: true })
        }
        // gunakan ini jika kamu menggunakan whatsapp bisnis
        //   throw `
        // ┌〔 DAFTAR MENU 〕
        // ├ ${_p + command} all
        // ├ ${_p + command} game
        // ├ ${_p + command} xp
        // ├ ${_p + command} stiker
        // ├ ${_p + command} kerang
        // ├ ${_p + command} quotes
        // ├ ${_p + command} admin
        // ├ ${_p + command} group
        // ├ ${_p + command} premium
        // ├ ${_p + command} internet
        // ├ ${_p + command} anonymous
        // ├ ${_p + command} nulis
        // ├ ${_p + command} downloader
        // ├ ${_p + command} tools
        // ├ ${_p + command} fun
        // ├ ${_p + command} database
        // ├ ${_p + command} vote
        // ├ ${_p + command} quran
        // ├ ${_p + command} audio
        // ├ ${_p + command} jadibot
        // ├ ${_p + command} info
        // ├ ${_p + command} tanpa kategori
        // ├ ${_p + command} owner
        // └────  
        //     `.trim()
        let groups = {}
        for (let tag in tags) {
            groups[tag] = []
            for (let plugin of help)
                if (plugin.tags && plugin.tags.includes(tag))
                    if (plugin.help) groups[tag].push(plugin)
            // for (let tag of plugin.tags)
            //   if (!(tag in tags)) tags[tag] = tag
        }
        conn.menu = conn.menu ? conn.menu : {}
        let before = conn.menu.before || defaultMenu.before
        let header = conn.menu.header || defaultMenu.header
        let body = conn.menu.body || defaultMenu.body
        let footer = conn.menu.footer || defaultMenu.footer
        let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
        let _text = [
            before,
            ...Object.keys(tags).map(tag => {
                return header.replace(/%category/g, tags[tag]) + '\n' + [
                    ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
                        return menu.help.map(help => {
                            return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                                .trim()
                        }).join('\n')
                    }),
                    footer
                ].join('\n')
            }),
            after
        ].join('\n')
        text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
        let replace = {
            '%': '%',
            p: _p, uptime, muptime,
            me: conn.user.name,
            npmname: package.name,
            npmdesc: package.description,
            version: package.version,
            exp: exp - min,
            maxexp: xp,
            totalexp: exp,
            xp4levelup: max - exp <= 0 ? `Siap untuk ${_p}levelup` : `${max - exp} XP lagi untuk levelup`,
            github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
            level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
            readmore: readMore
        }
        text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

        await conn.fakeReply(m.chat, 'Loading...', '0@s.whatsapp.net', 'BY MURSID (+6288233832771)', 'status@broadcast')
        conn.send3ButtonImg(m.chat, await (await fetch(image)).buffer(), text.trim(), `*Runtime ${uptime}*\n*${week} ${date}*`, 'ρємιℓιк вσт', '.owner', 'ɪɴƒᴏ мυʀѕι∂', '.infomursid', 'ʀυℓєѕ', '.rules', m, { mentions: ['6288233832771@s.whatsapp.net'] })
        await conn.sendFile(m.chat, bzz, 'bzz.opus', null, m, true)
        await conn.sendFile(m.chat, bzz2, 'bzz2.opus', null, m, true)
    } catch (e) {
        conn.reply(m.chat, 'Maaf, menu sedang error', m)
        throw e
    }
}
handler.help = ['menu', '?', 'help']
handler.tags = ['main']
handler.command = /^(menu|\?|help)$/i

handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Good Night"
    if (time >= 4) {
        res = "Selamat Pagi"
    }
    if (time > 10) {
        res = "Selamat Siang"
    }
    if (time >= 15) {
        res = "Selamat Sore"
    }
    if (time >= 18) {
        res = "Selamat Malam"
    }
    if (time >= 23) {
        res = "Udah malem bobo gih"
    }
    return res
}
