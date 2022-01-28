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
  const messageCharsLeft = 1200 - message.length

  return (
    <Container width={width}>
      {submitted ? (
        <div> Thank you for submitting your query. I'll get back to you asap.</div>
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
              maxLength="1200"
              rows="8"
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
  border-radius: 4px;
  padding-bottom: 4vh;
  width: ${(props) => props.width};
  ${'' /* background: rgba(255, 255, 255, 0.25); */}

  p {
    font-size: 1.4rem;
    padding-left: 1vh;
    color: white;
    filter: drop-shadow(0 1rem 2rem rgba(0, 0, 0, 0.4));
  }
  form {
    width: 100%;

    input,
    textarea {
      margin: 0.5vh 0;
      width: 100%;
      font-family: inherit;
      font-size: 1.6rem;
      color: inherit;
      padding: 0.75rem 1rem;
      border-radius: 2px;
      background: rbga(255, 255, 255, 0.5);
      border: none;
      border-bottom: 3px solid transparent;
      display: block;
      resize: vertical;
      outline: none;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

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
    font-weight: 500;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 1.8rem;
    border: 3px solid transparent;
    font-size: 2rem;

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

const Errors = styled.div`
  color: red;
`
