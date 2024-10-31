export interface Instruction {
    id: number;
    description: string;
    gifUrl: string;
  }
  
  export interface Tutorial {
    title: string;
    description: string;
    category: string;
    thumbnailUrl: string;
    instructions: Instruction[];
    slug: string;
  }