import React from 'react';
import Container from "../../components/container";
import {useParams} from "react-router-dom";
import Card, {CardBody} from "../../components/card";
import Table from "../../components/table";
import Thead from "../../components/table/Thead";
import Th from "../../components/table/Th";
import TBody from "../../components/table/TBody";
import Tr from "../../components/table/Tr";
import Td from "../../components/table/Td";
import {approvals} from "../../asssets/data/approvals";
import RequestStatusComponent, {getRequestStatusStyles} from "../../components/requestStatus";
import RequestForm from "../../components/requestForm";
import {IRequest} from "../../types";

const sampleData: IRequest = {
  "name": "DSTV Bouquet",
  "email": "dstv@bouquet.com",
  "email1": "dstv1@bouquet.com",
  "requestStatus": "PENDING",
  "values": [
    {
      "label": "DSTV Great Wall Standalone Bouquet",
      "value": "GWALLE73",
      "amount": 1323,
      "selected": false
    },
    {
      "label": "DSTV Great Wall Standalone Bouquet",
      "value": "GWALLE19",
      "amount": 3872,
      "selected": false
    },
    {
      "label": "DSTV Great Wall Standalone Bouquet",
      "value": "GWALLE29",
      "amount": 9273,
      "selected": false
    },
    {
      "label": "DSTV Great Wall Standalone Bouquet",
      "value": "GWALLE192",
      "amount": 3829,
      "selected": false
    }
  ]
}

interface IProps {
}

function InfoPage(props: IProps) {
  const {id} = useParams<{ id: string }>();

  return (
    <Container className="py-10">
      <div className="flex items-center gap-5">
        <h3 className="flex-1">
          Info Page <span className="typo-body text-blue-500">(ID-{id})</span>
        </h3>
        <RequestForm type="UPDATE" initialValue={sampleData}/>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-4">
        <Card className="col-span-2">
          <CardBody>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <p className="font-normal text-gray-400">Name</p>
                <p>John Doe</p>
              </div>
              <div>
                <p className="font-normal text-gray-400">Email</p>
                <p>john@doe.com</p>
              </div>
              <div>
                <p className="font-normal text-gray-400">Email 2</p>
                <p>john@doe.com</p>
              </div>
              <div>
                <p className="font-normal text-gray-400">Email 3</p>
                <p>john@doe.com</p>
              </div>
              <div>
                <p className="font-normal text-gray-400">Phone number</p>
                <p>+1364872672</p>
              </div>
              <div>
                <p className="font-normal text-gray-400">Current status</p>
                <RequestStatusComponent status="EXECUTED"/>
              </div>
            </div>

            <div className="mt-10">
              <p className="font-normal text-gray-400 mb-2">Values</p>
              <Table>
                <Thead>
                  <Th>Label</Th>
                  <Th>Value</Th>
                  <Th>Amount</Th>
                  <Th>Selected</Th>
                </Thead>

                <TBody>
                  {sampleData.values.map((value, index) => (
                    <Tr key={index}>
                      <Td>{value.label}</Td>
                      <Td>{value.value}</Td>
                      <Td>{value.amount}</Td>
                      <Td>{value.selected ? "True" : "False"}</Td>
                    </Tr>
                  ))}
                </TBody>
              </Table>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <p className="font-normal text-gray-400">Approvals ({approvals.length})</p>
          </CardBody>

          <div className="approvals">
            {
              approvals.map((approval) => {
                const {div, text} = getRequestStatusStyles(approval.status);
                return (
                  <div key={approval.id} className="approval">
                    <div>
                      <div className={div}><span className={text}>{approval.name.at(0)}</span></div>
                    </div>
                    <div>
                      <p>{approval.name}</p>
                      <p className="font-normal text-gray-400">{approval.username}</p>
                      <p>{approval.message}</p>
                    </div>
                    <div>
                      <RequestStatusComponent status={approval.status}/>
                    </div>
                  </div>
                )
              }).reverse()
            }
          </div>
        </Card>
      </div>
    </Container>
  );
}

export default InfoPage;
