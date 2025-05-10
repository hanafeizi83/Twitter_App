import { useQuery } from "@tanstack/react-query";
import { userProfileApi } from "../../services/userServices";

export default function useUserProfile(username) {
    const { data: user, isLoading, refetch } = useQuery({
        queryKey: ['userProfilw'],
        queryFn: () => userProfileApi(username)
    })

    return { isLoading, user, refetch }
}