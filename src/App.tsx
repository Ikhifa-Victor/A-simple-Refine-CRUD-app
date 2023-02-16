import React from "react";
import { Refine } from "@pankod/refine-core";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";
import { Layout } from "components/Layout";
import { HeadlessInferencer } from "@pankod/refine-inferencer/headless";
import { PostList } from "pages/list";
import { PostShow } from "pages/show";
import { PostCreate } from "pages/create";
import { PostEdit } from "pages/edit";

function App() {
  return (
    <Refine
      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      routerProvider={routerProvider}
      resources={[
        {
            name: "posts",
            // list: HeadlessInferencer,
            // show: HeadlessInferencer,
            // create: HeadlessInferencer,
            // edit: HeadlessInferencer,
            list: PostList,
            show: PostShow,
            create: PostCreate,
            edit: PostEdit,
        },
     ]}
      Layout={Layout}

    />
  );
}

export default App;
