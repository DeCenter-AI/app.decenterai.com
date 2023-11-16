import axios from "axios";

const protectRoutes = async (userInfo) => {

    const res = await axios.post(
        "https://api.particle.network/server/rpc",
        {
            jsonrpc: "2.0",
            id: 0,
            method: "getUserInfo",
            params: [userInfo.uuid, userInfo.token],
        },
        {
            auth: {
                username: process.env.NEXT_PUBLIC_PARTICLE_NETWORK_PROJECT_ID,
                password: process.env.NEXT_PUBLIC_PARTICLE_NETWORK_CLIENT_KEY
            },
        }
    );
}

export default protectRoutes


