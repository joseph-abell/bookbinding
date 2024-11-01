import { Tutorial } from '../types/tutorial';

export const tutorials: Tutorial[] = [
  {
    title: "Basic Coptic Stitch Binding",
    description: "Learn the fundamental Coptic stitch binding technique",
    category: "sewing",
    thumbnailUrl: "/bookbinding/images/logo.gif",
    slug: "coptic-stitch",
    instructions: [
      {
        id: 1,
        description: "Fold your paper sheets in half to create signatures",
        gifUrl: "/bookbinding/images/logo.gif"
      },
      {
        id: 2,
        description: "Pierce holes along the fold using an awl",
        gifUrl: "/bookbinding/images/logo.gif"
      }
    ]
  },
  {
    title: "Japanese Stab Binding",
    description: "Create a beautiful Japanese-style bound book",
    category: "binding",
    thumbnailUrl: "/bookbinding/images/logo.gif",
    slug: "japanese-stab",
    instructions: [
      {
        id: 1,
        description: "Stack and align your paper sheets",
        gifUrl: "/bookbinding/images/logo.gif"
      },
      {
        id: 2,
        description: "Mark your stab binding pattern",
        gifUrl: "/bookbinding/images/logo.gif"
      }
    ]
  },
  {
    title: "Perfect Binding",
    description: "Make a professional-looking perfect bound notebook",
    category: "binding",
    thumbnailUrl: "/bookbinding/images/logo.gif",
    slug: "perfect-binding",
    instructions: [
      {
        id: 1,
        description: "Prepare your paper stack and clamp it firmly",
        gifUrl: "/bookbinding/images/logo.gif"
      },
      {
        id: 2,
        description: "Apply PVA glue to the spine",
        gifUrl: "/bookbinding/images/logo.gif"
      }
    ]
  },
  {
    title: "History of the Art of Bookbinding",
    description: "Learn about the history of bookbinding",
    category: "pdfs",
    thumbnailUrl: "/bookbinding/images/logo.gif",
    slug: "history-of-the-art-of-bookbinding",
    instructions: []
  }
];

export default tutorials;