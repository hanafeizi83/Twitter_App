import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { logoutApi } from "../services/authServices"
import { useNavigate } from "react-router-dom";

export default function useLogout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutate: logout, isPending: isLoading } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['authUser']
            })
            toast.success('Logout successful.');
            navigate('/login')
        },
        onError: (err) => {
            toast.error(err?.response?.data?.error)
        }
    })

    return { logout, isLoading }
}