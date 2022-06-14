import {
  NativeBaseProvider,
  Container,
  Heading,
  VStack,
  Center,
  extendTheme,
  Input,
  Button
} from 'native-base';
import { useState } from 'react';
import { DisplayItems } from './components/DisplayItems';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark'
};

// extend the theme
const customTheme = extendTheme({ config });

const App = () => {
  const [formData, setData] = useState({ item: '' });
  const [shoppingList, setShoppingList] = useState([
    'Milk'
  ] as ShoppingListItems);

  const onSubmit = () => {
    if (formData.item) {
      setShoppingList([...shoppingList, formData.item]);
      setData({ item: '' });
    }
  };

  return (
    <NativeBaseProvider theme={customTheme}>
      <Center bg='darkBlue.900' minH='100%' safeAreaTop={8}>
        <Container centerContent>
          <VStack space={4} alignItems='center'>
            <Heading>My Shopping List</Heading>
            <Input
              size='xl'
              value={formData.item}
              type='text'
              borderColor='white'
              placeholder='Add some items...'
              onChangeText={(value) => setData({ ...formData, item: value })}
              onSubmitEditing={onSubmit}
              InputRightElement={
                <Button
                  size='md'
                  rounded='none'
                  w='1/6'
                  h='full'
                  onPress={onSubmit}
                >
                  Add
                </Button>
              }
            />
            {shoppingList && (
              <DisplayItems items={shoppingList} updateList={setShoppingList} />
            )}
          </VStack>
        </Container>
      </Center>
    </NativeBaseProvider>
  );
};

export default App;
