import useBooksLoad from "../Hooks/useBooksLoad";
import SingleBook from "./SingleBook";

const AllBook = () => {
  const { books } = useBooksLoad();

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-8 lg:mt-14">Books</h2>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-8 mt-6">
        {books.map((book) => (
          <SingleBook book={book} key={book.id}></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default AllBook;
