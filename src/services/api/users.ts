import axios from "axios";

export const usersService = () => {
    const getUsers = () => {
        return axios
            .get("/api/v1/users/")
            .then((res) => res.data)
            .catch((err) => console.log(err));

    }
    return {
        getUsers
    }
}