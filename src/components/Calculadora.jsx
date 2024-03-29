import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Calculadora = () =>{


    return(
        <Form>
        <Form.Group className="mb-3" controlId="formGroupSalario">
            <Form.Label>Valor Sarlário/Hora</Form.Label>
            <Form.Control type="email" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupHoras">
            <Form.Label>Horas Trabalhadas</Form.Label>
            <Form.Control type="password" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupQntFilhos">
            <Form.Label>Quantidade de Filhos menores de 14 anos</Form.Label>
            <Form.Control type="password" placeholder="" />
        </Form.Group>

        <Button variant="success" type="submit">
            Submit
        </Button>

        </Form>
    )
    
} 

export default Calculadora;
