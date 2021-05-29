import PeachSmash from "../../assets/images/Rectangle87.png";
import PistacioPesto from "../../assets/images/Rectangle88.png";
import SesameCrustedTofu from "../../assets/images/Rectangle89.png";
import MexicanCorn from "../../assets/images/Rectangle90.png";
import Carbonara from "../../assets/images/Rectangle91.png";
import BananaBread from "../../assets/images/Rectangle92.png";
import peachsmashdetail from "../../assets/images/peachsmash.png";
import pistaciodetails from "../../assets/images/pistaciodetails.png";
import sesamedetails from "../../assets/images/sesamedetails.png";
import mexicandetails from "../../assets/images/mexicandetails.png";
import carbonaradetails from "../../assets/images/carbonaradetails.png";



const recipeMock = [
  {
    id: 1,
    imageUrl: PeachSmash,
    imageAlt: "Peach smash",
    title: "Peach Smash",
    ingridients: "6 INGRIDIENTS",
    steps: "4 STEPS",
    prepTime: "5MIN",
    isFavourite: true,
    isFeatured: true,
  },
  {
    id: 2,
    imageUrl: PistacioPesto,
    imageAlt: "Pistachio Pesto Babka",
    title: "Pistachio Pesto Babka",
    ingridients: "17 INGRIDIENTS",
    steps: "17 STEPS",
    prepTime: "3HR 35MIN",
    isFavourite: false,
    isFeatured: true,
  },
  {
    id: 3,
    imageUrl: SesameCrustedTofu,
    imageAlt: "Sesame Crusted Tofu",
    title: "Sesame Crusted Tofu",
    ingridients: "15 INGRIDIENTS",
    steps: "14 STEPS",
    prepTime: "45MIN",
    isFavourite: false,
    isFeatured: true,
  },
  {
    id: 4,
    imageUrl: MexicanCorn,
    imageAlt: "Mexican Street Corn",
    title: "Mexican Street Corn",
    ingridients: "7 INGRIDIENTS",
    steps: "5 STEPS",
    prepTime: "25MIN",
    isFavourite: false,
    isFeatured: true,
  },
  {
    id: 5,
    imageUrl: Carbonara,
    imageAlt: "Weeknight Carbonara",
    title: "Weeknight Carbonara",
    ingridients: "7 INGRIDIENTS",
    steps: "10 STEPS",
    prepTime: "25MIN",
    isFavourite: true,
    isFeatured: true,
  },
  {
    id: 6,
    imageUrl: BananaBread,
    imageAlt: "Banana Bread",
    title: "Banana Bread",
    ingridients: "8 INGRIDIENTS",
    steps: "7 STEPS",
    prepTime: "52 MIN",
    isFavourite: true,
    isFeatured: true,
  },
];

const ingridientsMock = [
  {
    id: 6,
    imageUrl: BananaBread,
    imageAlt: "Banana Bread",
    servings: "6",
    firstIngridient: "Bananas, divided",
    firstIngridientQuant: "3",
    secondIngridient: "Egg",
    secondIngridientQuant: "1",
    thirdIngridient: "Butter",
    thirdIngridientQuant: "3 Tbs",
    fourthIngridient: "All - Purpose Flour",
    fourthIngridientQuant: "1 cup",
    fifthIngridient: "Granulated Sugar",
    fifthIngridientQuant: "1/4 cup",
    sixthIngridient: "Salt",
    sixthIngridientQuant: "1 pinch",
    seventhIngridient: "Baking Soda",
    seventhIngridientQuant: "1 Tsp",
  },

  {
    id: 1,
    imageUrl: peachsmashdetail,
    imageAlt: "Peach smash",
    servings: "1",
    firstIngridient: "BACARDI Reserva Ocho Rum",
    firstIngridientQuant: "1.5 fl oz",
    secondIngridient: "Lemon, sliced",
    secondIngridientQuant: "1",
    thirdIngridient: "Peach Puree",
    thirdIngridientQuant: "2 Tbsp",
    fourthIngridient: "Maple Syrup",
    fourthIngridientQuant: "0.8 fl oz",
    fifthIngridient: "Crushed Ice",
    fifthIngridientQuant: "as needed",
    sixthIngridient: "Fresh Thyme",
    sixthIngridientQuant: "2 springs",
   },
   {
    id: 2,
    imageUrl: pistaciodetails,
    imageAlt: "Pistacio Pesto Babka",
    servings: "8",
    firstIngridient: "Whole Milk",
    firstIngridientQuant: "1/4 cup",
    secondIngridient: "Active Dry Yeast",
    secondIngridientQuant: "3.5 g",
    thirdIngridient: "Granulated Sugar",
    thirdIngridientQuant: "2 1/2 Tbsp",
    fourthIngridient: "All - Purpose Flour",
    fourthIngridientQuant: "2 cups",
    fifthIngridient: "Fine Sea Salt",
    fifthIngridientQuant: "3/4 tsp",
    sixthIngridient: "Vanilla Extract",
    sixthIngridientQuant: "1/2 tsp",
    seventhIngridient: "Large Eggs",
    seventhIngridientQuant: "2",
   },
   {
    id: 3,
    imageUrl: sesamedetails,
    imageAlt: "Sesame Crusted Tofu",
    servings: "8",
    firstIngridient: "Whole Milk",
    firstIngridientQuant: "1/4 cup",
    secondIngridient: "Active Dry Yeast",
    secondIngridientQuant: "3.5 g",
    thirdIngridient: "Granulated Sugar",
    thirdIngridientQuant: "2 1/2 Tbsp",
    fourthIngridient: "All - Purpose Flour",
    fourthIngridientQuant: "2 cups",
    fifthIngridient: "Fine Sea Salt",
    fifthIngridientQuant: "3/4 tsp",
    sixthIngridient: "Vanilla Extract",
    sixthIngridientQuant: "1/2 tsp",
    seventhIngridient: "Large Eggs",
    seventhIngridientQuant: "2",
   },
   {
    id: 4,
    imageUrl: mexicandetails,
    imageAlt: "Mexican Street Corn",
    servings: "6",
    firstIngridient: "Corn",
    firstIngridientQuant: "2 ears",
    secondIngridient: "Sour Cream",
    secondIngridientQuant: "2 Tbsp",
    thirdIngridient: "Crumbled Cotija Cheese",
    thirdIngridientQuant: "1/4 cup",
    fourthIngridient: "Smoked Paprika",
    fourthIngridientQuant: "1/4 tsp",
    fifthIngridient: "Finely Chopped Fresh Cilantro",
    fifthIngridientQuant: "2 Tbsp",
    sixthIngridient: "Lime",
    sixthIngridientQuant: "1",
   },
   {
    id: 5,
    imageUrl: carbonaradetails,
    imageAlt: "Weeknight Carbonara",
    servings: "4",
    firstIngridient: "Bucatini Pasta",
    firstIngridientQuant: "12 oz",
    secondIngridient: "Pancetta",
    secondIngridientQuant: "8 oz",
    thirdIngridient: "Eggs",
    thirdIngridientQuant: "5",
    fourthIngridient: "Large Eggs",
    fourthIngridientQuant: "2",
    fifthIngridient: "Parmesan Cheese",
    fifthIngridientQuant: "11/4 cup",
    sixthIngridient: "Salt",
    sixthIngridientQuant: "to taste",
    seventhIngridient: "Freshly Ground Black Pepper",
    seventhIngridientQuant: "to taste",
   },
];

const stepsMock = [
  {
    id: 6,
    stepOne: "Step 1",
    stepOneDesc:
      " Peel the Banana (3). Mash 2 1/2 bananas with a fork in a bowl and set the other half aside. ",
    stepTwo: "Step  2",
    stepTwoDesc:
      " Add Butter (40 gram) and Egg (1) to mashed bananas and mix well together. ",
    stepThree: "Step  3",
    stepThreeDesc:
      "In a separate bowl, mix the All-Purpose Flour (140 gram), Granulated Sugar (50 gram), Salt (1 pinch), and Baking Soda (1 teaspoon) together. ",
    stepFour: "Step  4",
    stepFourDesc:
      "Add the dry ingredients to the mashed banana mixture. Using a fork or spatula, mash all ingredients into a wet banana batter. ",
    stepFive: "Step  5",
    stepFiveDesc:
      "Add Butter (10 gram) to the bottom and sides of the Philips baking accessory and then dust it with a bit of flour. Pour the banana bread batter into the baking accessory. Slice the leftover banana in half lengthwise and place both halves on top of the banana bread. ",
    stepSix: "Step  6",
    stepSixDesc:
      "Place the baking accessory in the basket. Put the basket into the Airfryer. Cook at 325 degrees F (160 degrees C) for 40 minutes. ",
    stepSeven: "Step  7",
    stepSevenDesc:
      "In a separate bowl, mix the All-Purpose Flour (140 gram), Granulated Sugar (50 gram), Salt (1 pinch), and Baking Soda (1 teaspoon) together. ",
  },
  {
    id: 1,
    stepOne: "Step 1",
    stepOneDesc:
      " In a small sauce-pot add the sugar, water, mint and ginger. Bring to a boil, swirl the pot gently to mix the ingredients, turn heat down and simmer until the sugar is dissolved.  ",
    stepTwo: "Step  2",
    stepTwoDesc:
      " Strain and set aside in the refrigerator to cool. The syrup can be made several days in advance and stored in the refrigerator for up to two weeks. ",
    stepThree: "Step  3",
    stepThreeDesc:
      " In 16oz (454g) highball glass, add the peach pieces, mint and simple syrup. Muddle the ingredients 5-6 times. Add the bourbon, then fill the glass with crushed ice. ",
    stepFour: "Step  4",
    stepFourDesc:
      "Top off with cold ginger ale and stir well pulling the peach/syrup mixture to the top. Garnish with mint and an optional piece of candied ginger. ",
  },
  {
    id: 2,
    stepOne: "Step 1",
    stepOneDesc:
      "  Place your Garlic (2 clove) in the food processor; pulse until finely chopped.   ",
    stepTwo: "Step  2",
    stepTwoDesc:
      " Add the Pistachios (1/3 cup), the juice of 1 Lemon (1), Fresh Basil (4 cup), Salt (to taste), and Ground Black Pepper (to taste); pulse until nuts are finely chopped and ingredients are well blended ",
    stepThree: "Step  3",
    stepThreeDesc:
      " Add Extra-Virgin Olive Oil (1/2 cup) gradually and process until the mixture is well combined.  ",
    stepFour: "Step  4",
    stepFourDesc:
      " Add Parmesan Cheese (1/2 cup) and pulse 2 or 3 times. Voila! Pistachio Pesto. Set aside.  ",
    stepFive: "Step  5",
    stepFiveDesc:
      "In a small bowl combine the Active Dry Yeast (1/2 package), Whole Milk (1/4 cup), and Granulated Sugar (2 1/2 tablespoon) together allowing it to rest until the yeast has been activated and appears foamy, approximately 5 minutes. ",
    stepSix: "Step  6",
    stepSixDesc:
      "Using a large bowl, hand whisk the All-Purpose Flour (2 cup), Fine Sea Salt (3/4 teaspoon), and Vanilla Extract (1/2 teaspoon) to combine. Attach bowl to kitchen aid with the dough hook and add yeasted milk combination to combine.  ",
    stepSeven: "Step  7",
    stepSevenDesc:
      " Add Egg (2) one at a time, mixing thoroughly for a total of 3 minutes. If the dough is still sticking to the side of the bowl and quite wet, you may need to add an extra tablespoon of flour.  ",
  },
  {
    id: 3,
    stepOne: "Step 1",
    stepOneDesc:
      "  Place your Garlic (2 clove) in the food processor; pulse until finely chopped.   ",
    stepTwo: "Step  2",
    stepTwoDesc:
      " Add the Pistachios (1/3 cup), the juice of 1 Lemon (1), Fresh Basil (4 cup), Salt (to taste), and Ground Black Pepper (to taste); pulse until nuts are finely chopped and ingredients are well blended ",
    stepThree: "Step  3",
    stepThreeDesc:
      " Add Extra-Virgin Olive Oil (1/2 cup) gradually and process until the mixture is well combined.  ",
    stepFour: "Step  4",
    stepFourDesc:
      " Add Parmesan Cheese (1/2 cup) and pulse 2 or 3 times. Voila! Pistachio Pesto. Set aside.  ",
    stepFive: "Step  5",
    stepFiveDesc:
      "In a small bowl combine the Active Dry Yeast (1/2 package), Whole Milk (1/4 cup), and Granulated Sugar (2 1/2 tablespoon) together allowing it to rest until the yeast has been activated and appears foamy, approximately 5 minutes. ",
    stepSix: "Step  6",
    stepSixDesc:
      "Using a large bowl, hand whisk the All-Purpose Flour (2 cup), Fine Sea Salt (3/4 teaspoon), and Vanilla Extract (1/2 teaspoon) to combine. Attach bowl to kitchen aid with the dough hook and add yeasted milk combination to combine.  ",
    stepSeven: "Step  7",
    stepSevenDesc:
      " Add Egg (2) one at a time, mixing thoroughly for a total of 3 minutes. If the dough is still sticking to the side of the bowl and quite wet, you may need to add an extra tablespoon of flour.  ",
  },
  {
    id: 4,
    stepOne: "Step 1",
    stepOneDesc:
      " In a bowl, whisk together the crema, mayonnaise, cilantro, garlic, chipotle pepper, lime zest and lime juice. ",
    stepTwo: "Step  2",
    stepTwoDesc:
      " Place the husked corn directly onto grill grates. Grill the corn for about 3 minutes, undisturbed, or until kernels begin to turn golden brown and look charred. ",
    stepThree: "Step  3",
    stepThreeDesc:
      " Turn over and repeat. When all sides are browned, remove from the grill onto a plate.  ",
    stepFour: "Step  4",
    stepFourDesc:
      " Using a brush or a spoon, coat each ear of corn with the crema mixture.  ",
    stepFive: "Step  5",
    stepFiveDesc:
      "Sprinkle with crumbled cojita cheese. Sprinkle with additional chipotle pepper, if desired. Serve immediately with extra lime wedges. ",
    
  },
  {
    id: 5,
    stepOne: "Step 1",
    stepOneDesc:
      " Grate the Parmesan Cheese (4 ounce). Set aside a little for garnish at the end.  ",
    stepTwo: "Step  2",
    stepTwoDesc:
      " Separate 5 Egg (5) Yolks into a medium bowl with 2 Whole Egg (2). ",
    stepThree: "Step  3",
    stepThreeDesc:
      " Whisk eggs together with ½ Cup Parmesan, Salt (to taste), and Freshly Ground Black Pepper (to taste) until creamy.  ",
    stepFour: "Step  4",
    stepFourDesc:
      " In a large pot over medium-high heat, boil water. Once boiling, heavily salt the water and then cook Bucatini Pasta (1 package) following package instructions.  ",
    stepFive: "Step  5",
    stepFiveDesc:
      "Render Guanciale (0.5 pound) by cooking on a large skillet over medium-high heat until crispy, about 8 minutes.  Keep 2 Tbsp of rendered fat in the skillet and transfer pancetta to a dry plate.",
    stepSix: "Step 6",
    stepSixDesc: "Once cooked, set aside 1 cup of pasta water then drain the pasta.  Slowly whisk the pasta water into the egg mixture until the sauce loosens. ",
    stepSeven: "Step 7",
    stepSevenDesc: "In the same skillet combine the pasta and rendered fat over low heat. Add in the pancetta, then pour the egg mixture into the pan and keep the heat on low. Lightly toss the pasta. Season with Freshly Ground Black Pepper (to taste), garnish with Parmesan, and serve hot! ",
    
  },
  
  
];

export { recipeMock, ingridientsMock, stepsMock };