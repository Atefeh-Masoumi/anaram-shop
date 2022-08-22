import * as Yup from 'yup';


// inital values for the form
const initialValues = {
    email: "",
    password: "",
};

// Yup schema for form validation
const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("password is required"),
});
const changeHandler=(e)=>{
 const el= e.target.value;
}
const Login = () => {
    
    return ( 
        <>
        <form>
            <input name="email" type="email" onChange={changeHandler}/>
            <input name="password" type="password" onChange={changeHandler} />
            <button type='submit'></button>

        </form>   
        </>
     );
}
 
export default Login;