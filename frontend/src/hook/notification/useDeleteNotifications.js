import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNotificationApi } from "../../services/notificationServices";
import toast from "react-hot-toast";

export default function useDeleteNotifications() {
    const queryClient = useQueryClient();
    const { mutate: deleteNotification, isPending: isDeleting } = useMutation({
        mutationFn: deleteNotificationApi,
        onSuccess: () => {
            toast.success('Delete all notification successfull.')
            queryClient.invalidateQueries({ queryKey: ['notifications'] })
        },
        onError: (err) => {
            toast.error(err?.message)
        }
    })

    return { isDeleting, deleteNotification }
}