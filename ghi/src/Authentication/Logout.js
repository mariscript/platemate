import { useToken } from "./AuthenticateUser"

export default function Logout() {
    const [,, logout] = useToken()

    const handleClick = async (e) => {
        e.preventDefault();
        logout()
    }
}
