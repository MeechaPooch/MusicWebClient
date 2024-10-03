import YTMusic from "npm:ytmusic-api";

const ytMusic = new YTMusic();
await ytMusic.initialize();

export async function getVideoUrl(query:string) {
    let list = await ytMusic.searchSongs(query);
    console.log(list)
    let vid = list.filter((item)=>item.type.toLowerCase()=='song')[0];
    console.log(vid)
    return `https://www.youtube.com/watch?v=${(vid as any).videoId}`
    // if(!vid) {
    //     throw 'no video id';
    // }
    // let result = await ytMusic.getSong((vid as any).videoId! as string);
    // let mp4 = result.adaptiveFormats.filter((song)=>song.mimeType.includes('audio/mp4'));
    // console.log(mp4)
}

console.log(await getVideoUrl('never gonna give you up')) 

