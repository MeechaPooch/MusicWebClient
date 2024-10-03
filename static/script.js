const GUI = {
    mp3source:document.querySelector('#mp3source'),
    audioplayer:document.querySelector('#audioplayer'),
    goButton:document.querySelector('#gobutton'),
    searchBar:document.querySelector('#searchbar')
}


GUI.goButton.addEventListener('click',async ()=>{
    let query = GUI.searchBar.value;

    let url = await (await fetch('/streamUrl',{
        body:JSON.stringify({query}),
        headers:{
            'Content-Type':'application/json'
        },
        method:'post'
    })).text();

    mp3source.src = url;
  
    GUI.audioplayer.load(); //call this to just preload the audio without playing
    GUI.audioplayer.play(); //call this to play the song right away

})

async function test() {
    // let res = await fetch('/mp3')
    // let song = await res.body
    // GUI.mp3source.setAttribute('src','/mp3')
  
    // mp3source.src = 'https://rr1---sn-jxou0gtapo3-2qml.googlevideo.com/videoplayback?expire=1727939905&ei=4fD9ZujOHO_bsfIP0L-5uQQ&ip=97.120.207.198&id=o-AOfZud52MoV4o-bRhe4fzGUNQJYAc450auFE8PGx8Nij&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=7c&mm=31%2C29&mn=sn-jxou0gtapo3-2qml%2Csn-nx5s7n76&ms=au%2Crdu&mv=m&mvi=1&pl=20&initcwndbps=955000&vprv=1&svpuc=1&mime=audio%2Fmp4&rqh=1&gir=yes&clen=3433605&dur=212.091&lmt=1717047821006373&mt=1727917964&fvip=2&keepalive=yes&fexp=51300761&c=IOS&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAMwWXf_HpLMwOL1hclN5FK4K2UZmBfsSK4WSgEZ4hGsdAiB4yke2-rv0fGZUjWBN6lD9f-F-IFS6as6Bg7Gv3dDofQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ACJ0pHgwRgIhAPOFQ2MDyPe8om23q3pSWLSqwmGBqC_-UnIj8-XN-ocgAiEA-NlcbZr5gMwJP7AjoTg_Eewwiw-OL2lAvhTBKD0QE6E%3D&cver=19.09.3'
    // mp3source.src = '/mp3'
    let url = await (await fetch('/streamUrl')).text()
 
}

test();