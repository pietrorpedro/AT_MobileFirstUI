import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    max-width: 300px;
`;

const CardImage = styled.img`
    width: 100%;
`;

const DataContainer = styled.div`
    padding: 10px;
`;

const ActionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
`;

const ActionImage = styled.img`
    max-width: 50px;
    padding: 10px 0;
    cursor: pointer;
`;

const TableContainer = styled.div`
    margin-top: 20px;
    padding: 10px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHeader = styled.th`
    background-color: gray;
    border: 1px solid gray;
    padding: 10px;
    text-align: left;
`;

const TableData = styled.td`
    border: 1px solid gray;
    padding: 10px;
    text-align: left;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export default function Card({ img, name, birthDate, sector, role }) {
    return (
        <CardContainer>
            <CardImage src={img} alt={name} />
            <DataContainer>
                <h1>{name}</h1>
                <p>{birthDate}</p>
                <p>{sector}</p>
                <p>{role}</p>
            </DataContainer>
            <ActionsContainer>
                <ActionImage src="https://icons.veryicon.com/png/o/miscellaneous/fs-icon/call-13.png" />
                <ActionImage src="https://cdn-icons-png.flaticon.com/256/646/646094.png" />
                <ActionImage src="https://cdn-icons-png.flaticon.com/512/1160/1160357.png" />
            </ActionsContainer>
            <TableContainer>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Estado</TableHeader>
                            <TableHeader>Tarefas</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {['Tarefa 1', 'Tarefa 2', 'Tarefa 3'].map((task, index) => (
                            <TableRow key={index}>
                                <TableData>
                                    <input type="checkbox" />
                                </TableData>
                                <TableData>{task}</TableData>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        </CardContainer>
    );
}
