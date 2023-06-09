import { extendTheme } from '@chakra-ui/react';
import { typography } from 'theme/foundations/typography';
import { colors } from 'theme/foundations/colors';
import { space } from 'theme/foundations/spacing';
import { semanticTokens } from 'theme/foundations/tokens';
import { shadows } from 'theme/foundations/shadows';
 
export const theme = extendTheme({
  ...typography,
  colors,
  space,
  semanticTokens,
  shadows,
 
});
