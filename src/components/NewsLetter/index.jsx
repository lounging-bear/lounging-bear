import React from 'react'
import PropTypes from 'prop-types'

import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Box } from 'components/Grid'

import styled from 'util/style'

const url =
  'https://loungingbear.us20.list-manage.com/subscribe/post?u=3fa79c434b8aeb586330ea02b&id=e5ec4a0401'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 500px;
`

const Line = styled.p`
  text-align: center;
  font-size: 15px;
  line-height: 15px;
  font-family: 'Azo Sans Regular', 'Open Sans', Helvetica;
  color: #6c6c6c;
  letter-spacing: 0.2px;
`

const Input = styled.input`
  font-family: 'Azo Sans Regular', 'Open Sans', Helvetica;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 4px;
  font-size: 14px;
  padding: 5px;
  height: 49px;
  margin: 0 10px;
`
const Button = styled.button`
  font-size: 16px;
  text-transform: capitalize;
  background: #af9863;
  border: 2px solid #af9863;
  color: #fff;
  line-height: 27px;
  padding: 8px 40px;
  border-radius: 4px;
  display: inline-block;
  font-family: 'Open Sans';
  letter-spacing: 0.4px;
  padding: 8px 20px;

  &:hover,
  &:focus {
    background: #fff;
    color: #af9863;
  }
  transition: all 0.3s ease-in-out;
`

const Message = styled.div`
  text-align: center;

  font-size: 15px;
  line-height: 21px;
  font-family: 'Azo Sans Regular', 'Open Sans', Helvetica;
  color: #6c6c6c;
  padding-bottom: 15px;
  letter-spacing: 0.2px;
`

const CustomForm = ({ status, message, onValidated }) => {
  let email
  let name
  const submit = () =>
    email &&
    name &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    })

  return (
    <Wrapper>
      <Box mx="20px">
        <Line>
          Sign up to receive inspiration, product news, and special offers.
        </Line>
      </Box>
      <Box>
        {status === 'sending' && <Message type="sending">sending...</Message>}
        {status === 'error' && <Message type="error">{message}</Message>}
        {status === 'success' && <Message type="success">{message}</Message>}

        <Input
          ref={node => {
            name = node
          }}
          type="text"
          placeholder="Your name"
        />
        <Input
          ref={node => {
            email = node
          }}
          type="email"
          placeholder="Your email"
        />
        <Button onClick={submit}>Submit</Button>
      </Box>
    </Wrapper>
  )
}

CustomForm.propTypes = {
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onValidated: PropTypes.any.isRequired,
}

const Newsletter = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <CustomForm
        status={status}
        message={message}
        onValidated={formData => subscribe(formData)}
      />
    )}
  />
)

export default Newsletter
