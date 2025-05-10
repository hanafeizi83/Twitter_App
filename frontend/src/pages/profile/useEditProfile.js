import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editUserProfileApi } from '../../services/userServices'
import { toast } from 'react-hot-toast'

export default function useEditProfile() {
    const queryClient = useQueryClient();
    const { mutate: editProfile, isPending: isEditing } = useMutation({
        mutationFn: editUserProfileApi,
        onSuccess: () => {
            toast.success('Update profile successful.');
            Promise.all([
                queryClient.invalidateQueries({ queryKey: ['userProfile'] }),
                queryClient.invalidateQueries({ queryKey: ['authUser'] })
            ])


        },
        onError: (err) => {
            toast.error(err?.message)
        }
    })
    return { editProfile, isEditing }
}