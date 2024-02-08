import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const DetailAuthors = () => {

  const { id } = useParams();

  const [authors, setAuthors] = useState({})

  const fetchData = async () => {
    const res = await axios.get('https://freetestapi.com/api/v1/authors/' + id)
    setAuthors(res.data)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className='d-flex flex-wrap justify-content-center gap-4 my-4'>
      <div className="card h-100" style={{ width: '18rem', marginTop: 'auto', marginBottom: 'auto' }}>
        {authors.image && (
          <img src={authors.image} className="card-img-top" alt="..." />
        )}
        <p className="card-text"style={{ fontSize: '1rem', textAlign: 'center', color: '#add8e6' }}><small className="text-muted">Data Author {id}</small></p>
      </div>
      <div className="card" style= {{ width: '18rem', marginTop: 'auto', marginBottom: 'auto', backgroundColor: '#add8e6' }}> 
          <div className="card-body">
            {authors && Object.keys(authors).length > 0 && (
              <>
                <h1 className="card-text" style={{ fontSize: '1.25rem' }}>{authors?.name}</h1>
                <p className="card-text">Birth Year : {authors?.birth_year}</p>
                {authors.death_year && <p className="card-text" style={{ color: 'maroon' }}>Death Year : {authors?.death_year}</p>}
                <p className="card-text">Nationality : {authors?.nationality}</p>
                {Array.isArray(authors.genre) && (
                  <div className="card-text">
                    <p>Genre </p>
                      <ul>
                        {authors.genre.map((Genre, index) => (
                          <li key={index}>{Genre}</li>
                        ))}
                      </ul>
                  </div>
                )}
                {Array.isArray(authors.notable_works) && (
                  <div className="card-text">
                    <p>Notable Works </p>
                    <ul>
                      {authors.notable_works.map((works, index) => (
                        <li key={index}>{works}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="card-text"> 
                  <p>Award {authors?.award === "None" ? (": -") : (
                    <ul>
                      <li>{authors?.award}</li>
                    </ul>
                  )}</p>
                </div>
              </>
            )}
          </div>
      </div>
    </div>
  );
}

export default DetailAuthors
