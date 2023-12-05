import React from 'react';
import { Heading, Text } from '@/components/Typography';
import ContentBox from '@/components/ContentBox';

const riceboyler = () => {
  return (
    <ContentBox>
      <Heading fontSize="2xl">
        WTF is riceboyler?
      </Heading>
      <Heading fontSize="4xl">
        raɪs-bɔɪ-lɜr
      </Heading>
      <Text fontSize="xl">
        riceboyler is a nickname that originally went to a car I used to drive. It was a 1997 Dodge Neon that initially ran 17.72 in the 1/4 mile with a SOHC naturally aspirated engine and a horrible 3 speed autotragic slushbox. I eventually got it into the low 15s in the quarter, and it was referred to on more than one occasion as a "riceburner" (which I acknowledge is a bit of a hateful term and could be seen as borderline racist).
      </Text>
      <Text fontSize="xl">
        I corrected people saying, "It's not a riceburner because it's an American car. It boils the riceburners." At 15 seconds in the 1/4? Not so much, but back then it was pretty quick compared to most Civics, so the name stuck for the car. That then turned from riceboiler to riceboyler just because it was funnier.
      </Text>
      <Text fontSize="xl">
        I stupidly started using it as my "nom de web" (aka "my nickname on the internet") and it has stuck ever since.
      </Text>
      <ContentBox backgroundColor="red.950">
        <Text
          fontSize="3xl"
          textAlign="center"
          marginY="10px"
        >
          <em>"riceboyler" is not intended any kind of a racial slur and it was never conceived as such.</em>
        </Text>
      </ContentBox>
      <Text fontSize="xl">I have to make that clear now as the term "riceboy" has gone from being a joking reference to people who "rice" out their cars (a certain aesthetic mostly seen in the Fast & Furious franchise) to a more directed racial slur directed at people of Asian descent. I do not condone any kind of racism, and if you're offended by this nickname, I apologize. It's not intended to offend, it's entirely a made up word with no such negative connotations.
      </Text>
    </ContentBox>
  );
};

export default riceboyler;
