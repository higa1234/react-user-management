import { IconButton } from "@chakra-ui/react";
import { FaBars } from 'react-icons/fa';
import { forwardRef } from "react";

export const MenuIconButton = forwardRef<HTMLButtonElement, React.ComponentProps<typeof IconButton>>(
    (props, ref) => {
      return (
        <IconButton
          ref={ref}
          aria-label="メニューボタン"
          size="sm"
          variant="ghost"
          padding="8px"
          display={{ base: "block", md: "none" }}
          {...props}
        >
          <FaBars />
        </IconButton>
      );
    }
  );