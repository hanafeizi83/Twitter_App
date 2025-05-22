import { useMutation, useQueryClient } from "@tanstack/react-query"
import { loginApi } from "../../../services/authServices"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

export default function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutate: login, isPending: isLoading } = useMutation({
        mutationFn: loginApi,
        onSuccess: () => {
            toast.success('Login successful.');
            queryClient.invalidateQueries({ queryKey: ['authUser'] });
            navigate('/')
        },
        onError: (err) => {
            toast.error(err?.response?.data?.error)
        }
    })

    return { login, isLoading }
}