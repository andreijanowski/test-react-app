import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon from '.';

export default {
  title: 'Component/Icon',
  component: Icon,
  argTypes: {
    type: { control: 'string' },
  },
} as Meta;

export const Dashboard: Story = () => (
  <>
    <div className="text-xl font-bold mb-4">Solid Icons</div>
    <div className="mb-10 flex">
      <Icon icon="arrowDown" className="mr-3" />
      <Icon icon="arrowLeft" className="mr-3" />
      <Icon icon="arrowRight" className="mr-3" />
      <Icon icon="arrowUp" className="mr-3" />
      <Icon icon="chevronDown" className="mr-3" />
      <Icon icon="chevronLeft" className="mr-3" />
      <Icon icon="chevronRight" className="mr-3" />
      <Icon icon="chevronUp" className="mr-3" />
      <Icon icon="bars" className="mr-3" />
      <Icon icon="bell" className="mr-3" />
      <Icon icon="caretDown" className="mr-3" />
      <Icon icon="caretLeft" className="mr-3" />
      <Icon icon="caretRight" className="mr-3" />
      <Icon icon="caretUp" className="mr-3" />
      <Icon icon="ellipsisV" className="mr-3" />
      <Icon icon="shoppingBag" className="mr-3" />
      <Icon icon="thLarge" className="mr-3" />
      <Icon icon="userFriends" className="mr-3" />
      <Icon icon="fileDownload" className="mr-3" />
      <Icon icon="search" className="mr-3" />
    </div>
    <div className="text-xl font-bold mb-4">Social Icons</div>
    <div className="mb-10 flex">
      <Icon icon="facebook" className="mr-3" />
      <Icon icon="twitter" className="mr-3" />
      <Icon icon="linkEdin" className="mr-3" />
      <Icon icon="dribbble" className="mr-3" />
      <Icon icon="pinterest" className="mr-3" />
    </div>
  </>
);
