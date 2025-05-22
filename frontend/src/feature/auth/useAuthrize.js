import useUser from "../../hook/useUser";
export function useAthrize() {
    const { authUser, isLoading } = useUser();
    let userAthenticated = false;
    if (!isLoading && authUser) userAthenticated = true;
    return { userAthenticated, isLoading , authUser}
}