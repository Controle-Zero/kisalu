import "styled-components";

import { ThemeType } from "./theme";

declare module "styled-component" {
  export interface DefaultTheme extends ThemeType {}
}
