import { AddIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  Input,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { useRef } from "react";
import { createAnnouncement } from "../../config/announcements";

function AddAnnouncement() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef();

  function validateName(value) {
    let error;
    if (!value) {
      error = "Jeez! Enter an announcment YO!! 😱";
    } else if (value.toLowerCase() === "") {
      error = "Jeez! Enter an announcment YO!! 😱";
    } else if (value.length < 5) {
      error = "Come on! More words 😉";
    }
    return error;
  }

  return (
    <>
      <Button
        borderRadius="full"
        colorScheme="blue"
        mt={4}
        onClick={onOpen}
      >
        Create Announcement
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Announcement</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{ text: "" }}
              onSubmit={(values, actions) => {
                setTimeout(async () => {
                  await createAnnouncement(values);
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(props) => (
                <Form>
                  <Field name="text" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.text && form.touched.text}
                      >
                        {/* <FormLabel htmlFor="text">Enter Announcement</FormLabel> */}
                        <Input
                          {...field}
                          id="text"
                          placeholder="Tell the community"
                        />
                        <FormErrorMessage>{form.errors.text}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Flex justify="flex-end">
                    <Button
                      mt={4}
                      mr={3}
                      colorScheme="teal"
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      Submit
                    </Button>
                    <Button colorScheme="red" mt={4} mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </Flex>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddAnnouncement;
