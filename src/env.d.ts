/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  interface ImportMetaEnv {
    readonly VITE_APP_BASE_URL: string
    // 更多环境变量...
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
