import { Center, Box, Text, Image } from '@chakra-ui/react';

export default function HomePage() {
    return (
        <>
        <Center>
        <Image
        src="/CookConnect.jpeg"
        alt="CookConnect Image"
        mt={4}
        mb={8}
        />
        </Center>
      <Box display="flex">
        <Box flex={1} p={8}>
          <Text fontSize="xl" mb={4}>
            Welcome to CookConnect! Share your favorite recipes and discover new culinary creations from our community of passionate cooks. Whether you're a beginner or an experienced chef, CookConnect is the perfect platform to connect with fellow food enthusiasts, exchange ideas, and showcase your culinary skills.
          </Text>
          <Image
        src="https://assets-global.website-files.com/5ceda27bc61ed23757d6d8d9/5edc558427ffc7841599f83a_f5GhE3-g9xl_0288qaUleuHO-Gtibl-XfSu-sivxjTAssETBvF7wVsRzP0ug-3l8HXUJbPKM6stmP8LD4lzAj8rtSdADfwycUNfr8Y1SaPIcOG0aiz_eMrxd3L0eo3nAvEy2HNCX.png"
        alt="CookConnect Image"
        mt={12}
        />
        </Box>
        <Box flex={1} position="sticky" top={0} height="100vh">
        <Image
        src="https://assets-global.website-files.com/5ceda27bc61ed23757d6d8d9/5edc55842c639281a89d9920_tlgd6JyGCo3XXaU-yiQY54gGIPLCMctOpHbw81HEvDNQVqtylGJFy7qWrTTxxm4nf5o-6bo5gsPxhPtADqPM5olKRZ2gxVV9uP4ty74pj4qteuBFrs9mao6_4nKbwYTajISc8uAH.png"
        alt="CookConnect Image"
        mx="auto"
        mb={4}
        maxW="500px"
      />
      <Box flex={1} p={8}>
      <Text fontSize="xl"mt={8}>
            Get inspired, explore diverse cuisines, and contribute your own recipes to inspire others. Join our community today and embark on a delicious culinary journey!
          </Text>
      </Box>
      <Image
        src="https://assets-global.website-files.com/5ceda27bc61ed23757d6d8d9/5edc5584cd084e9c313c9820_Xn77eApsxlTNIq_r8fVN3aDZt_WlMiZgnd7VhrE7Zc7P0nOqQY-luI1uzbZ0Gt6NI7HKRRYLpMECWtlfJT8XObiwzNpu2Eax87h5tXSqXFBg5PyBtQ4awwSU4n7bn5jbH8eqkDjw.png"
        alt="CookConnect Image"
        mx="auto"
        mb={4}
        maxW="500px"
      />
        </Box>
      </Box>
      </>
    );
  }
