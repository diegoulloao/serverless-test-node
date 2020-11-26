module.exports = ( req, res ) => {
    res.json({
        path: "/users",
        method: req.method,
        body: req.body
    })
}
