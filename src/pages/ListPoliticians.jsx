import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ListPoliticians = () => {

  const navigate = useNavigate()

  const [politicians, setPoliticians] = useState([])

  const fetchData = async () => {

      const res = await axios.get('https://freetestapi.com/api/v1/politicians')
      setPoliticians(res.data)

    }

  useEffect(() => {
      fetchData()
  }, []);

  return (
    <div className='d-flex flex-wrap justify-content-center gap-4 my-4'>
      {politicians.map((politician, index) => (
        <div key={index} onClick={() => navigate('/politicians/' + politician.id)} role='button'>
          <div className="card h-100 bg-muted" style={{ width: '18rem'}}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src={politician.image} class="card-img-top" alt="..." style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
              <h2 class="card-title" style={{ fontSize: '1.25rem' }}><i className="bi bi-1-circle-fill"></i>{politician.name}</h2>
              <p className="card-text"><small className="text-muted">{politician.biography}</small></p>
            </div>
          </div>
        </div>
      ))}
      <style>
        {`
          .card:hover {
            transform: scale(0.9);
            transition: transform 0.2s;
          }
        `}
      </style>
    </div>
  );
}
    
export default ListPoliticians
    