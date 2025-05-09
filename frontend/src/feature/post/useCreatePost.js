import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPostApi } from '../../services/postServices'
import { toast } from 'react-hot-toast'

export default function useCreatePost() {
    const queryClient = useQueryClient();
    const { isPending: isCreating, mutate:createPost } = useMutation({
        mutationFn: createPostApi,
        onSuccess: () => {
            toast.success('Create post successful. ')
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        },
        onError: (err) => {
            toast.error(err?.message)
        }
    })
    return { isCreating, createPost }
}