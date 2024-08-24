import React,{useReducer} from 'react'
import styles from './form.module.css'
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';

const initialState = {
  formData:{
    name:"",
    email:"",
    subject:"",
    message:"",
    picFile:""
  },
  formSendStatue:{
    isSending:false,
    error:""
  }
};

function reducer(state=initialState,action){
  switch(action.type){
    case "name":
      return{
        ...state,
        formData:{
          ...state.formData,
          name:action.value
        }
      };
    case "email":
      return{
        ...state,
        formData:{
          ...state.formData,
          email:action.value
        }
      };
    case "subject":
      return{
        ...state,
        formData:{
          ...state.formData,
          subject:action.value
        }
      };
    case "message":
      return{
        ...state,
        formData:{
          ...state.formData,
          message:action.value
        }
      }
    case "picFile":
      return{
        ...state,
        formData:{
          ...state.formData,
          picFile:action.value
        }
      }
    case "submit":
      return{
        ...state,
        formSendStatue:{
          ...state.formSendStatue,
          error:"",
          isSending:true
        }
      }
    case "submitSuccess":
      return{
        ...state,
        formSendStatue:{
          ...state.formSendStatue,
          isSending:false,
          error:""
        }
      }
    case "submitFailure":
      return{
        ...state,
        formSendStatue:{
          ...state.formSendStatue,
          isSending:false,
          error:action.value
        } 
      }
    default:
      throw new Error(`Default should never be hit ${action.type}`);
  }
}

const url="http://localhost/api/contacts/";

export default function Form() {
  const [formState,setFormState] = useReducer(reducer,initialState);

  const formSubmitHandler = (e)=>{
    e.preventDefault();
    setFormState({
      type:"submit",
      value:""
    });
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body:JSON.stringify({
          name:formState.formData.name,
          email:formState.formData.email,
          subject:formState.formData.subject,
          message:formState.formData.message
      })
    };
    fetch(url,options)
    .then((res)=>{
      setFormState({
        type:"submitSuccess",
        value:""
      });
    })
    .catch((err)=>{
      setFormState({
        type:"submitFailure",
        value:"failed sending your message please try again."
      })
      console.log(err)
    })
  }

  return (
    <form className={styles.Form}>
        <h1>Just say hello</h1>
        <input name="name" className={styles.TextInput} type="text" placeholder="Your Name" value={formState.formData.name}
         onChange={(e)=>setFormState({type:"name", value:e.target.value})}/>
        <input name="email" className={styles.TextInput} type="email" placeholder="Your Email" value={formState.formData.email}
         onChange={(e)=>setFormState({type:"email", value:e.target.value})}/>
        <input name="subject" className={styles.TextInput} type="text" placeholder="Your Subject" value={formState.formData.subject}
         onChange={(e)=>setFormState({type:"subject", value:e.target.value})}/>
        {/* <input name="picFile" type="file" className={styles.FileInput} value={formState.formData.picFile}
        onChange={(e)=>setFormState({type:"picFile",value:e.target.value})}/>  */}
        <textarea name="message" rows="10" placeholder="Your Message" value={formState.formData.message}
         onChange={(e)=>setFormState({type:"message", value:e.target.value})}/>
        <button onClick={formSubmitHandler}  >Send Message</button>
        {
          (formState.formSendStatue.error.length !==0) &&<p>{formState.formSendStatue.error}</p>
        }
        <LoadingIndicator isOpen={formState.formSendStatue.isSending}/>
    </form>
  )
}
