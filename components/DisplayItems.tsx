import {
  Checkbox,
  DeleteIcon,
  IconButton,
  Icon,
  HStack,
  Flex
} from 'native-base';
import { Entypo } from '@native-base/icons';
import { SwipeRow } from 'react-native-swipe-list-view';
import { useEffect, useState } from 'react';

interface Props {
  items: ShoppingListItems;
  updateList: (args: ShoppingListItems) => void;
}

export const DisplayItems: React.FC<Props> = ({ items, updateList }) => {
  const [groupValues, setGroupValues] = useState([] as ShoppingListItems);

  useEffect(() => {
    const newList = items.filter((item) => groupValues.indexOf(item) === -1);
    setTimeout(() => updateList(newList), 500);
  }, [groupValues]);

  const handleEdit = () => {
    console.log('editing....');
  };

  const handleDelete = () => {
    console.log('deleting...');
  };

  return (
    <>
      {items.map((item, i) => (
        <Flex
          key={`item-${item}-${i}`}
          display='flex'
          flexDirection='column'
          alignSelf='stretch'
          w='100%'
        >
          <SwipeRow
            key={`swipe-${item}-${i}`}
            rightOpenValue={-115}
            disableRightSwipe
          >
            <HStack alignItems='flex-end' justifyContent='flex-end' p={4}>
              <IconButton
                size='md'
                variant='solid'
                borderRadius='none'
                icon={<Icon as={Entypo} name='edit' />}
                bg='gray.200'
                p={4}
                onPress={handleEdit}
                w='20%'
              />
              <IconButton
                size='md'
                variant='solid'
                borderRadius='none'
                icon={<DeleteIcon name='delete' color='white' />}
                bg='red.700'
                w='20%'
                onPress={handleDelete}
                p={4}
              />
            </HStack>
            <Checkbox.Group
              key={`checkbox-${item}-${i}`}
              onChange={setGroupValues}
              value={groupValues}
              accessibilityLabel='shopping list item'
              bg='darkBlue.900'
              p={4}
            >
              <Checkbox value={item} my={2}>
                {item}
              </Checkbox>
            </Checkbox.Group>
          </SwipeRow>
        </Flex>
      ))}
    </>
  );
};
