import React from 'react';
import Container from "../../components/container";
import Card, {CardBody} from "../../components/card";
import Table from "../../components/table";
import Thead from "../../components/table/Thead";
import Th from "../../components/table/Th";
import TBody from "../../components/table/TBody";
import Tr from "../../components/table/Tr";
import Td from "../../components/table/Td";
import RequestForm from "../../components/requestForm";
import {Icon} from "@iconify/react";
import Button from "../../components/button";
import {useNavigate} from "react-router-dom";
import RequestStatusComponent from "../../components/requestStatus";

interface IProps {
}

function HomePage(props: IProps) {
  const navigate = useNavigate();

  const handleDelete = (index: number) => {
  }

  const handleNavigate = (index: number) => {
    navigate(`/info/${index}`);
  }

  return (
    <Container className="py-10">
      <Card>
        <CardBody>
          <div className="flex justify-between gap-10 items-center">
            <h4>Title here</h4>
            <RequestForm/>
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
                    <Td><RequestStatusComponent status="APPROVED"/></Td>
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
                        onClick={() => handleNavigate(index)}
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
        </CardBody>

      </Card>
    </Container>
  );
}

export default HomePage;
