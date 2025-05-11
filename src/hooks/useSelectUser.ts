import type { User } from "@/types/api/user";
import { useCallback, useState } from "react"

type Props = {
    id: number;
    users: Array<User>;
}

// 選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
    
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const onSelectUser = useCallback((props: Props) => {
        const { id, users } = props;
        // console.log("id:"+ id);
        // console.log("users:"+ users);
        const targetUser = users.find((user) => user.id === id);
        console.log("targetUser:"+targetUser);
        setSelectedUser(targetUser ?? null);
    }, []);

    return { onSelectUser, selectedUser }
}