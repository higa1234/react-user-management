import { Box, Stack, Image, Text } from "@chakra-ui/react";
import { type FC, memo } from "react";

type Props = {
    id: number;
    imageUrl: string;
    userName: string;
    fullName: string;
    onClick: (id: number) => void;
}

export const UserCard: FC<Props> = memo((props) => {
    const {id, imageUrl, userName, fullName, onClick} = props;

      return (
        <Box 
          w="260px" 
          h="260px" 
          bg="white" 
          borderRadius="10px" 
          shadow="md" 
          p={4} 
          _hover={{cursor: "pointer", opacity: 0.8}}
          onClick={() => onClick(id)}
          >
          <Stack textAlign="center">
            <Image 
              borderRadius="full" 
              boxSize="160" 
              src={imageUrl}
              alt={userName}
              m="auto"
            />
            <Text fontSize="lg" fontWeight="bold">{userName}</Text>
            <Text fontSize="sm" fontWeight="gray">{fullName}</Text>
          </Stack>
        </Box>
      );
    }
  );