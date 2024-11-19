const torrentStream = require('torrent-stream');

exports.streamTorrent = (req, res) => {
    const magnet = req.params.magnet;
    const engine = torrentStream(magnet);

    engine.on('ready', () => {
        const file = engine.files.find(f => f.name.endsWith('.mp4'));
        const stream = file.createReadStream();
        res.writeHead(200, { 'Content-Type': 'video/mp4' });
        stream.pipe(res);
    });
};