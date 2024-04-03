import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col, Card } from 'react-bootstrap'

export const Fibonacci = () => {
    const [valorN, setValorN] = useState('')
    const [resultado, setResultado] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const n = parseInt(valorN)

        const gerarSequencia = (n) => {
            let sequencia = [1, 1, 2]
        
            for (let i = 3; i < n; i++) {
                if (sequencia[i - 1] % 2 === 0) {  
                    sequencia.push(sequencia[i - 1] + sequencia[i - 2] + sequencia[i - 3])
                
                } else {
                    sequencia.push(sequencia[i - 1] + sequencia[i - 2])
                }
            }
            return sequencia;
        }
        

        const verificarSeq = (n, sequenciaFibonacci) => {
            if (sequenciaFibonacci.includes(n)){
                return `O número ${n} faz parte da sequência de Fibonacci!`
            }else{
                return `O número ${n} não faz parte da sequência de Fibonacci!`
            }
        }

        if (!isNaN(n) && n > 0) {
            const sequenciaFibonacci = gerarSequencia(n)
            setResultado(verificarSeq(n, gerarSequencia(n)) + '\n\nOs primeiros ' + n + ' números da sequência de Fibonacci são:\n' + sequenciaFibonacci.join(', '));

        } else {
            setResultado('Por favor, insira um valor válido para N.')
        }
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h1>Sequencia de Fibonacci</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupValorN">
                            <Form.Label>Valor N</Form.Label>
                            <Form.Control type="number" value={valorN} onChange={(e) => setValorN(e.target.value)} />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Gerar Sequência
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card style={{ margin: '15px' }}>
                        <Card.Body>{resultado}</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Fibonacci;
