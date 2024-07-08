import React, {useState} from 'react';
import {Icon} from "@iconify/react";
import Button from "../../components/button";
import Modal from "../../components/modal";
import {Field, FieldArray, FieldProps, Form, Formik, FormikHelpers} from "formik";
import * as yup from "yup";
import Input from "../../components/input";
import {IRequest, IValue} from "../../types";
import Table from "../../components/table";
import Thead from "../../components/table/Thead";
import Th from "../../components/table/Th";
import TBody from "../../components/table/TBody";
import Tr from "../../components/table/Tr";
import Td from "../../components/table/Td";

interface IProps {
}

function CreateNew(props: IProps) {
  const [isOpen, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  }

  const validationSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    email1: yup.string()
      .test("checkIfSame", "Email cannot be the same",
        (value, context) => value !== context.parent.email)
      .required("Required")
  });

  const emptyValueItem: IValue = {
    label: "",
    value: "",
    amount: 0,
    selected: false,
  }

  const initialValues: IRequest = {
    name: "",
    email: "",
    email1: "",
    requestStatus: "PENDING",
    values: [
      emptyValueItem
    ],
  }

  const onSubmit = (values: IRequest, helpers: FormikHelpers<IRequest>) => {
  }

  return (
    <>
      <Button className="pl-3 gap-1" onClick={() => setOpen(true)}>
        <Icon icon="mdi:plus" width={24} height={24}/>
        <span>Create new request</span>
      </Button>

      <Modal isOpen={isOpen} close={closeModal}>
        <div className="w-screen max-w-5xl p-5">
          <h4>Create new request</h4>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            enableReinitialize
          >
            {({isSubmitting, isValid, values}) => (
              <Form className="mt-5">
                <div className="grid grid-cols-3 gap-x-5 gap-y-4">
                  <Field name="name">
                    {({field, meta}: FieldProps) => (
                      <Input
                        label="Name"
                        placeholder="Name"
                        error={meta.touched && meta.error}
                        {...field}
                      />
                    )}
                  </Field>

                  <Field name="email">
                    {({field, meta}: FieldProps) => (
                      <Input
                        label="Email"
                        placeholder="Email"
                        error={meta.touched && meta.error}
                        {...field}
                      />
                    )}
                  </Field>

                  <Field name="email1">
                    {({field, meta}: FieldProps) => (
                      <Input
                        label="Email 1"
                        placeholder="Email 1"
                        error={meta.touched && meta.error}
                        {...field}
                      />
                    )}
                  </Field>
                </div>

                <FieldArray name="values">
                  {({push, remove}) => (
                    <div className="mt-10">
                      <div className="flex gap-5 justify-between items-center mb-4">
                        <h6>Values</h6>
                        <Button
                          type="button"
                          onClick={() => push(emptyValueItem)}
                        >
                          Add row
                        </Button>
                      </div>

                      <Table>
                        <Thead>
                          <Th className="pl-0">Label</Th>
                          <Th className="pl-0">Value</Th>
                          <Th className="pl-0">Amount</Th>
                          <Th className="pl-0">Action</Th>
                        </Thead>

                        <TBody>
                          {values.values.map((value, index) => (
                            <Tr className="border-b-0">
                              <Td className="pl-0">
                                <Field name={`values.${index}.label`}>
                                  {({field, meta}: FieldProps) => (
                                    <Input
                                      placeholder="Label"
                                      error={meta.touched && meta.error}
                                      {...field}
                                    />
                                  )}
                                </Field>
                              </Td>

                              <Td className="pl-0">
                                <Field name={`values.${index}.value`}>
                                  {({field, meta}: FieldProps) => (
                                    <Input
                                      placeholder="Value"
                                      error={meta.touched && meta.error}
                                      {...field}
                                    />
                                  )}
                                </Field>
                              </Td>

                              <Td className="pl-0">
                                <Field name={`values.${index}.amount`}>
                                  {({field, meta}: FieldProps) => (
                                    <Input
                                      placeholder="Amount"
                                      type="number"
                                      error={meta.touched && meta.error}
                                      {...field}
                                    />
                                  )}
                                </Field>
                              </Td>

                              <Td className="pl-0">
                                <Button
                                  type="button"
                                  onClick={() => remove(index)}
                                  className="pl-1 pr-1 aspect-square"
                                >
                                  <Icon icon="tdesign:delete" width={20} height={20}/>
                                </Button>
                              </Td>
                            </Tr>
                          ))}
                        </TBody>
                      </Table>
                    </div>
                  )}
                </FieldArray>

                <div className="flex items-center gap-4 justify-start mt-10">
                  <Button type="button" onClick={closeModal}>
                    Cancel
                  </Button>
                  <Button variant="SOLID" type="submit" disabled={!isValid}>
                    {isSubmitting ? "Loading" : "Save"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
}

export default CreateNew;
