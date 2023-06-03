import { db } from "../db.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { v4 as uuidv4}  from "uuid"

export const register = (req, res) => {
    //const {fullName, email, phoneNumber, password} =req.body;
    //check if user exist
    const qu = "SELECT * FROM users_tbl WHERE email = ? or phoneNumber = ?";
    db.query(qu, [req.body.email, req.body.phoneNumber], (err, data) => {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User Exists!");
        //hash the password
        const saltRound = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, saltRound);
        const userId = uuidv4();
        const q = "INSERT INTO users_tbl(userId, fullName, email, phoneNumber, password) VALUES (?)";
        const values = [
            userId,
            req.body.fullName,
            req.body.email,
            req.body.phoneNumber,
            hashedPassword,
        ];
        
        db.query(q, [values], (err, data) => {
            if (err) {
                return res.status(500).json(err);
            }
            console.log("user created!")
            return res.status(200).json("User has been created");
        });
    }); 
}

export const login = (req, res) => {
    //check if user exist
    const q = "SELECT * FROM users_tbl WHERE email = ?";
    db.query(q, [req.body.email], (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json("user not found");
        //check password
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
        if (!isPasswordCorrect) return res.status(400).json("Wrong username or password");
       
        const token = jwt.sign({ userId: data[0].userId }, "andoMhdyritycthdbsgdcptyhNHtDEDL");
        const {password, ...other} = data[0];

        res
          .cookie("access_token", token, {
            httpOnly:true,
        })
          .status(200)
          .json(other);
    });
    
};
export const logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("user hasbeen logged out")
};