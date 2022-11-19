import React, {useState} from "react";
import { Image, StyleSheet, Text } from "react-native";
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

export const RestaurantDetailScreen = ({ route }) => {
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
       {
        restaurant.acordiones.map(obj => {
          return (
            <>
            <List.Accordion
            theme={{ colors: { primary: '#ffc93b' } }}
            title={obj.seccion1}
            left={(props) => <List.Icon {...props} icon={"school"} />}
            expanded={semana0Expanded}
            onPress={() => setSemana0Expanded(!semana0Expanded)}
            >
              <Text>{obj.evaluacionInicial}</Text>
              <LinkingUrl url={obj.evaluacionInicialURL} message={obj.evaluacionInicialMensaje} color={obj.evaluacionInicialColor} bgcolor={obj.evaluacionInicialBgcolor}/>
              <LinkingUrl url={obj.encuestaInicialURL} message={obj.encuestaInicialMensaje} color={obj.encuestaInicialColor} bgcolor={obj.encuestaInicialBgcolor}/>
            </List.Accordion>

            <List.Accordion
            theme={{ colors: { primary: '#ffc93b' } }}
            title={obj.seccion2}
            left={(props) => <List.Icon {...props} icon={"school"}/>}
            expanded={semana1Expanded}
            onPress={() => setSemana1Expanded(!semana1Expanded)}
            >
              <Text>{obj.descripcion1}</Text>
              <Text></Text>
              <Text></Text>
              <Text>{obj.semana1}</Text>
              <LinkingUrl url={obj.semana1Url1} message={obj.semana1Mensaje1} color={obj.semana1Color1} bgcolor={obj.semana1Bgcolor1}/>
              <LinkingUrl url={obj.semana1Ur2} message={obj.semana1Mensaje2} color={obj.semana1Color2} bgcolor={obj.semana1Bgcolor2}/>
              <LinkingUrl url={obj.semana1Ur3} message={obj.semana1Mensaje3} color={obj.semana1Color3} bgcolor={obj.semana1Bgcolor3}/>
              <LinkingUrl url={obj.semana1Ur4} message={obj.semana1Mensaje4} color={obj.semana1Color4} bgcolor={obj.semana1Bgcolor4}/>
              <LinkingUrl url={obj.semana1Ur5} message={obj.semana1Mensaje5} color={obj.semana1Color5} bgcolor={obj.semana1Bgcolor5}/>
            </List.Accordion>

            <List.Accordion
          theme={{ colors: { primary: '#ffc93b' } }}
          title={obj.seccion3}
          left={(props) => <List.Icon {...props} icon="school" />}
          expanded={semana2Expanded}
          onPress={() => setSemana2Expanded(!semana2Expanded)}
          >
              <Text>{obj.descripcion2}</Text>
              <Text></Text>
              <Text></Text>
              <Text>{obj.semana2}</Text>
              <LinkingUrl url={obj.semana2Url1} message={obj.semana2Mensaje1} color={obj.semana2Color1} bgcolor={obj.semana2Bgcolor1}/>
              <LinkingUrl url={obj.semana2Url2} message={obj.semana2Mensaje2} color={obj.semana2Color2} bgcolor={obj.semana2Bgcolor2}/>
              <LinkingUrl url={obj.semana2Url3} message={obj.semana2Mensaje3} color={obj.semana2Color3} bgcolor={obj.semana2Bgcolor3}/>
              <LinkingUrl url={obj.semana2Url4} message={obj.semana2Mensaje4} color={obj.semana2Color4} bgcolor={obj.semana2Bgcolor4}/>
              <LinkingUrl url={obj.semana2Url5} message={obj.semana2Mensaje5} color={obj.semana2Color5} bgcolor={obj.semana2Bgcolor5}/>
              <Text></Text>
              <Text>{obj.semana3}</Text>
              <Text></Text>
              <LinkingUrl url={obj.semana3Url1} message={obj.semana3Mensaje1} color={obj.semana3Color1} bgcolor={obj.semana3Bgcolor1}/>
              <LinkingUrl url={obj.semana3Url2} message={obj.semana3Mensaje2} color={obj.semana3Color2} bgcolor={obj.semana3Bgcolor2}/>
              <LinkingUrl url={obj.semana3Url3} message={obj.semana3Mensaje3} color={obj.semana3Color3} bgcolor={obj.semana3Bgcolor3}/>
              <LinkingUrl url={obj.semana3Url4} message={obj.semana3Mensaje4} color={obj.semana3Color4} bgcolor={obj.semana3Bgcolor4}/>
        </List.Accordion>

        <List.Accordion
          theme={{ colors: { primary: '#ffc93b' } }}
          title={obj.seccion4}
          left={(props) => <List.Icon {...props} icon="school" />}
          expanded={semana3Expanded}
          onPress={() => setSemana3Expanded(!semana3Expanded)}
        >
          <Text>{obj.descripcion3}</Text>
          <Text></Text>
          <Text></Text>
          <Text>{obj.semana4}</Text>
              <LinkingUrl url={obj.semana4Url1} message={obj.semana4Mensaje1} color={obj.semana4Color1} bgcolor={obj.semana4Bgcolor1}/>
              <LinkingUrl url={obj.semana4Url2} message={obj.semana4Mensaje2} color={obj.semana4Color2} bgcolor={obj.semana4Bgcolor2}/>
              <LinkingUrl url={obj.semana4Url3} message={obj.semana4Mensaje3} color={obj.semana4Color3} bgcolor={obj.semana4Bgcolor3}/>
              <LinkingUrl url={obj.semana4Url4} message={obj.semana4Mensaje4} color={obj.semana4Color4} bgcolor={obj.semana4Bgcolor4}/>
              <LinkingUrl url={obj.semana4Url5} message={obj.semana4Mensaje5} color={obj.semana4Color5} bgcolor={obj.semana4Bgcolor5}/>
          <Text></Text>
          <Text>{obj.semana5}</Text>
          <Text></Text>
              <LinkingUrl url={obj.semana5Url1} message={obj.semana5Mensaje1} color={obj.semana5Color1} bgcolor={obj.semana5Bgcolor1}/>
              <LinkingUrl url={obj.semana5url2} message={obj.semana5Mensaje2} color={obj.semana5Color2} bgcolor={obj.semana5Bgcolor2}/>
              <LinkingUrl url={obj.semana5Url3} message={obj.semana5Mensaje3} color={obj.semana5Color3} bgcolor={obj.semana5Bgcolor3}/>
              <LinkingUrl url={obj.semana5Url4} message={obj.semana5Mensaje4} color={obj.semana5Color4} bgcolor={obj.semana5Bgcolor4}/>
              <LinkingUrl url={obj.semana5Url5} message={obj.semana5Mensaje5} color={obj.semana5Color5} bgcolor={obj.semana5Bgcolor5}/>
        </List.Accordion>

        <List.Accordion
          theme={{ colors: { primary: '#ffc93b' } }}
          title={obj.seccion5}
          left={(props) => <List.Icon {...props} icon="school" />}
          expanded={semana4Expanded}
          onPress={() => setSemana4Expanded(!semana4Expanded)}
        >
          <Text>{obj.descripcion4}</Text>
          <Text></Text>
          <Text></Text>
          <Text>{obj.semana6}</Text>
              <LinkingUrl url={obj.semana6Url1} message={obj.semana6Mensaje1} color={obj.semana6Color1} bgcolor={obj.semana6Bgcolor1}/>
              <LinkingUrl url={obj.semana6Url2} message={obj.semana6Mensaje2} color={obj.semana6Color2} bgcolor={obj.semana6Bgcolor2}/>
              <LinkingUrl url={obj.semana6Url3} message={obj.semana6Mensaje3} color={obj.semana6Color3} bgcolor={obj.semana6Bgcolor3}/>
              <LinkingUrl url={obj.semana6Url4} message={obj.semana6Mensaje4} color={obj.semana6Color4} bgcolor={obj.semana6Bgcolor4}/>
              <LinkingUrl url={obj.semana6Url5} message={obj.semana6Mensaje5} color={obj.semana6Color5} bgcolor={obj.semana6Bgcolor5}/>
              <LinkingUrl url={obj.semana6Url6} message={obj.semana6Mensaje6} color={obj.semana6Color6} bgcolor={obj.semana6Bgcolor6}/>
        </List.Accordion>

        <List.Accordion
          theme={{ colors: { primary: '#ffc93b' } }}
          title={obj.seccion6}
          left={(props) => <List.Icon {...props} icon="school" />}
          expanded={semana5Expanded}
          onPress={() => setSemana5Expanded(!semana5Expanded)}
        >
          <Text>{obj.descripcion5}</Text>
          <Text></Text>
          <Text></Text>
          <Text>{obj.semana7}</Text>
              <LinkingUrl url={obj.semana7Url1} message={obj.semana7Mensaje1} color={obj.semana7Color1} bgcolor={obj.semana7Bgcolor1}/>
        </List.Accordion>

        <List.Accordion
          theme={{ colors: { primary: '#ffc93b' } }}
          title={obj.seccion7}
          left={(props) => <List.Icon {...props} icon="school" />}
          expanded={semana6Expanded}
          onPress={() => setSemana6Expanded(!semana6Expanded)}
        >
          <Text>{obj.evaluacionFinal}</Text>
              <LinkingUrl url={obj.evaluacionFinalURL} message={obj.evaluacionFinalMensaje} color={obj.evaluacionFinalColor} bgcolor={obj.evaluacionFinalBgcolor}/>
              <LinkingUrl url={obj.encuestaFinalURL} message={obj.encuestaFinalMensaje} color={obj.encuestaFinalColor} bgcolor={obj.encuestaFinalBgcolor}/>
              <LinkingUrl url={obj.encuestaFinaldosURL} message={obj.encuestaFinaldosMensaje} color={obj.encuestaFinaldosColor} bgcolor={obj.encuestaFinaldosBgcolor}/>
        </List.Accordion>
          </>
          )
        })

       } 
      
      </ScrollView>
    </SafeArea>
  );
};
