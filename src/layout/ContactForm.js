import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import colors from '../styles/Colors'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { init } from '@emailjs/browser'

function ContactForm({ width }) {
  const [submitted, setSubmitted] = useState(false)
  init('user_Zdwb2jSVNwPt0oSQJl2dQ')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
  })

  const form = useRef()

  const onSubmit = async (data) => {
    emailjs.send('mysite', 'template_41ayuub', data, 'user_Zdwb2jSVNwPt0oSQJl2dQ').then(
      (result) => {
        console.log(result.text)
        setSubmitted(true)
      },
      (error) => {
        console.log(error.text)
        setSubmitted(false)
      }
    )
  }

  const message = watch('message') || ''
  const messageCharsLeft = 800 - message.length

  console.log(width)

  return (
    <Container width={width}>
      {submitted ? (
        <FormSubmitted>
          <p>Thank you for reaching out. </p>
          <p> I'll get back to you asap.</p>
        </FormSubmitted>
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)} id="contact-form" ref={form}>
            <input {...register('_id')} type="hidden" name="_id" />
            <input
              {...register('name', { required: true })}
              type="text"
              name="name"
              placeholder="Name"
            />
            <br />
            <input
              {...register('email', { required: true })}
              type="email"
              name="email"
              placeholder="Email"
            />
            <br />
            <textarea
              {...register('message', { required: true })}
              name="message"
              placeholder="Message"
              maxLength="800"
              rows="6"
            />
            <p>{messageCharsLeft} characters left</p>
            <br />
            <input type="submit" disabled={!isValid || !isDirty} />
          </form>

          <Errors>
            {errors.name && <p>Please enter your name</p>}
            {errors.email && <p>Please enter your email</p>}
            {errors.message && <p>Get in touch by leaving a message</p>}
          </Errors>
        </>
      )}
    </Container>
  )
}

export default ContactForm

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 4vh;
  max-width: ${(props) => props.width};

  p {
    font-size: 1.4rem;
    padding-left: 1vh;
    color: ${colors.white};
    filter: drop-shadow(0 1rem 2rem rgba(0, 0, 0, 0.4));

    @media (min-width: 1200px) {
      font-size: 1.4rem;
    }
  }
  form {
    width: 100%;

    input,
    textarea {
      margin: 0.5vh 0;
      width: 100%;
      font-family: inherit;
      font-size: 1.6rem;
      color: #393c41;
      padding: 1.2rem 1rem;
      background: rbga(255, 255, 255, 0.5);
      border: none;
      border-bottom: 3px solid transparent;
      display: block;
      resize: vertical;
      outline: none;
      box-shadow: 0 1rem 2rem rgba(120, 80, 0, 0.2);

      :focus {
        ${'' /* box-shadow: 0 1rem 2rem rgba(234, 160, 2, 0.6); */}
        border-bottom: 3px solid ${colors.compBlue};

        :invalid {
          border-bottom: 3px solid red;
        }
      }
      ::placeholder {
        color: ${colors.grey9};
      }
    }
  }

  form > input[type='submit'] {
    color: white;
    background: ${colors.compBlue};
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.8rem;
    border: 3px solid transparent;
    font-size: 2rem;
    border-radius: 0;

    :disabled {
      background: lightgrey;
    }

    :disabled:hover {
      background: lightgrey;
      transform: translateY(0);
      color: white;
      border: 3px solid lightgrey;
      cursor: not-allowed;
    }

    :hover {
      transform: translateY(-1rem);
      color: ${colors.compBlue};
      background: white;
      border: 3px solid ${colors.compBlue};
    }
    :active {
      transform: translateY(1rem);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.6);
    }
  }
`

const FormSubmitted = styled.div`
  margin: 0.5vh 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: 30vh;
  padding: 5%;

  @media (min-width: 992px) {
    align-items: flex-start;
    width: 100%;
  }

  p {
    margin-bottom: 0.75rem;
    padding: 0;
    line-height: 2;
    font-size: 1.6rem;
  }
`

const Errors = styled.div`
  width: 100%;
  p {
    color: red;
  }
`
