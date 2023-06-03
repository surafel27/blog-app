import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "8520@surafel",
    database: "blog_sys"
});