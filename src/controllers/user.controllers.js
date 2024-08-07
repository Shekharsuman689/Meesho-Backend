import User from "../models/user.models.js";
import { sendEmail } from "../utilities/email.js";
import { createToken } from "../utilities/jwt.js";

//Register method
const register = async(req, res) =>{
    try {
        const { name, email, password } = req.body;
        const user = await User.create({
            name,
            email,
            password,
          });
          //Send email to user after registering
          const option = {
            from: "shekharsuman689@gmail.com",
            to: email,
            subject: "Welcome to our platform",
            html: `<h1>Welcome ${name}</h1> 
                  <p>Thank you for registering on our platform</p>
                  <p>Now you can login to our platform with your email and password</p>
                  <p>Thank you</p>`,
          };
          sendEmail(option)
          return res.status(201).send({ message: "User registered successfully" });

    } catch (error) {
        return res
        .status(500)
        .send({ message: "Error registering user", error: error.message });
    }
}
//Login method
const login = async(req, res) =>{
    try {
        const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {  
      return res.status(400).send({ message: "Invalid credentials" });
    }
    const passwordMatch = await user.matchPassword(password);
    if (!passwordMatch) {
      return res.status(400).send({ message: "Invalid credentials" });
    }
    const token = createToken({ id: user._id });
    res.cookie("authToken", token, {
      path: "/",
      expires: new Date(Date.now() + 3600000),
      secure: true,
      httpOnly: true,
      sameSite: "None",
    });
    return res
    .status(200)
    .send({ message: "User logged in successfully", token});
    } catch (error) {
        return res
        .status(500)
        .send({ message: "Error in logging the user", error: error.message });
    }
};

//logout method
const logout = async (req, res) => {
    res.clearCookie("authToken");
    return res.status(200).send({ message: "User logged out successfully" });
  };
  //delete user
  const deleteUser = async (req, res) => {
    try {
      console.log(req.user);
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      return res.status(200).send({ message: "User deleted successfully" });
    } catch (error) {
      return res
        .status(200)
        .send({ message: "Error in deleting the user", error: error.message });
    }
  };

export{
    register,
    login,
    logout,
    deleteUser
};