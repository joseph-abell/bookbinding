import { Component, createMemo, For } from 'solid-js';
import { useParams } from '@solidjs/router';
import { tutorials } from '../data/tutorials';
import Header from '../components/Header';

const TutorialDetail: Component = () => {
  const params = useParams();
  
  const tutorial = createMemo(() => 
    tutorials.find(t => t.slug === params.slug)
  );

  return (
    <>
    <Header />
    <div class="tutorial-detail">
      {tutorial() ? (
        <>
          <h1>{tutorial()?.title}</h1>
          <p>{tutorial()?.description}</p>
          
          <div class="instructions">
            <For each={tutorial()?.instructions}>
              {(instruction) => (
                <div class="instruction">
                  <img src={instruction.gifUrl} alt={`Step ${instruction.id}`} />
                  <div class="description">
                    <p>{instruction.description}</p>
                  </div>
                </div>
              )}
            </For>
          </div>
        </>
      ) : (
        <p>Tutorial not found</p>
      )}
    </div>
    </>
  );
};

export default TutorialDetail;