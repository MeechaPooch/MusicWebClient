import express from 'npm:express'
import bodyParser from 'npm:body-parser';
import YTMusic from 'npm:ytmusic-api';
import ffmpeg from 'npm:ffmpeg'
import ytdl from 'npm:ytdl-core';
import ytstream from 'npm:yt-stream'
// import fs from 'fs'
import { getVideoUrl } from './ytmusic.ts';

let app = express();
app.use(express.static('static'))
app.use(bodyParser.json())

app.post('/streamUrl',async (req,res)=>{
    console.log('gotcha')
    // let body = req.body;
    console.log(req.body)
    let query = req.body.query;
    let url = await getVideoUrl(query);

    // let url = req.body.url;
    // url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  
    // Audio format header (OPTIONAL)
    res.set({ "Content-Type": "audio/mpeg" });

    // // Send compressed audio mp3 data
    // ffmpeg()
    // .input(ytdl(url))
    // .toFormat('mp3')
    // .pipe(res);

    const stream = await ytstream.stream(url, {
        quality: 'high',
        type: 'audio',
        highWaterMark: 1048576 * 32,
        download: false
    });


    res.send(stream.url);
    // stream.stream.pipe(fs.createWriteStream('some_song.mp3'));
    // console.log(stream.video_url);
    // console.log(stream.url);

});


// app.get('/', function(req, res) {
   
//   });

app.listen(8000,()=>console.log('done'));