import 'styled-components';
import { system } from '../components/Theme/system';

type System = typeof system;

declare module 'styled-components' {
  export interface DefaultTheme extends System {}
}
