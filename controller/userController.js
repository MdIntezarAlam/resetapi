import Usermodule from "../module/userModule.js"

//post user  api
export const postUser = async (req, res) => {
    try {
        const user = await Usermodule(req.body)
        // console.log(req.body)
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user already exist!",
            })
        }

        res.status(200).json({
            success: true,
            message: " user added Successfully!",
            user
        })
        user.save()
        // console.log("user is ", user)

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}
//get  user api
export const getUser = async (req, res) => {
    try {
        const user = await Usermodule.find().sort({ "ranking": 1 }) //sort return in assending order

        if (!user) {
            return res.status(404).json({
                success: false,
                message: " user not found",
            })
        }
        user.save()
        res.status(200).json({
            success: true,
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

//find with id
export const getsingleUser = async (req, res) => {
    try {
        const user_id = req.params.id
        const user = await Usermodule.findById({ _id: user_id }) //sort return in assending order

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            })
        }
        user.save()
        res.status(200).json({
            success: true,
            message: "user finded",
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// update user   
export const updatedUser = async (req, res) => {
    try {
        const _id = req.params.id
        const user = await Usermodule.findByIdAndUpdate(_id, req.body) //sort return in assending order

        if (!user) {
            return res.status(404).json({
                success: false,
                message: " user not found!",
            })
        }
        res.status(200).json({
            success: true,
            message: "user updated successfully",
            user
        })
        user.save()

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

//delete user

export const deleteUser = async (req, res) => {
    try {
        const _id = req.params.id
        const user = await Usermodule.findByIdAndDelete(_id)
        if (!_id) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "user deleted",
            user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}