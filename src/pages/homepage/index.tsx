import React from 'react';
import Container from "../../components/container";
import Card from "../../components/card";
import Button from "../../components/button";
import {Icon} from "@iconify/react";
import Table from "../../components/table";
import Thead from "../../components/table/Thead";
import Th from "../../components/table/Th";
import TBody from "../../components/table/TBody";
import Tr from "../../components/table/Tr";
import Td from "../../components/table/Td";

interface IProps {
}

function HomePage(props: IProps) {
  return (
    <Container className="py-10">
      <Card>
        <div className="flex justify-between gap-10 items-center">
          <h4>Title here</h4>
          <Button className="pl-3 gap-1">
            <Icon icon="mdi:plus" width={24} height={24}/>
            <span>Create new</span>
          </Button>
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
                  <Td>d</Td>
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
