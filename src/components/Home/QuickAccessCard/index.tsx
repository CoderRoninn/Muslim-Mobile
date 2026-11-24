import { Image, Text, View } from 'react-native';
import { QuickAccessCardProps } from './props';
import styles from './styles';

const QuickAccessCard = ({ image, title }: QuickAccessCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default QuickAccessCard;
