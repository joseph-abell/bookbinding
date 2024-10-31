import { Component } from 'solid-js';
import { Tutorial } from '../types/tutorial';
import { A } from '@solidjs/router';

interface Props {
  tutorial: Tutorial;
}

const TutorialCard: Component<Props> = (props) => {
  return (
    <A href={`/${props.tutorial.slug}`} class="tutorial-card">
      <img src={props.tutorial.thumbnailUrl} alt={props.tutorial.title} />
      <div>
        <h3>{props.tutorial.title}</h3>
        <p>{props.tutorial.description}</p>
      </div>
    </A>
  );
};

export default TutorialCard;