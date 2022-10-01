import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Background} from '../../components/Background';
import {THEME} from '../../theme';
import logoImage from '../../assets/logo-nlw-esports.png';
import {styles} from './styles';
import {Heading} from '../../components/Heading';
import {DuoCard, DuoCardProps} from '../../components/DuoCard';
import {GameCardProps} from '../../components/GameCard';
import {DuoMatch} from '../../components/DuoMatch';
import {GameParams} from '../../@types/navigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDicordDuoSelected] = useState('ewqe');
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;
  // console.log(game);

  function handleGoBack() {
    navigation.goBack();
  }

  async function getDicordUser(adsId: string) {
    fetch(`http://10.0.0.104:3333/ads/${adsId}/discord`)
      .then(response => response.json())
      .then(data => setDicordDuoSelected(data.discord));
  }

  useEffect(() => {
    fetch(`http://10.0.0.104:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data));
    // console.log(duos, 'das');
  }, []);
  return (
    <Background>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack}>
              <Entypo
                name="chevron-thin-left"
                size={20}
                color={THEME.COLORS.CAPTION_300}
              />
            </TouchableOpacity>
            <Image source={logoImage} style={styles.logo} />
            <View style={styles.right} />
          </View>
          <Image
            source={{uri: game.bannerUrl}}
            style={styles.cover}
            resizeMode="cover"
          />
          <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />
          <FlatList
            data={duos}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <DuoCard data={item} onConnect={() => getDicordUser(item.id)} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.containerList}
            contentContainerStyle={[
              duos.length > 0 ? styles.contentList : styles.emptyListContent,
            ]}
            ListEmptyComponent={() => (
              <Text style={styles.emptyListText}>
                Que Pena ainda não há anúncios para este Game :({' '}
              </Text>
            )}
          />
          <DuoMatch
            visible={discordDuoSelected.length > 0}
            discord={discordDuoSelected}
            onClose={() => setDicordDuoSelected('')}
          />
        </SafeAreaView>
      </ScrollView>
    </Background>
  );
}
