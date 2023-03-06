import { React, useState } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Text,
  useToast,
} from '@chakra-ui/react';
import { sendContactForm } from '../lib/api';
// import "../styles/responsive.css"
// import "../styles/style.css"
const initValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};
const initState = { values: initValues };
export default function Contact() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading, error } = state;
  const onBlur = ({ target }) =>
    setTouched((old) => ({
      ...old,
      [target.name]: true,
    }));
  const handleChange = ({ target }) =>
    setState((old) => ({
      ...old,
      values: {
        ...old.values,
        [target.name]: target.value,
      },
    }));
  const onSubmit = async (e) => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: 'Message sent',
        status: 'success',
        duration: 2000,
        position: 'top',
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  // console.log(values)
  return (
    <>
      <div id="contact-section" className="content_section dark" style={{paddingBottom:"80px"}}>
        <div
          className="section-heading hover-underline-animation dark"
          data-aos="fade-up"
        >
          Contact Us
        </div>
        {error && (
          <Text color="#FF726F" my={4} fontSize="xl">
            {error}
          </Text>
        )}
        <div className="content-container dark">
          <div className="contact-content" data-aos="fade-up">
            <div className="title1">We are here!</div>
            <div className="title2">
              While we’re good with smoke signals,
              <br />
              there are simpler ways for us to get in touch.
            </div>
            <div>
              <i className="location fa-solid fa-map-location-dot"></i>
              <div className="address">
                <b>PES University Ring Road Campus</b>
              </div>
              <div className="address2">
                100 Feet Ring Road, Banashankari Stage III,
                <br />
                Dwaraka Nagar, Banashankari, Bengaluru, Karnataka 560085
              </div>
            </div>
          </div>

          <div className="contact_form" style={{width:"50%"}}>
            <div>
              <FormControl
                isRequired
                id="contact-form"
                isInvalid={touched.name && !values.name}
                mt={5}
              >
                <div>
                  <FormLabel className="contact_label">Name</FormLabel>
                  <Input
                    onBlur={onBlur}
                    type="text"
                    onChange={handleChange}
                    name="name"
                    value={values.name}
                    className="contact_input"
                    id="name"
                    required
                  />
                </div>
                <FormErrorMessage style={{ color: '#FF726F' }}>
                  Required
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                id="contact-form"
                isInvalid={touched.email && !values.email}
                mt={5}
              >
                <div>
                  <FormLabel className="contact_label">Email</FormLabel>
                  <Input
                    onBlur={onBlur}
                    type="email"
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    className="contact_input"
                    id="email"
                    required
                  />
                </div>
                <FormErrorMessage style={{ color: '#FF726F' }}>
                  Required
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                id="contact-form"
                isInvalid={touched.subject && !values.subject}
                mt={5}
              >
                <div>
                  <FormLabel className="contact_label" >Subject</FormLabel>
                  <Input
                    onBlur={onBlur}
                    type="text"
                    onChange={handleChange}
                    value={values.subject}
                    name="subject"
                    className="contact_input"
                    id="subject"
                    required
                  />
                </div>
                <FormErrorMessage style={{ color: '#FF726F' }}>
                  Required
                </FormErrorMessage>
              </FormControl>
            </div>
            <div>
              <FormControl
                isRequired
                id="contact-form"
                isInvalid={touched.message && !values.message}
                mt={5}
                ml={10}
              >
                <Container className="form-content" ml={8}>
                  <FormLabel className="contact_label">Message</FormLabel>
                  <textarea
                    onBlur={onBlur}
                    name="message"
                    onChange={handleChange}
                    value={values.message}
                    rows="7"
                    className="contact_input message"
                    id="message"
                    required
                  ></textarea>
                  <FormErrorMessage style={{ color: '#FF726F' }}>
                    Required
                  </FormErrorMessage>
                </Container>
              </FormControl>
              <Button
                variant="outline"
                colorScheme="blue"
                disabled={
                  !values.name ||
                  !values.email ||
                  !values.subject ||
                  !values.message
                }
                onClick={onSubmit}
                isLoading={isLoading}
                mt={5}
                ml={40}
              >
                Submit{' '}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
