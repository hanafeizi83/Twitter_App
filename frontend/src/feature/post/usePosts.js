import { useQuery } from "@tanstack/react-query";
import { postsApi } from "../../services/postServices";

export default function usePosts(feedType, username, userId) {
    function getPostEndPoint() {
        switch (feedType) {
            case 'forYou':
                return '/posts/all'
            case 'following':
                return '/posts/following'
            case 'posts':
                return `/posts/user/${username}`
            case 'likes':
                return `/posts/likes/${userId}`
            default:
                return '/posts/all'
        }
    }

    const postEndPoint = getPostEndPoint();
    const { data: posts, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: () => postsApi(postEndPoint)
    })
    return { posts, isLoading }
}