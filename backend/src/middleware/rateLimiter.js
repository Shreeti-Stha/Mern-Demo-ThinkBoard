
import ratelimit from "../config/upstash.js";


//We can also set ratelimit as per the user id in place of "My-Limit-Key"
const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit("My-Limit-Key")
        if(!success){
            return res.status(429).json({message:"Too many request, please try again later"})
        }
        next();
    } catch (error) {
        console.log("Rate Limit Error", error);
        next(error);
    }

};

export default rateLimiter;