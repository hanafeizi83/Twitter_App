import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePostApi } from "../../services/postServices";
import { toast } from 'react-hot-toast'

export default function useDeletePost() {
    const queryClient = useQueryClient();
    const { mutate: deletePost, isPending: isDeleting } = useMutation({
        mutationFn: deletePostApi,
        onSuccess: () => {
            toast.success('Delete post successful.');
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        },
        onError: (err) => {
            toast.error(err?.message)
        }
    })

    return { isDeleting, deletePost }
}