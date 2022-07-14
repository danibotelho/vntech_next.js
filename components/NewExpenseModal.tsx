import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function NewExpenseModal({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicionar Despesa</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid
            templateColumns={"repeat(2 , 1fr)"}
            templateRows={"repeat(2 , 1fr)"}
            gap={4}
          >
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Descrição</FormLabel>
                <Input placeholder="Descrição" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel htmlFor="value">Valor</FormLabel>
                <NumberInput min={1}>
                  <NumberInputField id="value" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel htmlFor="category">Categoria</FormLabel>
                <Select id="category" placeholder="Categoria"></Select>
              </FormControl>
            </GridItem>
            
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default NewExpenseModal;
