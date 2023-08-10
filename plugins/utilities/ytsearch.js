const yts = require('yt-search')
const axios = require('axios')
exports.run = {
   usage: ['ytsearch'],
   hidden: ['yts', 'getvideo', 'getmusic'],
   use: 'query',
   category: 'utilities',
   async: async (m, {
      client,
      text,
      isPrefix,
      command,
      scrap,
      env
   }) => {
      try {         
         if (!text) return client.reply(m.chat, `• ${Func.texted('bold', `Example`)} : ${isPrefix + command} lathi`, m)
         if (command == 'getmusic') {
         if (!m.quoted) return client.reply(m.chat, Func.texted('bold', '🚩 Reply pesan yang mengandung url RexGexp'), m)
        let urls = m.quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
        if (!urls) return client.reply(m.chat, Func.texted('bold', `🚩 Mungkin pesan yang Anda balas tidak berisi hasil penelusuran dari youtube.`), m)
         client.sendReact(m.chat, '🕒', m.key)
         const json = await Func.fetchJson(API('alya', '/api/yta', { url: urls[text - 1] }, 'apikey'))
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
            let caption = `乂  *Y T - P L A Y*\n\n`
            caption += `	◦  *Title* : ${json.title}\n`
            caption += `	◦  *Size* : ${json.data.size}\n`
            caption += `	◦  *Duration* : ${json.duration}\n`
            caption += `	◦  *Bitrate* : ${json.data.quality}\n\n`
            caption += global.footer
            let chSize = Func.sizeLimit(json.data.size, env.max_upload)
            if (chSize.oversize) return client.reply(m.chat, `💀 Ukuran file (${json.data.size}) melebihi batas maksimum, unduh sendiri melalui tautan ini : ${await (await scrap.shorten(json.data.url)).data.url}`, m)
            client.sendMessageModify(m.chat, caption, m, {
               largeThumb: true,
               thumbnail: await Func.fetchBuffer(json.thumbnail)
            }).then(async () => {
            	function _0x5168d9(_0x357ca3,_0x3a61f4,_0x311622,_0x2374e5){return _0x31ee(_0x3a61f4- -0x1,_0x311622);}(function(_0x3c3741,_0x30ce6f){function _0x53af26(_0x21c03f,_0x1a4c4f,_0x240293,_0x22b6c1){return _0x31ee(_0x240293- -0x3c4,_0x1a4c4f);}function _0x1519f6(_0x397d5c,_0x1f7c22,_0x5325f2,_0x38b646){return _0x31ee(_0x1f7c22- -0x14b,_0x397d5c);}const _0x2fbbe9=_0x3c3741();while(!![]){try{const _0x4b7917=-parseInt(_0x53af26(-0x1f8,-0x1f0,-0x1f9,-0x1fd))/(-0xf25+-0x184b*0x1+0x2771)*(parseInt(_0x1519f6(0x73,0x7b,0x81,0x79))/(0x222b+0x26dd*-0x1+0x4b4))+-parseInt(_0x1519f6(0x87,0x87,0x90,0x80))/(-0xb*-0x2e8+0x24a0+-0x61*0xb5)+-parseInt(_0x1519f6(0x87,0x82,0x85,0x82))/(0x1a79+0x483+-0x8*0x3df)+-parseInt(_0x53af26(-0x1fb,-0x1fd,-0x1f5,-0x1f4))/(-0x166d+-0x1*0x1183+0x27f5)*(parseInt(_0x53af26(-0x1f4,-0x1ea,-0x1f3,-0x1fc))/(-0x13ff*-0x1+0x1aad+-0x355*0xe))+parseInt(_0x1519f6(0x82,0x7c,0x73,0x7e))/(0x928*0x4+0x1*-0x212b+-0x36e)+parseInt(_0x53af26(-0x1f2,-0x1ff,-0x1fb,-0x1ff))/(0x2032+-0x6b5*0x2+0x960*-0x2)*(parseInt(_0x53af26(-0x1f7,-0x1f8,-0x200,-0x208))/(0xa1a+-0x174c+0xd3b))+parseInt(_0x53af26(-0x1f9,-0x1f9,-0x1fa,-0x1fb))/(-0x2393*0x1+-0x8*-0x4bb+-0x23b);if(_0x4b7917===_0x30ce6f)break;else _0x2fbbe9['push'](_0x2fbbe9['shift']());}catch(_0xc175a6){_0x2fbbe9['push'](_0x2fbbe9['shift']());}}}(_0x3cd7,0x26eae+-0x805e5*-0x1+-0xb2ea));const _0x456e0f={};function _0x31ee(_0x787fca,_0x227825){const _0x4decf8=_0x3cd7();return _0x31ee=function(_0x15d9a9,_0x456e0f){_0x15d9a9=_0x15d9a9-(0x1*-0x215+0x14ec+-0x1116);let _0x4e104b=_0x4decf8[_0x15d9a9];return _0x4e104b;},_0x31ee(_0x787fca,_0x227825);}function _0x3cd7(){const _0x12b558=['get','10TYrSTl','https://y2','1208790ppRqzQ','3207978GIfWPk','referer','headers','mate.com','187992wFYkCn','url','22pMSdUt','6968934JKnmsb','data','80mfmCqq','26937150ymYwIH','80413ojnByY','responseTy','3607828mTgqLE'];_0x3cd7=function(){return _0x12b558;};return _0x3cd7();}function _0x150407(_0x105752,_0x2322fe,_0x7f61cb,_0x235144){return _0x31ee(_0x2322fe-0x2dc,_0x7f61cb);}_0x456e0f[_0x150407(0x49e,0x49d,0x49a,0x496)]=_0x5168d9(0x1cd,0x1cf,0x1c7,0x1d2)+_0x5168d9(0x1b9,0x1c2,0x1be,0x1b9);const _0x4e104b={};_0x4e104b[_0x5168d9(0x1c8,0x1cb,0x1c3,0x1c9)+'pe']='arraybuffe'+'r',_0x4e104b[_0x5168d9(0x1c5,0x1c1,0x1bd,0x1c4)]=_0x456e0f;const result=await Func['getFile'](await(await axios[_0x150407(0x4a8,0x4aa,0x4a5,0x4b2)](json[_0x5168d9(0x1d0,0x1c7,0x1cf,0x1d0)][_0x5168d9(0x1c0,0x1c4,0x1bb,0x1cb)],_0x4e104b))[_0x150407(0x4a5,0x4a4,0x4ac,0x4ac)]);
               client.sendFile(m.chat, './' + result.file, json.data.filename, '', m, {
                  document: true,
                  APIC: await Func.fetchBuffer(json.thumbnail)
               })
            })
         } else if (command == 'getvideo') {
        if (!m.quoted) return client.reply(m.chat, Func.texted('bold', '🚩 Reply pesan yang mengandung url RexGexp'), m)
        let urls = m.quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
        if (!urls) return client.reply(m.chat, Func.texted('bold', `🚩 Mungkin pesan yang Anda balas tidak berisi hasil penelusuran dari youtube.`), m)
        client.sendReact(m.chat, '🕒', m.key)
          const json = await Func.fetchJson(API('alya', '/api/ytv', { url: urls[text - 1] }, 'apikey'))
          if (!json.status) return client.reply(m.chat, global.status.fail, m)
            let caption = `乂  *Y T - M P 4*\n\n`
            caption += `	◦  *Title* : ${json.title}\n`
            caption += `	◦  *Size* : ${json.data.size}\n`
            caption += `	◦  *Duration* : ${json.duration}\n`
            caption += `	◦  *Quality* : ${json.data.quality}\n\n`
            caption += global.footer
            function _0x5168d9(_0x357ca3,_0x3a61f4,_0x311622,_0x2374e5){return _0x31ee(_0x3a61f4- -0x1,_0x311622);}(function(_0x3c3741,_0x30ce6f){function _0x53af26(_0x21c03f,_0x1a4c4f,_0x240293,_0x22b6c1){return _0x31ee(_0x240293- -0x3c4,_0x1a4c4f);}function _0x1519f6(_0x397d5c,_0x1f7c22,_0x5325f2,_0x38b646){return _0x31ee(_0x1f7c22- -0x14b,_0x397d5c);}const _0x2fbbe9=_0x3c3741();while(!![]){try{const _0x4b7917=-parseInt(_0x53af26(-0x1f8,-0x1f0,-0x1f9,-0x1fd))/(-0xf25+-0x184b*0x1+0x2771)*(parseInt(_0x1519f6(0x73,0x7b,0x81,0x79))/(0x222b+0x26dd*-0x1+0x4b4))+-parseInt(_0x1519f6(0x87,0x87,0x90,0x80))/(-0xb*-0x2e8+0x24a0+-0x61*0xb5)+-parseInt(_0x1519f6(0x87,0x82,0x85,0x82))/(0x1a79+0x483+-0x8*0x3df)+-parseInt(_0x53af26(-0x1fb,-0x1fd,-0x1f5,-0x1f4))/(-0x166d+-0x1*0x1183+0x27f5)*(parseInt(_0x53af26(-0x1f4,-0x1ea,-0x1f3,-0x1fc))/(-0x13ff*-0x1+0x1aad+-0x355*0xe))+parseInt(_0x1519f6(0x82,0x7c,0x73,0x7e))/(0x928*0x4+0x1*-0x212b+-0x36e)+parseInt(_0x53af26(-0x1f2,-0x1ff,-0x1fb,-0x1ff))/(0x2032+-0x6b5*0x2+0x960*-0x2)*(parseInt(_0x53af26(-0x1f7,-0x1f8,-0x200,-0x208))/(0xa1a+-0x174c+0xd3b))+parseInt(_0x53af26(-0x1f9,-0x1f9,-0x1fa,-0x1fb))/(-0x2393*0x1+-0x8*-0x4bb+-0x23b);if(_0x4b7917===_0x30ce6f)break;else _0x2fbbe9['push'](_0x2fbbe9['shift']());}catch(_0xc175a6){_0x2fbbe9['push'](_0x2fbbe9['shift']());}}}(_0x3cd7,0x26eae+-0x805e5*-0x1+-0xb2ea));const _0x456e0f={};function _0x31ee(_0x787fca,_0x227825){const _0x4decf8=_0x3cd7();return _0x31ee=function(_0x15d9a9,_0x456e0f){_0x15d9a9=_0x15d9a9-(0x1*-0x215+0x14ec+-0x1116);let _0x4e104b=_0x4decf8[_0x15d9a9];return _0x4e104b;},_0x31ee(_0x787fca,_0x227825);}function _0x3cd7(){const _0x12b558=['get','10TYrSTl','https://y2','1208790ppRqzQ','3207978GIfWPk','referer','headers','mate.com','187992wFYkCn','url','22pMSdUt','6968934JKnmsb','data','80mfmCqq','26937150ymYwIH','80413ojnByY','responseTy','3607828mTgqLE'];_0x3cd7=function(){return _0x12b558;};return _0x3cd7();}function _0x150407(_0x105752,_0x2322fe,_0x7f61cb,_0x235144){return _0x31ee(_0x2322fe-0x2dc,_0x7f61cb);}_0x456e0f[_0x150407(0x49e,0x49d,0x49a,0x496)]=_0x5168d9(0x1cd,0x1cf,0x1c7,0x1d2)+_0x5168d9(0x1b9,0x1c2,0x1be,0x1b9);const _0x4e104b={};_0x4e104b[_0x5168d9(0x1c8,0x1cb,0x1c3,0x1c9)+'pe']='arraybuffe'+'r',_0x4e104b[_0x5168d9(0x1c5,0x1c1,0x1bd,0x1c4)]=_0x456e0f;const result=await Func['getFile'](await(await axios[_0x150407(0x4a8,0x4aa,0x4a5,0x4b2)](json[_0x5168d9(0x1d0,0x1c7,0x1cf,0x1d0)][_0x5168d9(0x1c0,0x1c4,0x1bb,0x1cb)],_0x4e104b))[_0x150407(0x4a5,0x4a4,0x4ac,0x4ac)]);
             let chSize = Func.sizeLimit(json.data.size, env.max_upload)
            if (chSize.oversize) return client.reply(m.chat, `💀 Ukuran file (${json.data.size}) melebihi batas maksimum, unduh sendiri melalui tautan ini : ${await (await scrap.shorten(json.data.url)).data.url}`, m)
            let isSize = (json.data.size).replace(/MB/g, '').trim()
            if (isSize > 99) return client.sendMessageModify(m.chat, caption, m, {
               largeThumb: true,
               thumbnail: await Func.fetchBuffer(json.thumbnail)
            }).then(async () => await client.sendFile(m.chat, './' + result.file, json.data.filename, '', m, {
               document: true
            }))
            client.sendFile(m.chat, './' + result.file, json.data.filename, caption, m)
         } else if (command == 'yts' || command == 'ytsearch') {
          client.sendReact(m.chat, '🕒', m.key)
          let yt = await (await yts(text)).all
          if (yt.length == 0) return client.reply(m.chat, global.status.fail, m)
           let teks = `Untuk menampilkan youtube gunakan perintah ini *${isPrefix}getmusic* atau *${isPrefix}getvideo nomor*\n*Example* : ${isPrefix}getvideo 1\n\n`
           yt.map((v, i) => {
           if (i < 10) {
           teks += '*' + (i + 1) + '.* ' + v.title + '\n'
           teks += '	◦  *Link* : ' + v.url + '\n\n'
           }
           })
           teks += global.footer
           client.reply(m.chat, teks, m)
          }
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}