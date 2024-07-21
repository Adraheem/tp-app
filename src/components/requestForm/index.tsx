import React, {useState} from 'react';
import {Icon} from "@iconify/react";
import Button from "../button";
import Modal from "../modal";
import {Field, FieldArray, FieldProps, Form, Formik, FormikHelpers} from "formik";
import * as yup from "yup";
import Input from "../input";
import {IRequest, IValue} from "../../types";
import Table from "../table";
import Thead from "../table/Thead";
import Th from "../table/Th";
import TBody from "../table/TBody";
import Tr from "../table/Tr";
import Td from "../table/Td";
import Select from "../select";

interface IProps {
  type?: "CREATE" | "UPDATE"
  initialValue?: IRequest
}

function RequestForm({type = "CREATE", initialValue}: IProps) {
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

  const initialValues: IRequest = initialValue ?? {
    name: "",
    email: "",
    email1: "",
    requestStatus: "PENDING",
    values: [
      emptyValueItem
    ],
  }

  const onSubmit = (values: IRequest, helpers: FormikHelpers<IRequest>) => {
    // handle "create new" OR "update" based on the "type" above
    console.log(values);
    helpers.setSubmitting(false);
  }

  return (
    <>
      <Button className="pl-3 gap-1" onClick={() => setOpen(true)}>
        {
          type === "CREATE" ? (
            <>
              <Icon icon="mdi:plus" width={24} height={24}/>
              <span>Create new request</span>
            </>
          ) : (
            <>
              <Icon icon="mdi:plus" width={24} height={24}/>
              <span>Edit request</span>
            </>
          )
        }
      </Button>

      <Modal isOpen={isOpen} close={closeModal}>
        <div className="w-screen max-w-5xl p-5">
          <h4>
            {type === "CREATE" ? "Create new request" : "Edit request"}
          </h4>

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

                  <Select
                    label="Request status"
                    placeholder="Request status"
                    name="requestStatus"
                    options={["APPROVED", "PENDING", "EXECUTED"].map(v => ({label: v, value: v}))}
                  />
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
                          <Th>Label</Th>
                          <Th className="pl-0">Value</Th>
                          <Th className="pl-0">Amount</Th>
                          <Th className="pl-0">Action</Th>
                        </Thead>

                        <TBody>
                          {values.values.map((value, index) => (
                            <Tr className="border-b-0" key={index}>
                              <Td>
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

export default RequestForm;
