import React,{useState} from 'react';
import { StyleSheet,Image } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AppText from '../components/AppText';
import ErrorMessage from '../components/forms/ErrorMessage';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton  from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';
const validationSchema=Yup.object().shape({
  email:Yup.string().required().email().label("Email"),
  password:Yup.string().required().min(4).label("Password")
});
function LoginScreen(props) {

    return (
    <Screen>
<Image 
    style={styles.logo}

source={require("../assets/logo-red.png")}/>

<AppForm
initialValues={{email: "",password:""}}
onSubmit={values=>console.log(values)}
validationSchema={validationSchema}

>
<AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
         
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        

          <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
         
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
       
     <SubmitButton title="Login" 
      /> 
</AppForm>

 
    </Screen>
    
    );
}
const styles = StyleSheet.create({
    logo:{
        width:80,
        height:80,
        alignSelf:"center",
        marginBottom:20,
        marginTop:50,
    }
})
export default LoginScreen;