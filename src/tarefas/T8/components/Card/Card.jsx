import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    max-width: 300px;

    @media (min-width: 768px) {
        max-width: 1200px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

const DataBlock = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 20px;
        align-items: start;
        font-size: 1.2rem;
    }
`;

const Image = styled.img`
    width: 100%;

    @media (min-width: 768px) {
        width: 200px;
    }
`;

const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 2px solid black;
    padding: 10px;

    @media (min-width: 768px) {
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
`;

const ActionImage = styled.img`
    max-width: 50px;
    cursor: pointer;
`;

const TableContainer = styled.div`
    margin-top: 20px;
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const Thead = styled.thead`
    background-color: gray;
`;

const Th = styled.th`
    border: 1px solid gray;
    padding: 10px;
    text-align: left;
    margin: 0;
`;

const Td = styled.td`
    border: 1px solid gray;
    padding: 10px;
    text-align: left;
    margin: 0;
`;

export default function Card({ img, name, birthDate, sector, role }) {
    return (
        <CardContainer>
            <Content>
                <DataBlock>
                    <Image src={img} alt={name} />
                    <div>
                        <h1>{name}</h1>
                        <p>{birthDate}</p>
                        <p>{sector}</p>
                        <p>{role}</p>
                    </div>
                </DataBlock>
                <Actions>
                    <ActionImage src="https://icons.veryicon.com/png/o/miscellaneous/fs-icon/call-13.png" />
                    <ActionImage src="https://cdn-icons-png.flaticon.com/256/646/646094.png" />
                    <ActionImage src="https://cdn-icons-png.flaticon.com/512/1160/1160357.png" />
                </Actions>
            </Content>
            <TableContainer>
                <StyledTable>
                    <Thead>
                        <tr>
                            <Th>Estado</Th>
                            <Th>Tarefas</Th>
                        </tr>
                    </Thead>
                    <tbody>
                        {['Tarefa 1', 'Tarefa 2', 'Tarefa 3'].map((task, index) => (
                            <tr key={index}>
                                <Td>
                                    <input type="checkbox" />
                                </Td>
                                <Td>{task}</Td>
                            </tr>
                        ))}
                    </tbody>
                </StyledTable>
            </TableContainer>
        </CardContainer>
    );
}
