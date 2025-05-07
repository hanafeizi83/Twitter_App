import { useQuery } from "@tanstack/react-query";
import { suggestedUsersApi } from "../services/userServices";

export default function useSuggestedUsers() {
    const { data: suggestedUsers, isLoading } = useQuery({
        queryKey: ['suggestedUsrs'],
        queryFn: suggestedUsersApi
    })

    return { suggestedUsers, isLoading }
}