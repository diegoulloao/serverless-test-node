module.exports = ( req, res ) => {
    res.json({
        path: "/users/:id",
        method: req.method,
        query: req.query,
        body: req.body
    })
}
