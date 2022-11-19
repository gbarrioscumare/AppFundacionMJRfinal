import React, {useState} from "react";
import { Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { LinkingUrl } from "../../biblioteca/components/linkingUrl.component";
import { backgroundColor } from "../../biblioteca/components/linkingUrl.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 380,
    height: 230,
  },
});

export const RestaurantDetailScreen3 = ({ route }) => {
  const [semana0Expanded, setSemana0Expanded] = useState(false);
  const [semana1Expanded, setSemana1Expanded] = useState(false);
  const [semana2Expanded, setSemana2Expanded] = useState(false);
  const [semana3Expanded, setSemana3Expanded] = useState(false);
  const [semana4Expanded, setSemana4Expanded] = useState(false);
  const [semana5Expanded, setSemana5Expanded] = useState(false);
  const [semana6Expanded, setSemana6Expanded] = useState(false);
  const [semana7Expanded, setSemana7Expanded] = useState(false);
  const [semana8Expanded, setSemana8Expanded] = useState(false);
  const [semana9Expanded, setSemana9Expanded] = useState(false);
  const [semana10Expanded, setSemana10Expanded] = useState(false);
  const [semana11Expanded, setSemana11Expanded] = useState(false);
  const [evaluacionExpanded, setEvaluacionExpanded] = useState(false);
      
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
      <List.Accordion
          theme={{ colors: { primary: '#ffc93b' } }}
          title="Evaluacion inicial del curso"
          left={(props) => <List.Icon {...props} icon="school" />}
          expanded={semana0Expanded}
          onPress={() => setSemana0Expanded(!semana0Expanded)}
        >
        </List.Accordion>

        <List.Accordion
          theme={{ colors: { primary: '#ffc93b' } }}
          title="Tema 11: Habilidades Vinculares"
          left={(props) => <List.Icon {...props} icon="school"/>}
          expanded={semana1Expanded}
          onPress={() => setSemana1Expanded(!semana1Expanded)}
        >
          <LinkingUrl url={"https://pdfhost.io/v/q0usTWeZe_Curso_1_Mensaje_1_FMJR_Mensajes_Habilidades_Parentales_2022"} message={"Mensaje 1.pdf"} color="white" bgcolor="#ffa500"/>
          <LinkingUrl url={"https://pdfhost.io/v/YJCH0tjGR_Curso_1_Mensaje_2_FMJR_Mensajes_Habilidades_Parentales_2022"} message={"Mensaje 2.pdf"} color="white" bgcolor="#ffa500"/>
          <LinkingUrl url={"https://pdfhost.io/v/~CWlEUSGB_Curso_1_Mensaje_3_FMJR_Mensajes_Habilidades_Parentales_2022"} message={"Mensaje 3.pdf"} color="white" bgcolor="#ffa500"/>
          
        </List.Accordion>

        <List.Accordion
          theme={{ colors: { primary: '#ffc93b' } }}
          title="Tema 12: Lectura Vincular"
          left={(props) => <List.Icon {...props} icon="school" />}
          expanded={semana2Expanded}
          onPress={() => setSemana2Expanded(!semana2Expanded)}
        >
          <LinkingUrl url={"https://pdfhost.io/v/j6Jld.1HQ_Curso_1_Mensaje_4_FMJR_Mensajes_Habilidades_Parentales_2022"} message={"Mensaje 4.pdf"} color="white" bgcolor="#ffa500"/>
          <LinkingUrl url={"https://pdfhost.io/v/8MOW1hw9L_Curso_1_Cuento_1_FMJR"} message={"Cuento 1.pdf"} color="white" bgcolor="#ffa500"/>

        </List.Accordion>

        <List.Accordion
          theme={{ colors: { primary: '#ffc93b' } }}
          title="Tema 13: Habilidades Protectoras"
          left={(props) => <List.Icon {...props} icon="school" />}
          expanded={semana3Expanded}
          onPress={() => setSemana3Expanded(!semana3Expanded)}
        >
          <LinkingUrl url={"https://pdfhost.io/v/m6kTGFFDh_Curso_1_Mensaje_5_FMJR_Mensajes_Habilidades_Parentales_2022"} message={"Mensaje 5.pdf"} color="white" bgcolor="#ffa500"/>
          <LinkingUrl url={"https://pdfhost.io/v/uYZqrb2Ax_Curso_1_Mensaje_6_FMJR_Mensajes_Habilidades_Parentales_2022"} message={"Mensaje 6.pdf"} color="white" bgcolor="#ffa500"/>

        </List.Accordion>

        <List.Accordion
          theme={{ colors: { primary: '#ffc93b' } }}
          title="Tema 14: Habilidades reflexivas"
          left={(props) => <List.Icon {...props} icon="school" />}
          expanded={semana4Expanded}
          onPress={() => setSemana4Expanded(!semana4Expanded)}
        >
          <LinkingUrl url={"https://pdfhost.io/v/VN6IPaxGO_Curso_1_Mensaje_7_FMJR_Mensajes_Habilidades_Parentales_2022"} message={"Mensaje 7.pdf"} color="white" bgcolor="#ffa500"/>
          <LinkingUrl url={"https://pdfhost.io/v/ySq4wNHe~_Curso_1_Mensaje_8_FMJR_Mensajes_Habilidades_Parentales_2022"} message={"Mensaje 8.pdf"} color="white" bgcolor="#ffa500"/>

        </List.Accordion>

        <List.Accordion
          theme={{ colors: { primary: '#ffc93b' } }}
          title="Tema 15: Habilidades formativas"
          left={(props) => <List.Icon {...props} icon="school" />}
          expanded={semana5Expanded}
          onPress={() => setSemana5Expanded(!semana5Expanded)}
        >
        </List.Accordion>

        <List.Accordion
          theme={{ colors: { primary: '#ffc93b' } }}
          title="Evaluacion final del curso"
          left={(props) => <List.Icon {...props} icon="school" />}
          expanded={semana6Expanded}
          onPress={() => setSemana6Expanded(!semana6Expanded)}
        >
        </List.Accordion>

      </ScrollView>
    </SafeArea>
  );
};
