import {useState, useEffect} from 'react';
import {View, Image, FlatList, ScrollView} from 'react-native';
import {Background} from '../../components/Background';
import logoImg from '../../assets/logo-nlw-esports.png';
import {styles} from './styles';
import {Heading} from '../../components/Heading';
import {GameCard, GameCardProps} from '../../components/GameCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  const navigation = useNavigation();

  function handleOpenGame({id, title, bannerUrl}: GameCardProps) {
    navigation.navigate('Game', {
      id,
      title,
      bannerUrl,
    });
  }
  useEffect(() => {
    fetch('http://10.0.0.104:3333/games')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setGames(data);
      });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        <FlatList
          contentContainerStyle={styles.contentList}
          horizontal
          showsHorizontalScrollIndicator
          data={games}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <GameCard onPress={() => handleOpenGame(item)} data={item} />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
