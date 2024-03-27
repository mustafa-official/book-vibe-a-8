import bone from "../assets/bone.jpg";
import bseven from "../assets/bseven.jpg";
import bsix from "../assets/bsix.jpg";
import bthree from "../assets/bthree.jpg";
import btwo from "../assets/btwo.jpg";
import bfive from "../assets/bfive.jpg";
import bfour from "../assets/bfour.jpg";
const Buffet = () => {
  return (
    <div>
      <div className="my-2 lg:my-5 container mx-auto">
        <fieldset className="w-full px-6 lg:px-10 flex justify-end space-y-1 text-gray-100">
          <label className="hidden">Search</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 text-gray-100"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search Book..."
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900 focus:border-rose-400"
            />
          </div>
        </fieldset>
      </div>

      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-7xl px-6 py-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={bone}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                The Night Circus by Erin Morgenstern
              </h3>
              <span className="text-xs dark:text-gray-600">
                February 19, 2021
              </span>
              <p>
                At Bibliophiles Haven, we pride ourselves on curating a vast
                collection of books spanning various genres, eras, and cultures.
                From timeless classics to contemporary bestsellers Welcome to
                Book Vite Haven, your ultimate destination for all things
                literary! Whether you are an avid reader, a casual browser, or
                someone looking to embark on a literary journey.
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={btwo}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Educated: A Memoir by Tara Westover
                </h3>
                <span className="text-xs dark:text-gray-600">
                  January 21, 2021
                </span>
                <p>
                  Welcome to Bibliophiles Haven, your ultimate destination for
                  all things literary! Whether you are an avid reader, a casual
                  browser, or someone looking to embark on a literary journey,
                  you have come to the right place.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={bthree}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  The Great Gatsby by F. Scott Fitzgerald
                </h3>
                <span className="text-xs dark:text-gray-600">
                  January 22, 2021
                </span>
                <p>
                  Our website offers a user-friendly interface designed to make
                  your browsing experience seamless and enjoyable. You can
                  easily search for specific titles, authors, or genres, or
                  simply peruse our carefully crafted recommendations and
                  featured selections. With detailed book descriptions,
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={bfour}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  The Catcher in the Rye by J.D. Salinger
                </h3>
                <span className="text-xs dark:text-gray-600">
                  January 23, 2021
                </span>
                <p>
                  At Bibliophiles Haven, we pride ourselves on curating a vast
                  collection of books spanning various genres, eras, and
                  cultures. From timeless classics to contemporary bestsellers
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={bfive}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  The Hunger Games by Suzanne Collins
                </h3>
                <span className="text-xs dark:text-gray-600">
                  January 24, 2021
                </span>
                <p>
                  Our website offers a user-friendly interface designed to make
                  your browsing experience seamless and enjoyable. You can
                  easily search for specific titles, authors, or genres, or
                  simply peruse our carefully crafted recommendations and
                  featured selections. With detailed book descriptions,
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={bsix}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  The Girl on the Train by Paula Hawkins
                </h3>
                <span className="text-xs dark:text-gray-600">
                  January 25, 2021
                </span>
                <p>
                  Our website offers a user-friendly interface designed to make
                  your browsing experience seamless and enjoyable. You can
                  easily search for specific titles, authors, or genres, or
                  simply peruse our carefully crafted recommendations and
                  featured selections. With detailed book descriptions,
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={bseven}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Pride and Prejudice by Jane Austen
                </h3>
                <span className="text-xs dark:text-gray-600">
                  January 26, 2021
                </span>
                <p>
                  Welcome to Bibliophiles Haven, your ultimate destination for
                  all things literary! Whether you are an avid reader, a casual
                  browser, or someone looking to embark on a literary journey,
                  you have come to the right place.
                </p>
              </div>
            </a>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buffet;
