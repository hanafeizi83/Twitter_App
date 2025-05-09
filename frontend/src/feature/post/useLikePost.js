import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likePostApi } from "../../services/postServices";
import toast from "react-hot-toast";

export default function useLikePost() {
    const queryClient = useQueryClient();
    const { mutate: likePost, isPending: isLiking } = useMutation({
        mutationFn: likePostApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] })
            queryClient.invalidateQueries({ queryKey: ['notifications'] })
        },
        onError: (err) => {
            toast.error(err?.message)
        }
    })

    return { isLiking, likePost }
}