import React from 'react';
import { FlatList, Image, StyleSheet, TextInput, View } from 'react-native';
import { FlagWrapper, GolferListItem, StyledText } from './styled';

export const TeamPage = () => {
  return (
    <>
      <View>
        <FlagWrapper>
          <Image style={styles.image} source={{ uri: `https://www.masters.com/assets/images/flags/IRL_sm.gif` }} />
        </FlagWrapper>
        <StyledText>Styled Text</StyledText>
        <FlatList
          data={[{ key: 'testItem' }]}
          renderItem={({ item }) => (
            <GolferListItem selected={false}>
              <StyledText>List Items</StyledText>
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
        defaultValue="You can type in me"
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
