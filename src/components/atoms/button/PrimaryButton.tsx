import { Button } from "@chakra-ui/react";
import { type FC, memo, type ReactNode } from "react";

type Props = {
    children: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
}

export const PrimaryButton: FC<Props> = memo((props) => {
    const {children, disabled=false, loading=false, onClick} = props;

      return (
        <Button 
          bg="teal.400" 
          color="white" 
          _hover={{ opacity: 0.8 }}
          loading={loading}
          disabled={disabled || loading}
          onClick={onClick}
        >
          {children}
        </Button>
      );
    }
  );