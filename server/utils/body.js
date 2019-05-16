const build = (statusCode, body = undefined) => {
    console.log(statusCode, body)
    return {
        statusCode,
        body
    }
}

const success = body => build(200, body)
const internalError = body => build(500, 'Internal Error')
const missingParameters = body => build(400, body)
const error = body => build(400, body)
const notFound = body => build(404, body)
const notAuthorized = body => build(401, body)

module.exports = {
    success,
    internalError,
    missingParameters,
    error,
    notFound,
    notAuthorized
}