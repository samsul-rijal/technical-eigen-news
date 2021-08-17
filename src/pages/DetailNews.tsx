import React from 'react'
import { useLocation } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap';
import Header from '../components/Header';
import { getArticles } from '../interface'

const DetailNews = () => {
    const { state: article } = useLocation<getArticles>();

    const converDate = (date: string): string => {
        const convert = new Date(date).toLocaleDateString();
        return convert;
    }

    return (
        <div>
            <Header />
            <Container style={{ width: '60%' }}>
                <Row>
                    <Col className="mt-3">
                        <img width="100%" src={article.urlToImage} className="img-fluid" alt="cover" />
                        <h3>{article.title}</h3>
                        <p>{converDate(article.publishedAt)}</p>
                        <h6>{article.author}</h6>
                        <p>{article.content}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailNews
