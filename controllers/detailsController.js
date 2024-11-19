const torrentApi = require('../config/torrentConfig');

exports.getDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const details = await torrentApi.getDetails(id);
        res.render('details', { title: 'Dettagli', details });
    } catch (error) {
        res.status(500).send('Errore durante il recupero dei dettagli');
    }
};