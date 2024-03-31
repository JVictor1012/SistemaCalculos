import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import calculadora from "../assets/calculadora.jpg"
import analise from "../assets/analise.jpg"
import fibonacci from "../assets/fibonacci.jpg"

import { Link } from 'react-router-dom';


export const Cards = () =>{
    return(
        <div className='container'>
            <div className='row justify-content-center'>

                <div className='col-sm-6 col-md-4 '>
                    <div className='card-tarefa-1'>
                        <Card style={{ width: '18rem', margin: '15px'}}>
                            <Card.Img variant="top" src={calculadora} />
                            <Card.Body>
                                <Card.Title>Calculadora de Salário</Card.Title>
                                <Card.Text>
                                    Calcula o salário de um empregado horista com base nas horas trabalhadas
                                </Card.Text>
                                <Link to='/calculadora'>
                                <Button variant="primary">Acessar Função</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className='col-sm-6 col-md-4 '>
                    <div className='card-tarefa-2'>
                        <Card style={{ width: '18rem', margin: '15px' }}>
                            <Card.Img variant="top" src={analise} />
                            <Card.Body>
                                <Card.Title>Análise Numérica</Card.Title>
                                <Card.Text>
                                    Analisa uma sequência de números, exibindo o menor e o maior valor.
                                </Card.Text>
                                <Link to='/analise'>
                                <Button variant="primary">Acessar Função</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className='col-sm-6 col-md-4 '>
                    <div className='card-tarefa-3'>
                        <Card style={{ width: '18rem', margin: '15px'}}>
                            <Card.Img variant="top" src={fibonacci} />
                            <Card.Body>
                                <Card.Title>Fibonacci</Card.Title>
                                <Card.Text>
                                    Gera os primeiros N números da sequência de Fibonacci e indica se um valor N está na sequência.
                                </Card.Text>
                                <Link to='/fibonacci'>
                                <Button variant="primary">Acessar Função</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Cards;