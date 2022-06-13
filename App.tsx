import {
  NativeBaseProvider,
  Container,
  Heading,
  VStack,
  Center,
  extendTheme,
  Checkbox
} from 'native-base';
import { useState } from 'react';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark'
};

// extend the theme
const customTheme = extendTheme({ config });

const App = () => {
  const [groupValues, setGroupValues] = useState([]);
  return (
    <NativeBaseProvider theme={customTheme}>
      <Center>
        <Container>
          <VStack space={4} alignItems="center">
            <Heading color="black">My Shopping List</Heading>
            <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3}>
              <Checkbox.Group
                onChange={setGroupValues}
                value={groupValues}
                accessibilityLabel="choose numbers"
              >
                <Checkbox value="one" my={2}>
                  Milk
                </Checkbox>
              </Checkbox.Group>
            </Center>
            <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
          </VStack>
        </Container>
      </Center>
    </NativeBaseProvider>
  );
};

export default App;
