import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    price: 10,
    title: "My Favorite Book",
    desc: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 6,
    title: "My Second Book",
    desc: "The second book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((data) => (
          <ProductItem
            key={data.id}
            id={data.id}
            title={data.title}
            price={data.price}
            description={data.desc}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
