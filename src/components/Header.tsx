import { Component } from 'solid-js';
import categories from '../data/categories';

const Header: Component = () => {
    return (
        <header>
            <div class="container">
                <a href="/bookbinding" class="logo">
                    <img src="/logo.gif" alt="Logo" />
                    Bookbinding Tutorials
                </a>
      
                <nav>
                    <ul>
                        {categories.filter(category => category.tutorials.length > 0).map(category => (
                            <li>
                                <a href={`/category/${category.slug}`}>{category.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;