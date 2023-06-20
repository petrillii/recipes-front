import { CategoryModel } from "./category.model";

export class RecipeDetailModel{
  id!: number;
  title?: string;
  ingredients?: string[];
  instructions?: string;
  category?: CategoryModel;
  image_url?: string;
}
