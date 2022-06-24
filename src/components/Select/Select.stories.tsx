import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import Select from '.';

export default {
  title: 'Component/Select',
  component: Select,
  argTypes: {
    type: { control: 'string' },
  },
} as Meta;

export const Dashboard: Story = () => {
  const [value, setValue] = useState('')

  const options = [
    {
      label: 'Option 1',
      value: 'option 1',
    },
    {
      label: 'Option 2',
      value: 'option 2',
    },
    {
      label: 'Option 3',
      value: 'option 3',
    }
  ];

  return (
    <div className="flex space-x-4">
      <div className="mb-10 w-60">
        <Select placeholder="Genre" options={options} value={value} onChange={setValue} />
      </div>
      <div className="mb-10 w-60">
        <Select placeholder="Premiere Year" options={options} value={value} onChange={setValue} />
      </div>
    </div>
  );
}
