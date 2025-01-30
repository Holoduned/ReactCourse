import {StyleSheet, Text, TextProps} from 'react-native';
import {useTheme} from '../src/modules/theme/hooks/useTheme.ts';
import {IColors} from '../src/modules/theme/ThemeTypes.ts';
import {observer} from 'mobx-react';
export const ThemedText = observer(({...props}: TextProps) => {
  const {Colors} = useTheme();
  const useStyles = (colors: IColors) =>
    StyleSheet.create({
      content: {
        color: colors.textPrimary,
      },
    });
  const styles = useStyles(Colors);
  return <Text style={styles.content} {...props}/>;
});
