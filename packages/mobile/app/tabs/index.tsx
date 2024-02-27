import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { TeamPage } from '../../components/team';

export const mastersLogoSrc =
  'http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/augusta-masters-2019/d05d1861-masters-logo-masters-gimp_0ds03p0dq03p000000001.png';

export const thirteenthTeeBox =
  'https://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/dadd721f-48ec-497c-974d-ce09c0297264/masters-13th-hole.jpeg';

const StyledHeroImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export default function TabOneScreen() {
  return (
    <ScrollView>
      <StyledHeroImage
        source={{ uri: thirteenthTeeBox }}
        resizeMode="cover"
        // style={{ width: 200, height: 200 }}
      />
      <TeamPage />
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
