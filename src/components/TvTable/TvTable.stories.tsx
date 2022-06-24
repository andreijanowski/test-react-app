import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import TvTable from "./index";
import data from "../../data/data.json";

export default {
    title: "Component/TvTable",
    component: TvTable,
    argTypes: {
        type: { control: "string" }
    }
} as Meta

export const Dashboard = () => {
  return (
    <>
      <div className="mb-10 flex">
        <TvTable
          data={data}
          sort={{
            name: 1,
            premiere: 1
          }}
          onChangeSort={() => {}}
        />
      </div>
    </>
  );
}
