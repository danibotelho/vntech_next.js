import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  Heading,
} from "@chakra-ui/react";
import { IExpenses } from "../models/IExpense";
interface Props {
  expenses: IExpenses[];
  onAddExpense: () => void;
}

const FinancesTable = ({ expenses, onAddExpense }: Props) => {
  const toBRL = (value: number) =>
    value.toLocaleString("pt-BR", {
      currency: "BRL",
      style: "currency",
    });

  const total = expenses.reduce((acc, cur) => {
    return acc + cur.value;
  }, 0);

  // let total = 0
  // for (const element of expenses) {
  //   total += element.value
  // }

  return (
    <>
      <Box
        flexDirection="row"
        display="flex"
        w="80vw"
        justifyContent="space-between"
      >
        <Heading size="lg">
          {/* Total: {toBRL(expenses?.reduce((acc, curr) => acc + curr.value, 0))} */}
          Total: {toBRL(total)}
        </Heading>
        <Button
          bg="green.400"
          color="white"
          _hover={{ bg: "green.300" }}
          _active={{ bg: "green.600" }}
          onClick={() => onAddExpense()}
        >
          Adicionar despesa
        </Button>
      </Box>
      <Box
        mt={5}
        border="1px solid"
        borderColor="gray.100"
        borderWidth={2}
        borderRadius="md"
        w="80vw"
      >
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th isNumeric>ID</Th>
                <Th>DATA</Th>
                <Th>DESCRIÇÃO</Th>
                <Th>CATEGORIA</Th>
                <Th>VALOR</Th>
              </Tr>
            </Thead>
            <Tbody>
              {expenses.map((expense) => (
                <Tr key={expense.id}>
                  <Td isNumeric>{expense.id}</Td>
                  <Td>{new Date(expense.date).toLocaleDateString("pt-BR")}
                  </Td>
                  <Td>{expense.description}</Td>
                  <Td>{expense.category}</Td>
                  <Td>{toBRL(expense.value)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default FinancesTable;
