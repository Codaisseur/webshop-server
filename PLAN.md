## Webshop plan

### backend:

Routes for:

- GET /products - get me all the products
- GET /categories (probably including the products)

## frontend:

- set up create-react-app
- npm install \*
- Router and routes
- Create component and attach to the router.
- Set up the store
- Set up homepage and thunk action to GET products.
- Render products with an `add to cart` button
- Shopping cart logic in redux - add and remove products. (Goal 1). //[{}, {}, {}] => state.products || state.cart

Cart, what shape do we set it up?

=> [{p}, {p}, {p}] => array of products.
=> [1, 3, 5] => array of productIds || [1,1,1,3,5];
\*\* => [{ productId, quantity}, {pId, quantity}]; => The one I like the most.

Add a product:
=> Be already in the cart. => increase quantity + 1
=> not in the cart. => Create a new object with quantity === 1;

Removing product from cart:
=> If more than 1 => quantity - 1
=> If there is only 1 => remove object.

After this: (more goals)

- At this point we can (or not) split the work:
  => ShoppingCart (checkout) page/
  => Login and storing user data.
