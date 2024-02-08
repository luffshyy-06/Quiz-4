import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ListActresses = () => {

  const navigate = useNavigate()

  const [actresses, setActresses] = useState([])

  const fetchData = async () => {

    const res = await axios.get('https://freetestapi.com/api/v1/actresses')
    setActresses(res.data)
    
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className='d-flex flex-wrap justify-content-center gap-4 my-4'>
      {actresses.map((actress, index) => (
        <div key={index} onClick={() => navigate('/actresses/' + actress.id)} role='button'>
          <div className="card h-100" style={{ width: '18rem' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src={actress.image} className="card-img-top" alt="..." style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h2 className="card-title" style={{ fontSize: '1.25rem' }}><i className="bi bi-1-circle-fill"></i>{actress.name}</h2>
                <p className="card-text"><small className="text-muted">{actress.biography}</small></p>
              </div>
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
    
export default ListActresses
