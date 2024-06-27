

let auth = (req, res , next )=>{

    console.log("This is response from middlware " , req.cookies.Token)
    next();

}

export default auth ;