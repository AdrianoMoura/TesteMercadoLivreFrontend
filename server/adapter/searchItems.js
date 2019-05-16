const axios = require('axios')

module.exports = async (q) => {
    const res = await axios.get(`https://api.mercadolibre.com/sites/MLA/search`, {
        params: {
            q
        }
    })

    return res.data
}