const axios = require('axios')

module.exports = async (id) => {
    const res = await axios.get(`https://api.mercadolibre.com/categories/${id}`)

    return res.data
}