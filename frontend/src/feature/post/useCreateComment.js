import { useMutation, useQueryClient } from '@tanstack/react-query'
import { commentPostApi } from '../../services/postServices'
import { toast } from 'react-hot-toast'
export default function useCreateComment() {
    const queryClient = useQueryClient();
    const { mutate: createComment, isPending: isCreating } = useMutation({
        mutationFn: commentPostApi,
        onSuccess: () => {
            toast.success('Comment post successful.')
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
        onError: (err) => {
            toast.error(err?.message);
        }
    })
    return { createComment, isCreating }
}