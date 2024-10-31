import { Component, For } from 'solid-js';

import tutorials from '../data/tutorials';
import categories from '../data/categories';
import homepageData from '../data/homepage';

import TutorialCard from '../components/TutorialCard';
import Header from '../components/Header';

const Home: Component = () => {
  return (
    <>
      <Header />

      <div class="container">
        <p>{homepageData.description}</p>
        
        <For each={categories.filter((c, index) => c.tutorials.length > 0 && index < 6)}>
          {(category) => (
            <section class="category-section">
              <h2>{category.title}</h2>
              
              <p>{category.description}</p>
              
              {category.tutorials.length >= 6 && (
                <a href={`/category/${category.slug}`} class="view-more-link">
                  View more
                </a>
              )}

              <div class="tutorials-grid">
                <For each={tutorials.filter(t => t.category === category.slug)}>
                  {(tutorial) => <TutorialCard tutorial={tutorial} />}
                </For>
              </div>
            </section>
          )}

            
        </For>
        
      </div>
    </>
  );
};

export default Home;