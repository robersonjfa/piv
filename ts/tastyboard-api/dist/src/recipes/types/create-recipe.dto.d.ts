export declare class CreateRecipeDto {
    title: string;
    description: string;
    imageUrl?: string;
    videoUrl?: string;
    ingredients: string[];
    steps: string[];
    authorId?: number;
    categoryId?: number;
}
