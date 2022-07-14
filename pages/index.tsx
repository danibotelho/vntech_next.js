import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import FinancesTable from "../components/FinancesTable";
import NewExpenseModal from "../components/NewExpenseModal";

interface IExpenses{
  id: number;
  date: number;
  description: string;
  category: string;
  value: number
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My finances</title>
        <meta name="description" content="Vnt 4tech 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading as="h2" mb="100px">
          My Finances
        </Heading>
        <FinancesTable />
        <NewExpenseModal 
          isOpen={true}
          onClose={() => true}/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.venturus.org.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Venturus
        </a>
      </footer>
    </div>
  );
};

export default Home;
