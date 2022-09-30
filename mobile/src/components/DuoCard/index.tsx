import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {THEME} from '../../theme';
import {DuoInfo} from '../DuoInfo';
import Entypo from 'react-native-vector-icons/Entypo';

import {styles} from './styles';

export interface DuoCardProps {
  id: string;
  name: string;
  yarsPlaying: number;
  weekDays: string[];
  hoursStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({data, onConnect}: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name}></DuoInfo>

      <DuoInfo
        label="Tempo de Jogo"
        value={`${data.yarsPlaying} anos`}></DuoInfo>

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hoursStart} ás ${data.hourEnd}`}></DuoInfo>

      <DuoInfo
        label="Chamada de áudio"
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }></DuoInfo>

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <Entypo name="game-controller" size={20} color={THEME.COLORS.TEXT} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
