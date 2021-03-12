import 'styled-components';

declare module 'styled-components' {
  // Declare your theme types here
  export interface DefaultTheme {
    colors: {
      [x: string]: string;
    };
  }
}
