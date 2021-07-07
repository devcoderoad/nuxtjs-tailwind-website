function CardRounded({ props }) {
  return (
    <div className="card-grid">
      {props &&
        props.length &&
        props.map((prop, i) => {
          return (
            <a href={prop.url} className="card-rounded" key={i}>
              <h3
                className="text-4xl"
                dangerouslySetInnerHTML={{ __html: prop.title }}
              ></h3>
              <p dangerouslySetInnerHTML={{ __html: prop.description }}></p>
            </a>
          );
        })}
    </div>
  );
}

export default CardRounded;
