import { User } from "../model/user.model.js";

const registerUser = async (req, res) => {
    //body data
    // data validate
    // email already exist
    // password hash
    // save user in db

//    const {} = req.body || req.query || req.params || req.headers;

   const {fullName, email, password} = req.body //frontent send data in body
   try {
        if (!(fullName || email || password)) {
           return res.status(400)
           .json({ 
            sucsess: false,
            message: "Please fill all the fields" 
        });
        }

        if (!email.includes("@")) {
            return res.status(400).json({ 
                sucsess: false,
                message: "Please enter a valid email" 
            });
        }


        if (password.length < 6) {
            return res.status(400).json({ 
                sucsess: false,
                message: "Password must be at least 6 characters" });
        }

        const userAlreadyExists = await User.findOne({ email });
        if (userAlreadyExists) {
            return res.status(400).json({ 
                sucsess: false,
                message: "User already exists" });
        }

        const user = await User.create({
            fullName,
            email,
            password,
        }); // Create a new user and exclude the password field from the response

        await user.save(); // Save the user to the database
        return res.status(201).json({
            sucsess: true,
            message: "User registered successfully",
            data: user,   
        })
           
    
   } catch (error) {
        return res.status(500).json({
            sucsess: false,
            message: "Internal server error",
            error: error.message,
        });
   }

};

export { registerUser};
