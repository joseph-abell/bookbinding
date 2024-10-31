import { Category } from "../types/category";

const categories: Category[] = [
    {
        slug: 'binding',
        title: 'Binding',
        description: 'Descriptions on different binding types',
        tutorials: ['perfect-binding']
    },
    {
        slug: 'sewing',
        title: 'Sewing',
        description: 'Methods for sewing pages together to create a book.',
        tutorials: ['coptic-stitch', 'japanese-stab']
    },
    {
        slug: 'pdfs',
        title: 'PDFs',
        description: 'Downloadable PDFs for bookbinding projects.',
        tutorials: ['history-of-the-art-of-bookbinding']
    },
    {
        slug: 'gluing',
        title: 'Gluing',
        description: 'Using adhesives to bind materials in bookbinding.',
        tutorials: []
    },
    {
        slug: 'covering',
        title: 'Covering',
        description: 'Techniques for creating and attaching covers to books.',
        tutorials: []
    },
    {
        slug: 'trimming',
        title: 'Trimming',
        description: 'Cutting and trimming pages and covers to the correct size.',
        tutorials: []
    }
];

export default categories;