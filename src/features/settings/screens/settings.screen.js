/*import React, { useContext } from "react";
import styled from "styled-components/native";

import { List, Avatar } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer marginTop={"12%"}>
        <Avatar.Icon size={180} icon="account" backgroundColor="#FFB52E" />
        <Spacer position="top" size="large">
          <Text variant="label" marginTop={"20%"}>{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Salir de la cuenta"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

*/

import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import firebase from "firebase";

import { List, Avatar } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  `;
const AvatarContainer = styled.View`
  align-items: center;
  `;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);

  const firestore = firebase.firestore;
  const auth = firebase.auth;

  const [user, setUser] = useState(null) // This user
  const [users, setUsers] = useState([]) // Other Users

  useEffect(() => {
    firestore().collection("users").doc(auth().currentUser.uid).get()
      .then(user => {
        setUser(user.data())
      })
  }, [])

  return (
    <SafeArea>
      <AvatarContainer marginTop={"12%"}>
        <Avatar.Icon size={180} icon="account" backgroundColor="#FFB52E" />
        <Spacer position="top" size="large">
          <Text variant="label" marginTop={"20%"}>{user?.email}</Text>
        </Spacer>
      </AvatarContainer>
      <Text> Nombre: { user?.name }</Text>
      <Text> Comuna: { user?.comuna }</Text>
      <Text> Meses de gestacion: { user?.gestacion }</Text>
      <List.Section>
        <SettingsItem
          title="Salir de la cuenta"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};