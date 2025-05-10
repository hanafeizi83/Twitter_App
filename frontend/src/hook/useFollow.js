import { useMutation, useQueryClient } from "@tanstack/react-query";
import { followUserApi } from "../services/userServices";
import toast from "react-hot-toast";

export default function useFollow() {
    const queryClient = useQueryClient();
    const { mutate: follow, isPending: isFollowing } = useMutation({
        mutationFn: followUserApi,
        onSuccess: () => {
            Promise.all(
                queryClient.invalidateQueries({ queryKey: ['suggestedUsrs'] }),
                queryClient.invalidateQueries({ queryKey: ['authUser'] })
            )
        },
        onError: (err) => {
            toast.error(err?.message)
        }
    })

    return { follow, isFollowing }
}