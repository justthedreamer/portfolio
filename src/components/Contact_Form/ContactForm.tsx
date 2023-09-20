import { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MessageSend } from './MessageSend';
import { Loader } from './Loader';
import emailjs, { init } from '@emailjs/browser';
import * as yup from 'yup';
import { render } from '@testing-library/react';

interface FormData {
  name: string;
  email: string;
  messageContent: string;
}

export const ContactForm: React.FC = () => {

  const [isMessageSucces, setMessageSucces] = useState(false);
  const [isLoaderActive, setLoaderActive] = useState(false);
  const [isFormReady, setFormReady] = useState(true);

  const form = useRef<HTMLFormElement | null>(null);

  const schema = yup.object().shape({
    name: yup.string().required('This field is required'),
    email: yup.string().required('This field is required').email(),
    messageContent: yup
      .string()
      .required('This field is required')
      .max(
        500,
        'Message can contain a maximum of 500 characters. If you want to send a longer message, please contact me directly at piotr.zapala.dev@gmail.com'
      ),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {    
    
    if(form.current)
    {
      if(isFormReady)
      {
        // Implement logic here 

          setLoaderActive(false);
          setMessageSucces(!isMessageSucces);
          setFormReady(false);
            console.log('Your message has been send! Thank you.')
      }else{
        console.log('Cannot send message right now.')
      }
    }
  };

  useEffect(()=>{
    if(!isFormReady){
      timer();
    }
  },[isFormReady])
  

  const timer = () =>{
  console.log(isFormReady);
  const formTimeout = setTimeout(()=>{
      setFormReady(true);
      console.log('Form is ready')
  },60_000)

}

  return (
    <div className="contact-form">
      <form ref={form}  action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Your name</label>
        <p className='error-message'>{errors.name?.message}</p>
        <input
          type="text"
          id="name"
          placeholder="Tom Marvolo Riddle..."
          style={errors.name ? { borderColor: 'red' } : undefined}
          {...register('name')}
        />

        <label htmlFor="email">Your email</label>
        <p className='error-message'>{errors.email?.message}</p>
        <input
          type="text"
          id="email"
          placeholder="Tomriddle@gmail.com..."
          style={errors.email ? { borderColor: 'red' } : undefined}
          {...register('email')}
        />

        <label htmlFor="messageContent">Your message</label>
        <p className='error-message'>{errors.messageContent?.message}</p>
        <textarea
          id="messageContent"
          placeholder="Hi! My name is Tom..."
          style={errors.messageContent ? { borderColor: 'red' } : undefined}
          {...register('messageContent')}
        ></textarea>

        <>
          {
            !isFormReady && <p className='form-timer'>You have to wait <span className='accent'>60 secounds</span> before sending next message.</p>
          }
        </>

        <input type="submit" value='Send Message' />
      </form>

      <>
        <MessageSend isMessagePopupActive={isMessageSucces} setMessagePopupState={setMessageSucces}/>  
        { isLoaderActive && <Loader /> }
      </>

    </div>
  );
};
