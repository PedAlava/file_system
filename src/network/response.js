
exports.success = function (req, res, data, status) {
    res.status(status || 200).send({   
        draw: 1,
        recordsTotal: data.length,
        recordsFiltered: data.length,
        data: data
    })
}


exports.error = function (req, res, message, status, details) {
    console.log(`[response error] ` + details)
    res.status(status || 500).json({
        error: message,
        body: ''
    })
}