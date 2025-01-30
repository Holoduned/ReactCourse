import {observer} from 'mobx-react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '../src/modules/theme/hooks/useTheme.ts';
import {IColors} from '../src/modules/theme/ThemeTypes.ts';
export const ThemedView = observer(() => {
  const {Colors} = useTheme();
  const useStyles = (colors: IColors) =>
    StyleSheet.create({
      content: {
        backgroundColor: colors.textSecondary,
        width: 200,
        height: 200,
      },
    });
  const styles = useStyles(Colors);
  return <View style={styles.content} />;
});
