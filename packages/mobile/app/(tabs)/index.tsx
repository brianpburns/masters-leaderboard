import { ScrollView, TextInput, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const mastersLogoSrc =
  'http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/augusta-masters-2019/d05d1861-masters-logo-masters-gimp_0ds03p0dq03p000000001.png';

export const thirteenthTeeBox =
  'https://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/dadd721f-48ec-497c-974d-ce09c0297264/masters-13th-hole.jpeg';

const StyledText = styled.Text`
  color: red;
`;

const StyledHeroImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const GolferListItem = styled.View<{ selected: boolean }>`
  display: flex;
  padding: 2px;
  padding-left: 5px;
  border-bottom: 1px solid silver;
  padding-top: 5px;
  padding-bottom: 5px;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#f89898' : '#b1e7a9')};
  }
`;

export default function TabOneScreen() {
  return (
    <ScrollView>
      <StyledHeroImage
        source={{ uri: thirteenthTeeBox }}
        resizeMode='cover'
        // style={{ width: 200, height: 200 }}
      />
      <View>
        <StyledText>Styled Text Update</StyledText>
        <FlatList
          data={[{ key: 'testItem' }]}
          renderItem={({ item }) => (
            <GolferListItem selected={false}>
              <StyledText>List Item</StyledText>
              <StyledText>{item.key}</StyledText>
            </GolferListItem>
          )}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue='You can type in me'
      />
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
