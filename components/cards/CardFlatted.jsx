import Image from 'next/image';

function CardFlatted({ props }) {
  return (
    <div className="card-grid">
      {props &&
        props.length &&
        props.map((prop, i) => {
          return (
            <a href={prop.url} className="card-flatted" key={i}>
              <div className="lg:flex sm:block">
                <div className="lg:w-1/12 w-100 contents">
                  <Image
                    src={prop.imageUrl}
                    alt={prop.title}
                    width="640"
                    height="640"
                    layout="intrinsic"
                  />
                </div>
                <div className="lg:w-11/12 w-100 p-3">
                  <h5
                    className="text-2xl"
                    dangerouslySetInnerHTML={{ __html: prop.title }}
                  ></h5>
                  <p
                    className="py-3"
                    dangerouslySetInnerHTML={{ __html: prop.description }}
                  ></p>
                  <span className="block text-right text-gray-400 text-sm pt-3">
                    {prop.published}
                  </span>
                </div>
              </div>
            </a>
          );
        })}
    </div>
  );
}

export default CardFlatted;
