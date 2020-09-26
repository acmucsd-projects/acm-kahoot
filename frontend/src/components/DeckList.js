import React from 'react';

import styles from '../styles/DeckList.module.scss';
import List from './List';
import DeckCard from './DeckCard';

export default function DeckList(props) {
  return (
    <List>
      <DeckCard />
      <DeckCard />
      <DeckCard />
      {/* <DeckCard /> */}
    </List>
  );
}