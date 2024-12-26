import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (id, res) => {
    const token = jwt.sign({
        id
    }, process.env.SECRET_TOKEN,
        {
            expiresIn: "1d"
        })
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,//ms
        sameSite: "strict",
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development"
    })


}