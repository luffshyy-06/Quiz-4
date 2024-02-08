import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const DetailPoliticians = () => {

  const { id } = useParams();

  const [politicians, setPoliticians] = useState({})

  const fetchData = async () => {

    const res = await axios.get('https://freetestapi.com/api/v1/politicians/' + id)
    setPoliticians(res.data)

  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className='d-flex flex-wrap justify-content-center gap-4 my-4'>
      <div className="card" style= {{ width: '18rem', marginTop: 'auto', marginBottom: 'auto' }}>
          {politicians.image && (
            <img src={politicians.image} className="card-img-top" alt="..." />
          )}
          <p className="card-text" style={{ fontSize: '1rem', textAlign: 'center', color: '#add8e6' }}><small className="text-muted">Data Politician {id}</small></p>
      </div>
      <div className="card" style= {{ width: '18rem', marginTop: 'auto', marginBottom: 'auto', backgroundColor: '#add8e6' }}>
        <div className="card-body">
          {politicians && Object.keys(politicians).length > 0 && (
            <>
              <h1 className="card-text"style={{ fontSize: '1.25rem' }}>{politicians?.name}</h1>
              <p className="card-text">DOB : {politicians?.dob}</p>
              <p className="card-text">Country : {politicians?.country}</p>
              <p className="card-text">Party : {politicians?.party}</p>
              <p className="card-text text-success">Position : {politicians?.position}</p>
              <p className="card-text" style={{ color: 'maroon' }}>Years in Office : {politicians?.years_in_office}</p>
            </>
          )}
        </div>
      </div>  
  </div>
  );
}

export default DetailPoliticians
