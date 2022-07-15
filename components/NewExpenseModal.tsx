import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getCategories, saveExpense } from "../services/api";


interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

function NewExpenseModal({ isOpen, onSave, onClose }: Props) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(1);
  const [isLoding, setIsLoding] = useState(false)
  const [category, setCategory] = useState<string>();
  const [categories, setCategories] = useState<string[]>();
  const toast = useToast()

  useEffect(() => {
    getCategories().then((categories) =>
      setCategories(categories.map(category => category.name))
    );
  }, []);

  const handleAddExpense = async () => {
    if(!category){
      return;
    }
    const expense = {
      date: Date.now(),
      description: description, //um forma de fazer objectShortHand
      category,//outra forma de fazer
      value,      
    }
    setIsLoding(true)

   await saveExpense(expense)

    setIsLoding(false)
   
    toast({
    title: 'Despesa Salva',
    status: 'success',
  })
    onSave();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicionar Despesa</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid
            templateColumns={"repeat(2, 1fr)"}
            templateRows={"repeat(2, 1fr)"}
            gap={4}
          >
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Descrição</FormLabel>
                <Input
                  placeholder="Descrição"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel htmlFor="value">Valor</FormLabel>
                <NumberInput min={1} onChange={(_, value) => setValue(value)}>
                  <NumberInputField id="value" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel htmlFor="category">Categoria</FormLabel>
                <Select 
                id="category" 
                placeholder="Categoria"
                onChange={(e) => setCategory(e.target.value)}>
                 
                {categories?.map(category => (
                  <option key={category} value={category}>
                  {category}  
                  </option>
                ))}  
                </Select>
              </FormControl>
            </GridItem>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => onClose()} mr={3}>
            Cancelar
          </Button>
          <Button 
          colorScheme="green" 
          onClick={handleAddExpense}
          disabled={isLoding}>
            Adicionar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default NewExpenseModal;
