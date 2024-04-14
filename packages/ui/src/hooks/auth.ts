import { getServerSession } from "next-auth"
 export const useGetUser = async () => {
    const session = await getServerSession();
    return session;
}
