import React from 'react';
import Container from "../../components/container";
import Card from "../../components/card";
import Table from "../../components/table";
import Thead from "../../components/table/Thead";
import Th from "../../components/table/Th";
import TBody from "../../components/table/TBody";
import Tr from "../../components/table/Tr";
import Td from "../../components/table/Td";
import CreateNew from "./createNew";
import {Icon} from "@iconify/react";
import Button from "../../components/button";

interface IProps {
}

function HomePage(props: IProps) {
  const handleDelete = (index: number) => {
  }

  return (
    <Container className="py-10">
      <Card>
        <div className="flex justify-between gap-10 items-center">
          <h4>Title here</h4>
          <CreateNew/>
        </div>

        <div className="mt-7">
          <Table>
            <Thead>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone number</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Thead>

            <TBody>
              {[...Array(5)].map((_, index) => (
                <Tr key={index}>
                  <Td>John doe</Td>
                  <Td>john@doe.com</Td>
                  <Td>+1364872672</Td>
                  <Td>Approved</Td>
                  <Td>
                    <Button
                      type="button"
                      onClick={() => handleDelete(index)}
                      className="pl-1 pr-1 aspect-square"
                    >
                      <Icon icon="tdesign:delete" width={20} height={20}/>
                    </Button>
                    <Button
                      type="button"
                      onClick={() => handleDelete(index)}
                      className="pl-1 pr-1 aspect-square ml-2"
                    >
                      <Icon icon="tdesign:edit" width={20} height={20}/>
                    </Button>
                  </Td>
                </Tr>
              ))}
            </TBody>
          </Table>
        </div>
      </Card>
    </Container>
  );
}

export default HomePage;
