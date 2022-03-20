export function Card1({ item }) {
  const { id, title, description, image, category } = item;
  return (
    <div className="Card1">
      <img src={image} alt={title} />
      <div className="Content">
        <div className="">
          {description && <p>{description}</p>}
          {title && <h2>{title}</h2>}
        </div>
        <div className="footer">
          <div className=""></div>
          {category && <div className="">{category}</div>}
        </div>
      </div>
    </div>
  );
}

export function Card2({ item }) {
  const { id, title, description, image, category } = item;
  return (
    <div className="Card2">
      <img src={image} alt={title} />
      <div className="Content">
        <div className="">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
