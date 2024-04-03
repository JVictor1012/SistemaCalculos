import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { useState } from 'react';

export const Analise = () =>{

    const [qntNumeros, setQntNumeros] = useState('')
    const [sequencia, setSequencia] = useState('')
    const [resultado, setResultado] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const numeros = sequencia.split(' ').map(num => parseFloat(num));

        if (numeros.length !== parseInt(qntNumeros)) {
            setResultado(`ERRO! Sua sequência deve conter exatamente ${qntNumeros} numeros.`);
            return;
        }

        const menor = Math.min(...numeros);
        const maior = Math.max(...numeros);
        
        const segundo_maior = (numeros.filter((numeros) => (numeros < maior)))
        const segundo_maiorFinal = Math.max(...segundo_maior)

        setResultado(`Menor número: ${menor}, Maior numero: ${maior}, segundo maior número: ${segundo_maiorFinal}`);
    }

    return(
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h1>Análise Numérica</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupSalario">
                            <Form.Label>Quantidade de Números</Form.Label>
                            <Form.Control type="text" value={qntNumeros} onChange={(e) => setQntNumeros(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupHoras">
                            <Form.Label>Sequência de Números</Form.Label>
                            <Form.Control type="text" value={sequencia} onChange={(e) => setSequencia(e.target.value)} />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Calcular
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card style={{ margin: '15px'}}>
                        <Card.Body>{resultado}</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Analise;