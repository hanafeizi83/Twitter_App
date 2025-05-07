import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { logoutApi } from "../services/authServices"

export default function useLogout() {
    const queryClient = useQueryClient();
    const { mutate: logout, isPending: isLoading } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            toast.success('Logout successful.');
            queryClient.invalidateQueries({ queryKey: ['authUser'] })
        },
        onError: (err) => {
            toast.error(err?.response?.data?.error)
        }
    })

    return { logout, isLoading }
}