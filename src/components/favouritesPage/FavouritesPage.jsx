import './FavouritesPage.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Job from '../Job'
import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

const FavouritesPage = () => {
    const favouritesList = useSelector((state) => state.favour.favourites)

    useEffect(() => {
        console.log(favouritesList)
      },[favouritesList])

    return(
        <>
        <Container>
            <Row>
                <Col xs={10} className='my-3 mx-auto'>
                    <h1>Favourites page | <Link to='/'>Back to search</Link></h1>
                </Col>
            </Row>
            {favouritesList.length > 0 ? (
                favouritesList.map((job) => {
                    return <Job key={job._id} data={job} />
                })
            ) : (
                <Row>
                    <Col xs={10} className='my-3 mx-auto'>
                        <Spinner animation="border"/>
                    </Col>
                </Row>
            )}
        </Container>
        </>

    )
}

export default FavouritesPage