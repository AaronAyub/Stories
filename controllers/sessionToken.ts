import express from 'express'
import con from './sql'

// Automatically log the user in if they have a valid authentication token
var sessionToken = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    if (!req.session.username && req.cookies.token) {
        let [rows] = await con.promise().query('SELECT logins.username, account FROM logins LEFT JOIN users ON (logins.username = users.username) WHERE token = ?',
        [req.cookies.token])
        if (rows[0]) { // If this is a valid token, then log the user in
            req.session.username = rows[0].username
            req.session.account = rows[0].account
        }
        else { // Otherwise, erase the token from the user's cookies
            res.clearCookie('token')
        }
    }
    next()
}

export default sessionToken