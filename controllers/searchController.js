const torrentApi = require('../config/torrentConfig'); // Configura un'API per cercare i contenuti

exports.renderSearchPage = (req, res) => {
    res.render('index', { title: 'Ricerca Film/Serie TV' });
};

exports.performSearch = async (req, res) => {
    const { query, type, language } = req.body;
    try {
        const results = await torrentApi.search(query, type, language); // Cerca i torrent
        res.render('results', { title: 'Risultati della ricerca', results });
    } catch (error) {
        res.status(500).send('Errore durante la ricerca');
    }
};