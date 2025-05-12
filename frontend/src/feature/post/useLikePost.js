import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likePostApi } from "../../services/postServices";
import toast from "react-hot-toast";

export default function useLikePost(postId) {
    const queryClient = useQueryClient();
    const { mutate: likePost, isPending: isLiking } = useMutation({
        mutationFn: likePostApi,
        onSuccess: (updatedLikes) => {
            queryClient.setQueryData(['posts'], (oldData) => {
                return oldData.map(p => {
                    if (p._id === postId) {
                        return { ...p, likes: updatedLikes }
                    }
                    return p
                })
            })
            queryClient.invalidateQueries({ queryKey: ['notifications'] })
        },
        onError: (err) => {
            toast.error(err?.message)
        }
    })

    return { isLiking, likePost }
}