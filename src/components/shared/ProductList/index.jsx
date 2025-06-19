import books from "../../../Utils/books";

export default function ProductList() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">
                Views
              </a>
              <a href="#" className="btn btn-secondary my-2">
                Other Book
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {books.map((book) => (
              <div key={book.id} className="col">
                <div className="card h-100 shadow-sm d-flex flex-column">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{book.title}</h5>
                    <p
                      className="card-text text-truncate"
                      style={{ maxHeight: "80px", overflow: "hidden" }}
                    >
                      {book.description}
                    </p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <small className="text-muted">{book.author}</small>
                      <small className="text-body-secondary">
                        {book.year}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
