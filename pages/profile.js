
import { Box, Image } from '@chakra-ui/react';
import { useRouter } from "next/router";


export default function Home() {
    const router = useRouter();
    const query = router.query;
    const name = query.sender;
    const message = query.message;
    const imgUrl = query.imageUrl;
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={imgUrl} alt={imgUrl} />
            <Box style={{ padding: 40 }}>
            <h1>{name}</h1>
            <Box
            color='white'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='inherit'
          >
            Tweets: {message}
          </Box>
            </Box>
        </Box>
  )
}