import {memo, type FC} from "react";
import { Drawer, Portal, Button, CloseButton } from "@chakra-ui/react";

import { MenuIconButton } from "../atoms/button/MenuIconButton";

type Props = {
    onClickHome: () => void;
    onClickUserManagement: () => void;
    onClickSetting: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {

    const { 
        onClickHome, 
        onClickUserManagement, 
        onClickSetting
    } = props;

    return (
        <Drawer.Root placement="start" size="xs" >
            <Drawer.Trigger asChild>
                <MenuIconButton />
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Body p={0} bg="gray.100">
                            <Button w="100%" variant="outline" onClick={onClickHome} _hover={{ opacity: 0.8 }}>TOP</Button>
                            <Button w="100%" variant="outline" onClick={onClickUserManagement} _hover={{ opacity: 0.8 }}>ユーザー一覧</Button>
                            <Button w="100%" variant="outline" onClick={onClickSetting} _hover={{ opacity: 0.8 }}>設定</Button>
                        </Drawer.Body>
                        <Drawer.CloseTrigger asChild>    
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
});