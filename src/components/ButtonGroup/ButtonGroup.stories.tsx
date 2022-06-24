import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import ButtonGroup from ".";
import { pageSizeOptions } from "../../config/constant";

export default {
  title: 'Component/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    type: { control: 'string' },
  },
} as Meta;

export const Dashboard: Story = () => {
  const [value, setValue] = useState(5)

  return (
    <div className="flex space-x-4">
      <div className="mb-10">
        <ButtonGroup options={pageSizeOptions} value={value} onChange={setValue} />
      </div>
    </div>
  );
}
