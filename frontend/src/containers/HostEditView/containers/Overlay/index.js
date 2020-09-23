import React from 'react';

import styles from './styles.module.scss';
import OverlayCard from './components/OverlayCard';

export default function Overlay({ questions = [], onAdd }) {
  const cards = questions.map((q, idx) => (<OverlayCard key={idx} question={q} onClick={onAdd} />));
  if (cards.length % 2 === 1) cards.push(<OverlayCard key={cards.length} hidden />);

  return (
    <div className={`${styles.container} ${styles.scroller}`}>
      {cards}
    </div>
  );
}