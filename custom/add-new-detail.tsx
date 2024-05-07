import React, { useCallback } from 'react';
import { AddIcon } from '@sanity/icons';
import { Button, Stack } from '@sanity/ui';
import { insert } from 'sanity';

const CustomAddNewDetail = (props) => {
  const { onChange } = props;

  const handleClick = useCallback(
    async (event) => {
      const item = {
        _key: 12,
        _type: 'string',
      };

      // Patch the document
      onChange(insert([item], 'before', [0]));
    },
    [onChange],
  );

  return (
    <Stack space={3}>
      <Button
        icon={AddIcon}
        text="Add item"
        mode="ghost"
        onClick={handleClick}
      />
      {props.renderDefault({ ...props, arrayFunctions: () => null })}
    </Stack>
  );
};

export default CustomAddNewDetail;