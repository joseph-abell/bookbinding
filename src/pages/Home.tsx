import { Component, For } from 'solid-js';

import tutorials from '../data/tutorials';
import categories from '../data/categories';
import homepageData from '../data/homepage';

import TutorialCard from '../components/TutorialCard';
import Header from '../components/Header';

import { createEffect } from 'solid-js';

const Home: Component = () => {
  createEffect(() => {
    document.title = homepageData.title;
    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute('content', homepageData.metaDescription);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = homepageData.metaDescription;
      document.head.appendChild(newMetaDescription);
    }
  });

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