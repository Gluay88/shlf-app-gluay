import React, { Component } from "react";

export class Recipe extends Component {
  render() {
    return (
      <>
        <h1>Recipes</h1>
        <h4>Banana Bread Snack Cakes</h4>
        <img
          src="https://cdn.pixabay.com/photo/2019/11/15/12/15/banana-4628285_960_720.jpg"
          alt="Banana cake"
        />
        <h4>Ingredients</h4>
        <ul>
          <li>1/3 cup mashed ripe bananas (about 1 small)</li>
          <li>1-2/3 cups all-purpose flour</li>
          <li>1 teaspoon baking soda</li>
          <li>1 cup packed brown sugar</li>
          <li>1/2 cup water</li>
          <li>1/2 teaspoon vanilla extract</li>
          <li>1/3 cup canola oil</li>
          <li>Confectioners' sugar</li>
        </ul>
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
          30-35 minutes. Cool on a wire rack. Dust cake with confectioners'
          sugar. Cut into 9 pieces.
        </p>
        <br />
        <h4>Nutrition Facts</h4>
        <p>
          1 piece: 259 calories, 9g fat (1g saturated fat), 0 cholesterol, 147mg
          sodium, 44g carbohydrate (25g sugars, 1g fiber), 3g protein.
        </p>
      </>
    );
  }
}

export default Recipe;
