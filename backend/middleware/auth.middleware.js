// do later

// for simple authentication
export const protectRoute = async (req, res, next) => {
    // do later
    next();
};

// for admin
export const requireAdmin = async (req, res, next) => {
    try {
        // do later
        // sample logic by me
        /* the req gives us the user object
        ** check if user has role == admin or not
        ** but as of now, we have no db implemented
        ** so we can't check using the user object
        ** so just use a hardcoded role
        ** if not, throw error
        ** if yes, continue
        */
        if (req.user.role !== "admin")
            throw new Error("You are not an admin");
        next();
    } catch (error) {
        next(error);
    }
};