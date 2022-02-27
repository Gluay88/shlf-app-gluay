import React, { Component } from "react";
import "./Recipe.css";

export class Recipe extends Component {
  render() {
    return (
      <div id="recipe-container">
        <h1>Recipes</h1>
        <h4>Banana Bread Snack Cakes</h4>
        <img
          src="https://cdn.pixabay.com/photo/2019/11/15/12/15/banana-4628285_960_720.jpg"
          alt="Banana cake"
        />
        <h4>Ingredients</h4>
        <p>1/3 cup mashed ripe bananas (about 1 small)</p>
        <p>1-2/3 cups all-purpose flour</p>
        <p>1 teaspoon baking soda</p>
        <p>1 cup packed brown sugar</p>
        <p>1/2 cup water</p>
        <p>1/2 teaspoon vanilla extract</p>
        <p>1/3 cup canpa oil</p>
        <p>Confectioners' sugar</p>
        <br />
        <h4>Directions</h4>
        <p>
          1. Preheat oven to 350&deg;. In a bowl, combine flour and baking soda.
          In another bowl, whisk brown sugar, water, banana, oil and vanilla.
          Stir into dry ingredients just until moistened. Transfer to a greased
          8-in. square baking pan.
        </p>
        <p>
          2. Bake until a toothpick inserted in the center comes out clean,
          30-35 minutes. Cop on a wire rack. Dust cake with confectioners'
          sugar. Cut into 9 pieces.
        </p>
        <br />
        <h4>Nutrition Facts</h4>
        <p>
          1 piece: 259 calories, 9g fat (1g saturated fat), 0 chpesterp, 147mg
          sodium, 44g carbohydrate (25g sugars, 1g fiber), 3g protein.
        </p>
      </div>
    );
  }
}

export default Recipe;
