import * as React from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';
import { LinkingUrlBiblioteca } from "../components/linkingUrlBiblioteca.component";
import { LinkingUrl } from '../components/linkingUrl.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { ScrollView } from "react-native";

const Biblioteca = () => {
  const [mensajesExpanded, mensajesSetExpanded] = React.useState(true);
  const [cuentosExpanded, cuentosSetExpanded] = React.useState(true);
  const [capsulasExpanded, capsulasSetExpanded] = React.useState(true);
  const [extrasExpanded, extrasSetExpanded] = React.useState(true);


  const mensajesHandlePress = () => mensajesSetExpanded(!mensajesExpanded);
  const cuentosHandlePress = () => cuentosSetExpanded(!cuentosExpanded);
  const capsulasHandlePress = () => capsulasSetExpanded(!capsulasExpanded);
  const extrasHandlePress = () => extrasSetExpanded(!extrasExpanded);

  return (
    <SafeArea>
        <ScrollView>
            <List.Section title="Material Adicional" backgroundColor={"white"}>
            <List.Accordion
                title="Mensajes"
                theme={{ colors: { primary: '#ffc93b' } }}
                left={props => <List.Icon {...props} icon="book" />}
                expanded={!mensajesExpanded}
                onPress={mensajesHandlePress}
                >
                    <LinkingUrl url={"https://pdfhost.io/v/q0usTWeZe_Curso_1_Mensaje_1_FMJR_Mensajes_Habilidades_Parentales_2022"} message={"Mensaje 1.pdf"} color="red" bgcolor="white"/>
                    <LinkingUrl url={"https://pdfhost.io/v/YJCH0tjGR_Curso_1_Mensaje_2_FMJR_Mensajes_Habilidades_Parentales_2022"} message={"Mensaje 2.pdf"} color="red" bgcolor="white"/>
                    <LinkingUrl url={"https://pdfhost.io/v/~CWlEUSGB_Curso_1_Mensaje_3_FMJR_Mensajes_Habilidades_Parentales_2022"} message={"Mensaje 3.pdf"} color="red" bgcolor="white"/>
                    <LinkingUrl url={"https://pdfhost.io/v/j6Jld.1HQ_Curso_1_Mensaje_4_FMJR_Mensajes_Habilidades_Parentales_2022"} message={"Mensaje 4.pdf"} color="red" bgcolor="white"/>
                    <LinkingUrl url={"https://pdfhost.io/v/m6kTGFFDh_Curso_1_Mensaje_5_FMJR_Mensajes_Habilidades_Parentales_2022"} message={"Mensaje 5.pdf"} color="red" bgcolor="white"/>
                    <LinkingUrl url={"https://pdfhost.io/v/uYZqrb2Ax_Curso_1_Mensaje_6_FMJR_Mensajes_Habilidades_Parentales_2022"} message={"Mensaje 6.pdf"} color="red" bgcolor="white"/>
                    <LinkingUrl url={"https://pdfhost.io/v/VN6IPaxGO_Curso_1_Mensaje_7_FMJR_Mensajes_Habilidades_Parentales_2022"} message={"Mensaje 7.pdf"} color="red" bgcolor="white"/>
                    <LinkingUrl url={"https://pdfhost.io/v/ySq4wNHe~_Curso_1_Mensaje_8_FMJR_Mensajes_Habilidades_Parentales_2022"} message={"Mensaje 8.pdf"} color="red" bgcolor="white"/>
            </List.Accordion>

            <List.Accordion
                title="Cuentos"
                theme={{ colors: { primary: '#ffc93b' } }}
                left={props => <List.Icon {...props} icon="book" />}
                expanded={!cuentosExpanded}
                onPress={cuentosHandlePress}
                >
                    <LinkingUrl url={"https://pdfhost.io/v/8MOW1hw9L_Curso_1_Cuento_1_FMJR"} message={"Cuento 1.pdf"} color="red" bgcolor="white"/>
            </List.Accordion>

            <List.Accordion
                title="Capsulas"
                theme={{ colors: { primary: '#ffc93b' } }}
                left={props => <List.Icon {...props} icon="book" />}
                expanded={!capsulasExpanded}
                onPress={capsulasHandlePress}>
            </List.Accordion>

            <List.Accordion
                title="Extras"
                theme={{ colors: { primary: '#ffc93b' } }}
                left={props => <List.Icon {...props} icon="book" />}
                expanded={!extrasExpanded}
                onPress={extrasHandlePress}>
            </List.Accordion>

            </List.Section>
        </ScrollView>
    </SafeArea>
  );
};

export default Biblioteca;