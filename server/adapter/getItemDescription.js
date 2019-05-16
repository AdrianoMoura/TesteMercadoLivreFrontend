const axios = require('axios')

module.exports = async (id) => {
    const res = await axios.get(`https://api.mercadolibre.com/items/${id}/description`)
    return res.data
}