import './GrillaComponent.css';
import { Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";


const GrillaComponent = (props) => {
    const columns = props.columns;
    const rows = props.rows;
    const size = props.size
    

    const listRows = rows.map((row) =>
        <Tr>
            {
                row.map(e => (
                    <Th>{e}</Th>
                ))
            }
        </Tr>
    );

    const listColumns = columns.map((column) => 
        <Th>{column}</Th>
    );

    return(
        <>
            <div className='grilla-component-container'>
                <Table colorScheme='facebook' variant='striped' size={size}>
                    <Thead>
                        <Tr>
                            {listColumns}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {listRows}
                    </Tbody>
                </Table>
            </div>
        </>
    )
};

export default GrillaComponent;