import { useEffect, useState } from 'react';
import Header from '../components/Header';
import {
    Col, Row, Card, CardTitle,
    CardText, Container, CardBody, CardSubtitle, Button
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { getArticles } from '../interface'

const ListNews = () => {
    const history = useHistory();
    const [data, setData] = useState<getArticles[]>([])

    const dataNews = async () => {
        try {

            const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2021-08-15&to=2021-08-15&sortBy=popularity&apiKey=1442055d014045c793cd1a71e592e36a')
            const json = await response.json();
            console.log(json);

            setData(json.articles)

        } catch (error) {
            console.log(error);
        }
    }

    const onClickDetail = (newsDetail: getArticles, index: number) => {
        history.push(`article/${index}`, newsDetail)
    }

    useEffect(() => {
        dataNews()
    }, [])

    const converDate = (date: string): string => {
        const convert = new Date(date).toLocaleDateString();
        return convert;
    }

    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <h2 className="d-flex justify-content-center mt-3">List News</h2>
                    {data.map((article, i) => (
                        <Col sm="3" className="mt-3" key={i}>
                            <Card>
                                <img width="100%" src={article.urlToImage} alt="Card image" />
                                <CardBody>
                                    <CardTitle tag="h5">{article.title}</CardTitle>
                                    <CardText>{converDate(article.publishedAt)}</CardText>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{article.author}</CardSubtitle>
                                    <Button onClick={() => onClickDetail(article, i)}>More Detail</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ListNews
