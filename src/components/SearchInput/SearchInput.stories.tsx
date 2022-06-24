import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { SearchInput, SearchInputProps } from "."

export default {
    title: "Forms/SearchInput",
    component: SearchInput,
    argTypes: {
        type: { control: "string" }
    }
} as Meta

const Template: Story<SearchInputProps> = (args) => <SearchInput {...args} />;

export const Dashboard = () => (
  <>
    <div className="mb-10 flex">
      <Template className="w-80" />
    </div>
  </>
);
