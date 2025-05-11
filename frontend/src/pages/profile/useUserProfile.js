import { useQuery } from "@tanstack/react-query";
import { userProfileApi } from "../../services/userServices";

export default function useUserProfile(username) {
    const { data: user, isLoading, refetch ,isRefetching} = useQuery({
        queryKey: ['userProfile'],
        queryFn: () => userProfileApi(username)
    })

    return { isLoading, user, refetch ,isRefetching}
}