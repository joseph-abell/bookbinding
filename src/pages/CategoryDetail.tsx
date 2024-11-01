import { Component, createEffect, createMemo, For } from 'solid-js';
import tutorialData from '../data/tutorials';
import categories from '../data/categories';
import TutorialCard from '../components/TutorialCard';
import Header from '../components/Header';
import { useParams } from '@solidjs/router';
import { Tutorial } from '../types/tutorial';

const CategoryDetail: Component = () => {
    const params = useParams();

    const category = createMemo(() => categories.find(c => c.slug === params.slug));
    const tutorials = createMemo(() => category()?.tutorials.map(t => tutorialData.find(tut => tut.slug === t)).filter(t => Boolean(t)) as Tutorial[]);

    createEffect(() => {
        if (category()) {
            document.title = category()?.title || 'Bookbinding Tutorials';
            
            const metaDescription = document.querySelector('meta[name="description"]');
        
            if (metaDescription) {
                metaDescription.setAttribute('content', category()?.description || '');
            } else {
                const newMetaDescription = document.createElement('meta');
                newMetaDescription.name = 'description';
                newMetaDescription.content = category()?.description || '';
                document.head.appendChild(newMetaDescription);
            }
        }
    });

    return (
        <>
            <Header />

            <div class="container">
                {category() ? (<>
                    <h1>{category()?.title}</h1>

                    <section class="category-section">
                        <h2>{category()?.description}</h2>
                        <div class="tutorials-grid">
                            <For each={tutorials()}>
                                {(tutorial) => <TutorialCard tutorial={tutorial} />}
                            </For>
                        </div>
                    </section>
                </>
                ) : (
                <p>Category not found</p>
            )}
            </div>
        </>
    );
};

export default CategoryDetail;