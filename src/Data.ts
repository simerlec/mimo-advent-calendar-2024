import salmon from "../resources/images/miso-glazed-salmon.webp";
import yorkshire_pudding from "../resources/images/yorkshire_pudding.png";
import hot_spinach_dip from "../resources/images/hot_spinach_dip.jpg";
import tiramisu from "../resources/images/tiramisu.jpg";
import pave from "../resources/images/pave.jpg";
import manti from "../resources/images/manti.jpg";
import makos_guba from "../resources/images/makos_guba.jpg";
import beigli from "../resources/images/beigli.jpg";
import cookies from "../resources/images/hazelnut_cookies.jpg";
import cabbage_soup from "../resources/images/cabbage_soup.jpg";
import medenjaci from "../resources/images/medenjaci.webp";
import bahn_mi_sandwich from "../resources/images/bahn_mi_sandwich.jpg";
import fritule from "../resources/images/fritule.jpg";
import pancakes from "../resources/images/pancakes.webp";
import stuffed_mushrooms from "../resources/images/stuffed_mushrooms.webp";
import sevenup from "../resources/images/7up.jpg";
import cinnamon_rolls from "../resources/images/cinnamon_rolls.jpg";
import mandeln from "../resources/images/mandeln.jpg";
import banana_tiramisu from "../resources/images/banana_tiramisu.webp";
import fischsuppe from "../resources/images/fischsuppe.jpeg";
import bara_brith_cake from "../resources/images/bara_brith_cake.webp";
import vincisgrassi from "../resources/images/vincisgrassi.jpg";
import pozole from "../resources/images/pozole.jpg";
import melomakarona from "../resources/images/melomakarona.jpg";

/*
1. Laura
2. Pam
3. Mattia
4. Kedson
5. Elif
6. Peter
7. Zsofi
8. Kris
9. Teresa
10. Byron
11. Barbara
12. Cristiana
13. Bruno
14. Patrick
15. Cam
16. Kelly
17. Mako
18. Alex
19. Georg
20. Imre
21. Connor
22. Michele
23. Alexander
24. Abed
*/

export interface CalendarData {
  [key: number]: CalendarEntry;
}

export interface CalendarEntry {
  name: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  story?: string;
}

const data: CalendarData = {
  0: {
    name: "Miso Sesame Glazed Salmon",
    image: salmon,
    ingredients: [
      "½ cup (125 mL) white miso paste",
      "3 tbsp (45 mL) granulated sugar",
      "3 tbsp (45 mL) dry sherry",
      "1 tbsp (15 mL) sesame oil",
      "¼ tsp (1 mL) cayenne",
      "4 lb (1.81 kg) piece boneless salmon fillet",
      "3 tbsp (45 mL) lightly toasted sesame seeds",
    ],
    instructions: [
      "In a medium bowl, whisk together miso paste, sugar, sherry, sesame oil and cayenne until smooth.",
      "Place salmon on a large parchmentpaper-lined baking sheet. Spread miso mixture evenly over salmon. Let stand at room temperature for 30 minutes or refrigerate for up to 8 hours.",
      "Preheat oven to 450°F (230°C).",
      "Sprinkle salmon evenly with sesame seeds. Roast salmon until a meat thermometer inserted in thickest part registers 125°F (52°C) and glaze at edges of salmon is starting to brown, 15 to 18 minutes.",
    ],
    story:
      "One of the first holidays I spent just with my partner, we got all of our recipes from a magazine put out by the liquor store. That sounds strange, but they made the magazine fancy. This recipe was really good, and we've made it ever since! His family usually eats fish for the holidays, and I'm not a huge fan, so we were trying to find a recipe that might appeal to me, too, and this definitely did.",
  },
  1: {
    name: "Hot Spinach Dip",
    image: hot_spinach_dip,
    ingredients: [
      "8 ounces cream cheese softened",
      "1 cup sour cream",
      "10 ounces fresh spinach leaves",
      "1 teaspoon minced garlic",
      "1/2 teaspoon salt",
      "1/4 teaspoon pepper",
      "1/2 cup grated parmesan cheese",
      "1 1/2 cups shredded mozzarella cheese divided use",
      "1 tablespoon chopped parsley bread, crackers and vegetables for serving cooking spray",
    ],
    instructions: [
      "Steam or saute the spinach until wilted. Let cool, then wring out all the excess water. Coarsely chop the spinach.",
      "Preheat the oven to 375 degrees F. Coat a small baking dish or skillet with cooking spray.",
      "Place the cream cheese, sour cream, cooked spinach, garlic, salt, pepper, parmesan cheese and 3/4 cup of the mozzarella cheese in a bowl. Stir until well combined.",
      "Spread the spinach mixture into the prepared dish. Top with remaining mozzarella cheese.",
      "Bake for 20 minutes or until dip is bubbly and cheese is melted. Turn the oven to broil and cook for 2-3 more minutes or until cheese starts to brown.",
      "Sprinkle with chopped parsley then serve with bread, crackers and vegetables.",
    ],
  },
  2: {
    name: "Authentic Italian Tiramisu Recipe",
    image: tiramisu,
    ingredients: [
      "300 g (about 30) ladyfingers",
      "500 g (1,1 lb = 2 1/4 cups) of mascarpone cheese",
      "4 medium eggs (about 220 g/7,7 oz without shells)",
      "100 g (1/2 cup) of granulated sugar",
      "300 ml (1 ¼ cup) of coffee (better if espresso)",
      "2 tablespoons of Rum or Marsala",
      "unsweetened cocoa powder",
    ],
    instructions: [
      "First of all, make the coffee. For a quick and delicious Italian coffee, we used an Espresso Machine. Then add 2 tablespoons of Rum or Marsala wine. This is optional. If you don't like liqueurs or you are making Tiramisu for children, don't use it. Your tiramisu is great all the same, even without liqueur. Set aside and let cool.",
      "Separate the egg whites from the yolks. Set aside the yolks and whip the egg whites until stiff: you will get at it when the the egg whites will not move if you turn the bowl over. Remember that to whip egg whites to stiff peaks, there should be no trace of yolk. Once ready, set aside.",
      "Now, in a bowl, beat the egg yolks with sugar until light and smooth, 3 to 5 minutes.",
      "In the meantime, pour the mascarpone cheese into a bowl and work it with a spoon to make it softer. Mascarpone cheese must be of excellent quality, creamy and thick. When the yolks are ready add the mascarpone cheese.",
      "Using the flexible-edge k-beater, slowly whip the mascarpone cream for 2 to 3 minutes. Now add the stiffly beaten egg whites.",
      "Mix with a wooden spoon, from bottom up. Mix slowly until smooth and creamy.",
      "Now let’s prepare the layers of ladyfingers and mascarpone cream. You can make 2 or more layers, depending on the width and depth of your pan.Dip the ladyfingers quickly (1 or 2 seconds) into the coffee. Then arrange the ladyfingers in the casserole of your liking. The ladyfingers should not soak too much coffee, otherwise the tiramisu will be too rich in coffee and runny.",
      "Arrange them so that they cover the bottom of the casserole. Then spread the mascarpone cream over the ladyfingers.",
      "Add another layer of ladyfingers and then top with more mascarpone cream. If you are making the last layer, spread the mascarpone cream generously.",
      "Finally, sprinkle with cocoa powder. You can even add dark chocolate chips, if you like. Allow to rest 3 hours in the refrigerator before serving. Even better if you prepare the tiramisu the day before, letting it rest overnight.",
    ],
  },
  3: {
    name: "Pavê",
    image: pave,
    ingredients: [
      "2 cans of sweetened condensed milk (14 oz each)",
      "4 cups milk (Whole milk preferred)",
      "2 tbsp corn starch",
      "4 egg yolks",
      "¼ tsp vanilla",
      "2 cups Heavy Cream",
      "2 cups powdered sugar",
      "1 tsp pure vanilla extract",
      "Marias cookies or lady fingers",
      "Chocolate Bar (optional)",
      "Sliced bananas (optional)",
      "Strawberries (optional)",
      "Chopped walnuts or pecans (optional)",
    ],
    instructions: [
      "In large pot whisk together condensed milk, 3 cups milk, egg yolks, and vanilla",
      "In measuring flask or small bowl whisk together last cup of milk with corn starch until dissolved",
      "Heat the mixture in sauce pan over medium/low heat stirring continuously (this will burn if you do not watch it closely and keep stirring)",
      "Once the mixture is bubbling slowly mix in the final cup of milk with cornstarch while continuing to stir",
      "Remove from heat once it has thickened to a pudding like consistency",
      "Pour into 15 x 10 baking dish and use rubber spatula to spread evenly over the bottom of the dish",
      "Place 1 layer of Maria cookies (or lady fingers) over cream until completely covered",
      "If you want to add fruit to the Pave (I like sliced strawberries and bananas in mine) then add a layer of sliced fruit on top of the cookies before adding more cream",
      "Then add another layer of cream over that and repeat with another layer of Marias cookies, and another layer of fruit (if desired)",
      "In bowl mix together heavy cream, powdered sugar and vanilla til it turns into a heavy whipping cream",
      "Spread across the top of the Pave with a rubber spatula",
      "Cover with foil or plastic wrap and refrigerate over night ( if you do not have overnight I'd recommend letting it sit in the fridge for at least 3-4 hours...it tastes much better after it has been refrigerated for several hours)",
      "When ready to serve you can serve as is, or sprinkle on nuts or grated chocolate over the top",
      "To make grated chocolate you can just buy a Hershey's chocolate bar or chocolate bar of choice. Place the chocolate bar in the freezer for a couple hours and then use a cheese grater to grate the chocolate over the top of your Pave",
    ],
    story:
      'Fun fact: In portuguese "Pavê" coincidentally has a similar pronunciation as "Pra ver", which translates to "To see". So the most common dad joke whenever they see a Pavê is "But is this TO SEE or TO EAT". It\'s a terrible joke but it\'s ridiculous how someone ALWAYS makes it 🤷‍♂️',
  },
  4: {
    name: "Manti - Turkish Dumplings",
    image: manti,
    ingredients: [
      "1,5 cups Flour",
      "1 Egg",
      "1/3 cup Water",
      "100 grams Minced Beef (best if a bit fatty)",
      "1/2 Onion",
      "Salt & Black Pepper",
      "1 cup Yoghurt",
      "1 clove Garlic",
      "2 tablespoons Butter",
      "1/2 teaspoon Chili Pepper",
      "Sunflower Oil",
    ],
    instructions: [
      "For the dough, add the flour, a dash of salt, egg and water, mix it together until it gets an elastic consistency.",
      "Let it rest in the fridge for about 10 minutes.",
      "For the filling add the grated onion, a dash of salt and some black pepper to the meat and mix it all together.",
      "The dough should be ready by now. Take it out of the fridge and roll it out nice and thin. Make sure to use enough flour so that it does not stick, you'll have a much easier time making the dumplings later on.",
      "Cut the dough into squares, maybe 2 to 3 fingers wide.",
      "Put a small amount of the filling - maybe as big as a hazelnut, so that you can still close the dumpling - in each square.",
      "Once you're done seal up the dumplings by folding and bringing all the corners together.",
      "Heat up some frying oil and fry the dumplings. Make sure that you give it enough time for the dough as well as the meat inside to cook properly.",
      "For the sauces, melt the butter and add the chilli pepper to give it some spicy flavor. Add some crushed garlic to the yoghurt and season it with a bit of salt and black pepper.",
      "Serve the dumplings in a bowl and put first the yoghurt and then the butter sauce on top. Enjoy!",
    ],
    story:
      "Any time of the year. I just boil it instead of frying tho...But it might be too time consuming. We usually make this together with friends to save time.",
  },
  5: {
    name: "Mákos Guba",
    image: makos_guba,
    ingredients: [
      "3 baguettes or similar amount of white bread, 30 cm each",
      "700 ml milk",
      "100 g ground poppy seeds",
      "75 g sugar",
    ],
    instructions: [
      "Break the bread in pieces",
      "Heat up the milk",
      "Mix poppy seeds with sugar and stir it with the bread",
      "Toss everything together so that the bread get soaked and coated with sugar and poppy seeds",
      "The quick version is ready just like that, but you can also bake it in the oven for around 20 min. A common addition if you bake it in the oven is vanilla custard",
    ],
  },
  6: {
    name: "Beigli",
    image: beigli,
    instructions: [
      "Dissolve 1 teaspoon of sugar in 1/2 a cup of lukewarm milk, then add the yeast, wait a few minutes until blooms.",
      "Mix the flour with the butter and lard by hand. The mixture will be quite crumbly.",
      "Add 2 whole eggs, the powdered sugar, pinch of salt, vanilla sugar, 1 teaspoon lemon zest and the yeast/milk mixture. Knead thoroughly. Add more flour if necessary.",
      "Divide the dough into 4 balls, cover and let rest for 30 minutes.",
      "Meanwhile, you have time to make the poppy seed filling.",
      "Poppy seed filling: In a pan heat the rest of the milk with the sugar, bring it to a boil. Take the pan off the heat, add the ground poppy seeds, the raisins and the rest of the lemon zest. Mix well and let it cool completely.",
      "Heat the oven to 180°C (355°F). Line a pan with parchment paper.",
      "On a floured surface roll out each piece of the dough into a rectangle measuring about 12x14 inches (30x35 cm).",
      "Spread the walnut or poppy seed filling on the dough while leaving approx. 1/2 inch empty edges on each side, and roll up lengthwise. Make sure it is not too tight and not too losse. Carefully transfer the rolls onto the baking sheet.",
      "Egg wash: Separate the egg, set the egg whites aside. Gently whisk the egg yolk and brush the top of the 4 rolls. Let them sit in the yolk dries, it will take about half an hour or so. After the egg yolk has dried, brush on the egg white, let it dry in a cool place, if possible not in the fridge.You can leave them overnight and bake the next day.",
      "Prick on the top with a skewer, making sure it goes all the way through. It allows vapor to escape, that could cause the pastry to split.",
      "Bake the rolls for about 30-35 minutes or until golden brown. Keep the rolls in a cool and dry place and slice them only before serving.",
    ],
    ingredients: [
      "500 grams all purpose flour",
      "100 grams unsalted butter",
      "100 grams pork lard",
      "1 teaspoon sugar",
      "50 grams powdered sugar",
      "3 eggs (1 for the egg wash)",
      "15 grams fresh yeast",
      "1 cup whole milk",
      "1 teaspoon vanilla extract",
      "2 teaspoon lemon zest",
      "1 pinch of salt",
      "250 grams poppy seeds ground",
      "1 cup powdered sugar (for the filling)",
      "OPTIONAL: 2 tbsp raisins",
    ],
    story:
      "Note from Santa's workshop: There's also a variant with walnut filling but since Santa really loves poppy seed filling he told me to stick with that version 😘",
  },
  7: {
    name: "Yorkshire Puddings",
    image: yorkshire_pudding,
    ingredients: [
      "Equal parts all purpose flour, beaten egg and milk (normally best by volume, so pick a single container like a cup/mug)",
      "A bit of salt",
      "Some fat, oil is great but rendered beef/pork fat do even better",
    ],
    instructions: [
      "Preheat oven to 220c (430ish fahrenheit)",
      "Put about a teaspoon of oil into each well in the muffin tin and put it in the oven (you want a layer like 2/3cm high, not a deep pool but not just a tiny bit)",
      "Mix flour and egg in a bowl until they're combined, then add a bit of salt and slowly incorporate the milk while mixing until it's a smooth batter with no lumps",
      "OPTIONAL: Leave it overnight in the fridge, the batter develops flavour and gets better if it can rest. If you're doing this obviously don't leave the oven on with the oil in the whole time.",
      "As quickly as possible without burning yourself/your kitchen down, get the batter into the muffin tin wells about 3/4 of the way full, then get it back in the oven and shut the door asap",
      "15-20 minutes, the yorkshires should rise significantly and brown without burning",
      "Serve with a roast dinner, cover it in gravy/sauce, and enjoy",
    ],
    story: "",
  },
  8: {
    name: "Hazelnut cookies",
    image: cookies,
    ingredients: ["120g hazelnuts", "40g pure honey", "60g oat flour", "Salt"],
    instructions: [
      "In a chopper or food processor, grind the hazelnuts until buttery.",
      "Add the pure honey afterwards and mix thoroughly.",
      "Then integrate the oat flour, a dash of salt and mix until a dough is made.",
      "Shape the dough into small balls of more or less the same size and place them on a baking tray.",
      "Flatten them with a fork, leaving the marks.",
      "Bake at 170ºC for about 10 minutes or until they start to brown.",
      "You can leave them like this, or bathe them in melted chocolate and then put some chopped hazelnuts on top. It is optional, but they are much more beautiful and rich 🙂",
    ],
  },
  9: {
    name: "Mom's Tex-Mex Cabbage Soup",
    image: cabbage_soup,
    ingredients: [
      "Ground beef (4 lb)",
      "Cabbage (1 head)",
      "Salt",
      "Pepper",
      "Garlic Powder (can use fresh garlic, but will alter flavor)",
      "tomato sauce",
    ],
    instructions: [
      "Clean cabbage and tear/cut into bite-size pieces.",
      "Brown ground beef until well-done.",
      "Season with salt and pepper and cover liberally with garlic powder (hard to measure - to taste of course, but way mom does it looks like entire meat in pan is covered in dust of garlic powder).",
      "Stir in cabbage, and add 1/2 - 3/4 can of tomato sauce.",
      "Add water until cabbage is mostly covered.",
      "Broth should be color of a light beef-soup broth (brownish-red). Add more tomato sauce if broth doesn't have enough of a reddish hue for you.",
      "Heat to boiling, bring heat down to low-medium and simmer until cabbage is cooked.",
      "Serve with black-eyed peas and enjoy!",
    ],
    story: "To be eaten on New Year's Eve 🎆",
  },
  10: {
    name: "Medenjaci",
    image: medenjaci,
    ingredients: [
      "1/2 cup brown sugar",
      "1/2 cup butter",
      "1/2 cup honey",
      "2 eggs",
      "1/4 teaspoon cloves",
      "1/2 teaspoon ginger",
      "1/2 teaspoon nutmeg",
      "1 teaspoon ground cinnamon",
      "pinch of salt",
      "3 cups flour",
      "1 teaspoon baking soda",
      "1 cup icing sugar for glaze (if you are using)",
    ],
    instructions: [
      "Preheat the oven to 180ªC. Line a baking sheet with parchment paper.",
      "Melt the butter and honey together just until they're melted and combined. Set aside.",
      "In another bowl mix flour, cloves, ginger, nutmeg, cinnamon, salt and baking soda.",
      "In a bowl, whisk together the eggs and sugar. Add the honey-butter mixture. Then, add the flour mixture.",
      "Using your hands, mix it together until it's combined.",
      "Wrap in plastic and refrigerate for 1-2 hours.",
      "Make the dough into a walnut-size ball and press them lightly on a baking sheet. (I roll out some dough 4-5 mm thick and use cookie cater.",
      "Bake the medenjaci for about 8 - 10 minutes or until lightly golden.",
      "For the icing, place the icing sugar and 2 tbsp ( one by one ) water into a mixing bowl. Stir until smooth.",
      "Cool cookies before using the icing.",
      "Dip the top of each cookie into the icing or make any pattern you like.",
      "Make sure you let the icing dry before storing cookies in airtight container.",
      "You can eat them right away but they are best after 4-5 days.",
    ],
  },
  11: {
    name: "Bahn Mi Style Sandwich",
    image: bahn_mi_sandwich,
    ingredients: [
      "Braised meat",
      "Sriracha",
      "Hoisin",
      "Maggi seasoning (If you don't have Maggi, soy sauce would work too)",
      "Cucumber, cut into long, thin baton",
      "Cilantro",
      "Pickled carrots + jalapenos",
      "Kewpie mayo",
      "Crusty bread roll (baguette, Italian, or kaiser roll)",
    ],
    instructions: [
      "Set a pan over medium-high heat and add some of the braised meat.",
      "Once the meat is starting to crisp, add a squirt of sriracha, a squirt of hoisin sauce, and lastly, a couple of shakes of Maggi seasoning.",
      "Slice your bread roll, if needed (and optionally toast).",
      "Spread both sides of your roll with Kewpie mayo.",
      "Next add 2 long slices of cucumber, before adding the meat, the cilantro, and lastly, the pickled carrots and/or jalapenos.",
      "That's it! Enjoy.",
    ],
    story:
      "I've been thinking and this recipe stood out to me. I made it a few times this year and I honestly love it. The sweet chilli sauce in the recipe is also quite nice (I make it with fresh chillies tho) 🔥🌶️",
  },
  12: {
    name: 'Dalmatian fritters (or just "Fritule")',
    image: fritule,
    ingredients: [
      "0.5kg of soft flour",
      "2 eggs",
      "1 tablespoon of melted oil",
      "1 tablespoon of rum",
      "1 bag of dry yeast",
      "2 spoons of sugar",
      "1 bag of vanilla sugar",
      "250 to 300 ml of lukewarm milk",
      "oil for frying",
    ],
    instructions: [
      "Put dry yeast, a little sugar (0.5 tablespoons) and a little flour (50 grams) in a lukewarm milk (50 ml), mix everything and let it rise.",
      "Put 2 eggs in a large bowl, add oil, rum, the rest of the sugar and vanilla sugar. Add the risen yeast and finally mix in the flour.",
      "Knead a medium-hard dough with lukewarm milk. Let the dough rise, it should double in volume.",
      "When the dough rises, use 2 teaspoons to make small fritters (roughly size of a ping-pong ball). Spoons are dipped in hot oil so that the mixture slides off them more easily.",
      "Bake until golden, remove on a paper towel to absorb excess fat and sprinkle with powdered sugar.",
    ],
  },
  13: {
    name: "Japanese pancakes",
    image: pancakes,
    ingredients: [
      "200g flour",
      "2 tsp baking powder",
      "¼ tsp baking soda",
      "2 eggs",
      "45g sugar",
      "½ tsp vanilla sugar",
      "125ml buttermilk",
      "¼ tsp",
      "salt",
      "2 tbsp rapeseed oil",
      "butter for frying and greasing",
      "maple syrup for serving",
      "berries for serving",
    ],
    instructions: [
      "Add flour, baking powder, and baking soda to a bowl. Whisk to combine and set aside. Add eggs, sugar, vanilla sugar, salt, and buttermilk to a separate bowl. Using a hand mixer, beat until combined. Whisk in flour mixture and oil until a smooth batter forms.",
      "Melt butter in a large frying pan over medium heat. Grease cake rings with some butter and place in the frying pan. Fill rings two-thirds of the way up with the pancake batter. Fry pancake in the dessert ring for approx. 4 min. then flip with the ring and fry on the other side for approx. 2 min. more.",
      "Carefully remove the pancake from the dessert ring and serve with maple syrup and fresh berries. Enjoy!",
    ],
  },
  14: {
    name: "Spicy stuffed mushrooms",
    image: stuffed_mushrooms,
    ingredients: [
      "2 quarts (about 25-30) baby Bella mushrooms, cleaned and stemmed",
      "1 brick of cream cheese",
      "2 cloves of garlic, minced",
      "1/2 cup (120 ml) of shredded cheese",
      "1 jalapeno, de seeded and finely chopped",
      "5 strips bacon, cooked and crumbled.",
    ],
    instructions: [
      "Preheat an oven to 400f (204.444c)",
      "In a mixing bowl, combine all ingredients except the mushrooms and mix untill everything's evenly distributed.",
      "Use this mixture to fill the mushrooms.",
      "Place the mushrooms on a baking sheet and throw those puppies in the oven for about 30 minutes.",
    ],
    story:
      "One of my favorite end of the year recipes for a big family crowd isn't exactly holiday themed, but it's always a big hit!",
  },
  15: {
    name: "7up salad",
    image: sevenup,
    ingredients: [
      "1 (12 ounce) can 7-Up",
      "1 (8 ounce) package cream cheese",
      "2 (3 ounce) packages lime Jell-O gelatin",
      "1 (20 ounce) can crushed pineapple",
      "1 (12 ounce) carton Cool Whip",
      "2 cups miniature marshmallows",
      "1 cup of chopped pecans",
    ],
    instructions: [
      "In a saucepan combine 7-up, lime jello, crushed pineapple, juice and all, cream cheese cut up into small size pieces.",
      "Heat on medium heat and stir until warm and cheese is melting into cottage cheese size pieces.",
      "Stir in Cool Whip, marshmallows, and chopped pecans. Stir until marshmallows and Cool Whip are melted. Pour into 9x9 glass bowl.",
      "Refrigerate 24 hours.",
    ],
    story:
      "You can follow that food.com one, it is EXACT to what I remember growing up and it's what I use every year. My family loves it! But mine never looks as pretty as others - lol. Same goes for my lasagna 😕",
  },
  16: {
    name: "Sugar free cinnamon rolls",
    image: cinnamon_rolls,
    ingredients: [
      "220 g / under 2 cups white bread flour OR wholewheat flour",
      "250 g / 2 cups all-purpose flour",
      "10 g / 2 tsp salt",
      "7 g / 2¼ fast-action / instant dried yeast",
      "45 ml / 3 tbsp aquafaba",
      "60 ml / 4 tbsp maple syrup",
      "255 ml / 1 cup + 1 tbsp almond milk",
      "15 ml / 1 tbsp olive oil + a little for pan glazing",
      "240 g / 1½ cups Deglet Noor dates, pitted",
      "1 tsp cinnamon",
    ],
    instructions: [
      "Mix the flour, salt and yeast in a large mixing bowl.",
      "Add in the lukewarm aquafaba (if using) and maple syrup diluted in lukewarm almond milk and stir everything together with a large wooden spoon. Then add the olive oil and integrate.",
      "When the mixture has mostly stuck together turn the mixture out on to a work surface or bread board.",
      "Knead the mixture by holding one end of the dough in one hand and stretching it out with the other hand. You then reform the dough, turn it 90 degrees and start again. Repeat this for 10 minutes.",
      "When the dough is shiny and smooth, put it in a large mixing bowl, coat in a thin layer of olive oil and cover the bowl with a tea towel. Leave this in a warm place (but not too warm - ie not next to an open fire!) for between one and two hours (until it has doubled in size). While the dough is proving, make the filling (see below).",
      "Empty the dough out on to a work surface and push the air out with your fingertips.",
      "Roll the dough flat until it is 40-45 cm wide and 18-20 cm high.",
      "Place pitted dates in a small bowl and cover with boiling water (you can skip this step if your dates are already very moist and sticky but most dried dates aren't sticky enough). Let them soak for 10-15 mins.",
      "After soaking, transfer the dates (not the soaking water) into a food processor. Add a few pinches of salt and ½ tsp cinnamon and process until very smooth. You may need to add a few drops of warm water to achieve a smooth and spreadable consistency.",
      "Spread date paste on the surface of the rolled out dough with the back of a spoon.",
      "Starting from the bottom, roll the dough tightly so that at the end you have one horizontal “dough snake”",
      "Cut the dough into 12 segments, which comes out around 3-4 cm per segment.",
      "Place the segments horizontally (like a tree trunk) on an oiled baking tray, leaving 1-2 cm between each bun. If you can fill the baking tray, this is ideal.",
      "Leave the buns (covered with a kitchen towel) to prove again for another hour. During this time preheat the oven to 180° C / 350° F.",
      "Place the buns in the oven to bake for 18-20 minutes.",
      "While the buns are baking, create the glaze by combining maple syrup with ½ tsp ground cinnamon.Take the buns out of the oven when they are lovely and golden, and glaze them while they are still hot. Try and use all of the glaze, and let it seep into the buns and the gaps between them.",
    ],
  },
  17: {
    name: "Gebrannte Mandeln",
    image: mandeln,
    ingredients: [
      "200g Sugar",
      "200g Almonds",
      "100 ml Water",
      "1 Package Vanilla Sugar (approx. 7g)",
      "1/2 tbsp Cinnamon",
    ],
    instructions: [
      "Add Sugar, Vanilla Sugar and Cinnemon to a non-stick pan and mix well",
      "Add Water, set to high heat and wait for it to cook without stirring",
      "Add Almonds and continously stir whil cooking on high heat",
      "Continue stirring until Water has evaporated and Alrmonds are covered in Sugar “paste”",
      "Reduce heat and continue stirring until the Sugar forms a crust on the Almonds",
      "Evenly spread crusted Almonds on a backing paper sheet and let cool",
      "Enjoy crusty sweet treats 😁",
    ],
  },
  18: {
    name: "Banana tiramisu",
    image: banana_tiramisu,
    ingredients: [
      "2 egg yolks",
      "4 tablespoons sugar",
      "100 g mascarpone",
      "100 g curd",
      "¼ liter cream",
      "1 pck. vanilla sugar",
      "2-3 banana(s)",
      "1 cup milk",
      "24 ladyfingers",
      "coffee powder",
    ],
    instructions: [
      "In a large mixing bowl beat heavy cream until soft peaks form",
      "Add in the mascarpone/curd, powdered sugar and vanilla extract and beat on medium speed until stiff, set aside",
      "Line the ladyfingers in a single layer",
      "Spread half of the mascarpone/curd mixture over the ladyfingers and layer with the sliced bananas",
      "Repeat the step 3 & 4",
      "Refrigerate for at least 4 hours or overnight",
      "Garnish with sliced bananas and coffee powder",
      "Serve",
    ],
    story:
      "It's made like 'real' tiramisu, only with curd and bananas instead of solely mascarpone. It's my fav dessert 🙈",
  },
  19: {
    name: "Fischsuppe von Szeged",
    image: fischsuppe,
    ingredients: [
      "1 kg of carp",
      "0.5 kg catfish",
      "0.25 kg sterlet",
      "0.25 kg of pike",
      "0.30 kg onions",
      "0.25 kg of Hungarian paprika",
      "0.10 kg sweet peppers",
      "0.05 kg of tomato",
      "2-3 pieces of hot peppers",
      "salt to taste",
    ],
    instructions: [
      "Clean the fish, and rinse thoroughly. Boil the heads and tails of carp, catfish, and sterlet, as well as the chopped pike meat with the onions in cold water to create a stock.",
      "Cut the fish trunks into 2 cm thick slices, salt, sprinkle with paprika and set aside. Salt the stock and let it simmer slowly for about an hour. Then mix in the paprika and cook until the fish meat separates from the bones.",
      "Then strain the stock through a sieve and pour it onto the fish slices, taste, and continue cooking slowly. After simmering for about 15 minutes, add the diced peppers, the chopped tomato, and the hot peppers. If you like it spicy, you can also cut up the pods.",
      "Cook for another 10 minutes until done.",
    ],
    story:
      "Traditionally it's cooked in a cauldron over a fire. It is also a part of our Christmas menu every year.",
  },
  20: {
    name: "Bara Brith Cake",
    image: bara_brith_cake,
    ingredients: [
      "450 grams)mixed dried fruit",
      "300 milliliters cold tea",
      "1 tablespoon butter",
      "2 tablespoons marmalade",
      "1 large egg, beaten",
      "2 tablespoons brown sugar",
      "1 teaspoon mixed spice",
      "450 grams self-rising flour",
      "Honey, to glaze",
    ],
    instructions: [
      "Gather the ingredients.",
      "In a large bowl, pour the cold tea over the fruit and leave to soak for a minimum of 6 hours, or overnight if possible.",
      "The next day, preheat the oven to 325 F/170 C/Gas 3 and grease a 900-gram loaf tin with butter and put to one side. To the soaked fruit, add the marmalade, egg, brown sugar, spice, and flour and mix well.",
      "Spoon the batter into the prepared loaf tin and bake for 1 1/4 hours, or until the center is cooked through. Check from time to time to see that the top doesn't brown too much, and cover with a sheet of foil if necessary.",
      "Remove from the oven and leave the Bara Brith to stand for 5 minutes, then turn out of the tin and place on a cooling rack. Brush the honey over the top to glaze and leave to cool completely on a rack.",
      "Slice and enjoy. Bara Brith is even tastier when served with a little butter spread over a thick, fruity slice, or for added sweetness, a little jam or honey.",
    ],
  },
  21: {
    name: "Vincisgrassi",
    image: vincisgrassi,
    ingredients: [
      "500g Pasta sheets",
      "2l Tomato purée",
      "1kg Minced meat",
      "100g Chicken giblets / liver",
      "400g Mozzarella",
      "100g Grated Parmesan cheese",
      "2 Celery stalks",
      "2 Carrots",
      "1 Onion",
      "2 Cloves",
      "500ml Water",
      "100ml White wine",
      "200ml Extra virgin olive oil",
      "Salt",
    ],
    instructions: [
      "Let's start by preparing the sauce: pour the oil into a pot with high sides, then finely chop the celery stalks, the carrots and the onion and put them in the pot. Add also the cloves, the minced meat and the giblets cut into small pieces. Let's brown, adding the white wine gradually.",
      "When the wine has evaporated, add the tomato puree and water. Add salt and let it boil over low heat for at least 2 hours, stirring occasionally.",
      "Let's move on to the pasta sheets: boil them, drain them and, immediately after draining, rinse them under cold water. Then put the sheets to dry on a tea towel.",
      "Now let's proceed with the composition of the Vincisgrassi, which must have 7 layers of pasta. In a baking dish with high sides, alternate the ragù with the pasta sheets, the mozzarella (cut in pieces) and the parmesan 7 times. Finish with the last layer of ragù sprinkled with abundant parmesan.",
      "Bake in a preheated convection oven at 180 °C for 40-45 minutes, or in any case until a delicious and crunchy crust has formed on the surface!",
    ],
    story:
      "According to tradition, the Italian name of the dish derives from simplification and Italianization of the name of the Austrian general Alfred von Windisch-Grätz who defeated the Napoleonic troops in the siege of Ancona in 1799. A lady from Ancona prepared this dish in his honor and the general appreciated the dish so much that the population decided to name it for him. It is not clear, however, if the dish was invented in honor of the general or if it was a dish already known at the time that was dedicated to him. In “Il cuoco maceratese” (The cook from Macerata), a book of 1779, Antonio Nebbia describes the preparation of a particular lasagna called 'princisgrass' with a richer recipe. So, probably, the dish was already present in the culinary tradition of the Marche, and in particular of Macerata.",
  },
  22: {
    name: "Pozole",
    image: pozole,
    ingredients: [
      "2 pounds of pork cut into medium sized cubes",
      "6 guajillo chiles",
      "1 Can of hominy",
      "6 cloves of garlic",
      "1 tomato",
      "Salt and Pepper to taste",
      "1/2 onion",
      "1 teaspoon of oregano",
      "1 teaspoon of cumin",
      "2 bay leaves",
      "2 cups Chopped radish",
      "lime",
      "4 cups chopped lettuce",
      "40 (homemade) tortilla chips",
      "chopped cilantro",
      "1 chopped onion",
    ],
    instructions: [
      "Cook the pork meat in sufficient water (ensuring that the pork is completely covered with an inch or two to spare) with 1 clove of garlic, 1/4 piece of an onion (not diced), the bay leaves, salt and pepper. Set aside 1/2 cup of the broth from cooking the pork.",
      "Once the meat is cooked through, remove the bay leave, onion, and garlic clove, and add the hominy and bring to a boil for 15 minutes.",
      "Prepare the guajillo chilies by removing the seeds and stem and boiling in water for 5-7 minutes or until soft. Set aside for the next step.",
      "Blend the remaining 5 cloves of garlic, the guajillo chilies, the tomato, another 1/4 piece of the onion, the cumin, the salt, the pepper, the 1/2 cup of broth that was set aside in step 1 above, and 1/2 cup of hominy (to thicken the sauce) in a blender until completely blended.",
      "Once the above mixture is blended, strain the mixture and add the strained liquid to the boiling pot with the pork and water. Season with oregano and add salt to taste.",
      "Let boil 15 minutes longer.",
      "Serve hot, topped with chopped lettuce, onions, radishes, and a few drops of lime and finally the (homemade) tortilla chips",
    ],
  },
  23: {
    name: "Melomakarona - Greek Christmas honey cookies",
    image: melomakarona,
    ingredients: [
      "500 g water",
      "800 g granulated sugar",
      "150 g honey",
      "3 stick(s) cinnamon",
      "3 cloves + 1/2 teaspoon(s) cloves",
      "1 orange, cut in half",
      "400 g orange juice",
      "400 g seed oil",
      "180 g olive oil",
      "50 g icing sugar",
      "2-3 teaspoon(s) cinnamon",
      "1/4 teaspoon(s) nutmeg",
      "1 teaspoon(s) baking soda",
      "orange zest of 2 oranges",
      "1 kilo all-purpose flour",
      "200 g semolina, fine",
      "walnuts",
    ],
    instructions: [
      "For the syrup, add 500g water, 800g suger, 3 sticks of cinnamon, 3 cloves and the 2 orange halfs and boil all of the ingredients until the sugar melts. Remove from heat. Add the honey and mix till combined.",
      "Let the syrup cool for 3-4 hours. It must be cold by the time the cookies come out of the oven. You can prepare the syrup the day before.",
      "Preheat the oven to 190* C (370*F) set to fan.",
      "To make the cookies, you need to prepare 2 separate mixtures.",
      "For the first mixture, add the orange juice, seed oil, olive oil, icing sugar, the rest of the cloves, cinnamon, nutmeg, baking soda and orange zest and mix well.",
      "In a separate bowl, add the all-purpose flour and the semolina.",
      "Combine the first and second mixture.",
      "Mix by hand, very gently and for a very short time (10 seconds at the most). If you mix longer the mixture will split or curdle.",
      "Mold cookie dough into oval shapes, 3-4 cm in length, 30 g each. Try to keep them as similar as possible.",
      "Bake for about 20-25 minutes, until they are crunchy and golden brown.",
      "As soon as you remove them from the oven, soak the hot cookies in the syrup for 10 seconds.",
      "Allow them to drain on a wire rack.",
      "Drizzle with honey and chopped walnuts.",
      "Enjoy ❤️",
    ],
  },
};

export default data;
