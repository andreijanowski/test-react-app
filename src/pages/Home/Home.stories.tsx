import React from 'react'
import { Meta } from '@storybook/react'
import Home from '.'

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: {
    type: { control: "string" }
  }
} as Meta

export const Dashboard = () => (
  <Home />
);

