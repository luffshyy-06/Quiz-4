import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const DetailActors = () => {
  const { id } = useParams();
  const [actor, setActor] = useState({});

  const fetchData = async () => {

    const res = await axios.get('https://freetestapi.com/api/v1/actors/' + id);
    setActor(res.data);
  
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className='d-flex flex-wrap justify-content-center gap-4 my-4'>
      <div className="card" style= {{ width: '18rem', marginTop: 'auto', marginBottom: 'auto' }}>
        {actor.image && (
          <img src={actor.image} className="card-img-top" alt="..." />
        )}
        <p className="card-text" style={{ fontSize: '1rem', textAlign: 'center', color: '#add8e6' }}><small className="text-muted">Data Actor {id}</small></p>
      </div>
      <div className="card" style= {{ width: '18rem', marginTop: 'auto', marginBottom: 'auto', backgroundColor: '#add8e6' }}>
        <div className="card-body">
          {actor && Object.keys(actor).length > 0 && (
            <>
              <h1 className="card-title" style={{ fontSize: '1.25rem' }}>{actor.name}</h1>
              <p className="card-text">Birth Year : {actor.birth_year}</p>
              {actor.death_year && <p className="card-text" style={{ color: 'maroon' }}>Death Year : {actor.death_year}</p>}
              <p className="card-text">Nationality : {actor.nationality}</p>
              {Array.isArray(actor.known_for) && (
                <div className="card-text">
                  <p>Known For</p>
                  <ul>
                    {actor.known_for.map((known, index) => (
                      <li key={index}>{known}</li>
                    ))}
                  </ul>
                </div>
              )}
              {Array.isArray(actor.awards) && (
                <div>
                  <p>
                  {actor?.awards.includes("None") ? "Award : -" : (
                    actor?.awards && actor.awards.length > 1 ? "Awards" : "Award"
                  )}
                  {actor?.awards.includes("None") ? null : (
                    <ul>
                      {actor.awards.map((award, index) => (
                        <li key={index}>{award}</li>
                      ))}
                    </ul>
                  )}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailActors;
