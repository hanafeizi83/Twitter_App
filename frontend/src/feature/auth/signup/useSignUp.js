import { useMutation } from "@tanstack/react-query"
import { signupApi } from "../../../services/authServices"
import toast from "react-hot-toast"

export default function useSignUp() {
    const { mutate: signUp, isPending: isLoading, error, isError } = useMutation({
        mutationFn: signupApi,
        onSuccess: () => {
            toast.success('Registration was successful.')
        },
        onError: (err) => {
            toast.error(err?.response?.data?.error)
        }
    })

    return { signUp, isLoading, error, isError }
}