import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export const Calculadora = () =>{

    const [salarioHora, setSalarioHora] = useState('')
    const [horasTrabalhadas, setHorasTrabalhadas] = useState('')
    const [qntFilhos, setQntFilhos] = useState('')
    const [resultado, setResultado] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const salarioHoraNumber = parseFloat(salarioHora)
        const horasTrabalhadasNumber = parseFloat(horasTrabalhadas)
        const qntFilhosNumber = parseFloat(qntFilhos)

        const salarioBruto = salarioHoraNumber * horasTrabalhadasNumber;
        
        let salarioFamilia = 0
        if (salarioBruto <= 788) {
            salarioFamilia = qntFilhosNumber * 30.50
        }
        else if (salarioBruto <= 1100) {
            salarioFamilia = qntFilhosNumber * 18.50
        }
        else{
            salarioFamilia = qntFilhosNumber * 11.90
        }

        const salarioLiquido = salarioBruto + salarioFamilia

        setResultado(`Salario Bruto: R$ ${salarioBruto.toFixed(2)}, Salario Familia: R$ ${salarioFamilia.toFixed(2)}, Salario Líquido: R$ ${salarioLiquido.toFixed(2)}`)
    }

    return(
        <>
        <h1>Calculadora de Salário</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupSalario">
                <Form.Label>Valor Sarlário/Hora</Form.Label>
                <Form.Control type="text"  value={salarioHora} onChange={(e) => setSalarioHora(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupHoras">
                <Form.Label>Horas Trabalhadas</Form.Label>
                <Form.Control type="text"  value={horasTrabalhadas} onChange={(e) => setHorasTrabalhadas(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupQntFilhos">
                <Form.Label>Quantidade de Filhos menores de 14 anos</Form.Label>
                <Form.Control type="text"  value={qntFilhos} onChange={(e) => setQntFilhos(e.target.value)} />
            </Form.Group>

            <Button variant="success" type="submit">
                Calcular
            </Button>
        </Form>
        <div className='resultado'>{resultado}
        </div>
        </>
    )
    
} 

export default Calculadora;
