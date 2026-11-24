import { Image, Text, View } from 'react-native';
import { QuickAccessCardProps } from './props';
import styles from './styles';

const QuickAccessCard = ({ image, title }: QuickAccessCardProps) => {
  return (
    <View style={styles.container}>
      {/* Image of the quick access item */}
      <Image source={image} style={styles.image} resizeMode="contain" />

      {/* Title of the quick access item */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default QuickAccessCard;
