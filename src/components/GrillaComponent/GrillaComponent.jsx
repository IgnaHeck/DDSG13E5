import './GrillaComponent.css';
import { Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";


const GrillaComponent = () => {

    return(
        <>
            <div className='grilla-component-container'>
                <Table colorScheme='facebook' variant='striped'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Calle</Th>
                            <Th>Altura</Th>
                            <Th>Localidad</Th>
                            <Th>Provincia</Th>
                            <Th>Calle</Th>
                            <Th>Altura</Th>
                            <Th>Localidad</Th>
                            <Th>Provincia</Th>
                            <Th>Conductor</Th>
                            <Th>Acciones</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Th>1</Th>
                            <Th>a</Th>
                            <Th>b</Th>
                            <Th>c</Th>
                            <Th>d</Th>
                            <Th>e</Th>
                            <Th>f</Th>
                            <Th>g</Th>
                            <Th>h</Th>
                            <Th>i</Th>
                            <Th><a href='#'>click me!</a></Th>
                        </Tr>
                    </Tbody>
                </Table>
            </div>
        </>
    )
}

export default GrillaComponent;