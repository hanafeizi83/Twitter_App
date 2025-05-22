import { useQuery } from "@tanstack/react-query";
import { UserApi } from "../services/authServices";

export default function useUser() {
    const { data: authUser, isLoading } = useQuery({
        queryKey: ['authUser'],
        queryFn: UserApi,
        // retry: false
    })

    return { authUser, isLoading }
}