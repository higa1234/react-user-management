import {memo, useEffect, useState, type ChangeEvent, type FC } from "react";
import { CloseButton, Dialog, Portal, Stack, Field, Input } from "@chakra-ui/react";

import type { User } from "@/types/api/user";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";


type Props = {
    open: boolean;
    setOpen: (e: any) => void;
    user: User | null;
    isAdmin?: boolean;
};

export const UserDetailDialog: FC<Props> = memo((props) => {

    const { user, open, setOpen, isAdmin=false } = props;

    const [username, setUserName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        setUserName(user?.username ?? "");
        setName(user?.name ?? "");
        setEmail(user?.email ?? "");
        setPhone(user?.phone ?? "");
    }, [user]);

    const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);

    const onClickUpdate = () => alert();

    return (
        <Dialog.Root 
            lazyMount 
            open={open} 
            onOpenChange={(e) => setOpen(e.open)} 
            trapFocus={false}
            motionPreset="slide-in-bottom"
        >
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content pb={2} >
                        <Dialog.Header>
                            <Dialog.Title>ユーザー詳細</Dialog.Title>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Dialog.CloseTrigger>
                        </Dialog.Header>
                        <Dialog.Body mx={4}>
                            <Stack gap={4} >
                                <Field.Root>
                                    <Field.Label>名前</Field.Label>
                                    <Input value={username} onChange={onChangeUserName} disabled={!isAdmin} />
                                    <Field.Label>フルネーム</Field.Label>
                                    <Input value={name}  onChange={onChangeName} disabled={!isAdmin} />
                                    <Field.Label>MAIL</Field.Label>
                                    <Input value={email}  onChange={onChangeEmail} disabled={!isAdmin} />
                                    <Field.Label>TEL</Field.Label>
                                    <Input value={phone} onChange={onChangePhone} disabled={!isAdmin} />
                                </Field.Root>
                            </Stack>
                        </Dialog.Body>
                        {isAdmin && (
                            <Dialog.Footer>
                                <PrimaryButton onClick={onClickUpdate}>
                                    更新
                                </PrimaryButton>
                            </Dialog.Footer>
                        )}

                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>            
    )
})