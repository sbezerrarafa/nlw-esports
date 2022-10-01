import React, {useState} from 'react';
import {
  View,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {CheckCircle} from 'phosphor-react-native';
import Clipboard from '@react-native-clipboard/clipboard';

import {styles} from './styles';
import {THEME} from '../../theme';
import {Heading} from '../Heading';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({discord, onClose, ...rest}: Props) {
  const [isCopping, setIsCopping] = useState<boolean>(false);

  async function handleCopyDiscord() {
    setIsCopping(true);
    await Clipboard.setString(discord);

    Alert.alert('texto copiado para area de transferencia');
    setIsCopping(false);
  }

  return (
    <Modal {...rest} transparent statusBarTranslucent animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <MaterialIcons
            name="check-circle-outline"
            size={64}
            color={THEME.COLORS.SUCCESS}
          />
          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jogar!"
            style={{alignItems: 'center', marginTop: 24}}
          />
          <Text style={styles.label}> Adicione no Discord</Text>
          <TouchableOpacity
            onPress={handleCopyDiscord}
            style={styles.discordButton}
            disabled={isCopping}>
            <Text style={styles.discord}>
              {isCopping ? <ActivityIndicator /> : discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
