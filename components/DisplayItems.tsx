import { Checkbox } from 'native-base';
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

  return (
    <>
      {items.map((item, i) => (
        <Checkbox.Group
          key={`${item}-${i}`}
          onChange={setGroupValues}
          value={groupValues}
          accessibilityLabel='shopping list item'
        >
          <Checkbox value={item} my={2} w='100%'>
            {item}
          </Checkbox>
        </Checkbox.Group>
      ))}
    </>
  );
};
