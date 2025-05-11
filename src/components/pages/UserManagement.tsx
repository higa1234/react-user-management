import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import {memo, useCallback, useEffect, useState, type FC} from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "@/hooks/useAllUsers";
import { useSelectUser } from "@/hooks/useSelectUser";
import { UserDetailDialog } from "../organisms/user/UserDetailDialog"; 
import { useLoginUser } from "@/hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
    const {getUsers, users, loading} = useAllUsers();
    const { onSelectUser, selectedUser } = useSelectUser();
    const { loginUser } = useLoginUser();
    console.log(loginUser);

    useEffect(() => {
        getUsers();
    }, []);

    const [open, setOpen] = useState(false);

    const onClickUser = useCallback((id: number) => {
        onSelectUser({ id, users });
        setOpen(true)
    }, [users, onSelectUser]);

    return (
        <>
            {loading ? (
            <Center h="100vh">
                <Spinner />
            </Center> 
            ) : (
            <Wrap p={{ base: 4, md: 10 }} >
                {users.map((user) => (
                    <WrapItem key={user.id} mx="auto">
                        <UserCard 
                            id={user.id}
                            imageUrl="https://picsum.photos/160"
                            userName={user.username}
                            fullName={user.name}
                            onClick={onClickUser}
                        />
                    </WrapItem>
                ))} 
            </Wrap>
            )}
            <UserDetailDialog user={selectedUser} open={open} setOpen={setOpen} isAdmin={loginUser?.isAdmin} />
        </>
    );
});