import { CategoryModel } from "./category.model";

export class RecipesModel{
  id?: number;
  title?: string;
  category?: CategoryModel;
  image_url?: string;
  ingredients?: string[];
  instructions?: string[];
}
