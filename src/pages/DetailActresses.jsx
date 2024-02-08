import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const DetailActress = () => {
  const { id } = useParams();
  const [actress, setActress] = useState({});

  const fetchData = async () => {

    const res = await axios.get('https://freetestapi.com/api/v1/actresses/' + id);
    setActress(res.data);

  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 my-4">
      <div className="card" style= {{ width: '18rem', marginTop: 'auto', marginBottom: 'auto' }}>
        {actress.image && (
          <img src={actress.image} className="card-img-top" alt="..." />
        )}
        <p className="card-text" style={{ fontSize: '1rem', textAlign: 'center', color: '#add8e6' }}><small className="text-muted">Data Actress {id}</small></p>
      </div>
      <div className="card" style= {{ width: '18rem', marginTop: 'auto', marginBottom: 'auto', backgroundColor: '#add8e6' }}>
        <div className="card-body">
          {actress && Object.keys(actress).length > 0 && (
            <>
              <h1 className="card-title" style={{ fontSize: '1.25rem' }}>{actress.name}</h1>
              <p className="card-text">Birth Year : {actress.birth_year}</p>
              {actress.death_year && <p className="card-text" style={{ color: 'maroon' }}>Death Year : {actress.death_year}</p>}
              <p className="card-text">Nationality : {actress.nationality}</p>
              {Array.isArray(actress.most_famous_movies) && (
                <div className="card-text">
                  <p>Most Famous Movies</p>
                  <ul>
                    {actress.most_famous_movies.map((movie, index) => (
                      <li key={index}>{movie}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <p>
                  {actress?.awards !== "None" ? (
                      actress?.awards && actress.awards.split(",").length > 1 ? "Awards" : "Award"
                    ) : ( 
                      " Award : -"
                  )}
                  {actress?.awards !== "None" ? (
                    <ul>
                      {actress?.awards.split(',').map((award, index) => (
                        <li key={index}>{award.trim()}</li>
                      ))}
                    </ul>
                  ) : null}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailActress
