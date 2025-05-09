import { useQuery } from "@tanstack/react-query";
import { notificationApi } from "../../services/notificationServices";

export default function useNotification() {
    const { data: notifications, isLoading } = useQuery({
        queryKey: ['notifications'],
        queryFn: notificationApi
    })

    return { notifications, isLoading }
}