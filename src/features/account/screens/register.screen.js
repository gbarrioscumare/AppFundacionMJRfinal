import React, { useState, useContext } from "react";

import { ActivityIndicator, Colors } from "react-native-paper";

import firebase from "firebase";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  /*
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);
  */
  const auth = firebase.auth;
  const firestore = firebase.firestore;

  const [values, setValues] = useState({
    name: "",
    gestacion: "",
    comuna: "",
    role: "",
    email: "",
    pwd: "",
    pwd2: ""
  })

  const [error, setError] = useState(" ");
  const [isLoading, setIsloading] = useState(false);

  function handleChange(text, eventName) {
    setValues(prev => {
      return {
        ...prev,
        [eventName]: text
      }
    })
  }

  function SignUp() {
    
    setIsloading(true);
    const { email, pwd, pwd2, name, gestacion, comuna, role } = values

    if (pwd == pwd2) {
      auth().createUserWithEmailAndPassword(email, pwd)
        .then(() => {
          firestore().collection("users").doc(auth().currentUser.uid).set({
            uid: auth().currentUser.uid,
            name,
            role: "Usuario",
            email,
            gestacion,
            comuna,
          })
        })
        .catch((e) => {
          setError(e.message)
          alert(e.message)
          // ..
        });
    } else {
      alert("Passwords are different!")
    }
    setIsloading(false);
  }

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Registrarse</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={values.email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => handleChange(u,"email")}
        />
        <Spacer size="large">
          <AuthInput
            label="Ingrese su nombre"
            value={values.name}
            textContentType="emailAddress"
            autoCapitalize="none"
            onChangeText={(u) => handleChange(u,"name")}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Ingrese su comuna"
            value={values.comuna}
            textContentType="emailAddress"
            autoCapitalize="none"
            onChangeText={(u) => handleChange(u,"comuna")}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Meses de gestacion"
            type="number"
            value={values.gestacion}
            textContentType="telephoneNumber"
            autoCapitalize="none"
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(u) => handleChange(u,"gestacion")}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Contraseña"
            value={values.pwd}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(u) => handleChange(u,"pwd")}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Repita la contraseña"
            value={values.pwd2}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(u) => handleChange(u,"pwd2")}
          />
        </Spacer>
        {error!== " " && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => SignUp()}
            >
              Registrar
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Atras
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};

