import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Star from '../assets/image/star-svgrepo-com.svg'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Job = ({ data }) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.jobsStates)

  return(
    <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={1}>
      <img src={Star} alt='star' onClick={() => {
        if (!state.favourites.includes(data)) {
          dispatch({
            type: 'ADD_TO_FAVOURITES',
            payload: data
          })
          alert('Aggiunto ai preferiti')
        } else {
          alert('È già stato aggiunto nei preferiti')
        }
      }}/>
    </Col>
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={8}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
  )

  }

export default Job